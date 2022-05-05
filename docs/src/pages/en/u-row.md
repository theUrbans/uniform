---
title: u-row
description: Responsive flexbox/grid row
category: Layout
menuTitle: Row
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> scoped </Badge>

Responsive flexbox/grid row

## Properties

### align

<table>
<tr><th>Description</th><td><Markdown>flex align-items</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>align</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"center" | "end" | "start" | "stretch"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### container

<table>
<tr><th>Description</th><td><Markdown>should row be responsive?</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>container</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
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

### gutter

<table>
<tr><th>Description</th><td><Markdown>how many columns are in the row?</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>gutter</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### justify

<table>
<tr><th>Description</th><td><Markdown>flex justify-content</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>justify</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'start'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### padding

<table>
<tr><th>Description</th><td><Markdown>padding left and right: string, e.g. '1rem', '1px'</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>padding</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### width

<table>
<tr><th>Description</th><td><Markdown>flex width behaviour</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"auto" | "content" | "full"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### wrap

<table>
<tr><th>Description</th><td><Markdown>flex wrap</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>wrap</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"nowrap" | "wrap" | "wrap-reverse"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
