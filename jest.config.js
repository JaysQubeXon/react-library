module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFiles: [],
    collectCoverageFrom: ["lib/**/*.{ts,js,tsx,jsx}", "!**/node_modules/**"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    globals: {
      "ts-jest": {
        compiler: "typescript"
      },
    },
  };
  