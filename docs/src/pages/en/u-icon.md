---
title: u-icon
description: Wrapper for icons (svg preferred)
category: Components
menuTitle: Icon Wrapper
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> scoped </Badge>

Wrapper for icons (svg preferred)

## Properties

### borderRadius

<table>
<tr><th>Description</th><td><Markdown>border style of the icon wrapper</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>border-radius</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"circle" | "rounded" | "square"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'rounded'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### design

<table>
<tr><th>Description</th><td><Markdown>select the design of the icon wrapper</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>design</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"error" | "primary" | "secondary" | "success" | "warning"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'primary'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### flat

<table>
<tr><th>Description</th><td><Markdown>if true hide the border and background color of the wrapper</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>flat</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### outline

<table>
<tr><th>Description</th><td><Markdown>if true hide the background color of the wrapper</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>outline</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### udpateSvgColor

<table>
<tr><th>Description</th><td><Markdown>if true, svg color matches color with design</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>udpate-svg-color</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>default</Markdown></td><td><Markdown>eg. svg or img</Markdown></td></tr></table>
