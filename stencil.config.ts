import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { windicssStencil } from '@codeperate/stencil-windicss';
import { JsonDocs, JsonDocsComponent, JsonDocsTag } from '@stencil/core/internal';
import { writeFile, appendFile } from 'fs/promises'
import { stat } from 'fs';

const getDocTags = (entry: JsonDocsComponent, name: string, defaultValue: any): string => {
  const path = entry.docsTags.find((d: JsonDocsTag) => d.name === name);
  return path ? path.text : defaultValue;
}

export const config: Config = {
  autoprefixCss: true,
  namespace: 'Uniform',
  globalStyle: 'src/global/uniform.css',
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
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        writeFile('./readme.md', `# UI Library for [Hoer GmbH](https://hoer-electronic.de/en/)\n\nFor usage with frameworks please refer to official [StencilJS Documentation](https://stenciljs.com/docs/overview).\n- 🟢 ready (feature complete for now)\n- 🟡 beta (changes possible, not feature complete)\n- 🔴 not ready (unstyled / no functions)\n- 🔵 planned (created, but default files)\n\n## Component overview\n\n|Name|Component|Description|State|\n|---|---|---|---|\n`);
        appendFile('./readme.md', docs.components.map((c) => {
          const name = getDocTags(c, 'name', c.tag)
          const desc = getDocTags(c, 'description', '*no description provided*')
          const state = getDocTags(c, 'state', '🔵')

          const storyPath = c.filePath.split('/').slice(0, -1).join('/');
          let storyExists = false;
          stat(`${storyPath}/${c.tag}.stories.tsx`, (error, file) => storyExists = error ? false : file.isFile())
          if (!storyExists) writeFile(`${storyPath}/${c.tag}.stories.tsx`, `import readme from './readme.md';\nexport default {\ntitle: '${name}',\nnotes: readme,\n};`);
          const path = './src/components/' + c.tag
          return `|[${name}](${path})|${c.tag}|${desc}|${state}|`
        })
          .join('\n')
        )
      }
    }
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
