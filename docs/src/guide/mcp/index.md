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

Ham MCP 服务使用 **Bearer Token** 进行身份认证。你需要在 Ham 控制台生成 Token 后，在 MCP 客户端配置中使用。

### 获取 Token

1. 访问 [Ham 控制台 - Token 管理](https://ham.nowcent.cn/console/tokens)
2. 点击「创建 Token」
3. 为 Token 添加描述（如「Claude Desktop」），方便后续管理
4. 复制生成的 Token（**仅显示一次，请妥善保管**）

::: warning
请勿将 Token 分享给他人。Token 等同于你的账号凭证，泄露可能导致个人信息被访问。
:::

## 下一步

了解如何在各个 MCP 客户端中配置 Ham MCP 服务：

[配置指南 →](/guide/mcp/config)
