module.exports = {
    ci: {
      collect: {
        url: ['https://esimnum.com/home'],
        numberOfRuns: 3,
        settings: {
          chromeFlags: '--no-sandbox --disable-dev-shm-usage --headless',
          preset: 'desktop',
        },
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.3 }],
          'categories:accessibility': ['warn', { minScore: 0.3 }],
        },
      },
      upload: {
        target: 'lhci',
        // 支持从环境变量读取，方便 CI/CD
        serverBaseUrl: process.env.LHCI_SERVER_URL || 'http://localhost:9001',
        token: process.env.LHCI_TOKEN || '4602c7a8-e4fd-482d-810b-9964a758b985',
        // 添加详细日志以便调试
        logLevel: 'verbose',
      },
    },
  };