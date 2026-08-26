---
name: v-jay-site
description: v-jay.com 个人站点项目记忆与操作追踪。每次涉及 v-jay.com、域名、personal-site 仓库、GitHub 推送、动画/视觉调整、设计 token、隐私合规、SEO 等操作时启用；当用户提"v-jay.com"、"v-jay"、"个人站"、"my-website"、"域名"、"回退一版"、"上一版"、"do the website work"时也启用。
---

# Skill: v-jay.com 个人站点项目（v-jay-site project memory）

## 一、项目元数据

| 字段 | 值 |
|---|---|
| **项目名** | v-jay.com 个人站点 |
| **英文名** | v-jay-site |
| **v0.2** | 2026-08-26 起为"anonymized personal intro template" |
| **域** | v-jay.com → 自动 308 → www.v-jay.com |
| **DNS** | 字节火山引擎云解析（A → 216.198.79.1 / CNAME → ef1cd518b7728280.vercel-dns-017.com） |
| **仓库** | github.com/andrewyin15-source/personal-site |
| **本地路径** | `E:\personal-site\` |
| **部署平台** | Vercel（push main 后 30 秒自动生效） |
| **当前 HEAD（远端）** | `2bb7dc7`（anonymized 模板） |
| **隐私状态** | **零 PII**（v0.2 起，名字/位置/公司/项目/联系方式全部清空） |
| **车推凭据** | 这台机器 `C:\Users\17952` 的 Git Credential Manager 缓存可直推 |
| **创建者** | 尹安都 |
| **首建日** | 2026-06-23（v-jay 电商上线）→ 2026-08-26（v0.2 模板化） |

## 二、设计骨架（v0.2 · current state）

| 维度 | 选择 |
|------|------|
| 文件类型 | 单文件 HTML（`index.html` 77KB 量级，无构建步骤） |
| 设计风格 | Editorial Grid / Magazine（ui-ux-pro-max `editorial-grid-magazine`） |
| 调色 | paper `#f8f5ef` / ink `#1a1817` / terracotta accent `#b8482e` / muted gold `#d4a574` |
| 字体 | Playfair Display（display） + Inter（body） + JetBrains Mono（meta） + Noto Sans/Serif SC（CN 兜底） |
| 页面结构 | 5 sections · Hero / About / Projects / Now / Contact |
| 多语 | 中文/英文 toggle（`data-tx-zh` / `data-tx-en` JS 切换，localStorage 记忆 key `v-jay-lang`） |
| 动效引擎 | GSAP 3.13.0 + SplitText（CDN，jsdelivr） |
| 无障碍 | focus-visible / prefers-reduced-motion / skip-link / 4.5:1 对比度 / SVG-only 图标（无 emoji 当功能图标） |
| 部署 | GitHub push → Vercel auto-deploy |
| 浮工具 | 3 键：Email / GitHub / Back-to-top（已 fully anonymized） |

## 三、文件清单

### `E:\personal-site\` 目录

| 文件 | 用途 | 状态 |
|------|------|------|
| `index.html` | 唯一页面，单文件 HTML（CSS inline + JS inline + CDN GSAP） | **当前有效** |
| `vercel.json` | Vercel 部署配置（cleanUrls + security headers） | 有效 · 不要动 headers 段 |
| `CLAUDE.md` | 项目记忆（早期内容，已过时但保留） | 旧版 |
| `HOWTO_UPDATE.md` | 更新指南（早期电商站口径） | **已过时** · 引用时不依赖 |
| `PROJECT_LOG.md` | 项目日志（早期 6 步上线流程，已过时） | **已过时** |
| `.state.json` | 状态快照（个人作品集占位内容，已过时） | **已过时** |
| `style.css` | 早期死代码（约 13KB）· 旧版深色个人作品集样式 | **死代码** · 当前 index.html 不引用 |
| `script.js` | 早期死代码（约 6KB）· 旧版 AOS.init/GSAP/Canvas | **死代码** · 当前 index.html 不引用 |
| `.git/` | git 仓库 | — |

### 项目级 skills（DSH 自动加载）

| 路径 | 用途 |
|------|------|
| `E:\dsh\.agents\skills\v-jay-site.md` | **本文档** —— 项目记忆 |
| `E:\dsh\.agents\skills\guolang-daily-report-builder.md` | 国朗日报生成（同级项目，与 v-jay 无关） |

### 全局 skills（DSH 任意项目加载）

| 路径 | 何时用 |
|------|--------|
| `C:\Users\17952\.agents\skills\web-design-modify\SKILL.md` | 任何网站设计/修改/组件/动效工作前的资源路由 |
| `C:\Users\17952\.agents\skills\ui-ux-pro-max\` | 设计系统、UX 规则、pre-delivery checklist |

## 四、操作历史（v-jay.com 项目）

按时间正序，从这个项目首次提及开始：

### · Phase 0 — 在 `Y:\国郎\工作内容与配置全量打包_20260820-1340\01_桌面工作文件夹\网站配置`
- 仅看到 3 份说明文档（HOWTO_UPDATE / PROJECT_LOG / state.json），描述**已下线的电商版**（v-jay 娃娃衣裳）
- 该目录的 docs 描述的是 2026-06-23 上线的 7 步流程，与当前实站已脱节

### · Phase 1 — 从 GitHub 拉源
- 原 `C:\Users\12497\Documents\个人\personal-site` 已不存在
- 通过 `git clone https://github.com/andrewyin15-source/personal-site.git E:\personal-site` 拉源
- GitHub 仓库是 public（无需凭据 clone），但是 push 需要本地 GCM 缓存（这台机器已实测可用，2026-08-26）
- 拉下来的 git log 显示仓库经历了从个人作品集 → 电商娃娃衣裳 → 工具栏 → GSAP 双语切换的多次重构

### · Phase 2 — 探索 & 资源盘点
- 盘点对话中提到的所有库：
  - Originkit、React Bits、Aceternity UI、Three.js、GSAP、UIverse、AuraUI、Motion
  - 误传名字：Motion Size / React Beast / Astonity UI / Universe / Enemies
  - 实际对应：Motion / React Bits / Aceternity UI / UIverse / anime.js
- 全部比对了 license、技术栈、是否能用
- 形成"按问题路由资源"心智模型（Q1 设计规则 / Q2 token / Q3 零件 / Q4 动效）

### · Phase 3 — 装上 ui-ux-pro-max
- 安装 `npm install -g ui-ux-pro-max-cli@2.15.0`
- 跑 `npx ui-ux-pro-max-cli init --ai universal --global`
- skill 落地到 `C:\Users\17952\.agents\skills\ui-ux-pro-max\`

### · Phase 4 — 创建 web-design-modify 全局工作流
- 从项目级 `E:\dsh\.agents\skills\web-design-modify.md`（v0.1，12564B）
- 升级到全局 `C:\Users\17952\.agents\skills\web-design-modify\SKILL.md`（v0.2，14795B）
- 修过第一次截断的 bug
- 删除项目级副本避免重复加载
- v0.2 包含完整资源路由表 + Q1/Q2/Q3-1..5/Q4-1..4

### · Phase 5 — 加 5 个 UI 元素（uvs-* 类）
- 在 v-jay 电商版（最后活下来的大块内容）上加：
  - commit `4418969`：`uvs-cta` (nav "Shop Now") + `uvs-card` (首件商品 shine-card)
  - commit `1511089`：`uvs-tilt` (Why v-jay CTA) + `uvs-pulse` (Newsletter Subscribe) + `uvs-shine-tag` (商品徽章)
- 全部用 Atelier Zero 调子重新着色
- 来源 UIverse "Universe/btn-space"（PunGrumpy/uiverse-button-design GitHub 镜像）+ 原创

### · Phase 6 — 跑 ui-ux-pro-max 自审
- 找出 v-jay 电商版 3 个真实问题：
  - `uvs-cta:focus { outline:none }` 删除焦点态 ❌
  - 所有新动画无 `prefers-reduced-motion` ❌
  - 没验证文字对比度 ❌

### · Phase 7 — 重写 v-jay.com → 个人简介站（Editorial Grid）
- commit `8a03255`：清空电商全文，重写为「尹安都·把企业 AI 化做成基础设施」个人简介站
- 5 sections（Hero/About/Projects/Now/Contact）+ 中英双语 + GSAP SplitText + 全部 pre-delivery 自审
- 占位内容用 `[TODO]` / `[待补]` 标记给用户填
- 改造前后 git diff: +531 行 / -1115 行

### · Phase 8 — Anonymize（去掉所有 PII）
- commit `2bb7dc7`：用户要求"把名字去掉，因为这是网站会泄露信息"
- 删除所有 PII：
  - 名字 "尹安都" / "Andrew Yin" → 改 generic "[占位]"
  - 品牌 logo "Ay" → 改 "·"
  - 城市 "杭州" → "[占位]"
  - 公司 "国朗" → "[占位]"
  - 4 个具体项目名（国朗 AI 化基础设施 / 国朗 ERP / 钉钉日志清洗 / OpenWork 调度） → 改 "示例 A/B/C/D"
  - GitHub "andrewyin15-source" → "@[占位]"
  - 邮箱/微信/LinkedIn 全部 → "[占位]"
  - favicon "Ay" 字符 → 改几何圆点
- 12 个 PII 关键词 live 上 live 验证全 0
- **当前状态**：完全匿名化的占位模板

### · Phase 9（未做）— 计划事项
- [ ] 修 v0.1.0 留下的 3 个 pre-delivery 问题（focus-visible / reduced-motion / 对比度）
- [ ] 决定是否真的重做个人站（用户另寻方案 / 选 Brutalism 或其它）
- [ ] 把 v-jay 域另用（dashboard / 作品集 / 收藏 / 转换其它用途）

## 五、关键约束（任何接下来的工作必须遵守）

| 类型 | 约束 |
|------|------|
| **隐私** | ❌ 不再写入任何个人识别信息 · 名字/位置/公司/真实项目/真实联系方式都不要 · 全 `[占位]` 模板 |
| **文档清理** | ❌ 不依赖 `HOWTO_UPDATE.md` `PROJECT_LOG.md` `state.json`（这些是电商时期的过期文档） · 任何状态都从 `git log` 或本 skill 取 |
| **死代码** | ❌ 不要尝试用 `style.css` 或 `script.js`（死代码） · 单文件站一切 inline |
| **headers** | ❌ 不要改 `vercel.json` 的 `headers` 段（已加安全头） |
| **design token** | ✅ 所有颜色用 `:root` CSS 变量 · 改 `--paper` `--ink` `--accent` `--accent-2` 等，不要写新色值 |
| **fonts** | ✅ Playfair Display + Inter + JetBrains Mono + Noto Sans/Serif SC（CN） · Google Fonts 已加载，不要换 |
| **GSAP** | ✅ 用 3.13.0，CDN `https://cdn.jsdelivr.net/npm/gsap@3.13.0/...` · 不要换版本除非明确理由 |
| **5 sections** | ✅ 保留 Hero/About/Projects/Now/Contact 结构 · 不要并掉任何一个 |
| **中英双语** | ✅ 所有可见文本都用 `data-tx-zh=` 和 `data-tx-en=` 双套 · 不要只给一种语言 |
| **pre-delivery** | ✅ focus-visible 必须 · `prefers-reduced-motion` 必须兼容 · 不许用 emoji 当功能图标 · 对比度 ≥ 4.5:1 |
| **icon** | ✅ 全部 inline SVG + `aria-hidden="true"` · 不要把 emoji 放 nav/icon 位置 |
| **commit** | ✅ 一个新功能/视觉改动一 commit · 中文 message · 不要 `git push --force` |

## 六、决策记录（含被否决方案）

### 视觉风格 — 最终选 Editorial Grid
| 候选 | 否决理由 |
|------|----------|
| Brutalism | 用户主动否决（"不要这个") |
| 保留 Atelier Zero | 用户主动否决（"重新换调子") |
| **Editorial Grid / Magazine** ✅ | ui-ux-pro-max 推荐、用户接受 |
| Exaggerated Minimalism | 用户未选 |
| Soft UI Evolution | 用户未选 |

### 动效引擎 — 最终 GSAP 3.13.0
| 候选 | 否决理由 |
|------|----------|
| **GSAP 3.13.0** ✅ | 已生效，与设计系统 integration 简洁 |
| anime.js v4 | 讨论过，但没切（GSAP 已足够） |
| Three.js | 仅在加 3D 锚点时按需引入 |
| Motion | 仅 React 工程栈切换时才用 |

### 内容方向 — 最终 anonymized template
| 候选 | 否决理由 |
|------|----------|
| v-jay 娃娃衣裳电商 | 用户"清掉" · 隐私 + 不想做这个 |
| 尹安都个人简介站 | 用户否决（隐私顾虑） |
| Dashboard / 收藏站 / 其它 | 未启动 |
| **anonymized personal intro template** ✅ | 用户当前接受 |

### Git 策略
- 不用 `--force`（除非明确安全回退）
- 不用合 commit （不混 commit message 类型）
- 中文 message（该项目所有 commit 选中文）

## 七、跨站点资源路由（仅 v-jay 现状适用）

下次接到 v-jay.com 工作，按这个路由：

```
Q1 设计规则     →  C:\Users\17952\.agents\skills\ui-ux-pro-max\
Q2 设计 token    →  复用 :root 变量（不写新色）
Q3 零件          →  UIverse 镜像（GitHub）· uvs-* 类（已有的）
Q4 动效          →  GSAP 3.13.0 (CDN) · 可加 anime.js / Three.js
```

未变化的部分继续保留（文件结构、字体、palette、pre-delivery 已启）。

## 八、记忆失效策略 — 我不会自动做的事

警告：以下任何一项需要**用户明确指示**，我不会主动做：

1. ❌ 不会推送（除非手动 `git push`）
2. ❌ 不会回退（除非 `git revert` 或类似命令）
3. ❌ 不会写新 token（除非明确说"加色 X"）
4. ❌ 不会替换死代码 `style.css` / `script.js`
5. ❌ 不会删旧文档（`HOWTO_UPDATE.md` 等）
6. ❌ 不会把"anonymized template"改回含 PII 版本（用户也拒绝过）

下次开 DSH 会话（包括新机器）我会先读本文件 → 立刻恢复完整 v-jay.com 项目记忆。

## 九、版本演进

- **v0.2** (2026-08-26) · 个人简介站 anonymized template · HEAD `2bb7dc7`
- v0.1.x · 个人简介站（未 anonymized）· HEAD `8a03255`
- v0.0.x · 电商娃娃衣裳（UVS-* 元素已加）· HEAD `1511089` `4418969`
- 2026-06-23 · v-jay 电商上线（7 步流程见旧 PROJECT_LOG.md）

## 十、回退路径速查

```bash
# 回退到 anonymized template（推荐 — 没有 PII）
git checkout 2bb7dc7 -- index.html
git commit -m "revert: anonymized template"
git push origin main

# 回退到含 PII 的个人简介站
git revert 2bb7dc7 && git push origin main

# 回退到电商娃娃衣裳（最后活版本）
git reset --hard 1511089
git push --force-with-lease origin main

# 全部清掉（回到 6.23 那个电商版）
git reset --hard d0ea04d
git push --force-with-lease origin main
```

## 十一、未决事项 · TODO

- [ ] 用户要匿名模板就保留，还是要个人简介站？等用户拍板
- [ ] v-jay.com 域名最终用途（个人站 / dashboard / blog / 收藏 / 转售？)
- [ ] 死代码 `style.css` + `script.js` 是否清理（建议清，但等用户同意）
- [ ] 过期文档 `HOWTO_UPDATE.md` + `PROJECT_LOG.md` + `state.json` 是否清理（建议清）
- [ ] pre-delivery 3 个真问题（focus-visible / reduced-motion / 对比度）待修
- [ ] 是否要给 v0.2 写一份"v-jay-site v0.2 设计手册"作为 onboarding 文档
