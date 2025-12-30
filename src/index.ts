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
    
    // 處理 OPTIONS 預檢請求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        }
      });
    }
    
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(getUsageHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
    
    // 處理 Docker Registry v2 ping
    if (url.pathname === '/v2/' || url.pathname === '/v2') {
      return new Response('{}', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Docker-Distribution-Api-Version': 'registry/2.0',
          'Access-Control-Allow-Origin': '*',
        }
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
