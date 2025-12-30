# GitHub Proxy - Cloudflare Workers

🚀 A GitHub proxy acceleration service deployed on Cloudflare Workers, supporting accelerated access to GitHub repositories, raw files, releases, and more.

## ✨ Features

- ⚡ Accelerated by Cloudflare's global CDN network
- 🔒 CORS support for cross-origin requests
- 📦 Support for GitHub repos, raw files, releases, Gists, and API
- 🎯 Written in TypeScript with type safety
- 🚀 One-click deployment to Cloudflare Workers
- 🔐 Code obfuscation via GitHub Actions

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Run in local development mode:

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
2. Run "Manual Obfuscate Only" workflow
3. Download `worker.js` from artifacts or check the committed file
4. Go to Cloudflare Dashboard > Workers & Pages
5. Create a new Worker or edit existing one
6. Copy and paste the content of `worker.js`
7. Deploy

## 📖 Usage

### 1. GitHub Repository Proxy

```
Original: https://github.com/911218sky/gait-charts
Proxied: https://github.sky1218.com/github/911218sky/gait-charts
```

### 2. Raw File Acceleration

```
Original: https://raw.githubusercontent.com/911218sky/gait-charts/main/README.md
Proxied: https://github.sky1218.com/raw/911218sky/gait-charts/main/README.md
```

### 3. Release Download Acceleration

```
Original: https://github.com/911218sky/gait-charts/releases/download/v1.2.1/GaitCharts_Setup_v1.2.1.exe
Proxied: https://github.sky1218.com/release/911218sky/gait-charts/releases/download/v1.2.1/GaitCharts_Setup_v1.2.1.exe
```

### 4. Git Clone Acceleration

```bash
git clone https://github.sky1218.com/github/911218sky/gait-charts.git
```

### 5. GitHub API Proxy

```
Original: https://api.github.com/repos/911218sky/gait-charts
Proxied: https://github.sky1218.com/api/repos/911218sky/gait-charts
```

## 🔧 Generate Obfuscated Worker

This repository automatically generates an obfuscated version of the worker on every push to main branch:

- **Automatic**: Triggers on every push to main branch
- **Manual**: Can also be triggered manually from the Actions tab

After the workflow completes:
1. The obfuscated `worker.js` will be committed to the repository
2. You can download it from the workflow artifacts
3. Copy and paste the content into Cloudflare Workers dashboard

### Manual Trigger:
1. Go to the **Actions** tab in your GitHub repository
2. Select **"Generate Obfuscated Worker"** workflow
3. Click **"Run workflow"**

## 📝 Configuration

Edit the `wrangler.toml` file to configure your Worker name and other settings.

## 📄 License

MIT
