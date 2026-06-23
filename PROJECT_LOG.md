# 个人网站 v-jay.com · 项目过程总结

> 起止时间：2026-06-23
> 目标：把域名 `v-jay.com` 指向一个能跑、有动效、含正式 HTTPS 的个人网站
> 当前状态：✅ 上线，所有 7 步全通过

---

## 一、最终交付物

| 项 | 值 |
|----|----|
| 主域名 | **https://v-jay.com** （自动 308 → www） |
| 实际访问地址 | **https://www.v-jay.com** |
| 临时域名（备份） | https://personal-site-psi-eight-44.vercel.app |
| 部署平台 | Vercel |
| 部署仓库 | https://github.com/andrewyin15-source/personal-site |
| 域名服务商 / DNS | 字节火山引擎 · 云解析 DNS（专业版） |
| HTTPS 证书 | Let's Encrypt · Vercel 自动签发 |
| 项目本地路径 | `C:\Users\12497\Documents\个人\personal-site` |
| HTML 大小 | 8671 字节（线上） / 9241 字节（源） |

## 二、技术栈

- HTML5 + CSS3 + 原生 JavaScript
- 动效库：GSAP 3.12.5（首屏入场 + 鼠标视差）+ AOS 2.3.4（滚动渐入）
- 字体：Google Fonts（Inter + JetBrains Mono）
- 无构建步骤，纯静态
- 部署：Vercel 静态托管 + GitHub 推送自动部署

## 三、网站结构（M1 简约商务风格）

单页 6 段 + 导航 + 页脚：

1. **首屏 Hero** — "Your Name" 渐变标题 + 打字轮播副标题 + CTA 按钮
2. **About** — 头像（CSS 生成的 YN）+ 简介 + 信息列表
3. **Skills** — 4 张技能卡片（含滚动触发动画的进度条 + 数字递增）
4. **Projects** — 3 张项目卡片（每张封面带不同动效：网格 / 柱状 / 轨道）
5. **Journey** — 时间线（2023 → 2026·Now）
6. **Contact** — 4 张联系方式卡片（Email / GitHub / WeChat / LinkedIn）

### 动效清单

- 鼠标移动 → 首屏文字视差
- 滚动到 Section → 内容渐入（AOS）
- 滚动到 Skills → 进度条展开 + 数字递增
- 滚动到 Projects → 卡片渐入 + hover 浮起
- 整页背景 → 60 颗粒子 + 连线（Canvas）
- Hero 渐变文字 → 8 秒色彩循环
- 移动端汉堡菜单

## 四、过程时间线（7 步全过）

### Step 1 · 写代码 ✅
- 在 `C:\Users\12497\Documents\个人\personal-site` 创建 4 个文件
- `index.html` / `style.css` / `script.js` / `vercel.json`
- 全部占位符：`Your Name` / `Project One/Three` / `you@example.com`

### Step 2 · 本地冒烟测试 ✅
- 用 PowerShell HttpListener 起 127.0.0.1:8000
- 三个资源全部 200：index.html 8672B / style.css 12962B / script.js 5567B
- HTML 关键 id 全部命中

### Step 3 · 推 GitHub ✅
- 仓库：`andrewyin15-source/personal-site`
- 使用 PAT（Personal Access Token）通过 `_netrc` 推
- commit `8fe4ee2` · branch `main` · 4 files / 526 insertions
- 推完清掉本地 `_netrc`，提醒用户去 GitHub 撤销 token

### Step 4 · Vercel 部署 ✅
- Vercel 项目名：`测试人员-15`（显示名）/ 部署名 `personal-site-psi-eight-44`
- 真实访问 URL：`https://personal-site-psi-eight-44.vercel.app`
- 验证：200 / 8671 字节 / 标题 / 关键节点全部 OK

### Step 5 · 云解析 DNS 加记录 ✅
- 服务商：字节火山引擎（NS = `vip1.volcengine-dns.com`）
- 菜单路径：云解析 DNS → 公网域名管理 → v-jay.com → 记录管理
- 加入：
  - `@.v-jay.com` → A → `76.76.21.21`（后改为 `216.198.79.1`）
  - `www.v-jay.com` → CNAME → `cname.vercel-dns.com`（后改为 `ef1cd518b7728280.vercel-dns-017.com`）
- Cloudflare 1.1.1.1 全球解析已确认

### Step 6 · Vercel 绑域名 ✅
- Vercel 后台 → 项目 → 域名 → 添加现有项
- 加 `v-jay.com`（含 www 自动加）
- Vercel 建议把 A 记录更新到新 IP `216.198.79.1`（已改）
- SSL 证书自动签发中 → 后变 "有效配置"

### Step 7 · 最终验证 ✅
- `https://v-jay.com` → 308 → `https://www.v-jay.com`
- `https://www.v-jay.com` → 200 · 8671 字节 · 内容完整
- 所有动效、按钮、链接正常

## 五、当前占位内容（待替换）

| 位置 | 占位 |
|------|------|
| 姓名 | Your Name |
| 头像字母 | YN |
| 所在地 | Your City |
| 状态 | Open to opportunities |
| 方向 | Web · Cloud · DX |
| 技能（4 类） | Frontend 90 / Backend 80 / DevOps 70 / Tools 85 |
| 项目 1 | Project One · React + Node + MySQL |
| 项目 2 | Project Two · Python + FastAPI + Docker |
| 项目 3 | Project Three · Next.js + Prisma + Postgres |
| 时间线 | 2023~2026 通用占位 |
| 联系方式 | `you@example.com` / `@yourname` / `your_wechat` / `in/yourname` |

## 六、用户的服务清单 & 使用情况

| 服务 | 是否用上 | 说明 |
|------|----------|------|
| 域名 v-jay.com | ✅ 必需 | 主入口 |
| 云解析 DNS（专业版） | ✅ 必需 | 2 条记录指向 Vercel |
| 云解析 DNS（免费版） | ❌ 未用 | 建议退订，避免月费 |
| DigiCert 测试版 DV SSL | ❌ 未用 | Vercel 自动签 Let's Encrypt 正式证书 |
| 扣子三方插件 | ❌ 未用 | 跟个人站无关，留给 AI Bot 项目 |
| 密钥管理系统 | ❌ 未用 | 当前没密钥需要托管 |
| GitHub 账号 | ✅ 必需 | 源码托管 |
| Vercel 账号 | ✅ 必需 | 部署平台 |

## 七、未来工作流（内容更新）

### 用户自主改（推荐）
```bash
cd C:\Users\12497\Documents\个人\personal-site
# 用任何编辑器（VS Code / 记事本）改 index.html / style.css / script.js
git add .
git commit -m "update: xxx"
git push
# → Vercel 30 秒内自动重新部署
```

### 让 AI 改
下次新对话**第一句话**就发：

> "接着改 v-jay.com 个人站，路径 `C:\Users\12497\Documents\个人\personal-site`，先读 `.state.json` 摸底"

## 八、踩过的坑（备查）

1. **PowerShell 单行 `-e` 写长 HTML 失败** → 改用 here-string + `Set-Content -Encoding UTF8`
2. **GitHub push 不接受密码** → 改用 Personal Access Token
3. **Vercel 部署名 ≠ 访问 URL** → 部署名是 `test-person-15`，访问 URL 是 `test-person.vercel.app`，后被新部署覆盖为 `personal-site-psi-eight-44`
4. **Vercel 老 IP `76.76.21.21` 仍能用但推荐 `216.198.79.1`** → 后者 IP 段更新
5. **火山引擎添加记录时"记录值"需点 "+" 才出输入框** → 直接点保存会留空
6. **权威 NS 查到的 `198.18.x.x` 是火山引擎 CDN 抢答 IP** → 不是真实记录值，要走公网 DoH 验

## 九、文档清单（工作区）

| 文件 | 作用 |
|------|------|
| `personal-site/index.html` | 网站主体 |
| `personal-site/style.css` | 样式（暗色玻璃风） |
| `personal-site/script.js` | 动效（GSAP + AOS + 粒子） |
| `personal-site/vercel.json` | Vercel 部署配置（清理 URL + 安全头） |
| `personal-site/PROJECT_LOG.md` | 本文档 · 人读 |
| `personal-site/.state.json` | 状态快照 · AI 读 |
| `personal-site/HOWTO_UPDATE.md` | 内容更新工作流（用户手） |

---
*本项目完结。下一步：替换占位为真实信息。*
