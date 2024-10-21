// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // TypeScript 파일 변환
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios|react-leaflet)', // axios와 react-leaflet 변환 예외 처리
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // CSS 파일을 무시하도록 설정
  },
};

