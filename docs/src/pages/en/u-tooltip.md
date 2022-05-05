---
title: u-tooltip
description: This component allows you to display a tooltip.
category: Components
menuTitle: Tooltip
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

This component allows you to display a tooltip.

## Usage

### default

```html
<u-tooltip text="i am a button with an tooltip">
  <u-button></u-button>
</u-tooltip>
```

```html
<u-tooltip content>
  <div slot="content">
    <u-headline>Button with Custom Tooltip</u-headline>
    <u-paragraph>Custom components in tootltip</u-paragraph>
  </div>
  <u-button></u-button>
</u-tooltip>
```

## Properties

### alignment

<table>
<tr><th>Description</th><td><Markdown>arrow alignment</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>alignment</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"center" | "end" | "start"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'center'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### axis

<table>
<tr><th>Description</th><td><Markdown>position of the tooltip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>axis</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"x" | "y"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'y'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### content

<table>
<tr><th>Description</th><td><Markdown>render custom content instead of text</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>content</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### text

<table>
<tr><th>Description</th><td><Markdown>text of the tooltip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>text</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### trigger

<table>
<tr><th>Description</th><td><Markdown>choose trigger event</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>trigger</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"click" | "hover"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'hover'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>content</Markdown></td><td><Markdown>(optional) content of the tooltip -> alternative to text, content prop must be used</Markdown></td></tr>
<tr><td><Markdown>default</Markdown></td><td><Markdown>element which receives the tooltip</Markdown></td></tr></table>
