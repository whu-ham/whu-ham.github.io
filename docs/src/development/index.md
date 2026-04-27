---
next:
  text: 'ham-web 概述'
  link: '/development/ham-web/'
---

# 开发

欢迎来到 Ham 开源项目的开发文档！Ham 目前已开源以下项目：

| 项目 | 说明 | 仓库 |
| --- | --- | --- |
| [ham-rn](/development/ham-rn/) | React Native 组件仓库，以 OTA 热更新集成到原生应用 | [GitHub](https://github.com/whu-ham/ham-rn) |
| [ham-web](/development/ham-web/) | Web 前端，SSO 单点登录授权 | [GitHub](https://github.com/whu-ham/ham-web) |

## 项目概览

**ham-rn** 是 Ham 应用的 React Native 组件仓库，以 OTA 热更新的方式集成到原生应用中。它负责教务系统的课程查询、成绩查询、绩点计算、CAS 认证等核心功能的 UI 与业务逻辑。

**ham-web** 是 Ham 的 Web 前端项目，基于 Next.js 构建，主要承载 SSO 单点登录授权流程（包括二维码登录、Passkey 登录等），并作为 Ham 互联平台的 Web 端入口。

## 参与贡献

所有项目均采用 [MIT 许可证](https://opensource.org/licenses/MIT)，欢迎社区贡献。请在提交 PR 前阅读各项目的贡献指南。
