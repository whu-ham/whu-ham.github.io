# Contributing to Ham Documentation

Thank you for your interest in contributing to the Ham documentation site! This guide will help you get started.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) (package manager)
- Git

## Getting Started

1. **Fork** the repository on GitHub.

2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/<your-username>/whu-ham.github.io.git
   cd whu-ham.github.io
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Start the dev server**:

   ```bash
   pnpm docs:dev
   ```

5. Open `http://localhost:5173` in your browser to preview the site.

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
└── src/
    ├── ...             # Chinese (default) content
    ├── en/             # English content
    └── ja/             # Japanese content
```

## Writing Documentation

### Internationalization (i18n)

This site supports three languages: **Chinese** (default), **English**, and **Japanese**.

- Chinese docs go in `docs/src/`
- English docs go in `docs/src/en/`
- Japanese docs go in `docs/src/ja/`

When adding or updating content, please update **all three language versions** if possible.

### Frontmatter

Each Markdown file should include a `description` field in the frontmatter for SEO and the LLMs plugin:

```yaml
---
description: A brief description of the page content
---
```

Use the appropriate language for the description (Chinese for `src/`, English for `src/en/`, Japanese for `src/ja/`).

### Markdown Style

- Use ATX-style headings (`#`, `##`, `###`).
- Add a blank line before and after headings, code blocks, and lists.
- Use fenced code blocks with language identifiers.

## Development Workflow

1. Create a new branch from `main`:

   ```bash
   git checkout -b feat/your-feature
   ```

2. Make your changes.

3. Run lint to check for errors:

   ```bash
   pnpm lint
   ```

4. Fix any lint issues:

   ```bash
   pnpm lint:fix
   ```

5. Build the site to verify everything works:

   ```bash
   pnpm docs:build
   ```

6. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/):

   ```
   feat: add new page for feature X
   fix: correct typo in handbook
   docs: update contributing guide
   chore: update dependencies
   ```

7. Push your branch and open a Pull Request against `main`.

## Code Style

- Code comments should be written in **English**.
- Commit messages should be written in **English**.
- Use [Prettier](https://prettier.io/) for formatting (configured in the project).
- Run `pnpm lint` before committing.

## Reporting Issues

If you find a bug or have a suggestion, please [open an issue](https://github.com/whu-ham/whu-ham.github.io/issues) on GitHub.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
