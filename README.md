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

## 🚀 Quick Start

### One-Click Deploy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/911218sky/github-poxy)

### Manual Installation

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

## 📖 Usage

### Supported Services

| Service | Route | Example |
|---------|-------|---------|
| **Repository** | `/github/` | `github.sky1218.com/github/user/repo` |
| **Raw Files** | `/raw/` | `github.sky1218.com/raw/user/repo/main/file.txt` |
| **Releases** | `/release/` | `github.sky1218.com/release/user/repo/releases/download/v1.0/app.exe` |
| **API** | `/api/` | `github.sky1218.com/api/repos/user/repo` |
| **Gist** | `/gist/` | `github.sky1218.com/gist/user/gist-id` |
| **GHCR** | `/ghcr/` | `github.sky1218.com/ghcr/user/image:latest` |
| **Codeload** | `/codeload/` | `github.sky1218.com/codeload/user/repo/zip/refs/heads/main` |
| **Avatars** | `/avatars/` | `github.sky1218.com/avatars/u/12345678` |
| **Objects** | `/objects/` | `github.sky1218.com/objects/...` |
| **Media** | `/media/` | `github.sky1218.com/media/...` |
| **Assets** | `/assets/` | `github.sky1218.com/assets/...` |
| **Archive** | `/archive/` | `github.sky1218.com/archive/user/repo/archive/main.zip` |
| **NPM Pkg** | `/pkg/` | `github.sky1218.com/pkg/...` |
| **Copilot** | `/copilot/` | `github.sky1218.com/copilot/...` |
| **Docker Registry** | `/docker/` | `github.sky1218.com/docker/library/nginx:latest` |
| **Docker Auth** | `/dockerauth/` | `github.sky1218.com/dockerauth/...` |
| **Docker Hub API** | `/dockerhub/` | `github.sky1218.com/dockerhub/v2/...` |


### Examples

<details>
<summary><b>🔧 Git Clone</b></summary>

```bash
git clone https://github.sky1218.com/github/user/repo.git
```
</details>

<details>
<summary><b>📥 Download Release</b></summary>

```bash
# Using wget
wget https://github.sky1218.com/release/user/repo/releases/download/v1.0/app.exe

# Using curl
curl -LO https://github.sky1218.com/release/user/repo/releases/download/v1.0/app.exe
```
</details>

<details>
<summary><b>🐳 Docker Pull</b></summary>

```bash
docker pull github.sky1218.com/ghcr/user/image:latest
```
</details>

<details>
<summary><b>📦 Download ZIP</b></summary>

```bash
wget https://github.sky1218.com/codeload/user/repo/zip/refs/heads/main
```
</details>

<details>
<summary><b>🔌 API Request</b></summary>

```bash
# Get repository info
curl https://github.sky1218.com/api/repos/user/repo

# Get user info
curl https://github.sky1218.com/api/users/username
```
</details>

<details>
<summary><b>📄 Raw File</b></summary>

```bash
curl https://github.sky1218.com/raw/user/repo/main/README.md
```
</details>

<details>
<summary><b>🐋 Docker Pull (Docker Hub)</b></summary>

```bash
# Configure Docker daemon (add to /etc/docker/daemon.json)
{
  "registry-mirrors": ["https://github.sky1218.com/docker"]
}

# Or pull directly with full path
docker pull github.sky1218.com/docker/library/nginx:latest
docker pull github.sky1218.com/docker/library/redis:alpine
```
</details>

## 🔐 Obfuscated Worker

This repository automatically generates an obfuscated version of the worker on every push to main branch via GitHub Actions.

**To use the obfuscated worker:**

1. Go to **Actions** tab → Run "Generate Obfuscated Worker" workflow
2. Download `worker.js` from artifacts (or check the committed file)
3. Go to **Cloudflare Dashboard** → Workers & Pages
4. Create a new Worker and paste the content

## 🛠️ Configuration

Edit `wrangler.toml` to customize your deployment:

```toml
name = "github-proxy"
main = "src/index.ts"
compatibility_date = "2024-01-01"
```

## 📁 Project Structure

```
github-poxy/
├── src/
│   ├── index.ts      # Main entry point
│   ├── proxy.ts      # Proxy logic
│   ├── html.ts       # Landing page
│   └── config.ts     # Configuration
├── wrangler.toml     # Cloudflare config
└── package.json
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**[⬆ Back to Top](#-github-proxy)**

Made with ❤️ by [911218sky](https://github.com/911218sky)

</div>
