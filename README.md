# Lighthouse CI Server - esimnum.com

这个项目用于对 [esimnum.com](https://esimnum.com) 网站进行 Lighthouse 性能测试，并将结果上传到 Lighthouse CI Server。

## 📋 项目概述

- **测试网站**: https://esimnum.com/home
- **测试次数**: 每次运行 3 次
- **测试环境**: Desktop 桌面模式
- **LHCI Server**: http://192.168.10.63:9001

## 🚀 快速开始

### 前置要求

- Node.js 14+ 
- npm 或 yarn
- 可访问 Lighthouse CI Server (http://192.168.10.63:9001)

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
2. **访问项目页面**: http://192.168.10.63:9001/app/projects/esim-lhci-server
3. **访问服务器首页**: http://192.168.10.63:9001

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

### 修改服务器配置

编辑 `lighthouserc.js` 中的 upload 部分：

```javascript
upload: {
  target: 'lhci',
  serverBaseUrl: 'http://192.168.10.63:9001',
  token: '4602c7a8-e4fd-482d-810b-9964a758b985',
  logLevel: 'verbose',  // 可选：启用详细日志
}
```

## 📈 项目信息

- **项目 ID**: dc775415-1cf6-4a66-abfd-4ed4756c4a6a
- **项目名称**: esim-lhci-server
- **主分支**: main
- **仓库**: https://github.com/wan88888/esim-lhci-server

## 📝 常见问题

### 1. 服务器连接失败

确保 Lighthouse CI Server 正在运行并可访问：
```bash
curl http://192.168.10.63:9001/version
```

如果无法访问，请检查：
- 服务器是否在运行
- 网络连接是否正常
- 防火墙设置是否允许访问

### 2. Token 无效

如果遇到 token 认证失败，请检查：
- `lighthouserc.js` 中的 token 是否与服务器匹配
- 在 LHCI Server 管理界面重新生成 token
- Token: `4602c7a8-e4fd-482d-810b-9964a758b985`

### 3. 测试失败

查看详细日志以获取更多信息：
```bash
npm run test
```

如果需要更详细的输出，可以修改 `lighthouserc.js` 添加：
```javascript
upload: {
  logLevel: 'verbose',
}
```

### 4. 修改服务器地址

如果需要修改 LHCI Server 地址，编辑 `lighthouserc.js`：
```javascript
upload: {
  target: 'lhci',
  serverBaseUrl: 'http://YOUR_SERVER_IP:9001',
  token: 'YOUR_TOKEN',
}
```

## 📚 相关资源

- [Lighthouse CI 官方文档](https://github.com/GoogleChrome/lighthouse-ci)
- [Lighthouse 性能优化指南](https://web.dev/lighthouse-performance/)
- [配置参考](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

## 👨‍💻 维护者

- **作者**: wan88888
- **邮箱**: wy13076768756@163.com

## 📄 License

ISC

