<p align="center"><img src="./docs/src/public/icon-1024 2.png" width="18%" style="border-radius: 22%;" alt="Ham Logo"/></p>

<div align="center">
<h1>Ham</h1>
<p>武汉大学校园生活助手 — 课表查询 · 成绩计算 · 图书馆预约 · 运动场馆预定</p>

<a href="https://docs.ham.nowcent.cn"><img alt="文档" src="https://img.shields.io/badge/文档-docs.ham.nowcent.cn-blue"></a>
<a href="https://github.com/whu-ham/whu-ham.github.io/discussions"><img alt="讨论" src="https://img.shields.io/badge/讨论-GitHub_Discussions-green"></a>
<a href="https://txc.qq.com/products/606034"><img alt="反馈" src="https://img.shields.io/badge/反馈-兔小巢-2378ff"></a>
</div>

## 简介

本仓库是 **Ham 文档站** 的源码，基于 [VitePress](https://vitepress.dev/) 构建，支持中文、英文、日文三种语言。

文档站地址：**<https://docs.ham.nowcent.cn>**

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建静态站点
pnpm docs:build

# 预览构建产物
pnpm docs:preview
```

## 目录结构

```
docs/
├── .vitepress/          # VitePress 配置
│   └── config/          # 多语言配置（zh / en / ja）
└── src/                 # 文档源文件
    ├── development/     # 开发文档
    ├── download/        # 下载页
    ├── handbook/        # 使用手册
    ├── open-platform/   # 开放平台
    ├── en/              # 英文文档
    └── ja/              # 日文文档
```

## 相关项目

| 项目 | 说明 | 链接 |
|------|------|------|
| **Ham React Native组件** | React Native 组件仓库，以 OTA 热更新集成到原生应用 | [GitHub](https://github.com/whu-ham/ham-rn) |
| **Ham Web** | Web 前端，SSO 单点登录授权 | [GitHub](https://github.com/whu-ham/ham-web) |
| **成绩计算脚本** | 社区贡献的绩点计算脚本 | [GitHub](https://github.com/whu-ham/ham-score-calculator) |

## 参与贡献

欢迎提交 Issue 和 Pull Request 来帮助完善文档。

## 许可证

本项目采用 [MIT](./LICENSE) 许可证。
