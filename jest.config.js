module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'casadelmare/js/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    'node_modules/',
    'tests/',
  ],
};
