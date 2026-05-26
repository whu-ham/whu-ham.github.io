---
description: "Ham MCP 服务介绍 — 通过 MCP 协议将 Ham 的能力接入你的 AI 助手。"
next:
  text: '配置指南'
  link: '/guide/mcp/config'
---

# MCP 服务

Ham 提供 MCP（Model Context Protocol）服务，允许你将 Ham 的校园数据与能力接入支持 MCP 的 AI 助手（如 Claude Desktop、Cursor 等）。

## 什么是 MCP？

MCP（[Model Context Protocol](https://modelcontextprotocol.io/)）是一个开放协议，让 AI 应用能够安全地连接外部数据源和工具。通过 Ham 的 MCP 服务，你的 AI 助手可以：

- 查询课程信息与成绩
- 查看个人信息

## 服务地址

Ham MCP 服务采用 **Streamable HTTP** 传输方式：

```
https://mcp.ham.nowcent.cn/mcp
```

## 认证方式

Ham MCP 服务支持两种认证方式：

- **OAuth 动态注册（推荐）**：客户端在首次连接时自动完成注册与授权，无需手动创建 API Key，适用于支持 MCP OAuth 的现代客户端（如 Claude Desktop、Cursor、ChatGPT、Codex 等）。
- **API Key**：在 Ham 控制台手动生成 API Key，通过 `Authorization: Bearer <API_KEY>` 请求头进行鉴权，适用于不支持 OAuth 动态注册或需要长期凭证的场景。

### OAuth 动态注册（推荐）

Ham MCP 服务遵循 [MCP Authorization 规范](https://modelcontextprotocol.io/specification/draft/basic/authorization)，实现了 [OAuth 2.0 动态客户端注册（RFC 7591）](https://datatracker.ietf.org/doc/html/rfc7591) 与 [受保护资源元数据（RFC 9728）](https://datatracker.ietf.org/doc/html/rfc9728)。

接入流程由客户端自动完成：

1. 客户端访问服务地址，收到 `401 Unauthorized` 响应；
2. 客户端通过 `/.well-known/oauth-protected-resource` 发现授权服务器；
3. 客户端通过动态注册接口自动注册，获取 `client_id`；
4. 浏览器跳转至 Ham 授权页面，登录并同意授权后返回客户端；
5. 客户端获得访问凭证，后续请求自动携带，无需手动配置。

::: tip
使用动态注册时，你只需在客户端中填入服务地址 `https://mcp.ham.nowcent.cn/mcp`，其余流程均由客户端自动处理。
:::

### API Key

如果你的客户端不支持 OAuth 动态注册，或希望使用长期固定凭证，可以在 Ham 控制台生成 API Key 后手动配置。

#### 获取 API Key

1. 访问 [Ham 控制台 - API Keys 管理](https://ham.nowcent.cn/console/tokens)
2. 点击「创建 API Key」
3. 为 API Key 添加描述（如「Claude Desktop」），方便后续管理
4. 复制生成的 API Key（**仅显示一次，请妥善保管**）

::: warning
请勿将 API Key 分享给他人。API Key 等同于你的账号凭证，泄露可能导致个人信息被访问。
:::
