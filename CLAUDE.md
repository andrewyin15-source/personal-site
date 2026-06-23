# CLAUDE.md — v-jay.com 电商站

## 一句话启动

> 改 v-jay.com 电商站，路径 `C:\Users\12497\Documents\个人\personal-site`，先读 CLAUDE.md。

## 项目概况

- **网站**: https://www.v-jay.com （毛绒玩具娃娃服装电商）
- **本地路径**: `C:\Users\12497\Documents\个人\personal-site`
- **GitHub**: `https://github.com/andrewyin15-source/personal-site`（用户 `andrewyin15-source`）
- **部署**: Vercel，push 到 main 分支后 30 秒自动上线
- **域名 DNS**: 字节火山引擎云解析（A → `216.198.79.1`，CNAME → `ef1cd518b7728280.vercel-dns-017.com`）

## 文件结构

```
personal-site/
├── index.html      ← 唯一页面（单文件，含 CSS + JS）
├── vercel.json     ← 部署配置（不要动 headers 段）
├── CLAUDE.md       ← 本文档
├── PROJECT_LOG.md  ← 历史记录
└── HOWTO_UPDATE.md ← 手动更新指南
```

## 设计系统

**Atelier Zero 风格** — 编辑纸质感电商

| Token | 值 | 用途 |
|-------|-----|------|
| `--paper` | `#efe7d2` | 背景纸色 |
| `--ink` | `#15140f` | 主文字色 |
| `--coral` | `#ed6f5c` | 强调色（按钮、标签、hover） |
| `--mustard` | `#e9b94a` | 星级/点缀 |
| `--olive` | `#6e7448` | 辅助色 |
| `--serif` | Playfair Display, Noto Serif SC | 斜体强调 |
| `--sans` | Inter Tight, Noto Sans SC | 标题/导航 |
| `--body` | Inter, Noto Sans SC | 正文 |

## 页面结构（9 个 section）

```
I.   Hero — 品牌封面 + 浮动吉祥物 + 3 个统计圆环
—    Wire — 全球城市跑马灯 + 收藏家滚动
II.  Categories — 3 大品类卡片（连衣裙/套装/配饰）
III. Products — 12 款商品网格
IV.  Why v-jay — 深色背景 + 旋转倾斜卡片
V.   How It Works — 4 步选购流程
VI.  Materials — 面料工艺 + 尺码保养
VII. Collectors — 收藏家引言
VIII.Newsletter — 订阅 CTA
—    Footer — 品牌信息 + 巨型页脚词
```

## 修改流程（必做 3 步）

```bash
cd C:\Users\12497\Documents\个人\personal-site

# 1. 改 index.html（单文件，CSS 在 <style>，JS 在底部 <script>）

# 2. 提交
git add index.html
git commit -m "update: <描述>"

# 3. 推送（_netrc 已配好，直接 push 即可）
git push
```

30 秒后访问 `https://www.v-jay.com` 验证。

## 动效系统

JS 滚动引擎在页面底部的 `<script>` 标签中（双向响应，上滑下滑都有效果）：

- `scroll-progress` — 顶部 2px 珊瑚色进度条
- `headroom nav` — 导航栏下滑隐藏/上滑显示
- `hero parallax` — Hero 区域图片/文字双向视差 + 鼠标 3D
- `continuous reveal` — 所有 `[data-reveal]` 元素持续跟踪视口位置
- `card float` — 商品卡片进出视口时微微浮动
- `side rail` — 右侧饰条随滚动渐隐/渐显
- `hero sparkles` — Hero 卡片周围星星粒子（CSS `sparkleFloat`）
- `mascot float` — 吉祥物 6 秒循环浮动（CSS `float`）
- `wire marquee` — 跑马灯（CSS `marquee-x`，hover 暂停）

## 常见修改

### 改文字 → 直接改 index.html 中的中文文本
### 改配色 → 改 `:root` 中的 CSS 变量
### 改商品 → 在 Products section 的 `.product-grid` 中增删 `.product-card`
### 加 section → 参考现有 section 结构，更新罗马数字编号和 "00X / 009" 计数
### 调动效 → 改底部 `<script>` 中的参数

## 注意事项

- **不要删 `vercel.json`**，尤其 headers 段（安全头）
- **不要改仓库为 Private**（Vercel 免费版要求 Public）
- **不要挪项目目录位置**
- `_netrc` 文件在 `C:\Users\12497\_netrc`，已持久化，push 无需再输密码
- 如果 push 失败：检查 GitHub token 是否过期 → https://github.com/settings/tokens → 重新生成 → 更新 `_netrc`

## 关联资源

- GitHub Token 管理: https://github.com/settings/tokens
- Vercel 部署面板: https://vercel.com/dashboard
- 火山引擎 DNS: 云解析 DNS → 公网域名管理 → v-jay.com
- 设计参考: 编辑纸质感（Atelier Zero）风格
