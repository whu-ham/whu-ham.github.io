---
description: "Ham MCPサービス紹介 — MCPプロトコルでHamの機能をAIアシスタントに接続。"
next:
  text: '設定ガイド'
  link: '/ja/guide/mcp/config'
---

# MCPサービス

HamはMCP（Model Context Protocol）サービスを提供しており、MCP対応のAIアシスタント（Claude Desktop、Cursorなど）からHamのキャンパスデータと機能にアクセスできます。

## MCPとは？

MCP（[Model Context Protocol](https://modelcontextprotocol.io/)）は、AIアプリケーションが外部データソースやツールに安全に接続できるようにするオープンプロトコルです。HamのMCPサービスを使うと、AIアシスタントで次のことができます：

- コース情報と成績の照会
- 個人情報の閲覧

## サービスURL

Ham MCPサービスは **Streamable HTTP** トランスポートを使用します：

```
https://mcp.ham.nowcent.cn/mcp
```

## 認証

Ham MCPサービスは2種類の認証方式をサポートします：

- **OAuth動的登録（推奨）**：クライアントが初回接続時に登録と認可を自動で完了します。API Keyを手動で発行する必要はなく、MCPのOAuthに対応した最新クライアント（Claude Desktop、Cursor、ChatGPT、Codexなど）に最適です。
- **API Key**：HamコンソールでAPI Keyを手動生成し、`Authorization: Bearer <API_KEY>` リクエストヘッダーで認証する方式。OAuth動的登録に対応していないクライアントや、長期固定の認証情報が必要な場合に利用します。

### OAuth動的登録（推奨）

Ham MCPサービスは [MCP Authorization 仕様](https://modelcontextprotocol.io/specification/draft/basic/authorization) に準拠し、[OAuth 2.0 動的クライアント登録（RFC 7591）](https://datatracker.ietf.org/doc/html/rfc7591) と [Protected Resource Metadata（RFC 9728）](https://datatracker.ietf.org/doc/html/rfc9728) を実装しています。

接続フローはクライアントが自動で処理します：

1. クライアントがサービスURLへアクセスし、`401 Unauthorized` を受け取る
2. `/.well-known/oauth-protected-resource` から認可サーバーをディスカバリ
3. 動的登録エンドポイントへ自動登録し、`client_id` を取得
4. ブラウザが Ham 認可ページに遷移、ログインと同意の後にクライアントへ戻る
5. クライアントがアクセストークンを取得し、以降のリクエストへ自動付与（手動設定不要）

::: tip
動的登録を利用する場合、クライアントにサービスURL `https://mcp.ham.nowcent.cn/mcp` を入力するだけで、それ以外の手順は自動で完了します。
:::

### API Key

クライアントがOAuth動的登録に非対応の場合や、長期固定の認証情報を使用したい場合は、HamコンソールでAPI Keyを生成して手動で設定します。

#### API Keyの取得

1. [Hamコンソール - API Keys](https://ham.nowcent.cn/console/tokens)にアクセス
2. 「API Keyを作成」をクリック
3. API Keyに説明を追加（例：「Claude Desktop」）して管理しやすくする
4. 生成されたAPI Keyをコピー（**一度だけ表示されるので安全に保管してください**）

::: warning
API Keyを他人と共有しないでください。API Keyはアカウントの認証情報と同等であり、漏洩すると個人情報への不正アクセスされる可能性があります。
:::
