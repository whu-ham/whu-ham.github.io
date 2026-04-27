---
prev:
  text: '开发概述'
  link: '/development/'
next:
  text: 'SSO OAuth2 授权'
  link: '/development/ham-web/sso-authorize'
---

# ham-web

[ham-web](https://github.com/whu-ham/ham-web) 是 Ham 的 Web 前端项目，主要承载 SSO 单点登录授权流程，并作为 Ham 互联平台的 Web 端入口。

## 在哪里被使用

ham-web 部署后作为 Ham 互联平台的 Web 服务端点，主要在以下场景中被使用：

- **SSO 授权页面** — 当第三方应用通过 Ham 互联平台发起 OAuth2 授权时，用户会被重定向到 ham-web 的授权页面进行登录和授权确认
- **二维码登录** — 用户可以在 Web 端通过扫描二维码完成登录
- **Passkey 登录** — 支持 WebAuthn / Passkey 无密码登录
- **移动端 H5 回退** — 当用户未安装 Ham 原生应用时，提供 Web 端的安装引导和 Passkey 登录选项

## 技术栈

- **框架**: Next.js 16（App Router）+ React 19 + TypeScript
- **样式**: Tailwind CSS v4 + HeroUI v3
- **状态管理**: Jotai + React Redux
- **国际化**: next-intl（支持中文 / 英文 / 日文）
- **部署**: Cloudflare Pages（通过 OpenNext）
- **工具链**: ESLint v9 + Prettier + pnpm

## 快速开始

### 前置要求

- Node.js >= 20
- pnpm

### 安装与运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器（Turbopack）
pnpm dev

# 生产构建
pnpm build
pnpm start

# Cloudflare Pages 构建
pnpm build:cf

# 代码检查
pnpm lint
```

开发服务器运行在 `http://localhost:3000`。

## 项目结构

```
app/                # Next.js App Router 入口
  api/              # API 路由
    auth/           # 认证相关 API（登录、登出、刷新、Passkey、二维码）
    sso/            # SSO 相关 API（授权确认、授权信息）
  sso-authorize/    # SSO 授权页面（登录视图、二维码登录、Passkey 登录）
components/         # 共享 UI 组件
  LanguageSwitcher  # 语言切换器
  ThemeSwitcher     # 主题切换器
  SearchBar         # 搜索栏
i18n/               # next-intl 运行时配置
messages/           # 多语言翻译文件（en.json / zh.json / ja.json）
services/           # API / 服务层
store/              # 状态管理（locale、theme）
public/             # 静态资源
```

## 开发指南

### 添加新的 UI 文案

使用 `next-intl` 进行国际化。添加新文案时，需要同时更新三个翻译文件：

- `messages/zh.json`
- `messages/en.json`
- `messages/ja.json`

### API 路由

ham-web 的 API 路由作为后端代理，将请求转发到 Ham 后端服务：

- `/api/auth/*` — 认证相关（登录、登出、Token 刷新、Passkey、二维码）
- `/api/sso/*` — SSO 授权相关（授权信息查询、授权确认）

### 主题与语言

- 支持亮色 / 暗色 / 跟随系统三种主题模式
- 支持中文 / 英文 / 日文三种语言，通过 Cookie 持久化用户偏好

## CI/CD

项目通过 GitHub Actions 进行持续集成，并部署到 Cloudflare Pages。

## 贡献指南

所有贡献者需遵循以下规则：

1. 提交前必须通过 `pnpm lint` 和 `pnpm build`
2. 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
3. 提交信息和代码注释使用英文

## 许可证

ham-web 采用 [MIT 许可证](https://opensource.org/licenses/MIT)。
