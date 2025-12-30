/**
 * GitHub Proxy - Cloudflare Workers
 * Accelerate GitHub resource access
 */

interface Env {
  // Define environment variables here
}

const GITHUB_URL = 'https://github.com';
const RAW_URL = 'https://raw.githubusercontent.com';
const GIST_URL = 'https://gist.github.com';
const API_URL = 'https://api.github.com';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle favicon requests
    if (url.pathname === '/favicon.ico') {
      return new Response(null, { status: 204 });
    }
    
    // Handle root path, display usage instructions
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(getUsageHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // Parse target URL
    const targetUrl = parseTargetUrl(url);
    
    if (!targetUrl) {
      return new Response('Invalid request path', { status: 400 });
    }

    try {
      // Create new request
      const modifiedRequest = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: 'follow'
      });

      // Send request to GitHub
      const response = await fetch(modifiedRequest);
      
      // Create new response with CORS headers
      const modifiedResponse = new Response(response.body, response);
      modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
      modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      modifiedResponse.headers.set('Access-Control-Allow-Headers', '*');
      
      return modifiedResponse;
    } catch (error) {
      return new Response(`Proxy request failed: ${error}`, { status: 500 });
    }
  }
};

/**
 * Parse target URL
 */
function parseTargetUrl(url: URL): string | null {
  const path = url.pathname;
  const search = url.search;

  // GitHub main site proxy: /github/user/repo
  if (path.startsWith('/github/')) {
    const targetPath = path.replace('/github/', '');
    return `${GITHUB_URL}/${targetPath}${search}`;
  }

  // Raw file proxy: /raw/user/repo/branch/file
  if (path.startsWith('/raw/')) {
    const targetPath = path.replace('/raw/', '');
    return `${RAW_URL}/${targetPath}${search}`;
  }

  // Gist proxy: /gist/user/gist-id
  if (path.startsWith('/gist/')) {
    const targetPath = path.replace('/gist/', '');
    return `${GIST_URL}/${targetPath}${search}`;
  }

  // Release download acceleration: /release/user/repo/releases/download/version/file
  if (path.startsWith('/release/')) {
    const targetPath = path.replace('/release/', '');
    return `${GITHUB_URL}/${targetPath}${search}`;
  }

  // API proxy: /api/...
  if (path.startsWith('/api/')) {
    const targetPath = path.replace('/api/', '');
    return `${API_URL}/${targetPath}${search}`;
  }

  return null;
}

/**
 * Usage instructions page
 */
function getUsageHTML(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Proxy Acceleration Service</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 { color: #0366d6; }
    h2 { color: #24292e; margin-top: 30px; }
    code {
      background: #f6f8fa;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
    }
    .example {
      background: #fff5b1;
      padding: 10px;
      border-left: 4px solid #ffd700;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <h1>🚀 GitHub Proxy Acceleration Service</h1>
  <p>Accelerate GitHub resource access using Cloudflare Workers</p>

  <h2>📖 Usage</h2>
  
  <h3>1. GitHub Repository Proxy</h3>
  <p>Replace <code>github.com</code> with <code>github.sky1218.com/github</code></p>
  <div class="example">
    <strong>Original:</strong> <code>https://github.com/911218sky/gait-charts</code><br>
    <strong>Proxied:</strong> <code>https://github.sky1218.com/github/911218sky/gait-charts</code>
  </div>

  <h3>2. Raw File Acceleration</h3>
  <p>Access raw file content</p>
  <div class="example">
    <strong>Original:</strong> <code>https://raw.githubusercontent.com/911218sky/gait-charts/main/README.md</code><br>
    <strong>Proxied:</strong> <code>https://github.sky1218.com/raw/911218sky/gait-charts/main/README.md</code>
  </div>

  <h3>3. Release Download Acceleration</h3>
  <p>Accelerate release file downloads</p>
  <div class="example">
    <strong>Original:</strong> <code>https://github.com/911218sky/gait-charts/releases/download/v1.2.1/GaitCharts_Setup_v1.2.1.exe</code><br>
    <strong>Proxied:</strong> <code>https://github.sky1218.com/release/911218sky/gait-charts/releases/download/v1.2.1/GaitCharts_Setup_v1.2.1.exe</code>
  </div>

  <h3>4. Gist Proxy</h3>
  <p>Access Gist content</p>
  <div class="example">
    <strong>Original:</strong> <code>https://gist.github.com/user/gist-id</code><br>
    <strong>Proxied:</strong> <code>https://github.sky1218.com/gist/user/gist-id</code>
  </div>

  <h3>5. GitHub API Proxy</h3>
  <p>Access GitHub API</p>
  <div class="example">
    <strong>Original:</strong> <code>https://api.github.com/repos/911218sky/gait-charts</code><br>
    <strong>Proxied:</strong> <code>https://github.sky1218.com/api/repos/911218sky/gait-charts</code>
  </div>

  <h2>💡 Git Clone Acceleration</h2>
  <p>Use proxy to accelerate git clone:</p>
  <pre>git clone https://github.sky1218.com/github/911218sky/gait-charts.git</pre>

  <h2>🔧 Features</h2>
  <ul>
    <li>✅ CORS support for cross-origin requests</li>
    <li>✅ Automatic redirect following</li>
    <li>✅ Support for all HTTP methods</li>
    <li>✅ Global CDN acceleration</li>
  </ul>

  <footer style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee; color: #666;">
    <p>Powered by Cloudflare Workers</p>
  </footer>
</body>
</html>
  `;
}
