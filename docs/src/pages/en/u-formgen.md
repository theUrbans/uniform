---
title: u-formgen
description: generate automatic forms with a JSON schema
category: Generator
menuTitle: Form Generator
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

generate automatic forms with a JSON schema

## Properties

### buttons

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>buttons</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```FormButton[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### fields

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>fields</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```FormField[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### layout

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>layout</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```''```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uNextStep</Markdown></td><td><Markdown>*not provided*</Markdown></td></tr>
<tr><td><Markdown>uSubmit</Markdown></td><td><Markdown>*not provided*</Markdown></td></tr></table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>default</Markdown></td><td><Markdown>custom content in top of the form</Markdown></td></tr></table>
