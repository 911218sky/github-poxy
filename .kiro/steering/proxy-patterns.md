# Proxy Development Patterns

## Route Design

When adding new proxy routes, follow this pattern:

### 1. Add Target in config.ts

```typescript
export const PROXY_TARGETS: Record<string, string> = {
  'new-service': 'https://target-domain.com',
  // ...
};
```

### 2. Route Format

- Path format: `/{prefix}/{target-path}`
- Example: `/github/user/repo` → `https://github.com/user/repo`

## Header Handling

### Headers to Remove

Remove Cloudflare-injected headers when proxying:

- `cf-connecting-ip`
- `cf-ipcountry`
- `cf-ray`
- `cf-visitor`
- `x-forwarded-for`
- `x-forwarded-proto`
- `x-real-ip`

### CORS Headers

All responses must include:

```typescript
responseHeaders.set('Access-Control-Allow-Origin', '*');
responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
responseHeaders.set('Access-Control-Allow-Headers', '*');
responseHeaders.set('Access-Control-Expose-Headers', '*');
```

## Docker Registry Support

When handling Docker v2 API:

1. `/v2/` path requires special handling
2. Rewrite `www-authenticate` header realm URLs
3. Rewrite `location` header redirect URLs

## Error Handling

- Invalid path: return `400 Bad Request`
- Proxy failure: return `500 Internal Server Error`
- OPTIONS preflight: return `204 No Content`
