---
next:
  text: 'Ham Connect 概要'
  link: '/ja/development/open-platform/'
---

# 開発

Ham オープンソースプロジェクトの開発ドキュメントへようこそ！現在、以下のプロジェクトがオープンソースとして公開されています：

| プロジェクト | 説明 | リポジトリ |
| --- | --- | --- |
| [Ham Connect](/ja/development/open-platform/) | オープンプラットフォーム OAuth 2.0 認証サービス | — |
| [Ham Web](/ja/development/ham-web/) | Web フロントエンド（SSO 認証など） | [GitHub](https://github.com/whu-ham/ham-web) |
| [Ham React Nativeコンポーネント](/ja/development/ham-rn/) | React Native コンポーネントリポジトリ、OTA ホットアップデートでネイティブアプリに統合 | [GitHub](https://github.com/whu-ham/ham-rn) |

## 概要

**Ham Connect** は Ham オープンプラットフォームが提供する OAuth 2.0 認証サービスで、サードパーティアプリが Ham ユーザーの認証情報を安全に取得し、「Ham でログイン」機能を実現できます。

**Ham Web** は Ham の Web フロントエンドプロジェクトで、Next.js で構築されています。主に SSO シングルサインオン認証フロー（QR コードログイン、Passkey ログインを含む）を提供し、Ham Connect プラットフォームの Web エントリーポイントとして機能します。

**Ham React Nativeコンポーネント** は Ham アプリの React Native コンポーネントリポジトリで、OTA ホットアップデートを通じてネイティブアプリに統合されています。教務システムの時間割照会、成績照会、GPA 計算、CAS 認証などのコア機能の UI とビジネスロジックを担当しています。

## コントリビューション

すべてのプロジェクトは [MIT ライセンス](https://opensource.org/licenses/MIT) の下で公開されています。コミュニティからの貢献を歓迎します。PR を提出する前に、各プロジェクトのコントリビューションガイドをお読みください。
