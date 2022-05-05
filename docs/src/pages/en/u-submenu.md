---
title: u-submenu
description: no description provided
category: Components
menuTitle: Sub-Menu
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> scoped </Badge>

no description provided

## Properties

### active

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>active</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### depthLevel

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>depth-level</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```0```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### subMenu

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>subMenu</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```MenuItem[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uOpenSubMenu</Markdown></td><td><Markdown>*not provided*</Markdown></td></tr></table>

</table>
