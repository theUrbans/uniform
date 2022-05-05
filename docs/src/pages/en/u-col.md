---
title: u-col
description: Responsive flexbox/grid column
category: Layout
menuTitle: Column
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Responsive flexbox/grid column

## Properties

### align

<table>
<tr><th>Description</th><td><Markdown>flex align-items: start | center | end | space-between | space-around | space-evenly</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>align</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### area

<table>
<tr><th>Description</th><td><Markdown>use with w-grid to set area</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>area</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```''```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### end

<table>
<tr><th>Description</th><td><Markdown>grid column end</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>end</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### gap

<table>
<tr><th>Description</th><td><Markdown>flex gap: string, e.g. '1rem', '1px'</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>gap</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### justify

<table>
<tr><th>Description</th><td><Markdown>flex justify-content: flex-start | flex-end | center | baseline | stretch</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>justify</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"center" | "end" | "start" | "stretch"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### lg

<table>
<tr><th>Description</th><td><Markdown>size in large (≥1200px)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>lg</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### md

<table>
<tr><th>Description</th><td><Markdown>size in medium (≥992px)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>md</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### padding

<table>
<tr><th>Description</th><td><Markdown>padding bottom and top: string, e.g. '1rem', '1px'</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>padding</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>used with w-grid, set size based on number of columns on w-grid (default is 12)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```12```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### sm

<table>
<tr><th>Description</th><td><Markdown>size in small (≥768px)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>sm</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### start

<table>
<tr><th>Description</th><td><Markdown>grid column start</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>start</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### wrap

<table>
<tr><th>Description</th><td><Markdown>flex wrap: nowrap | wrap | wrap-reverse</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>wrap</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"nowrap" | "wrap" | "wrap-reverse"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### xl

<table>
<tr><th>Description</th><td><Markdown>size in extra large (≥1200px)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>xl</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
