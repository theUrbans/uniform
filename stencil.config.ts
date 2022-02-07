import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { windicssStencil } from '@codeperate/stencil-windicss';

export const config: Config = {
  namespace: 'uniform',
  globalStyle: 'src/global/uniform.css',
  globalScript: 'src/global/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    ...windicssStencil({
      preflight: true,
    }),
  ]
};
