# 混沌与秩序 · ChaosOrder

基于 VitePress 的中文 App 落地页。包含产品介绍、功能、研习路径、常见问题、Android / iOS 下载区和移动端导航。

## 本地运行

安装 Node.js 22.12+ 或 24+，然后运行：

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm preview
```

构建产物位于 `.vitepress/dist`，可部署到静态托管服务。

## 接入正式下载

编辑 `.vitepress/theme/downloads.ts` 的 `android` 和 `ios`，填入正式 HTTPS 地址。空值显示“即将上线”，不跳转。iOS 可配置 App Store 或 TestFlight，Android 可配置商店地址或 APK。

## 发布前补充

- 确认实际功能介绍与发布版本一致。
- 填写正式下载链接。
- 提供正式隐私政策与使用条款，替换当前页面说明。
- 确定正式域名后将 Open Graph 图片地址改为完整公开 URL。

主页面位于 `.vitepress/theme/Landing.vue`，样式位于 `.vitepress/theme/style.css`。星盘为设计示意，不代表实际排盘结果。

## GitHub Pages

已配置 `.github/workflows/deploy.yml`。在仓库 Settings → Pages → Build and deployment 中将 Source 设为 GitHub Actions。推送到 main 后自动构建与发布。

预期访问地址：https://chaosorder.app/

部署构建使用 `SITE_BASE=/`，本地开发仍使用根路径。
