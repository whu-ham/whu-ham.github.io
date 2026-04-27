---
next:
  text: 'ham-web 概要'
  link: '/ja/development/ham-web/'
---

# 開発

Ham オープンソースプロジェクトの開発ドキュメントへようこそ！現在、以下のプロジェクトがオープンソースとして公開されています：

| プロジェクト | 説明 | リポジトリ |
| --- | --- | --- |
| [ham-rn](/ja/development/ham-rn/) | React Native コンポーネントリポジトリ、OTA ホットアップデートでネイティブアプリに統合 | [GitHub](https://github.com/whu-ham/ham-rn) |
| [ham-web](/ja/development/ham-web/) | Web フロントエンド（SSO 認証など） | [GitHub](https://github.com/whu-ham/ham-web) |

## 概要

**ham-rn** は Ham アプリの React Native コンポーネントリポジトリで、OTA ホットアップデートを通じてネイティブアプリに統合されています。教務システムの時間割照会、成績照会、GPA 計算、CAS 認証などのコア機能の UI とビジネスロジックを担当しています。

**ham-web** は Ham の Web フロントエンドプロジェクトで、Next.js で構築されています。主に SSO シングルサインオン認証フロー（QR コードログイン、Passkey ログインを含む）を提供し、Ham Connect プラットフォームの Web エントリーポイントとして機能します。

## コントリビューション

すべてのプロジェクトは [MIT ライセンス](https://opensource.org/licenses/MIT) の下で公開されています。コミュニティからの貢献を歓迎します。PR を提出する前に、各プロジェクトのコントリビューションガイドをお読みください。
