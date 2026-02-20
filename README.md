# Personal Website Skeleton (GitHub Pages)

这是一个可直接部署到 GitHub Pages 的个人网站雏形。

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库（例如 `username.github.io`）。
2. 在仓库 `Settings -> Pages` 中启用 Pages。
3. 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`。
4. 保存后等待几分钟即可访问。

## 后续替换建议

- 将首页头像占位块替换为你的真实照片。
- 修改 `index.html` 中的经历、项目、联系方式。
- 如果需要中英双语，可以新增一个 `en/` 页面或加语言切换按钮。
