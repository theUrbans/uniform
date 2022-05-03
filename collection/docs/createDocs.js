import { writeFile, appendFile, readFile } from 'fs/promises';
import { stat } from 'fs';
import storyTemplate from './storyTemplate';
export default class Documentation {
  constructor(components) {
    this.components = components;
  }
  getDocTags(entry, name, defaultValue) {
    const path = entry.docsTags.find((d) => d.name === name);
    return path ? path.text : defaultValue;
  }
  formatCode(code) {
    let inCodeBlock = false;
    return code
      .split('\n')
      .map((line) => {
      if (!line)
        return;
      if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        return line;
      }
      if (inCodeBlock)
        return line;
      if (line.startsWith('import'))
        return `  ${line}`;
      return line.trim();
    })
      .join('\n');
  }
  createExample(code) {
    let inCodeBlock = false;
    return code
      .split('\n')
      .map((line) => {
      if (!line)
        return;
      if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        return;
      }
      if (inCodeBlock)
        return line;
      return line.trim();
    })
      .join('\n');
  }
  createSidebar() {
    const path = './docs/src/sidebar.json';
    const categories = new Map();
    this.components.forEach((c) => {
      const category = this.getDocTags(c, 'categorie', 'Components');
      categories.set(category, { text: category, header: true, childs: [] });
    });
    let data = Array.from(categories)
      .map((v) => v[1])
      .sort((a, b) => a.text.localeCompare(b.text));
    this.components.map((c) => {
      const state = this.getDocTags(c, 'state', '🔵');
      if (state === '🔵')
        return null;
      const name = this.getDocTags(c, 'name', c.tag);
      const index = data.findIndex((v) => v.text === this.getDocTags(c, 'categorie', 'Components'));
      data[index].childs.push({ text: name, link: `en/${c.tag}` });
      return null;
    });
    data = data.map((v) => [
      {
        text: v.text,
        header: v.header
      },
      ...v.childs
    ]);
    data.unshift([
      { text: 'Getting Started', header: true },
      { text: 'Introduction', link: 'en' },
      { text: 'Installation', link: 'en/installation' }
    ]);
    writeFile(path, JSON.stringify({ en: data.flat() }, null, 2));
  }
  async updatePackageJson() {
    await readFile('./package.json', 'utf8').then((data) => {
      const json = JSON.parse(data);
      const { version } = json;
      readFile('./docs/package.json', 'utf8').then((data) => {
        const json = JSON.parse(data);
        json.version = version;
        json.dependencies['@theurbans/uniform'] = `^${version}`;
        writeFile('./docs/package.json', JSON.stringify(json, null, 2));
      });
    });
  }
  createReadme() {
    writeFile('./readme.md', this.formatCode(`# UI Library by [Hoer GmbH](https://hoer-electronic.de/en/)

      For usage with frameworks please refer to official [StencilJS Documentation](https://stenciljs.com/docs/overview).

      - 🟢 ready (feature complete for now)
      - 🟡 beta (changes possible, not feature complete)
      - 🔴 not ready (unstyled / no functions)
      - 🔵 planned (created, but default files)
      
      ## Component overview
      |Name|Component|Description|State|
      |---|---|---|---|\n`));
    const data = this.components.map((c) => {
      const name = this.getDocTags(c, 'name', c.tag);
      const desc = this.getDocTags(c, 'description', 'no description provided');
      const state = this.getDocTags(c, 'state', '🔵');
      const path = `./src/components/${c.tag}`;
      return `|[${name}](${path})|${c.tag}|${desc}|${state}|`;
    });
    appendFile('./readme.md', data.join('\n'));
  }
  createStories() {
    this.components.map((c) => {
      const name = this.getDocTags(c, 'name', c.tag);
      const storyPath = c.filePath.split('/').slice(0, -1).join('/');
      stat(`${storyPath}/${c.tag}.stories.tsx`, (_error, file) => {
        if (!file)
          return;
        writeFile(`${storyPath}/${c.tag}.stories.tsx`, storyTemplate(name, c.tag, c.props));
      });
      return null;
    });
  }
  createDocs() {
    this.updatePackageJson();
    this.createSidebar();
    this.components.map((c) => {
      const docPath = `./docs/src/pages/en/${c.tag}.md`;
      // `./docs/content/en/${c.tag}.md`,
      const name = this.getDocTags(c, 'name', c.tag);
      const state = this.getDocTags(c, 'state', '🔵');
      if (state === '🔵')
        return null;
      const desc = this.getDocTags(c, 'description', '*no description provided*');
      const cat = this.getDocTags(c, 'categorie', 'Components');
      writeFile(docPath, this.formatCode(`---
                title: ${c.tag}
                description: ${desc.replace(/\*/g, '')}
                category: ${cat !== 'Components'
        ? cat
        : state === '🔵'
          ? 'coming soon'
          : 'Components'}
                menuTitle: ${name}
                badge: ${state === '🔵'
        ? 'planned'
        : state === '🔴'
          ? 'work in progess'
          : state === '🟡'
            ? 'beta'
            : 'ready'}
layout: ../../layouts/MainLayout.astro
setup: |
import Uniform from '../../components/Uniform.vue';
import Badge from '../../components/Badge.vue';
import { Markdown } from 'astro/components';
---

            <Badge> ${c.encapsulation} </Badge>

            ${desc.replace(/\*/g, '')}

            ${c.docs ? c.docs : ''}
            \n
            ${Object.keys(c.usage).length ? '## Usage\n' : ''}
            ${Object.entries(c.usage)
        .map(([key, value]) => {
        if (key === 'example')
          return `### ${key}
              <Uniform>
              ${this.createExample(value)}
              </Uniform>`;
        return `### ${key}\n${value}`;
      })
        .join('\n')}
  \n
            ${c.props.length > 0 ? '## Properties' : ''} \n
            ${c.props
        .map((prop) => `### ${prop.name}\n
              <table>
              <tr><th>Description</th><td><Markdown>${prop.docs || '*not provided*'}</Markdown></td></tr>
              <tr><th>Attribute</th><td><Markdown>${prop.attr || prop.name}</Markdown></td></tr>
              <tr><th>Type</th><td><Markdown>\`\`\`${prop.type.replace(/\|/g, '|')}\`\`\`</Markdown></td></tr>
              <tr><th>Default</th><td><Markdown>${prop.default
        ? `\`\`\`${prop.default.replace(/\n/g, '')}\`\`\``
        : ''}</Markdown></td></tr>
              <tr><th>Required</th><td><Markdown>${prop.required}</Markdown></td></tr>
              </table>`)
        .join('\n\n')}
\n
            ${c.events.length > 0
        ? `## Events
            <table>
            <tr><th>Name</th><th>Description</th></tr>
            `
        : ''}
            ${`${c.events
        .map((e) => `<tr><td><Markdown>${e.event}</Markdown></td><td><Markdown>${e.docs || '*not provided*'}</Markdown></td></tr>`)
        .join('\n')}</table>`}
\n
            ${c.methods.length > 0 ? '## Methods' : ''}
\n
            ${c.methods
        .map((m) => `### ${m.name}
              <table>
              <tr><th>Description</th><td><Markdown>${m.docs || '*not provided*'}</Markdown></td></tr>
              <tr><th>Signature</th><td><Markdown>${m.signature}</Markdown></td></tr>
              </table>`)
        .join('\n\n')}
            
            ${c.slots.length > 0
        ? `## Slots
            <table>
            <tr><th>Name</th><th>Description</th></tr>
            `
        : ''}
            ${`${c.slots
        .map((s) => `<tr><td><Markdown>${s.name}</Markdown></td><td><Markdown>${s.docs || '*not provided*'}</Markdown></td></tr>`)
        .join('\n')}</table>`}

`));
      return null;
    });
  }
}
