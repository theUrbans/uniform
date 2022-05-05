---
title: u-grid
description: no description provided
category: Layout
menuTitle: Grid
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

no description provided

## Properties

### area

<table>
<tr><th>Description</th><td><Markdown>optional naming of grid areas</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>area</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string[][]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### columns

<table>
<tr><th>Description</th><td><Markdown>number of columns or array of column widths</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>columns</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number | string[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### gap

<table>
<tr><th>Description</th><td><Markdown>gap size</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>gap</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'0'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### height

<table>
<tr><th>Description</th><td><Markdown>height of grid</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>height</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'max-content'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### rows

<table>
<tr><th>Description</th><td><Markdown>number of rows or array of row heights</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>rows</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number | string[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### width

<table>
<tr><th>Description</th><td><Markdown>width of grid</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'max-content'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
