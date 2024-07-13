import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  transformIgnorePatterns: ['node_modules/(?!(.*(mui-tel-input))/)'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/'],
};

export default config;