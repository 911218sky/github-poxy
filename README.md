# GitHub Proxy - Cloudflare Workers

🚀 A GitHub proxy acceleration service deployed on Cloudflare Workers, supporting accelerated access to GitHub repositories, raw files, releases, and more.

## ✨ Features

- ⚡ Accelerated by Cloudflare's global CDN network
- 🔒 CORS support for cross-origin requests
- 📦 Support for GitHub repos, raw files, releases, and Gists
- 🎯 Written in TypeScript with type safety
- 🚀 One-click deployment to Cloudflare Workers

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

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

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

## 📝 Configuration

Edit the `wrangler.toml` file to configure your Worker name and other settings.

## 📄 License

MIT
