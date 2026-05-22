---
description: "Ham MCP 服务配置指南 — 在 Claude Desktop、Cursor 等客户端中配置 Ham MCP。"
prev:
  text: 'MCP 介绍'
  link: '/guide/mcp/'
---

# 配置指南

本文介绍如何在常见的 MCP 客户端中配置 Ham MCP 服务。

## 通用配置参数

| 参数 | 值 |
| --- | --- |
| 传输方式 | Streamable HTTP |
| 服务地址 | `https://mcp.ham.nowcent.cn/mcp` |
| 认证方式 | Bearer Token |

## Claude Desktop

编辑 Claude Desktop 配置文件：

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

添加以下配置：

```json
{
  "mcpServers": {
    "ham": {
      "type": "streamable-http",
      "url": "https://mcp.ham.nowcent.cn/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_TOKEN>"
      }
    }
  }
}
```

将 `<YOUR_TOKEN>` 替换为你在 [Ham 控制台](https://ham.nowcent.cn/console/tokens) 生成的 Token。

保存后重启 Claude Desktop 即可生效。

## Cursor

在 Cursor 中配置 MCP 服务：

1. 打开 Cursor 设置（`Cmd + ,`）
2. 导航到 **MCP** 部分
3. 点击 **Add new MCP server**
4. 填写配置：
   - **Name**: `Ham`
   - **Type**: `streamable-http`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
5. 在 Headers 中添加认证信息：
   - **Key**: `Authorization`
   - **Value**: `Bearer <YOUR_TOKEN>`

将 `<YOUR_TOKEN>` 替换为你的实际 Token。

## 其他 MCP 客户端

对于其他支持 MCP 的客户端，通用配置步骤为：

1. 选择 **Streamable HTTP** 传输方式
2. 设置服务地址为 `https://mcp.ham.nowcent.cn/mcp`
3. 在请求头中添加 `Authorization: Bearer <YOUR_TOKEN>`

具体配置方式请参考你所使用的客户端文档。

## 常见问题

### 连接失败

- 确认服务地址正确：`https://mcp.ham.nowcent.cn/mcp`
- 检查网络连接是否正常
- 确认客户端支持 Streamable HTTP 传输方式

### 认证失败

- 检查 Token 是否正确，确保包含完整的 `Bearer` 前缀
- 确认 Token 未过期，可在 [Ham 控制台](https://ham.nowcent.cn/console/tokens) 查看
- 如果 Token 泄露，请立即在控制台删除并重新生成

### Token 安全

- 不要将 Token 提交到代码仓库
- 不要在公开场合分享 Token
- 定期轮换 Token
- 为不同客户端创建独立的 Token，便于管理
