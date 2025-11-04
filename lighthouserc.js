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
        serverBaseUrl: 'http://192.168.10.63:9001',
        token: '4602c7a8-e4fd-482d-810b-9964a758b985',
      }, 
    },
  };