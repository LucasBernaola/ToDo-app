// babel.config.js

module.exports = {
  setupFilesAfterEnv: ['./tests/components/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  };
  