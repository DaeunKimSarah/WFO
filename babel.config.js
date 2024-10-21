// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // Node 환경에서 ES6 모듈 변환
    '@babel/preset-react', // React JSX 구문을 지원
    '@babel/preset-typescript' // TypeScript 지원
  ],
};

