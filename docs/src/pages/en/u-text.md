---
title: u-text
description: Text component to style fast. No added padding or margin.
category: Components
menuTitle: Text
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Text component to style fast. No added padding or margin.

## Properties

### color

<table>
<tr><th>Description</th><td><Markdown>font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>color</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'#fff'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>font size: string, e.g. '12px', '1rem'. Default is '1rem'.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'1rem'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### transform

<table>
<tr><th>Description</th><td><Markdown>text-transfrom: string, e.g. 'uppercase', 'lowercase'.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>transform</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### weight

<table>
<tr><th>Description</th><td><Markdown>font weight: string, e.g. 'bold'. Default is 'normal'.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>weight</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'normal'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
