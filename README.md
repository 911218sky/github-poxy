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

## 🚀 自動部署設定

此專案支援自動部署到 Cloudflare Workers。每當你推送程式碼到 `main` 分支時，GitHub Actions 會自動執行部署。

### 前置準備

#### 1️⃣ Fork 此專案

- 前往 [GitHub 倉庫](https://github.com/911218sky/github-poxy)
- 點擊 **Fork** 按鈕
- 選擇你的帳號作為 fork 目標

#### 2️⃣ 取得 Cloudflare API Token

**步驟：**

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 點擊右上角你的頭像 → **My Profile**
3. 左側菜單選擇 **API Tokens**
4. 點擊 **Create Token** 按鈕
5. 在模板中找到 **Edit Cloudflare Workers**
6. 點擊 **Use template**
7. 確認權限設定（應包含以下權限）：
   - **Account** → **Cloudflare Workers Scripts** → **Edit**
8. 點擊 **Continue to summary**
9. 點擊 **Create Token**
10. **複製生成的 token**（⚠️ 只會顯示一次，請妥善保管）

#### 3️⃣ 在 GitHub 中設定 Secret

1. 前往你的 Fork 倉庫
2. 點擊 **Settings** 標籤
3. 左側菜單選擇 **Secrets and variables** → **Actions**
4. 點擊 **New repository secret**
5. 填入以下資訊：
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Secret**: 貼上你從 Cloudflare 複製的 token
6. 點擊 **Add secret**

### 部署方式

#### 自動部署（推薦）

推送程式碼到 `main` 分支時會自動觸發部署：

```bash
git push origin main
```

#### 手動部署

1. 前往你的 Fork 倉庫
2. 點擊 **Actions** 標籤
3. 左側選擇 **Deploy to Cloudflare Workers** workflow
4. 點擊 **Run workflow** → **Run workflow**

### 驗證部署

部署完成後，你可以在以下位置查看狀態：

- **GitHub Actions**: 前往 **Actions** 標籤查看 workflow 執行狀態
- **Cloudflare Dashboard**: 前往 **Workers & Pages** 查看部署的 Worker

---

## 🔐 Obfuscated Worker

此倉庫會在每次推送到 main 分支時自動生成混淆版本的 worker。

**使用混淆版本的 worker：**

1. 前往 **Actions** 標籤 → 執行 "Generate Obfuscated Worker" workflow
2. 從 artifacts 下載 `worker.js`（或查看已提交的檔案）
3. 前往 **Cloudflare Dashboard** → **Workers & Pages**
4. 建立新 Worker 並貼上檔案內容

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
