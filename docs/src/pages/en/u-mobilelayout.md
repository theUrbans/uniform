---
title: u-mobilelayout
description: Discord-App like layout with 3 swipeable columns
category: Layout
menuTitle: Mobile Layout
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Discord-App like layout with 3 swipeable columns

## Properties

### showOptions

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>show-options</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### sideWidth

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>side-width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'94%'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

## Methods

### activateOption

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>activateOption() => Promise<void></Markdown></td></tr>
</table>

### disableOption

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>disableOption() => Promise<void></Markdown></td></tr>
</table>

### showMain

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>showMain() => Promise<void></Markdown></td></tr>
</table>

### showMenu

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>showMenu() => Promise<void></Markdown></td></tr>
</table>

### showOption

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>showOption() => Promise<void></Markdown></td></tr>
</table>

</table>
