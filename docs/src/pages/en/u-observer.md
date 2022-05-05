---
title: u-observer
description: emits events when slot becomes visible
category: Components
menuTitle: Observer
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

emits events when slot becomes visible

## Properties

### margin

<table>
<tr><th>Description</th><td><Markdown>margin around the element</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>margin</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### threshold

<table>
<tr><th>Description</th><td><Markdown>observer threshold</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>threshold</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number | number[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>invisible</Markdown></td><td><Markdown>emit `invisible` event, when element looses visibility in viewport</Markdown></td></tr>
<tr><td><Markdown>visible</Markdown></td><td><Markdown>emit `visible` event, when element get visible in viewport</Markdown></td></tr></table>

</table>
