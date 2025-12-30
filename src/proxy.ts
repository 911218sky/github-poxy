import { PROXY_TARGETS } from './config';

export function parseTargetUrl(url: URL): string | null {
  const path = url.pathname;
  const search = url.search;
  
  for (const [prefix, target] of Object.entries(PROXY_TARGETS)) {
    if (path.startsWith(`/${prefix}/`)) {
      const targetPath = path.replace(`/${prefix}/`, '');
      return `${target}/${targetPath}${search}`;
    }
  }
  return null;
}

export async function handleProxy(request: Request, targetUrl: string): Promise<Response> {
  const modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  modifiedResponse.headers.set('Access-Control-Allow-Headers', '*');
  
  return modifiedResponse;
}
