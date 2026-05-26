---
description: "Ham MCP service configuration guide — Configure Ham MCP in Claude, ChatGPT, Cherry Studio, Cursor, Antigravity, Claude Code, Codex, and more."
prev:
  text: 'MCP Introduction'
  link: '/en/guide/mcp/'
---

# Configuration Guide

This guide explains how to configure Ham MCP service in common MCP clients.

## General Configuration

| Parameter | Value |
| --- | --- |
| Transport | Streamable HTTP |
| Service URL | `https://mcp.ham.nowcent.cn/mcp` |
| Authentication | OAuth Dynamic Registration (recommended) / API Key |

::: tip
For clients that support OAuth dynamic registration, you only need to fill in the service URL and the rest is handled automatically. See [MCP Introduction - OAuth Dynamic Registration](/en/guide/mcp/#oauth-dynamic-registration-recommended).
:::

## Desktop Apps

### [Claude](https://claude.ai/)

#### Option 1: OAuth Dynamic Registration (recommended)

1. Open Claude and go to **Settings → Connectors**
2. Click **Add custom connector**
3. Fill in:
   - **Name**: `Ham`
   - **Remote MCP server URL**: `https://mcp.ham.nowcent.cn/mcp`
4. Click **Connect**. Your browser will open the Ham authorization page; sign in and approve to complete the setup.

#### Option 2: API Key (desktop app only)

The desktop app supports API Key via the configuration file:

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

Replace `<YOUR_API_KEY>` with the API Key generated from the [Ham Console](https://ham.nowcent.cn/console/tokens), then restart Claude.

### [ChatGPT](https://chatgpt.com/)

1. Open ChatGPT and go to **Settings → Connectors → Advanced**
2. Enable **Developer mode**
3. Return to the Connectors page and click **Create**
4. Fill in:
   - **Name**: `Ham`
   - **MCP Server URL**: `https://mcp.ham.nowcent.cn/mcp`
   - **Authentication**: `OAuth`
5. Click **Create** — you will be redirected to the Ham authorization page. After approval, the connector is ready to use in chats.

::: tip
ChatGPT Connectors are currently available only to ChatGPT Plus / Pro / Business / Enterprise users.
:::

### [Cherry Studio](https://cherry-ai.com/)

1. Open Cherry Studio and go to **Settings → MCP Servers → Add Server**
2. Fill in:
   - **Name**: `Ham`
   - **Type**: `Streamable HTTP`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
3. Save and enable the server. The first tool call opens your browser to complete the OAuth flow.
4. To use an API Key, add a header in **Headers**:
   ```
   Authorization=Bearer <YOUR_API_KEY>
   ```

### [WorkBuddy](https://www.codebuddy.cn/work/)

1. Open WorkBuddy and go to **Settings → MCP Marketplace → Custom MCP**
2. Choose **Add MCP Server** and fill in:
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
3. Save — your browser will open to complete the OAuth flow. To use an API Key instead, add a `headers.Authorization` field:
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## IDEs & Editors

### [Cursor](https://cursor.com/)

#### Option 1: OAuth Dynamic Registration (recommended)

1. Open Cursor Settings (`Cmd + ,`) and go to **MCP & Integrations**
2. Click **New MCP Server** and fill in the dialog:
   - **Name**: `ham`
   - **Type**: `SSE`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
3. Save — Cursor will open your browser to complete the OAuth flow.

#### Option 2: API Key

In the **New MCP Server** dialog, fill in Name / Type / URL as above, then add a row under **Headers**:

| Key | Value |
| --- | --- |
| `Authorization` | `Bearer <YOUR_API_KEY>` |

Save to apply.

### [Antigravity](https://antigravity.google/)

1. Open Antigravity and go to **Settings → MCP Servers**
2. Click **Add custom MCP server** and fill in:
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
3. Save — your browser will open the Ham authorization page to complete the OAuth flow.
4. To use an API Key, simply add a `headers.Authorization` field.

### [CodeBuddy](https://copilot.tencent.com/)

1. Open the CodeBuddy panel and click **Settings → MCP Marketplace → Custom MCP**
2. Choose **Add MCP Server** and fill in:
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
3. Save — your browser will open to complete the OAuth flow. To use an API Key instead, add a `headers.Authorization` field:
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## CLI Tools

### [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

Run the following command in your terminal to add the Ham MCP service (uses OAuth dynamic registration automatically):

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp
```

The browser will open for authorization on first use. To use an API Key instead:

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

### [Codex](https://github.com/openai/codex)

Configure MCP servers via `~/.codex/config.toml`.

#### Option 1: OAuth Dynamic Registration (recommended)

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"
```

The browser will open for authorization the first time you run `codex`.

#### Option 2: API Key

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"

[mcp_servers.ham.headers]
Authorization = "Bearer <YOUR_API_KEY>"
```

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

Configure MCP servers via `~/.gemini/settings.json` (user-level) or `.gemini/settings.json` in the project root (project-level).

#### Option 1: OAuth Dynamic Registration (recommended)

```json
{
  "mcpServers": {
    "ham": {
      "httpUrl": "https://mcp.ham.nowcent.cn/mcp"
    }
  }
}
```

The browser will open for authorization on first tool invocation.

#### Option 2: API Key

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

Configure MCP servers via the project root or `~/.config/opencode/opencode.json`.

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

The browser will open for authorization the first time you run `opencode`. To use an API Key instead:

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

#### Option 1: Add via Chat (recommended)

In the OpenClaw chat, simply say:

```
Please add an MCP server named "ham" at https://mcp.ham.nowcent.cn/mcp using streamable HTTP transport with OAuth dynamic registration.
```

OpenClaw will write the configuration automatically and open the browser to complete the OAuth flow.

#### Option 2: CLI Command

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp
```

To use an API Key instead:

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

## Other MCP Clients

For other MCP-compatible clients, the general configuration steps are:

1. Select **Streamable HTTP** transport
2. Set the service URL to `https://mcp.ham.nowcent.cn/mcp`
3. Prefer the client's built-in OAuth flow; if unsupported, add `Authorization: Bearer <YOUR_API_KEY>` to request headers

Refer to your client's documentation for specific configuration instructions.
