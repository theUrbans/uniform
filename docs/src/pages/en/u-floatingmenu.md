---
title: u-floatingmenu
description: Menu floating at initial position
category: Components
menuTitle: Floating Menu
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Menu floating at initial position

## Properties

### fixed

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>fixed</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### menu

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>menu</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```MenuItem[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[ { name: '+ New' }, { divider: true }, { name: 'Edit', subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] } }, { name: 'Copy' }, { divider: true }, { name: 'Open Recent', subMenu: { items: [ { name: 'HTML', subMenu: { items: [ { name: 'index.html' }, { name: 'about.html' }, { name: 'impressum.html' } ] } }, { name: 'Item 2' } ] } } ]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
