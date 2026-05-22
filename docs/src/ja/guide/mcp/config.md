---
description: "Ham MCPサービス設定ガイド — Claude Desktop、CursorなどのクライアントでHam MCPを設定。"
prev:
  text: 'MCP紹介'
  link: '/ja/guide/mcp/'
---

# 設定ガイド

このガイドでは、一般的なMCPクライアントでHam MCPサービスを設定する方法を説明します。

## 基本設定

| パラメータ | 値 |
| --- | --- |
| トランスポート | Streamable HTTP |
| サービスURL | `https://mcp.ham.nowcent.cn/mcp` |
| 認証方式 | Bearer Token |

## Claude Desktop

Claude Desktopの設定ファイルを編集します：

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

次の設定を追加します：

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

`<YOUR_TOKEN>` を [Hamコンソール](https://ham.nowcent.cn/console/tokens)で生成したTokenに置き換えてください。

保存後、Claude Desktopを再起動すると変更が反映されます。

## Cursor

CursorでMCPサービスを設定するには：

1. Cursor設定を開く（`Cmd + ,`）
2. **MCP** セクションに移動
3. **Add new MCP server** をクリック
4. 設定を入力：
   - **Name**: `Ham`
   - **Type**: `streamable-http`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
5. Headersに認証情報を追加：
   - **Key**: `Authorization`
   - **Value**: `Bearer <YOUR_TOKEN>`

`<YOUR_TOKEN>` を実際のTokenに置き換えてください。

## その他のMCPクライアント

その他のMCP対応クライアントの一般的な設定手順：

1. **Streamable HTTP** トランスポートを選択
2. サービスURLを `https://mcp.ham.nowcent.cn/mcp` に設定
3. リクエストヘッダーに `Authorization: Bearer <YOUR_TOKEN>` を追加

具体的な設定方法は、お使いのクライアントのドキュメントを参照してください。

## トラブルシューティング

### 接続に失敗する場合

- サービスURLが正しいことを確認：`https://mcp.ham.nowcent.cn/mcp`
- ネットワーク接続を確認
- クライアントがStreamable HTTPトランスポートに対応していることを確認

### 認証に失敗する場合

- Tokenが正しいことを確認（`Bearer` プレフィックスを含む）
- Tokenの有効期限を [Hamコンソール](https://ham.nowcent.cn/console/tokens) で確認
- Tokenが漏洩した場合は、コンソールですぐに削除して新しいTokenを生成

### Tokenのセキュリティ

- Tokenをコードリポジトリにコミットしない
- 公開場所でTokenを共有しない
- 定期的にTokenをローテーションする
- 管理しやすいよう、クライアントごとに個別のTokenを作成する
