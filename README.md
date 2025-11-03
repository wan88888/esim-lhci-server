# Lighthouse CI Server - esimnum.com

这个项目用于对 [esimnum.com](https://esimnum.com) 网站进行 Lighthouse 性能测试，并将结果上传到 Lighthouse CI Server。

## 📋 项目概述

- **测试网站**: https://esimnum.com/home
- **测试次数**: 每次运行 3 次
- **测试环境**: Desktop 桌面模式
- **LHCI Server**: http://localhost:9001

## 🚀 快速开始

### 前置要求

- Node.js 14+ 
- npm 或 yarn
- 运行中的 Lighthouse CI Server (端口 9001)

### 安装依赖

```bash
npm install
```

### 本地运行测试

```bash
# 运行 Lighthouse 测试并上传到服务器
npm run test

# CI 环境运行（带构建上下文）
npm run test:ci
```

## 📊 查看测试结果

测试完成后，可以通过以下方式查看结果：

1. **直接访问构建链接** - 运行测试后控制台会输出链接
2. **访问项目页面**: http://localhost:9001/app/projects/esim-lhci-server
3. **访问服务器首页**: http://localhost:9001

## ⚙️ 配置说明

配置文件：`lighthouserc.js`

### 主要配置项

- **collect.url**: 要测试的 URL 列表
- **collect.numberOfRuns**: 每个 URL 运行测试的次数（默认 3 次）
- **collect.settings.preset**: 测试预设（desktop/mobile）
- **upload.serverBaseUrl**: Lighthouse CI Server 地址
- **upload.token**: 项目认证 Token

### 性能阈值

当前配置的最低分数要求：

- 性能（Performance）: ≥ 30% （error 级别）
- 可访问性（Accessibility）: ≥ 30% （warn 级别）

## 🔄 GitHub Actions CI/CD

项目包含 GitHub Actions 工作流，在以下情况自动运行测试：

- **Push 到 main 分支**
- **Pull Request 到 main 分支**
- **每天自动运行**（UTC 时间 02:00，北京时间 10:00）

### 工作流功能

✅ 自动安装依赖  
✅ 运行 Lighthouse 测试  
✅ 上传结果到 LHCI Server  
✅ 生成性能报告  
✅ 自动失败通知

### 查看 CI 结果

前往 GitHub Actions 页面查看运行状态和结果：
```
https://github.com/wan88888/esim-lhci-server/actions
```

## 🛠️ 开发指南

### 修改测试 URL

编辑 `lighthouserc.js` 文件：

```javascript
collect: {
  url: [
    'https://esimnum.com/home',
    'https://esimnum.com/about',  // 添加更多页面
  ],
}
```

### 调整性能阈值

```javascript
assert: {
  assertions: {
    'categories:performance': ['error', { minScore: 0.8 }],  // 改为 80%
    'categories:accessibility': ['warn', { minScore: 0.9 }], // 改为 90%
    'categories:seo': ['warn', { minScore: 0.8 }],          // 添加 SEO 检查
  },
}
```

### 启用详细日志

```javascript
upload: {
  // ...
  logLevel: 'verbose',  // 启用详细日志
}
```

## 📈 项目信息

- **项目 ID**: dc775415-1cf6-4a66-abfd-4ed4756c4a6a
- **项目名称**: esim-lhci-server
- **主分支**: main
- **仓库**: https://github.com/wan88888/esim-lhci-server

## 🔐 环境变量（CI/CD）

在 GitHub Secrets 中配置以下变量：

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `LHCI_SERVER_URL` | Lighthouse CI Server 地址 | ✅ |
| `LHCI_TOKEN` | 项目认证 Token | ✅ |

### 设置 GitHub Secrets

1. 进入仓库 Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 添加上述变量

## 📝 常见问题

### 1. 服务器连接失败

确保 Lighthouse CI Server 正在运行：
```bash
curl http://localhost:9001/version
```

### 2. Token 无效

检查 `lighthouserc.js` 中的 token 是否正确，或者重新生成：
```bash
lhci server --storage.storageMethod=sql --storage.sqlDatabasePath=./lhci.db
```

### 3. 测试失败

查看详细日志：
```bash
npm run test -- --verbose
```

### 4. CI 环境中无法访问本地服务器

CI 环境需要公网可访问的 LHCI Server 地址，考虑：
- 使用云服务器部署 LHCI Server
- 使用 Vercel/Netlify 等平台的 LHCI 集成

## 📚 相关资源

- [Lighthouse CI 官方文档](https://github.com/GoogleChrome/lighthouse-ci)
- [Lighthouse 性能优化指南](https://web.dev/lighthouse-performance/)
- [配置参考](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

## 👨‍💻 维护者

- **作者**: wan88888
- **邮箱**: wy13076768756@163.com

## 📄 License

ISC

