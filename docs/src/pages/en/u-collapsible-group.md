---
title: u-collapsible-group
description: group collapsible elements
category: Components
menuTitle: Collapsible Group
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

group collapsible elements

## Properties

### onlyOneOpen

<table>
<tr><th>Description</th><td><Markdown>if true, only one collapsible can be open at a time</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>only-one-open</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>default</Markdown></td><td><Markdown>collapsible elements</Markdown></td></tr></table>
