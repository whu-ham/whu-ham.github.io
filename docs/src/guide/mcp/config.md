---
description: "Ham MCP 服务配置指南 — 在 Claude、ChatGPT、Cherry Studio、Cursor、Antigravity、Claude Code、Codex 等客户端中配置 Ham MCP。"
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
| 认证方式 | OAuth 动态注册（推荐） / API Key |

::: tip
对于支持 OAuth 动态注册的客户端，你只需填入服务地址，其余流程会自动完成。详见 [MCP 介绍 - OAuth 动态注册](/guide/mcp/#oauth-动态注册推荐)。
:::

## 桌面客户端

### [Claude](https://claude.ai/)

#### 方式一：OAuth 动态注册（推荐）

1. 打开 Claude，进入 **Settings → Connectors**
2. 点击 **Add custom connector**
3. 填写：
   - **Name**: `Ham`
   - **Remote MCP server URL**: `https://mcp.ham.nowcent.cn/mcp`
4. 保存后点击 **Connect**，浏览器会自动跳转至 Ham 授权页面，登录并同意授权后即可使用。

#### 方式二：API Key（仅桌面版）

桌面版可通过编辑配置文件使用 API Key：

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "ham": {
      "type": "streamable-http",
      "url": "https://mcp.ham.nowcent.cn/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_API_KEY>"
      }
    }
  }
}
```

将 `<YOUR_API_KEY>` 替换为你在 [Ham 控制台](https://ham.nowcent.cn/console/tokens) 生成的 API Key，保存后重启 Claude。

### [ChatGPT](https://chatgpt.com/)

1. 打开 ChatGPT，进入 **Settings → Connectors → Advanced**
2. 启用 **Developer mode**（开发者模式）
3. 返回 Connectors 页面，点击 **Create**
4. 填写：
   - **Name**: `Ham`
   - **MCP Server URL**: `https://mcp.ham.nowcent.cn/mcp`
   - **Authentication**: `OAuth`
5. 点击 **Create** 后会跳转至 Ham 授权页面，完成授权即可在对话中使用。

::: tip
ChatGPT 的 Connectors 功能目前仅对 ChatGPT Plus / Pro / Business / Enterprise 用户开放。
:::

### [Cherry Studio](https://cherry-ai.com/)

1. 打开 Cherry Studio，进入 **设置 → MCP 服务器 → 添加服务器**
2. 填写：
   - **名称**: `Ham`
   - **类型**: `可流式传输的 HTTP（streamableHttp）`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
3. 保存后启用该服务器。首次调用工具时会自动唤起浏览器完成 OAuth 授权。
4. 如需使用 API Key，在「请求头（Headers）」中添加：
   ```
   Authorization=Bearer <YOUR_API_KEY>
   ```

### [WorkBuddy](https://www.codebuddy.cn/work/)

1. 打开 WorkBuddy，进入 **设置 → MCP 市场 → 自定义 MCP**
2. 选择 **添加 MCP 服务**，填写：
   ```json
   {
     "mcpServers": {
       "ham": {
         "type": "streamable-http",
         "url": "https://mcp.ham.nowcent.cn/mcp"
       }
     }
   }
   ```
3. 保存后会自动唤起浏览器完成 OAuth 授权；如需使用 API Key，在配置中追加 `headers.Authorization`：
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## IDE 与编辑器

### [Cursor](https://cursor.com/)

#### 方式一：OAuth 动态注册（推荐）

1. 打开 Cursor 设置（`Cmd + ,`）
2. 进入 **MCP & Integrations**，点击 **New MCP Server**
3. 填写配置：
   ```json
   {
     "mcpServers": {
       "ham": {
         "type": "streamable-http",
         "url": "https://mcp.ham.nowcent.cn/mcp"
       }
     }
   }
   ```
4. 保存后 Cursor 会自动唤起浏览器完成授权。

#### 方式二：API Key

在配置中添加 `headers` 字段：

```json
{
  "mcpServers": {
    "ham": {
      "type": "streamable-http",
      "url": "https://mcp.ham.nowcent.cn/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_API_KEY>"
      }
    }
  }
}
```

### [Antigravity](https://antigravity.google/)

1. 打开 Antigravity，进入 **Settings → MCP Servers**
2. 点击 **Add custom MCP server**，填写：
   ```json
   {
     "mcpServers": {
       "ham": {
         "type": "streamable-http",
         "url": "https://mcp.ham.nowcent.cn/mcp"
       }
     }
   }
   ```
3. 保存后浏览器会自动打开 Ham 授权页面完成 OAuth 流程。
4. 如需使用 API Key，添加 `headers.Authorization` 字段即可。

### [CodeBuddy](https://copilot.tencent.com/)

1. 打开 CodeBuddy 插件面板，点击右上角 **设置 → MCP 市场 → 自定义 MCP**
2. 选择 **添加 MCP 服务**，填写：
   ```json
   {
     "mcpServers": {
       "ham": {
         "type": "streamable-http",
         "url": "https://mcp.ham.nowcent.cn/mcp"
       }
     }
   }
   ```
3. 保存后会自动唤起浏览器完成 OAuth 授权；如需手动鉴权，可在配置中追加 `headers.Authorization`：
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## 命令行工具

### [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

在终端中运行以下命令，添加 Ham MCP 服务（自动走 OAuth 动态注册）：

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp
```

首次调用时会自动打开浏览器完成授权。如需使用 API Key：

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

### [Codex](https://github.com/openai/codex)

通过 `~/.codex/config.toml` 配置 MCP 服务。

#### 方式一：OAuth 动态注册（推荐）

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"
```

首次运行 `codex` 时会自动打开浏览器完成授权。

#### 方式二：API Key

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"

[mcp_servers.ham.headers]
Authorization = "Bearer <YOUR_API_KEY>"
```

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

通过 `~/.gemini/settings.json`（用户级）或项目根目录的 `.gemini/settings.json`（项目级）配置 MCP 服务。

#### 方式一：OAuth 动态注册（推荐）

```json
{
  "mcpServers": {
    "ham": {
      "httpUrl": "https://mcp.ham.nowcent.cn/mcp"
    }
  }
}
```

首次调用工具时会自动打开浏览器完成授权。

#### 方式二：API Key

```json
{
  "mcpServers": {
    "ham": {
      "httpUrl": "https://mcp.ham.nowcent.cn/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_API_KEY>"
      }
    }
  }
}
```

### [OpenCode](https://opencode.ai/)

通过项目根目录或 `~/.config/opencode/opencode.json` 配置 MCP 服务。

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "ham": {
      "type": "remote",
      "url": "https://mcp.ham.nowcent.cn/mcp",
      "enabled": true
    }
  }
}
```

首次运行 `opencode` 时会自动打开浏览器完成 OAuth 授权。如需使用 API Key：

```json
{
  "mcp": {
    "ham": {
      "type": "remote",
      "url": "https://mcp.ham.nowcent.cn/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <YOUR_API_KEY>"
      }
    }
  }
}
```

### [OpenClaw](https://openclaw.ai/)

#### 方式一：对话添加（推荐）

直接在 OpenClaw 对话中输入：

```
帮我添加一个 MCP 服务，名称是 ham，地址是 https://mcp.ham.nowcent.cn/mcp，使用 streamable HTTP 传输和 OAuth 动态注册。
```

OpenClaw 会自动写入配置并唤起浏览器完成 OAuth 授权。

#### 方式二：CLI 命令

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp
```

如需使用 API Key：

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

## 其他 MCP 客户端

对于其他支持 MCP 的客户端，通用配置步骤为：

1. 选择 **Streamable HTTP** 传输方式
2. 设置服务地址为 `https://mcp.ham.nowcent.cn/mcp`
3. 优先使用客户端自带的 OAuth 流程；若不支持，则在请求头中添加 `Authorization: Bearer <YOUR_API_KEY>`

具体配置方式请参考你所使用的客户端文档。
