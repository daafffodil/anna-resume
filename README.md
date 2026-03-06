# 我的简历展示网站 🚀

一个现代化的、专业的简历展示网站，用来展示我在不同职位方向的探索和准备。

## 🌟 功能特性

### ✨ 核心功能
- 📝 **多职位展示** - 展示不同方向的简历和职位描述
- 🏢 **公司信息** - 清晰显示目标公司名称
- 🖼️ **职位描述图片** - 展示职位相关的图片和截图
- 📄 **简历PDF下载** - 提供对应岗位的简历PDF下载
- 🔍 **智能搜索** - 按职位、公司或技能快速查找
- 📤 **分享功能** - 一键分享给朋友
- 📱 **响应式设计** - 完美支持手机和PC

### 🎨 设计特点
- 清爽的浅色设计
- 无需任何依赖，纯HTML实现
- 快速加载，性能优异
- 完全开源，可自由修改

## 📊 当前简历版本

目前包含4个职位方向：

| 职位 | 公司 | 图片 | PDF |
|-----|------|------|-----|
| **AI产品运营** | 字节跳动 / 小红书 | 3张 | ✓ |
| **品牌市场运营** | 山中天艺术中心 | 3张 | ✓ |
| **品牌战略咨询顾问** | 兆世原咨询机构 | 3张 | ✓ |
| **硕士研究生\|广告学** | 中国传媒大学 | 2张 | ✓ |

## 🚀 快速开始

### 本地预览
```bash
# 方式1：直接打开
双击 index.html 即可在浏览器中打开

# 方式2：用编辑器打开
用任何文本编辑器（VS Code、记事本等）打开 index.html 修改
```

### 在线访问
```
🌐 https://anna-resume.vercel.app
```

## 💻 技术栈

- **前端框架**: 纯 HTML + CSS + JavaScript
- **样式库**: Tailwind CSS（CDN）
- **部署平台**: Vercel（自动部署）
- **无需编译**: 直接在浏览器运行

## 📝 如何自定义？

### 1️⃣ 添加新简历

打开 `index.html`，在 JavaScript 代码中找到：

```javascript
let resumes = [
    {
        id: 1,
        title: "AI产品运营",
        company: "字节跳动 / 小红书",
        date: "2024.06 - 至今",
        summary: "AI商业化研究与AIGC行业深度调研...",
        jd: "工作职责：\n• ...",
        tags: ["AI商业化", "策略运营"],
        images: ["图片1", "图片2", "图片3"],
        pdfUrl: "PDF链接",
        pdfName: "resume_名字.pdf"
    },
    // ... 更多简历
];
```

**复制一个对象，修改以下字段：**
- `title`: 职位名称
- `company`: 公司名
- `date`: 工作时间
- `summary`: 简介（一句话）
- `jd`: 职位描述（可以很长）
- `tags`: 技能标签数组
- `images`: 职位图片URL数组
- `pdfUrl`: 简历PDF链接
- `pdfName`: PDF文件名

### 2️⃣ 修改个人信息

在 HTML 代码中搜索并修改：

```html
<!-- 找到这一段 -->
<h2 class="text-2xl font-bold text-slate-900">程安安 Anna Cheng</h2>
<p class="text-slate-600 mt-1">中传广告学本硕 | AI营销先行者 | 7年专业背景</p>
<p class="text-slate-500 text-sm mt-2">📧 buanancheng@gmail.com | 📱 18757186233</p>

<!-- 改成你的信息 -->
<h2 class="text-2xl font-bold text-slate-900">你的名字</h2>
<p class="text-slate-600 mt-1">你的背景信息</p>
<p class="text-slate-500 text-sm mt-2">📧 你的邮箱 | 📱 你的电话</p>
```

### 3️⃣ 上传图片和PDF

**图片上传：**
1. 将职位描述图片上传到图床（如 Imgur）
2. 获取公开的图片链接
3. 更新代码中的 `images` 数组

**PDF上传：**
1. 准备对应岗位的简历PDF
2. 上传到云盘（如 Google Drive、Dropbox）
3. 获取公开分享链接
4. 更新代码中的 `pdfUrl` 字段

**代码示例：**
```javascript
{
    id: 1,
    title: "AI产品运营",
    company: "字节跳动",
    images: [
        "https://imgur.com/abc123.jpg",    // 真实链接
        "https://imgur.com/def456.jpg",
        "https://imgur.com/ghi789.jpg"
    ],
    pdfUrl: "https://drive.google.com/file/d/...view",  // 真实链接
    pdfName: "resume_AI_Product.pdf"
}
```

## 🌐 部署到Vercel

### 自动部署（推荐）
1. 所有文件推送到GitHub
2. 登录 Vercel（https://vercel.com）
3. 点 "New Project"
4. 选择你的GitHub项目
5. 点 "Deploy"
6. 完成！Vercel会自动部署

### 自定义域名（可选）
1. 在Vercel项目设置中找到 "Domains"
2. 添加你的自定义域名（如 resume.com）
3. 按照提示配置DNS
4. 搞定！

## 📊 项目统计

- 📝 总简历数：4份
- 🖼️ 总图片数：11张
- 📄 总PDF数：4份
- 🏢 涵盖公司：5家
- ⏱️ 工作经验：7年+

## 📞 联系方式

- 📧 **邮箱**: buanancheng@gmail.com
- 📱 **电话**: 18757186233
- 🔗 **网站**: https://anna-resume.vercel.app
- 🐙 **GitHub**: https://github.com/dafffodil/anna-resume

## 🎓 个人背景

- **教育**: 中国传媒大学 硕士（广告学-品牌传播方向）
- **专业**: 广告学本硕，7年专业背景
- **方向**: AI产品运营 / 品牌市场 / 出海营销
- **工具**: Midjourney, Runway, ChatGPT, PS, Canva等
- **语言**: 英语流利（雅思6+）

## 🤝 贡献和反馈

如果你有任何建议或发现问题，欢迎：
- 提交 Issue
- 发送邮件
- 直接联系我

## 📄 许可证

This project is open source and available under the MIT License.

---

**最后更新**: 2025年3月
**版本**: 2.0（新增职位图片和PDF下载功能）
**状态**: ✅ 持续更新中

---

**💡 小建议**: 这个网站展示的不仅是简历，更是你对求职的认真态度和创意思维。祝你求职顺利！ 🚀
