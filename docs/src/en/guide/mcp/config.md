---
description: "Ham MCP service configuration guide — Configure Ham MCP in Claude Desktop, Cursor, and other clients."
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
| Authentication | Bearer Token |

## Claude Desktop

Edit the Claude Desktop configuration file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration:

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

Replace `<YOUR_TOKEN>` with the Token you generated in the [Ham Console](https://ham.nowcent.cn/console/tokens).

Restart Claude Desktop after saving for the changes to take effect.

## Cursor

To configure the MCP service in Cursor:

1. Open Cursor Settings (`Cmd + ,`)
2. Navigate to the **MCP** section
3. Click **Add new MCP server**
4. Fill in the configuration:
   - **Name**: `Ham`
   - **Type**: `streamable-http`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
5. Add authentication in Headers:
   - **Key**: `Authorization`
   - **Value**: `Bearer <YOUR_TOKEN>`

Replace `<YOUR_TOKEN>` with your actual Token.

## Other MCP Clients

For other MCP-compatible clients, the general configuration steps are:

1. Select **Streamable HTTP** transport
2. Set the service URL to `https://mcp.ham.nowcent.cn/mcp`
3. Add `Authorization: Bearer <YOUR_TOKEN>` to the request headers

Refer to your client's documentation for specific configuration instructions.

## Troubleshooting

### Connection Failed

- Verify the service URL is correct: `https://mcp.ham.nowcent.cn/mcp`
- Check your network connection
- Confirm your client supports Streamable HTTP transport

### Authentication Failed

- Verify your Token is correct, including the `Bearer` prefix
- Check if your Token has expired in the [Ham Console](https://ham.nowcent.cn/console/tokens)
- If your Token has been compromised, delete it immediately in the console and generate a new one

### Token Security

- Never commit Tokens to code repositories
- Never share Tokens in public channels
- Rotate Tokens regularly
- Create separate Tokens for different clients for easier management
