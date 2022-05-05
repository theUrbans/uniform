---
title: u-chip
description: show status of something
category: Components
menuTitle: Chip
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

show status of something

## Usage

### example

<Uniform>

<u-chip label="with label" design="emerald"> emerald </u-chip>
<u-chip design="red"> red </u-chip>

</Uniform>

## Properties

### bold

<table>
<tr><th>Description</th><td><Markdown>set chip text bold</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>bold</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### clickable

<table>
<tr><th>Description</th><td><Markdown>enable uClick event on chip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>clickable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### design

<table>
<tr><th>Description</th><td><Markdown>color of the chip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>design</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"amber" | "cyan" | "emerald" | "error" | "fuchsia" | "indigo" | "lime" | "pink" | "primary" | "red" | "secondary" | "slate" | "stone" | "success" | "teal" | "warning"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'stone'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### label

<table>
<tr><th>Description</th><td><Markdown>(optional) label of the chip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>size of the chip</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"large" | "medium" | "small"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'medium'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uClick</Markdown></td><td><Markdown>emit uClick event on chip click</Markdown></td></tr></table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>default</Markdown></td><td><Markdown>text content</Markdown></td></tr></table>
