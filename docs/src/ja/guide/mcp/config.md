---
description: "Ham MCPサービス設定ガイド — Claude、ChatGPT、Cherry Studio、Cursor、Antigravity、Claude Code、Codexなどのクライアントで Ham MCP を設定。"
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
| 認証方式 | OAuth動的登録（推奨） / API Key |

::: tip
OAuth動的登録に対応したクライアントでは、サービスURLを入力するだけで残りの手順が自動で完了します。詳細は [MCP紹介 - OAuth動的登録](/ja/guide/mcp/#oauth動的登録推奨) を参照してください。
:::

## デスクトップアプリ

### [Claude](https://claude.ai/)

#### 方法1：OAuth動的登録（推奨）

1. Claude を開き、**Settings → Connectors** に進む
2. **Add custom connector** をクリック
3. 入力：
   - **Name**: `Ham`
   - **Remote MCP server URL**: `https://mcp.ham.nowcent.cn/mcp`
4. **Connect** をクリックすると、ブラウザで Ham 認可ページが開きます。ログイン後に同意するだけで利用開始できます。

#### 方法2：API Key（デスクトップ版のみ）

デスクトップ版では設定ファイルを編集してAPI Keyを利用できます：

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

`<YOUR_API_KEY>` を [Hamコンソール](https://ham.nowcent.cn/console/tokens) で生成したAPI Keyに置き換え、保存後に Claude を再起動してください。

### [ChatGPT](https://chatgpt.com/)

1. ChatGPT を開き、**Settings → Connectors → Advanced** に進む
2. **Developer mode**（開発者モード）を有効にする
3. Connectors ページに戻り、**Create** をクリック
4. 入力：
   - **Name**: `Ham`
   - **MCP Server URL**: `https://mcp.ham.nowcent.cn/mcp`
   - **Authentication**: `OAuth`
5. **Create** をクリックすると Ham 認可ページに遷移し、許可するとチャット内で利用できます。

::: tip
ChatGPT の Connectors 機能は現在、ChatGPT Plus / Pro / Business / Enterprise ユーザーのみ利用可能です。
:::

### [Cherry Studio](https://cherry-ai.com/)

1. Cherry Studio を開き、**設定 → MCPサーバー → サーバーを追加** に進む
2. 入力：
   - **名前**: `Ham`
   - **タイプ**: `Streamable HTTP`
   - **URL**: `https://mcp.ham.nowcent.cn/mcp`
3. 保存して有効化します。最初のツール呼び出しでブラウザが起動し、OAuth フローが完了します。
4. API Key を使う場合は **Headers** に追加：
   ```
   Authorization=Bearer <YOUR_API_KEY>
   ```

### [WorkBuddy](https://www.codebuddy.cn/work/)

1. WorkBuddy を開き、**設定 → MCP マーケットプレイス → カスタム MCP** に進む
2. **MCP サーバーを追加** を選択し、次を入力：
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
3. 保存するとブラウザが起動して OAuth フローが完了します。API Key を使う場合は `headers.Authorization` を追加：
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## IDE / エディタ

### [Cursor](https://cursor.com/)

#### 方法1：OAuth動的登録（推奨）

1. Cursor設定を開く（`Cmd + ,`）
2. **MCP & Integrations** に進み、**New MCP Server** をクリック
3. 設定を入力：
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
4. 保存すると Cursor がブラウザを起動して OAuth フローを完了させます。

#### 方法2：API Key

設定に `headers` フィールドを追加します：

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

1. Antigravity を開き、**Settings → MCP Servers** に進む
2. **Add custom MCP server** をクリックして入力：
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
3. 保存するとブラウザで Ham 認可ページが開き、OAuth フローが完了します。
4. API Key を使う場合は `headers.Authorization` を追加するだけです。

### [CodeBuddy](https://copilot.tencent.com/)

1. CodeBuddy パネルを開き、**設定 → MCP マーケットプレイス → カスタム MCP** に進む
2. **MCP サーバーを追加** を選択し、次を入力：
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
3. 保存するとブラウザが起動して OAuth フローが完了します。API Key を使う場合は `headers.Authorization` を追加してください：
   ```json
   "headers": {
     "Authorization": "Bearer <YOUR_API_KEY>"
   }
   ```

## コマンドラインツール

### [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

ターミナルで次のコマンドを実行して Ham MCP サービスを追加します（OAuth動的登録が自動で適用されます）：

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp
```

初回利用時にブラウザで認可フローが開きます。API Keyを使う場合：

```bash
claude mcp add --transport http ham https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

### [Codex](https://github.com/openai/codex)

`~/.codex/config.toml` で MCP サービスを設定します。

#### 方法1：OAuth動的登録（推奨）

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"
```

`codex` を初めて起動するとブラウザで認可フローが開きます。

#### 方法2：API Key

```toml
[mcp_servers.ham]
url = "https://mcp.ham.nowcent.cn/mcp"

[mcp_servers.ham.headers]
Authorization = "Bearer <YOUR_API_KEY>"
```

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

`~/.gemini/settings.json`（ユーザーレベル）またはプロジェクトルートの `.gemini/settings.json`（プロジェクトレベル）で MCP サービスを設定します。

#### 方法1：OAuth動的登録（推奨）

```json
{
  "mcpServers": {
    "ham": {
      "httpUrl": "https://mcp.ham.nowcent.cn/mcp"
    }
  }
}
```

最初のツール呼び出し時にブラウザで認可フローが開きます。

#### 方法2：API Key

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

プロジェクトルートまたは `~/.config/opencode/opencode.json` で MCP サービスを設定します。

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

`opencode` を初めて起動するとブラウザで認可フローが開きます。API Key を使う場合：

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

#### 方法1：対話で追加（推奨）

OpenClaw のチャットで次のように伝えるだけです：

```
streamable HTTP トランスポートと OAuth 動的登録を使って、URL https://mcp.ham.nowcent.cn/mcp の MCP サーバーを「ham」という名前で追加してください。
```

OpenClaw が自動的に設定を書き込み、ブラウザで OAuth フローを開きます。

#### 方法2：CLI コマンド

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp
```

API Key を使う場合：

```bash
openclaw mcp add ham --transport http --url https://mcp.ham.nowcent.cn/mcp \
  --header "Authorization: Bearer <YOUR_API_KEY>"
```

## その他のMCPクライアント

その他のMCP対応クライアントの一般的な設定手順：

1. **Streamable HTTP** トランスポートを選択
2. サービスURLを `https://mcp.ham.nowcent.cn/mcp` に設定
3. クライアント標準のOAuthフローを優先利用。非対応の場合はリクエストヘッダーに `Authorization: Bearer <YOUR_API_KEY>` を追加

具体的な設定方法は、お使いのクライアントのドキュメントを参照してください。
