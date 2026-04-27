---
prev:
  text: '接続ガイド'
  link: '/ja/development/open-platform/oauth2-guide'
next:
  text: 'SSO OAuth2 認証'
  link: '/ja/development/ham-web/sso-authorize'
---

# Ham Web

[Ham Web](https://github.com/whu-ham/ham-web) は Ham の Web フロントエンドプロジェクトで、主に SSO シングルサインオン認証フローを提供し、Ham Connect プラットフォームの Web エントリーポイントとして機能します。

## 使用場所

Ham Web はデプロイ後、Ham Connect プラットフォームの Web サービスエンドポイントとして機能します。主に以下のシナリオで使用されます：

- **SSO 認証ページ** — サードパーティアプリが Ham Connect プラットフォームを通じて OAuth2 認証を開始すると、ユーザーは Ham Web の認証ページにリダイレクトされ、ログインと同意確認を行います
- **QR コードログイン** — ユーザーは Web 上で QR コードをスキャンしてログインできます
- **Passkey ログイン** — WebAuthn / Passkey パスワードレスログインをサポート
- **モバイル H5 フォールバック** — Ham ネイティブアプリがインストールされていない場合、Web ベースのインストール案内と Passkey ログインオプションを提供

## 技術スタック

- **フレームワーク**: Next.js 16（App Router）+ React 19 + TypeScript
- **スタイリング**: Tailwind CSS v4 + HeroUI v3
- **状態管理**: Jotai + React Redux
- **国際化**: next-intl（中国語 / 英語 / 日本語）
- **デプロイ**: Cloudflare Pages（OpenNext 経由）
- **ツールチェーン**: ESLint v9 + Prettier + pnpm

## はじめに

### 前提条件

- Node.js >= 20
- pnpm

### インストールと実行

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動（Turbopack）
pnpm dev

# プロダクションビルド
pnpm build
pnpm start

# Cloudflare Pages ビルド
pnpm build:cf

# リント
pnpm lint
```

開発サーバーは `http://localhost:3000` で実行されます。

## プロジェクト構成

```
app/                # Next.js App Router エントリー
  api/              # API ルート
    auth/           # 認証関連 API（ログイン、ログアウト、リフレッシュ、Passkey、QR コード）
    sso/            # SSO 関連 API（同意確認、同意情報）
  sso-authorize/    # SSO 認証ページ（ログインビュー、QR ログイン、Passkey ログイン）
components/         # 共有 UI コンポーネント
  LanguageSwitcher  # 言語切り替え
  ThemeSwitcher     # テーマ切り替え
  SearchBar         # 検索バー
i18n/               # next-intl ランタイム設定
messages/           # 多言語翻訳ファイル（en.json / zh.json / ja.json）
services/           # API / サービス層
store/              # 状態管理（ロケール、テーマ）
public/             # 静的アセット
```

## 開発ガイド

### 新しい UI 文字列の追加

国際化には `next-intl` を使用します。新しい文字列を追加する際は、3 つの翻訳ファイルすべてを更新してください：

- `messages/zh.json`
- `messages/en.json`
- `messages/ja.json`

### API ルート

Ham Web の API ルートはバックエンドプロキシとして機能し、リクエストを Ham バックエンドサービスに転送します：

- `/api/auth/*` — 認証関連（ログイン、ログアウト、トークンリフレッシュ、Passkey、QR コード）
- `/api/sso/*` — SSO 認証関連（同意情報照会、同意確認）

### テーマと言語

- ライト / ダーク / システム連動の 3 つのテーマモードをサポート
- 中国語 / 英語 / 日本語の 3 言語をサポートし、Cookie でユーザー設定を永続化

## CI/CD

プロジェクトは GitHub Actions で継続的インテグレーションを行い、Cloudflare Pages にデプロイされます。

## コントリビューションガイド

すべてのコントリビューターは以下のルールに従う必要があります：

1. コミット前に `pnpm lint` と `pnpm build` を実行すること
2. コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/) に従うこと
3. コミットメッセージとコードコメントは英語で記述すること

## ライセンス

Ham Web は [MIT ライセンス](https://opensource.org/licenses/MIT) の下で公開されています。
