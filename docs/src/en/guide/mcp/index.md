---
description: "Introduction to Ham MCP service — Connect Ham's capabilities to your AI assistant via MCP."
next:
  text: 'Configuration'
  link: '/en/guide/mcp/config'
---

# MCP Service

Ham provides an MCP (Model Context Protocol) service that allows you to connect Ham's campus data and capabilities to MCP-compatible AI assistants (such as Claude Desktop, Cursor, etc.).

## What is MCP?

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) is an open protocol that enables AI applications to securely connect to external data sources and tools. Through Ham's MCP service, your AI assistant can:

- Query course information and grades
- View personal information

## Service URL

Ham MCP service uses **Streamable HTTP** transport:

```
https://mcp.ham.nowcent.cn/mcp
```

## Authentication

Ham MCP service uses **Bearer Token** authentication. You need to generate a Token in the Ham console and use it in your MCP client configuration.

### Getting a Token

1. Visit [Ham Console - Token Management](https://ham.nowcent.cn/console/tokens)
2. Click "Create Token"
3. Add a description for the Token (e.g., "Claude Desktop") for easy management
4. Copy the generated Token (**shown only once, keep it safe**)

::: warning
Do not share your Token with others. A Token is equivalent to your account credentials — leakage may result in unauthorized access to your personal information.
:::

## Next Steps

Learn how to configure Ham MCP service in various MCP clients:

[Configuration Guide →](/en/guide/mcp/config)
