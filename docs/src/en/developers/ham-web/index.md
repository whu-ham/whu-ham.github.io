---
prev:
  text: 'Integration Guide'
  link: '/en/developers/open-platform/oauth2-guide'
next:
  text: 'SSO OAuth2 Authorization'
  link: '/en/developers/ham-web/sso-authorize'
---

# Ham Web

[Ham Web](https://github.com/whu-ham/ham-web) is the web frontend for Ham, primarily serving the SSO single sign-on authorization flow and acting as the web entry point for the Ham Connect platform.

## Where It Is Used

Once deployed, Ham Web serves as the web service endpoint for the Ham Connect platform. It is used in the following scenarios:

- **SSO Authorization Page** — When third-party apps initiate OAuth2 authorization through the Ham Connect platform, users are redirected to Ham Web's authorization page for login and consent confirmation
- **QR Code Login** — Users can log in on the web by scanning a QR code with the Ham app
- **Passkey Login** — Supports WebAuthn / Passkey passwordless login
- **Mobile H5 Fallback** — When users don't have the Ham native app installed, provides a web-based install prompt and Passkey login option

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + HeroUI v3
- **State Management**: Jotai + React Redux
- **i18n**: next-intl (Chinese / English / Japanese)
- **Deployment**: Cloudflare Pages (via OpenNext)
- **Tooling**: ESLint v9 + Prettier + pnpm

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm

### Installation & Running

```bash
# Install dependencies
pnpm install

# Start dev server (Turbopack)
pnpm dev

# Production build
pnpm build
pnpm start

# Cloudflare Pages build
pnpm build:cf

# Lint
pnpm lint
```

Dev server runs at `http://localhost:3000`.

## Project Structure

```
app/                # Next.js App Router entry
  api/              # API routes
    auth/           # Auth APIs (login, logout, refresh, passkey, QR code)
    sso/            # SSO APIs (consent confirmation, consent info)
  sso-authorize/    # SSO authorization page (login view, QR login, passkey login)
components/         # Shared UI components
  LanguageSwitcher  # Language switcher
  ThemeSwitcher     # Theme switcher
  SearchBar         # Search bar
i18n/               # next-intl runtime config
messages/           # Locale message catalogs (en.json / zh.json / ja.json)
services/           # API / service layer
store/              # State management (locale, theme)
public/             # Static assets
```

## Development Guide

### Adding New UI Strings

Use `next-intl` for internationalization. When adding new strings, update all three translation files:

- `messages/zh.json`
- `messages/en.json`
- `messages/ja.json`

### API Routes

Ham Web's API routes act as a backend proxy, forwarding requests to the Ham backend service:

- `/api/auth/*` — Authentication (login, logout, token refresh, passkey, QR code)
- `/api/sso/*` — SSO authorization (consent info query, consent confirmation)

### Theme & Language

- Supports light / dark / system theme modes
- Supports Chinese / English / Japanese, with user preference persisted via cookies

## CI/CD

The project uses GitHub Actions for continuous integration and deploys to Cloudflare Pages.

## Contributing

All contributors must follow these rules:

1. Run `pnpm lint` and `pnpm build` before committing
2. Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/)
3. Commit messages and code comments must be in English

## License

Ham Web is [MIT licensed](https://opensource.org/licenses/MIT).
