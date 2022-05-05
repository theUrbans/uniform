---
title: u-breadcrumb
description: Breadcrumb navigation component
category: Components
menuTitle: Breadcrumb
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Breadcrumb navigation component

## Usage

### vue

```html
<u-breadcrumb
  :items.prop="[{ name: 'test1', link: '/' }, { name: 'test2' }, { name: 'test3' }]"
>
</u-breadcrumb>
```

## Properties

### items

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>items</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```BreadCrumbItem[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[ { name: 'test1', link: '/test' }, { name: 'test2' }, { name: 'test3' } ]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### seperator

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>seperator</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uBreadcrumbClick</Markdown></td><td><Markdown>*not provided*</Markdown></td></tr></table>

</table>
