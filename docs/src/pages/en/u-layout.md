---
title: u-layout
description: layout which decides whether to use mobile or desktop layout
category: Layout
menuTitle: Layout
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

layout which decides whether to use mobile or desktop layout

## Usage

### nuxt

```vue
<template>
  <u-layout>
    <u-menu slot="menu" />
    <nuxt slot="main" />
  </u-layout>
</template>
```

</table>

## Methods

### closeOption

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>closeOption() => Promise<void></Markdown></td></tr>
</table>

### showOption

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>showOption() => Promise<void></Markdown></td></tr>
</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>main</Markdown></td><td><Markdown>main view</Markdown></td></tr>
<tr><td><Markdown>menu</Markdown></td><td><Markdown>menu view</Markdown></td></tr>
<tr><td><Markdown>option</Markdown></td><td><Markdown>option view</Markdown></td></tr></table>
