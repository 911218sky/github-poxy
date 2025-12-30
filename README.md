# GitHub Proxy - Cloudflare Workers

🚀 A GitHub proxy acceleration service deployed on Cloudflare Workers, supporting accelerated access to all GitHub resources.

## ✨ Features

- ⚡ Accelerated by Cloudflare's global CDN network
- 🔒 CORS support for cross-origin requests
- 📦 Support for all GitHub services
- 🎯 Written in TypeScript with type safety
- 🚀 One-click deployment to Cloudflare Workers
- 🔐 Code obfuscation via GitHub Actions

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🚀 Deployment

### Option 1: Manual Deploy

```bash
npm run deploy
```

### Option 2: Use Obfuscated Worker

1. Go to GitHub repository > Actions tab
2. Run "Generate Obfuscated Worker" workflow
3. Download `worker.js` from artifacts or check the committed file
4. Go to Cloudflare Dashboard > Workers & Pages
5. Create a new Worker and paste the content of `worker.js`

## 📖 Supported Services

| Service | Original | Proxied |
|---------|----------|---------|
| Repository | `github.com/user/repo` | `github.sky1218.com/github/user/repo` |
| Raw Files | `raw.githubusercontent.com/...` | `github.sky1218.com/raw/...` |
| Releases | `github.com/.../releases/download/...` | `github.sky1218.com/release/.../releases/download/...` |
| API | `api.github.com/...` | `github.sky1218.com/api/...` |
| Gist | `gist.github.com/...` | `github.sky1218.com/gist/...` |
| GHCR | `ghcr.io/...` | `github.sky1218.com/ghcr/...` |
| Codeload | `codeload.github.com/...` | `github.sky1218.com/codeload/...` |
| Objects | `objects.githubusercontent.com/...` | `github.sky1218.com/objects/...` |
| Media | `media.githubusercontent.com/...` | `github.sky1218.com/media/...` |
| Avatars | `avatars.githubusercontent.com/...` | `github.sky1218.com/avatars/...` |
| Assets | `github.githubassets.com/...` | `github.sky1218.com/assets/...` |
| Archive | `github.com/.../archive/...` | `github.sky1218.com/archive/.../archive/...` |
| NPM Pkg | `npm.pkg.github.com/...` | `github.sky1218.com/pkg/...` |
| Copilot | `copilot-proxy.githubusercontent.com/...` | `github.sky1218.com/copilot/...` |

## 📖 Usage Examples

### Git Clone

```bash
git clone https://github.sky1218.com/github/911218sky/gait-charts.git
```

### Download Release

```bash
wget https://github.sky1218.com/release/911218sky/gait-charts/releases/download/v1.2.1/GaitCharts_Setup_v1.2.1.exe
```

### Docker Pull

```bash
docker pull github.sky1218.com/ghcr/user/image:latest
```

### Download ZIP

```bash
wget https://github.sky1218.com/codeload/user/repo/zip/refs/heads/main
```

### API Request

```bash
curl https://github.sky1218.com/api/repos/911218sky/gait-charts
```

## 🔧 Generate Obfuscated Worker

This repository automatically generates an obfuscated version of the worker on every push to main branch.

After the workflow completes:
1. The obfuscated `worker.js` will be committed to the repository
2. You can download it from the workflow artifacts
3. Copy and paste the content into Cloudflare Workers dashboard

## 📝 Configuration

Edit the `wrangler.toml` file to configure your Worker name and other settings.

## 📄 License

MIT
