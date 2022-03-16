import { writeFile, appendFile } from 'fs/promises';
import { stat } from 'fs';
import { JsonDocsComponent, JsonDocsTag } from '@stencil/core/internal';
import storyTemplate from './storyTemplate';

export default class Documentation {
  private components: Array<JsonDocsComponent>;

  constructor(components: Array<JsonDocsComponent>) {
    this.components = components;
  }

  private getDocTags(
    entry: JsonDocsComponent,
    name: string,
    defaultValue: any,
  ): string {
    const path = entry.docsTags.find((d: JsonDocsTag) => d.name === name);
    return path ? path.text : defaultValue;
  }

  private formatCode(code: string): string {
    let inCodeBlock = false;
    return code
      .split('\n')
      .map((line) => {
        if (!line) return;
        if (line.startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          return line;
        }
        if (inCodeBlock) return line;
        return line.trim();
      })
      .join('\n');
  }

  public createReadme() {
    writeFile(
      './readme.md',
      this.formatCode(
        `# UI Library by [Hoer GmbH](https://hoer-electronic.de/en/)

      For usage with frameworks please refer to official [StencilJS Documentation](https://stenciljs.com/docs/overview).

      - 🟢 ready (feature complete for now)
      - 🟡 beta (changes possible, not feature complete)
      - 🔴 not ready (unstyled / no functions)
      - 🔵 planned (created, but default files)
      
      ## Component overview
      |Name|Component|Description|State|
      |---|---|---|---|\n`,
      ),
    );

    const data = this.components.map((c) => {
      const name = this.getDocTags(c, 'name', c.tag);
      const desc = this.getDocTags(c, 'description', 'no description provided');
      const state = this.getDocTags(c, 'state', '🔵');
      const path = `./src/components/${c.tag}`;
      return `|[${name}](${path})|${c.tag}|${desc}|${state}|`;
    });
    appendFile('./readme.md', data.join('\n'));
  }

  public createStories() {
    this.components.map((c) => {
      const name = this.getDocTags(c, 'name', c.tag);
      const storyPath = c.filePath.split('/').slice(0, -1).join('/');
      stat(`${storyPath}/${c.tag}.stories.tsx`, (_error, file) => {
        if (!file) return;
        writeFile(
          `${storyPath}/${c.tag}.stories.tsx`,
          storyTemplate(name, c.tag, c.props),
        );
      });
      return null;
    });
  }

  public createDocs() {
    this.components.map((c, index) => {
      const name = this.getDocTags(c, 'name', c.tag);
      const desc = this.getDocTags(
        c,
        'description',
        '*no description provided*',
      );
      const cat = this.getDocTags(c, 'categorie', 'Components');
      writeFile(
        `./docs/content/en/${c.tag}.md`,
        this.formatCode(`---
                title: ${c.tag}
                subtitle: ${desc.replace(/\*/g, '')}
                category: ${cat}
                menuTitle: ${name}
                position: ${index + 1}
                ---

            <badge> ${c.encapsulation} </badge>

            ${c.docs ? c.docs : ''}
            \n
            ${Object.keys(c.usage).length ? '## Usage\n' : ''}
            ${Object.entries(c.usage)
              .map(([key, value]) => `### ${key}\n${value}`)
              .join('\n')}
            \n
            ${c.props.length > 0 ? '## Properties' : ''}\n
            ${c.props
              .map(
                (prop) => `### ${prop.name}
                    |**Description**|${prop.docs || '*not provided*'}|
                    |---|---|
                    |**Attribute**|${prop.attr}|
                    |**Type**|\`${prop.type.replace(/\|/g, '\\|')}\`|
                    |**Default**|${prop.default}|
                    |**Required**|${prop.required}|
                    `,
              )
              .join('\n\n')}
            \n
            ${
              c.events.length > 0
                ? '## Events\n|Name|Description|\n|---|---|'
                : ''
            }
            ${c.events
              .map((e) => `|${e.event}|${e.docs || '*not provided*'}|`)
              .join('\n')}
            \n
            ${c.methods.length > 0 ? '## Methods' : ''}
            \n
            ${c.methods
              .map(
                (m) => `### ${m.name}
                    |**Description**|${m.docs || '*not provided*'}|
                    |---|---|
                    |**Signature**|\`${m.signature}\`|
                `,
              )
              .join('\n\n')}
            
            ${
              c.slots.length > 0
                ? '## Slots\n|Name|Description|\n|---|---|'
                : ''
            }
            ${c.slots
              .map((s) => `|${s.name}|${s.docs || '*not provided*'}|`)
              .join('\n')}

            `),
      );
      return null;
    });
  }
}
