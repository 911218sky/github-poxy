// HTML 內容從 GitHub 動態載入
const HTML_URL = 'https://raw.githubusercontent.com/911218sky/github-poxy/main/public/index.min.html';

// 快取 HTML 內容
let cachedHTML: string | null = null;
let cacheTime: number = 0;
const CACHE_TTL = 3600000; // 1 小時

export async function getUsageHTML(): Promise<string> {
  const now = Date.now();
  
  // 如果快取有效，直接返回
  if (cachedHTML && (now - cacheTime) < CACHE_TTL) {
    return cachedHTML;
  }
  
  try {
    const response = await fetch(HTML_URL);
    if (response.ok) {
      cachedHTML = await response.text();
      cacheTime = now;
      return cachedHTML;
    }
  } catch (error) {
    console.error('Failed to fetch HTML:', error);
  }
  
  // 如果載入失敗，返回簡單的備用頁面
  return getFallbackHTML();
}

function getFallbackHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Proxy</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .container { text-align: center; padding: 2rem; }
    h1 { font-size: 3rem; margin-bottom: 1rem; }
    p { color: #888; font-size: 1.2rem; }
    a { color: #6366f1; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ GitHub Proxy</h1>
    <p>Lightning-fast GitHub access through Cloudflare's global edge network</p>
    <p><a href="https://github.com/911218sky/github-poxy">View on GitHub</a></p>
  </div>
</body>
</html>`;
}
