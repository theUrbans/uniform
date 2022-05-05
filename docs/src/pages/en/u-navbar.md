---
title: u-navbar
description: top or bottom navigation bar
category: Layout
menuTitle: Navigation Bar
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

top or bottom navigation bar

## Properties

### fixed

<table>
<tr><th>Description</th><td><Markdown>should the navbar be fixed to the top or bottom of the screen -
layout should be position relative</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>fixed</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### position

<table>
<tr><th>Description</th><td><Markdown>position of the navbar</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>position</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"bottom" | "top"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'top'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
