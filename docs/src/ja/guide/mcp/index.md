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

Ham MCPサービスは **Bearer Token** 認証を使用します。HamコンソールでTokenを生成し、MCPクライアントの設定で使用する必要があります。

### Tokenの取得

1. [Hamコンソール - Token管理](https://ham.nowcent.cn/console/tokens)にアクセス
2. 「Tokenを作成」をクリック
3. Tokenに説明を追加（例：「Claude Desktop」）して管理しやすくする
4. 生成されたTokenをコピー（**一度だけ表示されるので安全に保管してください**）

::: warning
Tokenを他人と共有しないでください。Tokenはアカウントの認証情報と同等であり、漏洩すると個人情報への不正アクセスされる可能性があります。
:::

## 次のステップ

各MCPクライアントでHam MCPサービスを設定する方法：

[設定ガイド →](/ja/guide/mcp/config)
