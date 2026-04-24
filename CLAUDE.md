# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

This is the official documentation website for **WHU Ham** (武汉大学 Ham App), built with [VitePress](https://vitepress.dev/). It supports three locales: Chinese (default), English, and Japanese.

## Rules

- [Coding Standards](.claude/rules/coding-standards.md) — lint requirements, comment language, and i18n guidelines

## Tech Stack

- **Framework**: VitePress
- **UI**: Element Plus + Vue 3
- **Language**: TypeScript
- **Linter**: ESLint + Prettier
- **Package Manager**: pnpm

## Common Commands

```bash
pnpm docs:dev      # start dev server
pnpm docs:build    # build for production
pnpm docs:preview  # preview production build
pnpm lint          # check lint errors
pnpm lint:fix      # auto-fix lint errors
```

## Project Structure

```
docs/
├── .vitepress/
│   ├── config/
│   │   ├── zh.ts       # Chinese nav/sidebar config
│   │   ├── en.ts       # English nav/sidebar config
│   │   ├── ja.ts       # Japanese nav/sidebar config
│   │   └── shared.ts   # Shared VitePress config
│   └── theme/          # Custom theme
├── src/                # Chinese (default) content
├── src/en/             # English content
└── src/ja/             # Japanese content
```
