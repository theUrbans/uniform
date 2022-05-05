---
title: u-button
description: no description provided
category: Components
menuTitle: Button
badge: ready
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

no description provided

## Usage

### example

<Uniform>

<u-button> Test Button </u-button>
<u-button design="success" outline> Outline Success Button </u-button>
<u-button design="error" flat> Flat Error Button </u-button>

</Uniform>

## Properties

### design

<table>
<tr><th>Description</th><td><Markdown>color design</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>design</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"error" | "primary" | "secondary" | "success" | "warning"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'primary'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### disabled

<table>
<tr><th>Description</th><td><Markdown>show disabled state</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>disabled</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### flat

<table>
<tr><th>Description</th><td><Markdown>show only text</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>flat</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### outline

<table>
<tr><th>Description</th><td><Markdown>change design, only show outlines</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>outline</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### rounded

<table>
<tr><th>Description</th><td><Markdown>enable border radius</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>rounded</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"all" | "bottom" | "left" | "none" | "right" | "top"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'all'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>button size</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"large" | "medium" | "small"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'medium'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### type

<table>
<tr><th>Description</th><td><Markdown>set button type</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>type</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"button" | "reset" | "submit"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'button'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uClick</Markdown></td><td><Markdown>emit wClick on button click</Markdown></td></tr></table>

</table>
