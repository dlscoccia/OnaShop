module.exports = {
  setupFiles: ['jest-canvas-mock', '<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/components/svgs/',
  ],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    // '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/mocks/fileMock.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/components/svgs/'],
};
