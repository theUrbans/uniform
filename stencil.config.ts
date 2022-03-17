import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { windicssStencil } from '@codeperate/stencil-windicss';
import { JsonDocs } from '@stencil/core/internal';
import Documentation from './src/docs/createDocs';
// import { reactOutputTarget } from '@stencil/react-output-target';
// import { vueOutputTarget } from '@stencil/vue-output-target';
// import { svelteOutputTarget } from '@stencil/svelte-output-target';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'Uniform',
  globalStyle: 'src/global/uniform.scss',
  globalScript: 'src/global/global.ts',
  bundles: [
    {
      components: [
        'u-table',
        'u-tablehead',
        'u-tablefoot',
        'u-tablerow',
        'u-tablecell'
      ]
    }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme',
      footer: '_Built with [StencilJS](https://stenciljs.com/) by Hoer_'
    },
    {
      type: 'docs-json',
      file: './src/docs/components.json'
    },
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'docs-custom',
      generator: (rawDocs: JsonDocs) => {
        const docs = new Documentation(rawDocs.components);
        docs.createReadme();
        docs.createDocs();
      }
    }
    // reactOutputTarget({
    //   componentCorePackage: '@theurbans/uniform',
    //   proxiesFile: './packages/react/src/proxies.ts',
    //   includeImportCustomElements: true,
    //   includePolyfills: false,
    //   includeDefineCustomElements: false,
    // }),
    // vueOutputTarget({
    //   componentCorePackage: '@theurbans/uniform',
    //   includeImportCustomElements: true,
    //   includePolyfills: false,
    //   includeDefineCustomElements: false,
    //   proxiesFile: './packages/vue/src/proxies.ts',
    //   componentModels: [
    //     {
    //       elements: ['u-checkbox', 'u-toggle'],
    //       targetAttr: 'checked',
    //       event: 'v-u-change',
    //       externalEvent: 'uChange'
    //     },
    //     {
    //       elements: ['u-input', 'u-select'],
    //       targetAttr: 'value',
    //       event: 'v-u-change',
    //       externalEvent: 'uChange'
    //     }
    //   ],
    // }),
    // svelteOutputTarget({
    //   componentCorePackage: '@theurbans/uniform',
    //   proxiesFile: './packages/svelte/src/proxies.ts',
    // }),
  ],
  plugins: [
    sass(),
    ...windicssStencil({
      preflight: true
    })
  ],
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false
  },
  watchIgnoredRegex: /\.stories\.(js|jsx|ts|tsx|mdx)$/ // ignore storybook files in --watch mode
};
