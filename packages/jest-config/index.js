module.exports = {
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.spec.ts',
    '**/src/**/*.spec.ts',
    '**/test/**/*.test.ts',
    '**/src/**/*.test.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
}
