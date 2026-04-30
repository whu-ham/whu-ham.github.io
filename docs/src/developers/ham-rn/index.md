---
description: "面向校园功能的Ham React Native组件库。"
prev:
  text: 'SSO OAuth2 授权'
  link: '/developers/ham-web/sso-authorize'
next:
  text: 'CAS 认证'
  link: '/developers/ham-rn/cas'
---

# Ham React Native组件

[Ham React Native组件](https://github.com/whu-ham/ham-rn) 是 Ham 应用的 React Native 组件仓库，以 OTA（Over-The-Air）热更新的方式集成到 iOS / Android 原生应用中。它负责 CAS 统一身份认证、教务系统相关功能（课程查询、成绩查询）、绩点计算等功能的 UI 渲染与业务逻辑处理。

## 技术栈

- React Native 0.83（New Architecture）
- TypeScript
- Jotai（状态管理）
- i18next（国际化，支持中文 / 英文 / 日文）
- ESLint + Prettier（代码规范）
- pnpm（包管理器）
- [hot-updater](https://github.com/gronxb/hot-updater)（OTA 热更新）

## 快速开始

### 前置要求

- Node.js >= 18
- pnpm
- Xcode（iOS 开发）
- Android Studio（Android 开发）
- CocoaPods

### 安装与运行

```bash
# 安装依赖
pnpm install

# iOS 额外步骤
cd ios && pod install && cd ..

# 启动 Metro bundler
pnpm start

# 运行 iOS
pnpm ios

# 运行 Android
pnpm android
```

## 项目结构

```
src/
├── business/          # 业务逻辑层
│   ├── cas/           # CAS 认证
│   └── education/     # 教务系统（课程、成绩、绩点计算）
├── components/        # React Native UI 组件
│   ├── cas/           # CAS 登录视图
│   ├── common/        # 通用组件
│   ├── education/     # 教务相关视图
│   └── scorecalc/     # 绩点计算视图
├── i18n/              # 国际化资源
├── modules/           # 原生模块声明（Turbo Modules）
├── resources/         # 静态资源（图片、HTML）
└── utils/             # 工具函数（颜色、网络请求、UI）
```

## 模块概览

Ham React Native组件包含以下核心模块，点击查看各模块的详细文档：

| 模块 | 用户操作入口 | 说明 |
| --- | --- | --- |
| [CAS 认证](./cas) | 我的 → 管理信息门户设置 → 登录 / 重新登录 | 通过 WebView 完成学校统一身份认证 |
| [教务模块](./education) | 我的 → 课程表 → 获取课程表 / 我的 → 成绩 → 获取成绩 | 从教务系统获取课程表和成绩数据 |
| [绩点计算](./score-calc) | 我的 → 成绩 → 设置 → 使用其它计算方式(基于Javascript) → 选择计算方式 | 基于 JavaScript 的自定义绩点计算脚本 |

### 通用组件

`RNCommon` 是一个不可见的后台组件，在应用启动时自动加载。它负责：

- 初始化 [hot-updater](https://github.com/gronxb/hot-updater) OTA 热更新监听
- 监听原生端语言切换事件，同步更新 i18next 语言设置

### 原生模块声明

Ham React Native组件使用 React Native Turbo Modules 与原生端通信。以下是各模块的用途：

| 模块 | 说明 |
| --- | --- |
| `NativeCasModule` | 获取 CAS Cookie（`requestCasCookie()`） |
| `NativeCasMobileLoginModule` | CAS 登录成功回调，将学号、密码和 Cookie 传回原生端（`onRequestSuccess(studentId, password, cookie)`） |
| `NativeCommonModule` | 通用功能：打开 URL（`openUrl`）、Toast 提示（`showToast`）、获取语言设置（`getLocale`）、监听语言切换事件（`onLocaleChanged`） |
| `NativeEducationModule` | 教务数据回调：课程列表（`onGetCourseList`）、成绩列表（`onGetScoreList`）、获取学期配置（`getCourseConfig`） |
| `NativeScoreCalcModule` | 绩点计算脚本管理：获取当前计算方式（`getCurrentCalc`）、选择计算方式（`selectCalc`）、查看详情（`openDetail`）、测试脚本（`testItem`）、监听计算方式变更事件（`onSetScoreJsCalcItem`） |
| `NativeLog` | 日志输出：信息日志（`i(tag, message)`）、错误日志（`e(tag, message)`） |

Ham React Native组件仅包含 TypeScript 侧的接口声明（Turbo Module Spec），原生模块的具体实现位于 iOS / Android 原生工程中。

### 国际化

使用 i18next 实现多语言支持，翻译文件位于 `i18n/` 目录下，支持中文、英文、日文。

### 工具模块

- `utils/color/` — 颜色处理工具
- `utils/request/` — 网络请求封装
- `utils/ui/` — UI 工具组件（如 Card）

## CI/CD

GitHub Actions 在 PR 和推送到 `main` 分支时自动运行：

- **Lint** — ESLint 检查
- **Compile Check** — TypeScript 类型检查
- **Android Build** — Debug APK 构建验证
- **iOS Build** — Debug 构建验证

## 许可证

Ham React Native组件采用 [MIT 许可证](https://opensource.org/licenses/MIT)。
