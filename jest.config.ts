import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom', // ✅ needed for DOM APIs
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // ✅ enable TypeScript
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ✅ load jest-dom
  
};

export default config;