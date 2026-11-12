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

## 功能详情与截图幻灯

六个功能卡片的“探索更多”链接跳转到各自的详情模块。桌面端左侧为随幻灯同步变化的标题、介绍、要点与翻页控件，右侧为放大的 iPhone 展示；日夜切换位于手机上方，移动端上下排列。

编辑 `.vitepress/theme/modules.ts` 可调整模块介绍及 `slides`。每张幻灯的 `day`、`night` 分别填写真实日间、夜间截图路径，例如 `/screenshots/bazi-overview-day.png`，对应图片放入 `public/screenshots/`。幻灯数量随数组长度变化；无需修改组件。空路径显示待补充状态，图片加载失败时支持重试。

展示支持上一张、下一张、分页圆点、方向键、触屏左右滑动及手动播放／暂停。自动播放仅在模块可见时运行，悬停、键盘聚焦和后台标签页会暂停；减少动态效果偏好下禁用自动播放。
