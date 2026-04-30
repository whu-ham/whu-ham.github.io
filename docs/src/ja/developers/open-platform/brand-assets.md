---
prev:
  text: 'ログインボタンソースコード'
  link: '/ja/developers/open-platform/login-button'
next:
  text: 'Ham Web 概要'
  link: '/ja/developers/ham-web/'
---

# ブランドリソース

このページでは、Ham ブランドの Icon リソースを提供します。アプリケーションで Ham ログイン入口やブランドロゴの表示に直接使用できます。

## Icon リソース

以下は Ham 公式 Icon の各サイズバージョンです：

| プレビュー | サイズ | ファイル |
|:---:|:---:|:---:|
| <img src="/images/icons/ham-icon-64.png" width="32" /> | 64 × 64 | [ham-icon-64.png](/images/icons/ham-icon-64.png) |
| <img src="/images/icons/ham-icon-128.png" width="48" /> | 128 × 128 | [ham-icon-128.png](/images/icons/ham-icon-128.png) |
| <img src="/images/icons/ham-icon-256.png" width="64" /> | 256 × 256 | [ham-icon-256.png](/images/icons/ham-icon-256.png) |
| <img src="/images/icons/android-chrome-192x192.png" width="64" /> | 192 × 192 | [android-chrome-192x192.png](/images/icons/android-chrome-192x192.png) |
| <img src="/images/icons/android-chrome-512x512.png" width="64" /> | 512 × 512 | [android-chrome-512x512.png](/images/icons/android-chrome-512x512.png) |

::: tip 使用ガイドライン
- ボタン内の Icon には **64×64** または **128×128** バージョンを推奨
- 表示ページのロゴには **256×256** 以上のサイズを推奨
- Icon の色や比率を引き伸ばしたり、切り取ったり、変更したりしないでください
:::

## ブランドカラー

| カラー | 値 | 用途 |
|:---:|:---:|:---:|
| <span style="display:inline-block;width:24px;height:24px;background:#4478a8;border-radius:4px;vertical-align:middle;"></span> | `#4478a8` | ブランドメインカラー / ボタンテキスト色 |
| <span style="display:inline-block;width:24px;height:24px;background:#3a6a96;border-radius:4px;vertical-align:middle;"></span> | `#3a6a96` | ボタンホバー状態 |
| <span style="display:inline-block;width:24px;height:24px;background:#a8c8e8;border-radius:4px;vertical-align:middle;"></span> | `#a8c8e8` | ダークテーマテキストカラー |

## 使用規範

**推奨：**

- Icon の元のアスペクト比を維持し、引き伸ばしや圧縮を避ける
- Icon の周囲に適切な余白を確保する
- 暗い背景で使用する場合は、十分なコントラストを確保する

**禁止：**

- Icon の色を変更すること
- Icon の上にテキストや他の要素を重ねること
- Ham の公式認証や推薦を暗示する目的で Icon を使用すること

## 関連リンク

- [ログインボタンソースコード](/ja/developers/open-platform/login-button) — マルチプラットフォーム「Ham でログイン」ボタンコンポーネントソースコード
- [接続ガイド](/ja/developers/open-platform/oauth2-guide) — OAuth2 完全接続ガイド
