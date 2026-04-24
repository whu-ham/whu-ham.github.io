# Coding Standards

## Lint Before Commit

- Always run `pnpm lint` (or `pnpm lint:fix`) before committing any code changes.
- Fix all lint errors before creating a commit. Do not commit code that fails linting.
- Available lint commands:
  - `pnpm lint` — check for lint errors
  - `pnpm lint:fix` — auto-fix lint errors

## Comments Must Be in English

- All code comments (inline comments, block comments, JSDoc, etc.) must be written in English.
- This applies to `.ts`, `.vue`, `.js`, and any other source files.

## i18n Requirement

- This project supports multiple locales: **Chinese (zh)**, **English (en)**, and **Japanese (ja)**.
- All user-facing text in documentation (`.md` files) must have corresponding versions in all three locales:
  - `docs/src/` — Chinese (default)
  - `docs/src/en/` — English
  - `docs/src/ja/` — Japanese
- All user-facing strings in Vue components must use the project's i18n mechanism (see `docs/page/download/service/i18n.ts` as a reference).
- Do **not** hardcode locale-specific text directly in components or pages without providing translations for all supported locales.
- When adding a new page or section, create the corresponding files in all three locale directories.
