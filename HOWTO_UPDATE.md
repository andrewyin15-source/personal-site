# 如何更新 v-jay.com 个人网站

这份文档讲两件事：
1. **你自己改**（最常用）
2. **让 AI 帮你改**（新开会话时）

## 📁 项目位置

```
C:\Users\12497\Documents\个人\personal-site
├── index.html        ← 网站主体
├── style.css         ← 样式
├── script.js         ← 动效
├── vercel.json       ← Vercel 部署配置
├── PROJECT_LOG.md    ← 过程总结（人读）
├── HOWTO_UPDATE.md   ← 本文档
└── .state.json       ← 当前状态快照（AI 读）
```

## ✏️ 场景 1：你自己改

最常见的就是改文字、换头像、调色。

### 改占位文字

打开 `index.html`，用编辑器的"查找替换"：
- `Your Name` → 你的真实姓名
- `you@example.com` → 你的邮箱
- `Project One/Two/Three` → 真实项目名
- `@yourname` → 你的 GitHub 用户名

### 改配色 / 样式

打开 `style.css`，最上面 `:root { ... }` 那段是所有颜色变量：
- `--accent` 主色
- `--accent2` 辅色
- `--grad` 渐变色

### 改动效 / 交互

打开 `script.js`，里面有注释分段：
- 打字轮播（rotator 数组）
- 粒子数量（`COUNT = 60`）
- 鼠标视差强度

### 改完怎么上线

打开 PowerShell，执行：

```powershell
cd C:\Users\12497\Documents\个人\personal-site
git add .
git commit -m "update: 改成真实信息"
git push
```

等 30 秒，访问 `https://v-jay.com` 看效果。

> 💡 **第一次 push 失败**（要输用户名密码）？
> 现在 GitHub 不接受密码了。**重新生成一个 PAT**：
> 1. 打开 https://github.com/settings/tokens/new?scopes=repo
> 2. 勾 `repo`，生成，复制 token
> 3. push 时用户名输 `andrewyin15-source`，密码贴这个 token

## 🤖 场景 2：让 AI 帮你改

### 步骤

1. **开新对话**（任意 AI 工具的 Code / Chat 模式）
2. **第一句话发这个**：

   > 接着改 v-jay.com 个人站，路径是 `C:\Users\12497\Documents\个人\personal-site`，先读 `.state.json` 摸底。

3. AI 读完 `.state.json` 就知道：
   - 现在是占位符状态
   - 部署在 Vercel
   - 改完要 `git add . && git commit && git push`
   - 验证地址是 `https://www.v-jay.com`

4. 然后你**告诉 AI 你想改什么**：

   > "把名字改成 张三，邮箱改成 zhangsan@xxx.com，项目 1 改成 xxx"

5. AI 改完会告诉你"已 push，去 https://www.v-jay.com 刷新看"

### AI 改完的标准动作

1. ✅ 改文件
2. ✅ `git add . && git commit -m "..." && git push`
3. ✅ 30 秒后 `curl https://www.v-jay.com` 验证改动生效
4. ✅ 告诉你验证结果

## 🔧 常见问题

### Q：push 失败说"authentication failed"
A：GitHub 不接受密码。重新生成 PAT（见场景 1 末尾）。

### Q：Vercel 部署失败
A：去 https://vercel.com/dashboard → 项目 → Deployments → 看红字日志。

### Q：想换域名
A：去火山引擎云解析 DNS 改记录，或加新域名后在 Vercel 后台 → 域名 → 添加现有项。

### Q：想加新页面（关于 / 博客）
A：1. 在 `personal-site/` 下加新 `.html` 文件 2. 顶部导航加链接 3. push

### Q：网站打开是 404
A：99% 是 DNS 还没传播。`nslookup v-jay.com` 看 IP 是不是 `216.198.79.1`。

## 🛑 不要做的事

- 不要删 `vercel.json`
- 不要把项目目录挪到别的位置（git 路径会失效）
- 不要在 HTML 里写 `<script>console.log(...)` 调试代码再 push
- 不要改仓库为 Private（Vercel 免费版要求 Public）

## 📞 救命稻草

搞不定随时问 AI，开头带上：
> v-jay.com 个人站，路径 `C:\Users\12497\Documents\个人\personal-site`，先读 `.state.json`

剩下的 AI 帮你处理。
