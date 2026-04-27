---
prev:
  text: 'SSO OAuth2 認証'
  link: '/ja/development/ham-web/sso-authorize'
next:
  text: 'CAS 認証'
  link: '/ja/development/ham-rn/cas'
---

# Ham React Nativeコンポーネント

[Ham React Nativeコンポーネント](https://github.com/whu-ham/ham-rn) は Ham アプリの React Native コンポーネントリポジトリで、OTA（Over-The-Air）ホットアップデートを通じて iOS / Android ネイティブアプリに統合されています。CAS 統一認証、教務システム関連機能（時間割照会、成績照会）、GPA 計算などの UI レンダリングとビジネスロジック処理を担当しています。

## 技術スタック

- React Native 0.83（New Architecture）
- TypeScript
- Jotai（状態管理）
- i18next（国際化 — 中国語 / 英語 / 日本語）
- ESLint + Prettier（コード品質）
- pnpm（パッケージマネージャー）
- [hot-updater](https://github.com/gronxb/hot-updater)（OTA ホットアップデート）

## はじめに

### 前提条件

- Node.js >= 18
- pnpm
- Xcode（iOS 開発用）
- Android Studio（Android 開発用）
- CocoaPods

### インストールと実行

```bash
# 依存関係のインストール
pnpm install

# iOS 追加セットアップ
cd ios && pod install && cd ..

# Metro bundler の起動
pnpm start

# iOS で実行
pnpm ios

# Android で実行
pnpm android
```

## プロジェクト構成

```
src/
├── business/          # ビジネスロジック層
│   ├── cas/           # CAS 認証
│   └── education/     # 教務システム（時間割、成績、GPA 計算）
├── components/        # React Native UI コンポーネント
│   ├── cas/           # CAS ログインビュー
│   ├── common/        # 共通コンポーネント
│   ├── education/     # 教務関連ビュー
│   └── scorecalc/     # GPA 計算ビュー
├── i18n/              # 国際化リソース
├── modules/           # ネイティブモジュール宣言（Turbo Modules）
├── resources/         # 静的アセット（画像、HTML）
└── utils/             # ユーティリティ（カラー、リクエスト、UI）
```

## モジュール概要

Ham React Nativeコンポーネントには以下のコアモジュールが含まれています。詳細はリンク先をご覧ください：

| モジュール | ユーザー操作入口 | 説明 |
| --- | --- | --- |
| [CAS 認証](./cas) | マイ → 情報ポータル設定を管理 → ログイン | WebView による大学統一認証 |
| [教務モジュール](./education) | マイ → 時間割 → 時間割を取得 / マイ → 成績 → 成績の取得 | 教務システムから時間割・成績データを取得 |
| [GPA 計算](./score-calc) | マイ → 成績 → 設定 → 他の計算方式（JavaScript）を使用 → 計算方法を選択 | JavaScript ベースのカスタム GPA 計算スクリプト |

### 共通コンポーネント

`RNCommon` はアプリ起動時に自動的に読み込まれる非表示のバックグラウンドコンポーネントです。以下を担当します：

- [hot-updater](https://github.com/gronxb/hot-updater) OTA ホットアップデートリスナーの初期化
- ネイティブ側のロケール変更イベントを監視し、i18next の言語設定を同期

### ネイティブモジュール宣言

Ham React Nativeコンポーネントは React Native Turbo Modules を使用してネイティブ側と通信します。各モジュールの用途は以下の通りです：

| モジュール | 説明 |
| --- | --- |
| `NativeCasModule` | CAS Cookie の取得（`requestCasCookie()`） |
| `NativeCasMobileLoginModule` | CAS ログイン成功コールバック、学籍番号・パスワード・ Cookie をネイティブ側に返却（`onRequestSuccess(studentId, password, cookie)`） |
| `NativeCommonModule` | 共通機能：URL を開く（`openUrl`）、トースト表示（`showToast`）、ロケール取得（`getLocale`）、ロケール変更イベントの監視（`onLocaleChanged`） |
| `NativeEducationModule` | 教務データコールバック：時間割リスト（`onGetCourseList`）、成績リスト（`onGetScoreList`）、学期設定の取得（`getCourseConfig`） |
| `NativeScoreCalcModule` | GPA 計算スクリプト管理：現在の計算方式取得（`getCurrentCalc`）、計算方式選択（`selectCalc`）、詳細表示（`openDetail`）、スクリプトテスト（`testItem`）、計算方式変更イベントの監視（`onSetScoreJsCalcItem`） |
| `NativeLog` | ログ出力：情報ログ（`i(tag, message)`）、エラーログ（`e(tag, message)`） |

Ham React Nativeコンポーネントには TypeScript 側のインターフェース宣言（Turbo Module Spec）のみが含まれています。ネイティブ実装は iOS / Android ネイティブプロジェクトにあります。

### 国際化

i18next による多言語サポート。翻訳ファイルは `i18n/` ディレクトリにあり、中国語・英語・日本語をサポートしています。

### ユーティリティ

- `utils/color/` — カラー処理ユーティリティ
- `utils/request/` — ネットワークリクエストラッパー
- `utils/ui/` — UI ユーティリティコンポーネント（Card など）

## CI/CD

GitHub Actions が PR と `main` ブランチへのプッシュ時に自動実行されます：

- **Lint** — ESLint チェック
- **Compile Check** — TypeScript 型チェック
- **Android Build** — Debug APK ビルド検証
- **iOS Build** — Debug ビルド検証

## ライセンス

Ham React Nativeコンポーネントは [MIT ライセンス](https://opensource.org/licenses/MIT) の下で公開されています。
