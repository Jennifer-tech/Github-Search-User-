// jest.config.js
module.exports = {
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios/)"
    ],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      '\\.(css|scss|sass)$': '<rootDir>/styleMock.js',
    }
  };
  