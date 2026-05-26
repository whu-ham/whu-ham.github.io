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

Ham MCP service supports two authentication methods:

- **OAuth Dynamic Registration (recommended)**: The client automatically completes registration and authorization on first connection — no manual API Key creation required. Suitable for modern MCP-OAuth-capable clients (Claude Desktop, Cursor, ChatGPT, Codex, etc.).
- **API Key**: Manually generate an API Key in the Ham console and authenticate via the `Authorization: Bearer <API_KEY>` request header — suitable for clients that do not support OAuth dynamic registration, or when a long-lived credential is needed.

### OAuth Dynamic Registration (recommended)

Ham MCP service follows the [MCP Authorization specification](https://modelcontextprotocol.io/specification/draft/basic/authorization), implementing [OAuth 2.0 Dynamic Client Registration (RFC 7591)](https://datatracker.ietf.org/doc/html/rfc7591) and [Protected Resource Metadata (RFC 9728)](https://datatracker.ietf.org/doc/html/rfc9728).

The integration flow is fully handled by the client:

1. The client requests the service URL and receives a `401 Unauthorized` response.
2. The client discovers the authorization server via `/.well-known/oauth-protected-resource`.
3. The client registers itself dynamically and obtains a `client_id`.
4. The browser opens the Ham authorization page; after sign-in and consent, the user is redirected back.
5. The client receives an access token and automatically attaches it to subsequent requests — no manual configuration needed.

::: tip
With dynamic registration, you only need to fill in the service URL `https://mcp.ham.nowcent.cn/mcp` in your client. Everything else is handled automatically.
:::

### API Key

If your client does not support OAuth dynamic registration, or you prefer a long-lived static credential, generate an API Key in the Ham console and configure it manually.

#### Getting an API Key

1. Visit [Ham Console - API Keys](https://ham.nowcent.cn/console/tokens)
2. Click "Create API Key"
3. Add a description for the API Key (e.g., "Claude Desktop") for easy management
4. Copy the generated API Key (**shown only once, keep it safe**)

::: warning
Do not share your API Key with others. An API Key is equivalent to your account credentials — leakage may result in unauthorized access to your personal information.
:::
