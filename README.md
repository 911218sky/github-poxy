<div align="center">

# ⚡ GitHub Proxy

### Lightning-fast GitHub access through Cloudflare's global edge network

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/911218sky/github-poxy)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange?logo=cloudflare)](https://workers.cloudflare.com/)

[Live Demo](https://github.sky1218.com) · [Report Bug](https://github.com/911218sky/github-poxy/issues) · [Request Feature](https://github.com/911218sky/github-poxy/issues)

</div>

---

## 🌟 Overview

A high-performance GitHub proxy service deployed on Cloudflare Workers, providing accelerated access to all GitHub resources worldwide. Simply replace the domain and enjoy blazing-fast speeds.

```diff
- github.com/user/repo
+ github.sky1218.com/github/user/repo
```

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Global CDN** | Powered by Cloudflare's 300+ edge locations |
| 🔒 **CORS Enabled** | Full cross-origin request support |
| 📦 **All Services** | Supports repos, releases, API, GHCR, and more |
| 🎯 **Zero Config** | Just replace the URL and go |
| 🛡️ **DDoS Protected** | Enterprise-grade security by Cloudflare |
| 🆓 **100% Free** | No cost, no limits |

## 🚀 Deploy

### One-Click Deploy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/911218sky/github-poxy)

### Manual Deploy

```bash
# Clone the repository
git clone https://github.com/911218sky/github-poxy.git
cd github-poxy

# Install dependencies
npm install

# Development
npm run dev

# Deploy
npm run deploy
```

### Auto Deploy (GitHub Actions)

1. Fork this repository
2. Get your [Cloudflare API Token](https://dash.cloudflare.com/profile/api-tokens) (use "Edit Cloudflare Workers" template)
3. Add `CLOUDFLARE_API_TOKEN` to your repo's Settings → Secrets → Actions
4. Push to `main` branch to trigger deployment

You can also manually trigger deployment from the Actions tab.

## 📖 Usage

### Supported Services

| Service | Route | Example |
|---------|-------|---------|
| **Repository** | `/github/` | `your-domain.com/github/user/repo` |
| **Raw Files** | `/raw/` | `your-domain.com/raw/user/repo/main/file.txt` |
| **Releases** | `/release/` | `your-domain.com/release/user/repo/releases/download/v1.0/app.exe` |
| **API** | `/api/` | `your-domain.com/api/repos/user/repo` |
| **Gist** | `/gist/` | `your-domain.com/gist/user/gist-id` |
| **GHCR** | `/ghcr/` | `your-domain.com/ghcr/user/image:latest` |
| **Codeload** | `/codeload/` | `your-domain.com/codeload/user/repo/zip/refs/heads/main` |
| **Avatars** | `/avatars/` | `your-domain.com/avatars/u/12345678` |
| **Objects** | `/objects/` | `your-domain.com/objects/...` |
| **Media** | `/media/` | `your-domain.com/media/...` |
| **Assets** | `/assets/` | `your-domain.com/assets/...` |
| **Archive** | `/archive/` | `your-domain.com/archive/user/repo/archive/main.zip` |
| **NPM Pkg** | `/pkg/` | `your-domain.com/pkg/...` |
| **Copilot** | `/copilot/` | `your-domain.com/copilot/...` |
| **ModelScope** | `/modelscope/` | `your-domain.com/modelscope/models/damo/text-to-video` |
| **ModelScope API** | `/modelscope-api/` | `your-domain.com/modelscope-api/v1/models` |
| **ModelScope Models** | `/modelscope-models/` | `your-domain.com/modelscope-models/damo/text-to-video` |

### Examples

```bash
# Git Clone
git clone https://your-domain.com/github/user/repo.git

# Download Release
wget https://your-domain.com/release/user/repo/releases/download/v1.0/app.exe

# Docker Pull
docker pull your-domain.com/ghcr/user/image:latest

# Download ZIP
wget https://your-domain.com/codeload/user/repo/zip/refs/heads/main

# API Request
curl https://your-domain.com/api/repos/user/repo

# Raw File
curl https://your-domain.com/raw/user/repo/main/README.md
```

## 🔐 Obfuscated Worker

This repository automatically generates an obfuscated version of the worker on every push to main branch.

To use it:
1. Go to Actions tab → Run "Generate Obfuscated Worker" workflow
2. Download `worker.js` from artifacts
3. Create a new Worker in Cloudflare Dashboard and paste the content


## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**[⬆ Back to Top](#-github-proxy)**

Made with ❤️ by [911218sky](https://github.com/911218sky)

</div>
