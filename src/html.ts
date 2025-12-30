// ============================================================================
// Types
// ============================================================================

interface UsageCard {
  icon: string;
  title: string;
  subtitle: string;
  original?: string;
  proxied?: string;
  command?: string;
}

interface FeatureItem {
  icon: string;
  text: string;
}

// ============================================================================
// Data
// ============================================================================

const USAGE_CARDS: UsageCard[] = [
  {
    icon: '📦',
    title: 'Repository',
    subtitle: 'Clone & browse repos',
    original: 'github.com/user/repo',
    proxied: 'github.sky1218.com/github/user/repo',
  },
  {
    icon: '📄',
    title: 'Raw Files',
    subtitle: 'Direct file access',
    original: 'raw.githubusercontent.com/user/repo/main/file',
    proxied: 'github.sky1218.com/raw/user/repo/main/file',
  },
  {
    icon: '🚀',
    title: 'Releases',
    subtitle: 'Download binaries',
    original: 'github.com/user/repo/releases/download/v1.0/app.exe',
    proxied: 'github.sky1218.com/release/user/repo/releases/download/v1.0/app.exe',
  },
  {
    icon: '🔌',
    title: 'GitHub API',
    subtitle: 'REST API access',
    original: 'api.github.com/repos/user/repo',
    proxied: 'github.sky1218.com/api/repos/user/repo',
  },
  {
    icon: '📝',
    title: 'Gist',
    subtitle: 'Code snippets',
    original: 'gist.github.com/user/gist-id',
    proxied: 'github.sky1218.com/gist/user/gist-id',
  },
  {
    icon: '🐳',
    title: 'Container Registry',
    subtitle: 'Docker images (GHCR)',
    original: 'ghcr.io/user/image:latest',
    proxied: 'github.sky1218.com/ghcr/user/image:latest',
  },
  {
    icon: '📥',
    title: 'Codeload',
    subtitle: 'Download ZIP/TAR',
    original: 'codeload.github.com/user/repo/zip/refs/heads/main',
    proxied: 'github.sky1218.com/codeload/user/repo/zip/refs/heads/main',
  },
  {
    icon: '👤',
    title: 'Avatars',
    subtitle: 'User profile images',
    original: 'avatars.githubusercontent.com/u/12345678',
    proxied: 'github.sky1218.com/avatars/u/12345678',
  },
  {
    icon: '💻',
    title: 'Git Clone',
    subtitle: 'Clone with speed',
    command: 'git clone https://github.sky1218.com/github/user/repo.git',
  },
];

const FEATURES: FeatureItem[] = [
  { icon: '⚡', text: 'Global CDN' },
  { icon: '🔒', text: 'CORS Enabled' },
  { icon: '🌍', text: '300+ Edge Locations' },
  { icon: '🔄', text: 'Auto Redirects' },
  { icon: '📊', text: 'All HTTP Methods' },
  { icon: '🎯', text: 'Zero Config' },
  { icon: '🆓', text: '100% Free' },
  { icon: '🛡️', text: 'DDoS Protected' },
];

const SUPPORTED_SERVICES: FeatureItem[] = [
  { icon: '📦', text: '/github - Repos' },
  { icon: '📄', text: '/raw - Raw files' },
  { icon: '📝', text: '/gist - Gists' },
  { icon: '🔌', text: '/api - REST API' },
  { icon: '🐳', text: '/ghcr - Containers' },
  { icon: '📥', text: '/codeload - ZIP/TAR' },
  { icon: '📎', text: '/objects - LFS' },
  { icon: '🖼️', text: '/media - Media' },
  { icon: '👤', text: '/avatars - Avatars' },
  { icon: '🎨', text: '/assets - Assets' },
  { icon: '🗂️', text: '/archive - Archives' },
  { icon: '🚀', text: '/release - Releases' },
  { icon: '📦', text: '/pkg - NPM Packages' },
  { icon: '🤖', text: '/copilot - Copilot' },
];


// ============================================================================
// SVG Icons
// ============================================================================

const ICONS = {
  lightning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
};

// ============================================================================
// Component Builders
// ============================================================================

function buildCodeBlock(label: string, code: string, showCopy = false): string {
  const copyBtn = showCopy ? `<button class="copy-btn" onclick="copyCode(this, '${code.replace(/'/g, "\\'")}')">${ICONS.copy}<span>Copy</span></button>` : '';
  return `
    <div class="code-example">
      <div class="code-header">
        <span class="code-label">${label}</span>
        ${copyBtn}
      </div>
      <div class="code-body"><code>${code}</code></div>
    </div>`;
}

function buildUsageCard(card: UsageCard, index: number): string {
  const header = `
    <div class="card-header">
      <div class="card-icon">${card.icon}</div>
      <div>
        <div class="card-title">${card.title}</div>
        <div class="card-subtitle">${card.subtitle}</div>
      </div>
    </div>`;

  if (card.command) {
    return `
      <div class="card" style="--delay: ${index * 0.05}s">
        ${header}
        ${buildCodeBlock('Command', card.command, true)}
      </div>`;
  }

  return `
    <div class="card" style="--delay: ${index * 0.05}s">
      ${header}
      ${buildCodeBlock('Original', card.original!)}
      <div class="code-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
      ${buildCodeBlock('Proxied', card.proxied!, true)}
    </div>`;
}

function buildFeatureItem(item: FeatureItem, index: number): string {
  return `
    <div class="feature-item" style="--delay: ${index * 0.03}s">
      <div class="feature-icon">${item.icon}</div>
      <span class="feature-text">${item.text}</span>
    </div>`;
}

function buildSection(id: string, label: string, title: string, desc: string, content: string): string {
  return `
    <section id="${id}">
      <div class="container">
        <div class="section-header">
          <span class="section-label">${label}</span>
          <h2 class="section-title">${title}</h2>
          <p class="section-desc">${desc}</p>
        </div>
        ${content}
      </div>
    </section>`;
}


// ============================================================================
// Modern CSS Styles
// ============================================================================

const CSS_STYLES = `
  :root {
    --bg-primary: #030712;
    --bg-secondary: #0f1629;
    --bg-tertiary: #1a2332;
    --bg-card: rgba(15, 23, 42, 0.6);
    --border-color: rgba(99, 102, 241, 0.15);
    --border-hover: rgba(99, 102, 241, 0.4);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    --accent-tertiary: #ec4899;
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
    --glow-primary: rgba(99, 102, 241, 0.4);
    --glow-secondary: rgba(139, 92, 246, 0.3);
    --success: #10b981;
    --glass: rgba(15, 23, 42, 0.8);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* Animated Background */
  .bg-effects {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }

  .bg-gradient-1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(ellipse 80% 60% at 50% -30%, rgba(99, 102, 241, 0.25), transparent 70%),
      radial-gradient(ellipse 50% 50% at 100% 20%, rgba(139, 92, 246, 0.15), transparent 60%),
      radial-gradient(ellipse 50% 50% at 0% 80%, rgba(236, 72, 153, 0.12), transparent 60%);
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%);
  }

  .bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: float 20s ease-in-out infinite;
  }

  .bg-orb-1 {
    width: 600px; height: 600px;
    background: rgba(99, 102, 241, 0.15);
    top: -200px; left: -100px;
    animation-delay: 0s;
  }

  .bg-orb-2 {
    width: 500px; height: 500px;
    background: rgba(139, 92, 246, 0.12);
    top: 50%; right: -150px;
    animation-delay: -7s;
  }

  .bg-orb-3 {
    width: 400px; height: 400px;
    background: rgba(236, 72, 153, 0.1);
    bottom: -100px; left: 30%;
    animation-delay: -14s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, -30px) scale(1.05); }
    50% { transform: translate(-20px, 20px) scale(0.95); }
    75% { transform: translate(20px, 30px) scale(1.02); }
  }

  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

  /* Navigation */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 16px 0;
    background: var(--glass);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }

  nav.scrolled {
    padding: 12px 0;
    background: rgba(3, 7, 18, 0.95);
  }

  .nav-content { display: flex; justify-content: space-between; align-items: center; }

  .nav-logo {
    display: flex; align-items: center; gap: 12px;
    font-weight: 700; font-size: 20px;
    text-decoration: none; color: var(--text-primary);
    transition: transform 0.2s;
  }
  .nav-logo:hover { transform: scale(1.02); }
  .nav-logo svg { 
    width: 32px; height: 32px;
    filter: drop-shadow(0 0 8px var(--glow-primary));
  }

  .nav-links { display: flex; gap: 8px; }
  .nav-links a {
    color: var(--text-secondary); 
    text-decoration: none;
    font-size: 14px; 
    font-weight: 500; 
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.2s;
  }
  .nav-links a:hover { 
    color: var(--text-primary); 
    background: rgba(99, 102, 241, 0.1);
  }

  .status-badge {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 100px; 
    font-size: 13px; 
    font-weight: 500;
    color: var(--success);
  }

  .status-dot {
    width: 8px; height: 8px;
    background: var(--success); 
    border-radius: 50%;
    box-shadow: 0 0 12px var(--success);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse { 
    0%, 100% { opacity: 1; transform: scale(1); } 
    50% { opacity: 0.6; transform: scale(0.9); } 
  }

  /* Hero */
  .hero { 
    padding: 180px 0 120px; 
    text-align: center;
    position: relative;
  }

  .hero-badge {
    display: inline-flex; 
    align-items: center; 
    gap: 10px;
    padding: 10px 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 100px; 
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary); 
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
    animation: fadeInUp 0.6s ease-out;
  }

  .hero-badge span { 
    font-size: 18px;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .hero h1 {
    font-size: clamp(48px, 10vw, 84px);
    font-weight: 800; 
    line-height: 1.05; 
    margin-bottom: 28px;
    letter-spacing: -0.03em;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.6s ease-out 0.1s both;
    text-shadow: 0 0 80px var(--glow-primary);
  }

  .hero-subtitle {
    font-size: 20px; 
    color: var(--text-secondary);
    max-width: 640px; 
    margin: 0 auto 48px;
    line-height: 1.6;
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  .hero-buttons { 
    display: flex; 
    gap: 16px; 
    justify-content: center; 
    flex-wrap: wrap;
    animation: fadeInUp 0.6s ease-out 0.3s both;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Buttons */
  .btn {
    display: inline-flex; 
    align-items: center; 
    gap: 10px;
    padding: 16px 32px; 
    border-radius: 14px;
    font-size: 15px; 
    font-weight: 600;
    text-decoration: none; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer; 
    border: none;
    position: relative;
    overflow: hidden;
  }

  .btn-primary { 
    background: var(--accent-gradient);
    color: white;
    box-shadow: 0 4px 20px var(--glow-primary);
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 40px var(--glow-primary);
  }
  .btn-primary:hover::before { opacity: 1; }

  .btn-secondary {
    background: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
  }
  .btn-secondary:hover { 
    background: var(--bg-tertiary); 
    border-color: var(--border-hover);
    transform: translateY(-3px);
  }

  /* Sections */
  section { padding: 100px 0; }

  .section-header { 
    text-align: center; 
    margin-bottom: 64px;
  }

  .section-label {
    display: inline-block; 
    padding: 8px 18px;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 100px; 
    font-size: 12px;
    font-weight: 700; 
    text-transform: uppercase;
    letter-spacing: 1.5px; 
    color: var(--accent-primary); 
    margin-bottom: 24px;
  }

  .section-title { 
    font-size: clamp(32px, 5vw, 48px); 
    font-weight: 800; 
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .section-desc { 
    font-size: 18px; 
    color: var(--text-secondary); 
    max-width: 540px; 
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 24px;
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 20px; 
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative; 
    overflow: hidden;
    backdrop-filter: blur(10px);
    animation: fadeInUp 0.5s ease-out calc(var(--delay, 0s)) both;
  }

  .card::before {
    content: ''; 
    position: absolute;
    top: 0; left: 0; right: 0; 
    height: 2px;
    background: var(--accent-gradient);
    opacity: 0; 
    transition: opacity 0.4s;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .card:hover {
    border-color: var(--border-hover);
    transform: translateY(-8px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(99, 102, 241, 0.1);
  }
  .card:hover::before { opacity: 1; }
  .card:hover::after { opacity: 1; }

  .card-header { 
    display: flex; 
    align-items: center; 
    gap: 16px; 
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .card-icon {
    width: 48px; height: 48px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
    border: 1px solid var(--border-color);
    border-radius: 14px; 
    font-size: 22px;
    transition: all 0.3s;
  }

  .card:hover .card-icon {
    transform: scale(1.1) rotate(-5deg);
    border-color: var(--border-hover);
  }

  .card-title { 
    font-size: 18px; 
    font-weight: 700;
    margin-bottom: 2px;
  }
  .card-subtitle { 
    font-size: 13px; 
    color: var(--text-muted);
  }

  /* Code Examples */
  .code-example {
    background: rgba(3, 7, 18, 0.6);
    border: 1px solid var(--border-color);
    border-radius: 12px; 
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .code-header {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding: 10px 14px;
    background: rgba(26, 35, 50, 0.6);
    border-bottom: 1px solid var(--border-color);
  }

  .code-label {
    font-size: 10px; 
    font-weight: 700;
    text-transform: uppercase; 
    letter-spacing: 1px;
    color: var(--text-muted);
  }

  .copy-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .copy-btn:hover {
    background: var(--bg-tertiary);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  .copy-btn.copied {
    background: rgba(16, 185, 129, 0.1);
    border-color: var(--success);
    color: var(--success);
  }

  .code-body { 
    padding: 14px 16px; 
    overflow-x: auto;
  }
  .code-body code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 13px; 
    color: var(--success); 
    word-break: break-all;
    line-height: 1.5;
  }

  .code-arrow { 
    display: flex; 
    justify-content: center; 
    padding: 10px 0; 
    color: var(--accent-primary);
    position: relative;
    z-index: 1;
  }

  .code-arrow svg {
    animation: arrowBounce 1.5s ease-in-out infinite;
  }

  @keyframes arrowBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .feature-item {
    display: flex; 
    align-items: center; 
    gap: 14px;
    padding: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 14px; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    animation: fadeInUp 0.4s ease-out calc(var(--delay, 0s)) both;
  }

  .feature-item:hover { 
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .feature-icon {
    width: 44px; height: 44px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
    border: 1px solid var(--border-color);
    border-radius: 12px; 
    font-size: 18px;
    flex-shrink: 0;
    transition: all 0.3s;
  }

  .feature-item:hover .feature-icon {
    transform: scale(1.1);
    border-color: var(--border-hover);
  }

  .feature-text { 
    font-size: 14px; 
    font-weight: 600;
    color: var(--text-primary);
  }

  /* Footer */
  footer { 
    padding: 60px 0; 
    border-top: 1px solid var(--border-color);
    background: rgba(3, 7, 18, 0.5);
  }

  .footer-content {
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    flex-wrap: wrap; 
    gap: 24px;
  }

  .footer-left { 
    display: flex; 
    align-items: center; 
    gap: 32px;
  }

  .footer-logo {
    display: flex; 
    align-items: center; 
    gap: 10px;
    font-weight: 700; 
    font-size: 18px;
    color: var(--text-primary);
  }
  .footer-logo svg { 
    width: 28px; height: 28px;
    filter: drop-shadow(0 0 6px var(--glow-primary));
  }

  .footer-text { 
    font-size: 14px; 
    color: var(--text-muted);
  }

  .footer-links { 
    display: flex; 
    gap: 24px;
  }
  .footer-links a {
    font-size: 14px; 
    color: var(--text-secondary);
    text-decoration: none; 
    transition: all 0.2s;
    font-weight: 500;
  }
  .footer-links a:hover { 
    color: var(--accent-primary);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hero { padding: 140px 0 80px; }
    .hero h1 { font-size: 40px; }
    .hero-subtitle { font-size: 16px; }
    .cards-grid { grid-template-columns: 1fr; }
    .features-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-content { flex-direction: column; text-align: center; }
    .footer-left { flex-direction: column; gap: 16px; }
    section { padding: 60px 0; }
  }

  @media (max-width: 480px) {
    .features-grid { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; align-items: center; }
    .btn { width: 100%; justify-content: center; }
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg-primary); }
  ::-webkit-scrollbar-thumb { 
    background: var(--bg-tertiary); 
    border-radius: 5px;
    border: 2px solid var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--border-hover); }

  /* Selection */
  ::selection {
    background: rgba(99, 102, 241, 0.3);
    color: var(--text-primary);
  }
`;


// ============================================================================
// JavaScript for Interactivity
// ============================================================================

const JS_SCRIPTS = `
  // Copy to clipboard
  function copyCode(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '${ICONS.check}<span>Copied!</span>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '${ICONS.copy}<span>Copy</span>';
      }, 2000);
    });
  }

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Card mouse tracking for glow effect
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .feature-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
`;

// ============================================================================
// Main HTML Generator
// ============================================================================

export function getUsageHTML(): string {
  const usageCardsHTML = USAGE_CARDS.map((card, i) => buildUsageCard(card, i)).join('');
  const featuresHTML = FEATURES.map((item, i) => buildFeatureItem(item, i)).join('');
  const servicesHTML = SUPPORTED_SERVICES.map((item, i) => buildFeatureItem(item, i)).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Lightning-fast GitHub proxy powered by Cloudflare Workers. Access GitHub resources through a global edge network.">
  <meta name="theme-color" content="#6366f1">
  <title>GitHub Proxy - Lightning Fast Access</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>${CSS_STYLES}</style>
</head>
<body>
  <!-- Background Effects -->
  <div class="bg-effects">
    <div class="bg-gradient-1"></div>
    <div class="bg-grid"></div>
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
  </div>

  <!-- Navigation -->
  <nav>
    <div class="container nav-content">
      <a href="/" class="nav-logo">
        ${ICONS.lightning}
        GitHub Proxy
      </a>
      <div class="nav-links">
        <a href="#usage">Usage</a>
        <a href="#features">Features</a>
        <a href="#supported">Services</a>
        <a href="https://github.com/911218sky/github-poxy" target="_blank">GitHub</a>
      </div>
      <div class="status-badge">
        <span class="status-dot"></span>
        Operational
      </div>
    </div>
  </nav>

  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-badge">
          <span>⚡</span>
          Powered by Cloudflare Workers
        </div>
        <h1>GitHub Proxy</h1>
        <p class="hero-subtitle">
          Lightning-fast access to GitHub resources through Cloudflare's global edge network. 
          No configuration required — just replace the URL and go.
        </p>
        <div class="hero-buttons">
          <a href="#usage" class="btn btn-primary">
            Get Started
            ${ICONS.arrow}
          </a>
          <a href="https://github.com/911218sky/github-poxy" target="_blank" class="btn btn-secondary">
            ${ICONS.github}
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Usage Section -->
    ${buildSection(
      'usage',
      'Quick Start',
      'How to Use',
      'Simply replace the GitHub domain with our proxy URL',
      `<div class="cards-grid">${usageCardsHTML}</div>`
    )}

    <!-- Features Section -->
    ${buildSection(
      'features',
      'Why Choose Us',
      'Features',
      'Built for speed, reliability, and simplicity',
      `<div class="features-grid">${featuresHTML}</div>`
    )}

    <!-- Supported Services Section -->
    ${buildSection(
      'supported',
      'Supported Services',
      'All GitHub Services',
      'Complete proxy support for the entire GitHub ecosystem',
      `<div class="features-grid">${servicesHTML}</div>`
    )}
  </main>

  <!-- Footer -->
  <footer>
    <div class="container footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          ${ICONS.lightning}
          GitHub Proxy
        </div>
        <span class="footer-text">Powered by Cloudflare Workers</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/911218sky/github-poxy" target="_blank">GitHub</a>
        <a href="https://workers.cloudflare.com" target="_blank">Cloudflare Workers</a>
      </div>
    </div>
  </footer>

  <script>${JS_SCRIPTS}</script>
</body>
</html>`;
}
