import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { windicssStencil } from '@codeperate/stencil-windicss';
import { JsonDocs, JsonDocsComponent, JsonDocsTag } from '@stencil/core/internal';
import { writeFile, appendFile } from 'fs/promises'
import { stat } from 'fs';
import storyTemplate from './storyTemplate';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
// import { svelteOutputTarget } from '@stencil/svelte-output-target';

const getDocTags = (entry: JsonDocsComponent, name: string, defaultValue: any): string => {
  const path = entry.docsTags.find((d: JsonDocsTag) => d.name === name);
  return path ? path.text : defaultValue;
}

export const config: Config = {
  autoprefixCss: true,
  namespace: 'Uniform',
  globalStyle: 'src/global/uniform.scss',
  globalScript: 'src/global/global.ts',
  bundles: [
    { components: ['u-table', 'u-tablehead', 'u-tablefoot', 'u-tablerow', 'u-tablecell'] }
  ],
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
      type: 'docs-json',
      file: './docs/components.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        writeFile('./readme.md', `# UI Library for [Hoer GmbH](https://hoer-electronic.de/en/)\n\nFor usage with frameworks please refer to official [StencilJS Documentation](https://stenciljs.com/docs/overview).\n- 🟢 ready (feature complete for now)\n- 🟡 beta (changes possible, not feature complete)\n- 🔴 not ready (unstyled / no functions)\n- 🔵 planned (created, but default files)\n\n## Component overview\n\n|Name|Component|Description|State|\n|---|---|---|---|\n`);
        appendFile('./readme.md', docs.components.map((c) => {
          const name = getDocTags(c, 'name', c.tag)
          const desc = getDocTags(c, 'description', '*no description provided*')
          const state = getDocTags(c, 'state', '🔵')
          const storyPath = c.filePath.split('/').slice(0, -1).join('/');
          stat(`${storyPath}/${c.tag}.stories.tsx`, (_error, file) => {
            if (!file) return
            writeFile(`${storyPath}/${c.tag}.stories.tsx`, storyTemplate(name, c.tag, c.props));
          })
          const path = './src/components/' + c.tag
          return `|[${name}](${path})|${c.tag}|${desc}|${state}|`
        })
          .join('\n')
        )
      }
    },
    reactOutputTarget({
      componentCorePackage: '@theurbans/uniform',
      proxiesFile: './packages/react/src/proxies.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
    }),
    vueOutputTarget({
      componentCorePackage: '@theurbans/uniform',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: './packages/vue/src/proxies.ts',
      componentModels: [
        {
          elements: ['u-checkbox', 'u-toggle'],
          targetAttr: 'checked',
          event: 'v-u-change',
          externalEvent: 'uChange'
        },
        {
          elements: ['u-input', 'u-select'],
          targetAttr: 'value',
          event: 'v-u-change',
          externalEvent: 'uChange'
        }
      ],
    }),
    // svelteOutputTarget({
    //   componentCorePackage: '@theurbans/uniform',
    //   proxiesFile: './packages/svelte/src/proxies.ts',
    // }),
  ],
  plugins: [
    sass(),
    ...windicssStencil({
      preflight: true,
    }),
  ],
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
  },
  watchIgnoredRegex: /\.stories\.(js|jsx|ts|tsx|mdx)$/, // ignore storybook files in --watch mode
};
