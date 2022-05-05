---
title: u-collapsible
description: accordion like component
category: Components
menuTitle: Collapsible
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

accordion like component

## Usage

### example

<Uniform>

<u-collapsible label="Lorem ipsum dolor">
<div style="height: 100px">
<h1>Example</h1>
<u-chip> example badge </u-chip>
</div>
</u-collapsible>

</Uniform>

## Properties

### label

<table>
<tr><th>Description</th><td><Markdown>label of the spoiler</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>set the size of the spoiler</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"large" | "medium" | "small"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'medium'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uClose</Markdown></td><td><Markdown>emit when the spoiler is closed</Markdown></td></tr>
<tr><td><Markdown>uOpen</Markdown></td><td><Markdown>emit when the spoiler is opened</Markdown></td></tr></table>

## Methods

### closeCollapsible

<table>
<tr><th>Description</th><td><Markdown>method to close collapsible</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>closeCollapsible() => Promise<void></Markdown></td></tr>
</table>

### openCollapsible

<table>
<tr><th>Description</th><td><Markdown>method to open collapsible</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>openCollapsible() => Promise<void></Markdown></td></tr>
</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>default</Markdown></td><td><Markdown>content inside of the collapsible</Markdown></td></tr></table>
