/**
 * GitHub Proxy - Cloudflare Workers
 * Accelerate GitHub resource access
 */

import { parseTargetUrl, handleProxy } from './proxy';
import { getUsageHTML } from './html';

interface Env {}

export default {
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === '/favicon.ico') {
      return new Response(null, { status: 204 });
    }
    
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(getUsageHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    const targetUrl = parseTargetUrl(url);
    
    if (!targetUrl) {
      return new Response('Invalid request path', { status: 400 });
    }

    try {
      return await handleProxy(request, targetUrl);
    } catch (error) {
      return new Response(`Proxy request failed: ${error}`, { status: 500 });
    }
  }
};
