import { PROXY_TARGETS } from './config';

// Docker Registry v2 路徑映射
const DOCKER_V2_ROUTES: Record<string, string> = {
  'ghcr': 'https://ghcr.io',
};

export function parseTargetUrl(url: URL): string | null {
  const path = url.pathname;
  const search = url.search;

  // 處理 Docker Registry v2 API 請求
  // Docker 會請求 /v2/ghcr/... 或 /v2/docker/...
  if (path.startsWith('/v2/')) {
    const v2Path = path.slice(4); // 移除 '/v2/'
    
    for (const [prefix, target] of Object.entries(DOCKER_V2_ROUTES)) {
      if (v2Path.startsWith(`${prefix}/`)) {
        const targetPath = v2Path.slice(prefix.length + 1); // 移除 'prefix/'
        return `${target}/v2/${targetPath}${search}`;
      }
    }
    
    // 如果沒有匹配的前綴，返回 v2 根路徑（用於 /v2/ ping）
    return null;
  }
  
  // 標準路由處理
  for (const [prefix, target] of Object.entries(PROXY_TARGETS)) {
    if (path.startsWith(`/${prefix}/`)) {
      const targetPath = path.replace(`/${prefix}/`, '');
      return `${target}/${targetPath}${search}`;
    }
  }
  
  return null;
}

export async function handleProxy(request: Request, targetUrl: string): Promise<Response> {
  const url = new URL(targetUrl);
  
  // 複製 headers 並修改 Host
  const headers = new Headers(request.headers);
  headers.set('Host', url.host);
  
  // 移除可能導致問題的 headers
  headers.delete('cf-connecting-ip');
  headers.delete('cf-ipcountry');
  headers.delete('cf-ray');
  headers.delete('cf-visitor');
  headers.delete('x-forwarded-for');
  headers.delete('x-forwarded-proto');
  headers.delete('x-real-ip');

  const modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: headers,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  
  // 複製 response headers
  const responseHeaders = new Headers(response.headers);
  
  // 設置 CORS headers
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
  responseHeaders.set('Access-Control-Allow-Headers', '*');
  responseHeaders.set('Access-Control-Expose-Headers', '*');
  
  // 處理 Docker Registry 的 WWW-Authenticate header
  // 需要將認證 URL 重寫為代理 URL
  const wwwAuth = responseHeaders.get('www-authenticate');
  if (wwwAuth) {
    const rewrittenAuth = rewriteWwwAuthenticate(wwwAuth, request.url);
    responseHeaders.set('www-authenticate', rewrittenAuth);
  }
  
  // 處理 Location header（重定向）
  const location = responseHeaders.get('location');
  if (location) {
    const rewrittenLocation = rewriteLocation(location, request.url);
    responseHeaders.set('location', rewrittenLocation);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders
  });
}

// 重寫 WWW-Authenticate header 中的 realm URL
function rewriteWwwAuthenticate(header: string, requestUrl: string): string {
  const proxyUrl = new URL(requestUrl);
  const proxyBase = `${proxyUrl.protocol}//${proxyUrl.host}`;
  
  // 替換 ghcr.io 認證
  let rewritten = header.replace(
    /realm="https:\/\/ghcr\.io\/token"/g,
    `realm="${proxyBase}/ghcr/token"`
  );
  
  return rewritten;
}

// 重寫 Location header
function rewriteLocation(location: string, requestUrl: string): string {
  const proxyUrl = new URL(requestUrl);
  const proxyBase = `${proxyUrl.protocol}//${proxyUrl.host}`;
  
  // 替換各種 GitHub/Docker 域名
  const replacements: Record<string, string> = {
    'https://ghcr.io': `${proxyBase}/ghcr`,
    'https://github.com': `${proxyBase}/github`,
    'https://raw.githubusercontent.com': `${proxyBase}/raw`,
  };
  
  let rewritten = location;
  for (const [original, proxy] of Object.entries(replacements)) {
    rewritten = rewritten.replace(original, proxy);
  }
  
  return rewritten;
}
