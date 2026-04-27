---
prev:
  text: 'SSO OAuth2 Authorization'
  link: '/en/developers/ham-web/sso-authorize'
next:
  text: 'CAS Authentication'
  link: '/en/developers/ham-rn/cas'
---

# Ham React Native Components

[Ham React Native Components](https://github.com/whu-ham/ham-rn) is the React Native component repository for the Ham app, integrated into iOS / Android native apps via OTA (Over-The-Air) hot updates. It handles the UI rendering and business logic for CAS authentication, education system features (course and grade queries), GPA calculation, and more.

## Tech Stack

- React Native 0.83 (New Architecture)
- TypeScript
- Jotai (state management)
- i18next (i18n — Chinese / English / Japanese)
- ESLint + Prettier (code quality)
- pnpm (package manager)
- [hot-updater](https://github.com/gronxb/hot-updater) (OTA hot updates)

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods

### Installation & Running

```bash
# Install dependencies
pnpm install

# iOS additional setup
cd ios && pod install && cd ..

# Start Metro bundler
pnpm start

# Run on iOS
pnpm ios

# Run on Android
pnpm android
```

## Project Structure

```
src/
├── business/          # Business logic layer
│   ├── cas/           # CAS authentication
│   └── education/     # Education system (course, score, score calc)
├── components/        # React Native UI components
│   ├── cas/           # CAS login views
│   ├── common/        # Common components
│   ├── education/     # Education-related views
│   └── scorecalc/     # Score calculator views
├── i18n/              # Internationalization resources
├── modules/           # Native module specs (Turbo Modules)
├── resources/         # Static assets (images, HTML)
└── utils/             # Utilities (color, request, UI)
```

## Module Overview

Ham React Native Components contains the following core modules. Click to view detailed documentation:

| Module | User Entry Point | Description |
| --- | --- | --- |
| [CAS Authentication](./cas) | Me → Manage Info Portal settings → Login / Re-login | University identity authentication via WebView |
| [Education Module](./education) | Me → Timetable → Fetch timetable / Me → Scores → Fetch Scores | Fetch course schedules and grades from the education system |
| [Score Calculator](./score-calc) | Me → Scores → Settings → Use other calculation (JavaScript-based) → Choose calculation | Custom GPA calculation scripts based on JavaScript |

### Common Component

`RNCommon` is an invisible background component loaded at app startup. It is responsible for:

- Initializing [hot-updater](https://github.com/gronxb/hot-updater) OTA hot update listener
- Listening for native locale change events and syncing the i18next language setting

### Native Module Specs

Ham React Native Components uses React Native Turbo Modules to communicate with the native side. Here are the modules and their purposes:

| Module | Description |
| --- | --- |
| `NativeCasModule` | Get CAS Cookie (`requestCasCookie()`) |
| `NativeCasMobileLoginModule` | CAS login success callback, passes student ID, password and cookie back to native (`onRequestSuccess(studentId, password, cookie)`) |
| `NativeCommonModule` | Common functions: open URL (`openUrl`), toast notification (`showToast`), get locale (`getLocale`), listen for locale changes (`onLocaleChanged`) |
| `NativeEducationModule` | Education data callbacks: course list (`onGetCourseList`), grade list (`onGetScoreList`), get semester config (`getCourseConfig`) |
| `NativeScoreCalcModule` | Score calculation script management: get current calculation (`getCurrentCalc`), select calculation (`selectCalc`), view details (`openDetail`), test script (`testItem`), listen for calculation change events (`onSetScoreJsCalcItem`) |
| `NativeLog` | Logging: info log (`i(tag, message)`), error log (`e(tag, message)`) |

Ham React Native Components only contains the TypeScript-side interface declarations (Turbo Module Specs). The native implementations reside in the iOS / Android native projects.

### Internationalization

Multi-language support via i18next. Translation files are located in the `i18n/` directory, supporting Chinese, English, and Japanese.

### Utilities

- `utils/color/` — Color processing utilities
- `utils/request/` — Network request wrapper
- `utils/ui/` — UI utility components (e.g., Card)

## CI/CD

GitHub Actions runs automatically on PRs and pushes to `main`:

- **Lint** — ESLint check
- **Compile Check** — TypeScript type checking
- **Android Build** — Debug APK build verification
- **iOS Build** — Debug build verification

## License

Ham React Native Components is [MIT licensed](https://opensource.org/licenses/MIT).
