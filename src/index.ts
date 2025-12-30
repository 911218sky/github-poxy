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
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
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

  if (path.startsWith('/github/')) {
    return `${GITHUB_URL}/${path.replace('/github/', '')}${search}`;
  }
  if (path.startsWith('/raw/')) {
    return `${RAW_URL}/${path.replace('/raw/', '')}${search}`;
  }
  if (path.startsWith('/gist/')) {
    return `${GIST_URL}/${path.replace('/gist/', '')}${search}`;
  }
  if (path.startsWith('/release/')) {
    return `${GITHUB_URL}/${path.replace('/release/', '')}${search}`;
  }
  if (path.startsWith('/api/')) {
    return `${API_URL}/${path.replace('/api/', '')}${search}`;
  }
  return null;
}

function getUsageHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Proxy - Lightning Fast Access</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0a;
      --bg-secondary: #111111;
      --bg-tertiary: #171717;
      --border-color: #262626;
      --border-hover: #404040;
      --text-primary: #fafafa;
      --text-secondary: #a1a1aa;
      --text-muted: #71717a;
      --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
      --accent-blue: #3b82f6;
      --success: #22c55e;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.7;
    }
    .bg-gradient {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 100vh;
      background: 
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
        radial-gradient(ellipse 60% 40% at 100% 0%, rgba(139, 92, 246, 0.1), transparent),
        radial-gradient(ellipse 60% 40% at 0% 100%, rgba(236, 72, 153, 0.08), transparent);
      pointer-events: none;
      z-index: -1;
    }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      padding: 16px 0;
      background: rgba(10, 10, 10, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
    }
    .nav-content { display: flex; justify-content: space-between; align-items: center; }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      color: var(--text-primary);
    }
    .nav-logo svg { width: 28px; height: 28px; }
    .nav-links { display: flex; gap: 32px; }
    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text-primary); }
    .status-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.2);
      border-radius: 100px;
      font-size: 13px;
      color: var(--success);
    }
    .status-dot {
      width: 6px; height: 6px;
      background: var(--success);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--success);
      animation: pulse 2s infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .hero { padding: 160px 0 100px; text-align: center; }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 100px;
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 32px;
    }
    .hero h1 {
      font-size: clamp(40px, 8vw, 72px);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 24px;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p {
      font-size: 18px;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 40px;
    }
    .hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      border: none;
    }
    .btn-primary {
      background: var(--text-primary);
      color: var(--bg-primary);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15);
    }
    .btn-secondary {
      background: var(--bg-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    .btn-secondary:hover {
      background: var(--bg-tertiary);
      border-color: var(--border-hover);
    }
    section { padding: 80px 0; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-label {
      display: inline-block;
      padding: 6px 14px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent-blue);
      margin-bottom: 20px;
    }
    .section-title { font-size: 36px; font-weight: 700; margin-bottom: 16px; }
    .section-desc {
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 500px;
      margin: 0 auto;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }
    .card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 28px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: var(--accent-gradient);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .card:hover {
      border-color: var(--border-hover);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    .card:hover::before { opacity: 1; }
    .card-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
    .card-icon {
      width: 44px; height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-tertiary);
      border-radius: 12px;
      font-size: 22px;
    }
    .card-title { font-size: 17px; font-weight: 600; }
    .card-subtitle { font-size: 13px; color: var(--text-muted); }
    .code-example {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      overflow: hidden;
    }
    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: var(--bg-tertiary);
      border-bottom: 1px solid var(--border-color);
    }
    .code-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted);
    }
    .code-body { padding: 14px; overflow-x: auto; }
    .code-body code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--success);
      word-break: break-all;
    }
    .code-arrow { display: flex; justify-content: center; padding: 8px 0; color: var(--text-muted); }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      transition: all 0.2s;
    }
    .feature-item:hover { border-color: var(--border-hover); }
    .feature-icon {
      width: 40px; height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-tertiary);
      border-radius: 10px;
      font-size: 18px;
    }
    .feature-text { font-size: 14px; font-weight: 500; }
    footer {
      padding: 60px 0;
      border-top: 1px solid var(--border-color);
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .footer-left { display: flex; align-items: center; gap: 24px; }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--text-primary);
    }
    .footer-logo svg { width: 24px; height: 24px; }
    .footer-text { font-size: 14px; color: var(--text-muted); }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a {
      font-size: 14px;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--text-primary); }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hero { padding: 140px 0 80px; }
      .hero h1 { font-size: 36px; }
      .hero p { font-size: 16px; }
      .cards-grid { grid-template-columns: 1fr; }
      .footer-content { flex-direction: column; text-align: center; }
      .footer-left { flex-direction: column; }
    }
  </style>
</head>
<body>
  <div class="bg-gradient"></div>
  <nav>
    <div class="container nav-content">
      <a href="/" class="nav-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        GitHub Proxy
      </a>
      <div class="nav-links">
        <a href="#usage">Usage</a>
        <a href="#features">Features</a>
        <a href="https://github.com/911218sky/github-poxy" target="_blank">GitHub</a>
      </div>
      <div class="status-badge"><span class="status-dot"></span>Operational</div>
    </div>
  </nav>
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-badge"><span>⚡</span>Powered by Cloudflare Workers</div>
        <h1>GitHub Proxy</h1>
        <p>Lightning-fast access to GitHub resources through Cloudflare's global edge network. No configuration required.</p>
        <div class="hero-buttons">
          <a href="#usage" class="btn btn-primary">Get Started<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="https://github.com/911218sky/github-poxy" target="_blank" class="btn btn-secondary"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>View on GitHub</a>
        </div>
      </div>
    </section>
    <section id="usage">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Quick Start</span>
          <h2 class="section-title">How to Use</h2>
          <p class="section-desc">Simply replace the GitHub domain with our proxy URL</p>
        </div>
        <div class="cards-grid">
          <div class="card">
            <div class="card-header">
              <div class="card-icon">📦</div>
              <div><div class="card-title">Repository</div><div class="card-subtitle">Clone & browse repos</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Original</span></div><div class="code-body"><code>github.com/user/repo</code></div></div>
            <div class="code-arrow">↓</div>
            <div class="code-example"><div class="code-header"><span class="code-label">Proxied</span></div><div class="code-body"><code>github.sky1218.com/github/user/repo</code></div></div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">📄</div>
              <div><div class="card-title">Raw Files</div><div class="card-subtitle">Direct file access</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Original</span></div><div class="code-body"><code>raw.githubusercontent.com/user/repo/main/file</code></div></div>
            <div class="code-arrow">↓</div>
            <div class="code-example"><div class="code-header"><span class="code-label">Proxied</span></div><div class="code-body"><code>github.sky1218.com/raw/user/repo/main/file</code></div></div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">🚀</div>
              <div><div class="card-title">Releases</div><div class="card-subtitle">Download binaries</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Original</span></div><div class="code-body"><code>github.com/.../releases/download/v1.2.1/app.exe</code></div></div>
            <div class="code-arrow">↓</div>
            <div class="code-example"><div class="code-header"><span class="code-label">Proxied</span></div><div class="code-body"><code>github.sky1218.com/release/.../download/v1.2.1/app.exe</code></div></div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">🔌</div>
              <div><div class="card-title">API</div><div class="card-subtitle">GitHub REST API</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Original</span></div><div class="code-body"><code>api.github.com/repos/user/repo</code></div></div>
            <div class="code-arrow">↓</div>
            <div class="code-example"><div class="code-header"><span class="code-label">Proxied</span></div><div class="code-body"><code>github.sky1218.com/api/repos/user/repo</code></div></div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">📝</div>
              <div><div class="card-title">Gist</div><div class="card-subtitle">Code snippets</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Original</span></div><div class="code-body"><code>gist.github.com/user/id</code></div></div>
            <div class="code-arrow">↓</div>
            <div class="code-example"><div class="code-header"><span class="code-label">Proxied</span></div><div class="code-body"><code>github.sky1218.com/gist/user/id</code></div></div>
          </div>
          <div class="card">
            <div class="card-header">
              <div class="card-icon">💻</div>
              <div><div class="card-title">Git Clone</div><div class="card-subtitle">Clone with speed</div></div>
            </div>
            <div class="code-example"><div class="code-header"><span class="code-label">Command</span></div><div class="code-body"><code>git clone https://github.sky1218.com/github/user/repo.git</code></div></div>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Why Choose Us</span>
          <h2 class="section-title">Features</h2>
          <p class="section-desc">Built for speed, reliability, and simplicity</p>
        </div>
        <div class="features-grid">
          <div class="feature-item"><div class="feature-icon">⚡</div><span class="feature-text">Global CDN</span></div>
          <div class="feature-item"><div class="feature-icon">🔒</div><span class="feature-text">CORS Enabled</span></div>
          <div class="feature-item"><div class="feature-icon">🌍</div><span class="feature-text">300+ Edge Locations</span></div>
          <div class="feature-item"><div class="feature-icon">🔄</div><span class="feature-text">Auto Redirects</span></div>
          <div class="feature-item"><div class="feature-icon">📊</div><span class="feature-text">All HTTP Methods</span></div>
          <div class="feature-item"><div class="feature-icon">🎯</div><span class="feature-text">Zero Config</span></div>
          <div class="feature-item"><div class="feature-icon">🆓</div><span class="feature-text">100% Free</span></div>
          <div class="feature-item"><div class="feature-icon">🛡️</div><span class="feature-text">DDoS Protected</span></div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container footer-content">
      <div class="footer-left">
        <div class="footer-logo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>GitHub Proxy</div>
        <span class="footer-text">Powered by Cloudflare Workers</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/911218sky/github-poxy" target="_blank">GitHub</a>
        <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Workers</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}
