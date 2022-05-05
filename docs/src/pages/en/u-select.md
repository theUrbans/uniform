---
title: u-select
description: handle single or multiple option input
category: Input Control
menuTitle: Select
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

handle single or multiple option input

## Properties

### autoCapitalize

<table>
<tr><th>Description</th><td><Markdown>decide if autocapitalize should be enabled</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>auto-capitalize</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"characters" | "none" | "off" | "on" | "sentences" | "words"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'off'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### autoComplete

<table>
<tr><th>Description</th><td><Markdown>possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>auto-complete</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'off'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### autoCorrect

<table>
<tr><th>Description</th><td><Markdown>decide if autocorect should be enabled</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>auto-correct</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"off" | "on"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'off'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### borderStyle

<table>
<tr><th>Description</th><td><Markdown>decide if input should have border radius</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>border-style</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"large" | "none" | "round" | "small"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'none'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### design

<table>
<tr><th>Description</th><td><Markdown>select design</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>design</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"error" | "primary" | "secondary" | "success" | "warning"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'secondary'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### disabled

<table>
<tr><th>Description</th><td><Markdown>decide if the input is disabled</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>disabled</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### doFocus

<table>
<tr><th>Description</th><td><Markdown>change this prop to true to focus the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>do-focus</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### errorMsg

<table>
<tr><th>Description</th><td><Markdown>show error message below the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>error-msg</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```''```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### inputType

<table>
<tr><th>Description</th><td><Markdown>type of the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>input-type</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'text'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### label

<table>
<tr><th>Description</th><td><Markdown>text of label
The label replace the placeholder</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### max

<table>
<tr><th>Description</th><td><Markdown>if input type === numeric -> max value</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>max</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### min

<table>
<tr><th>Description</th><td><Markdown>if input type === numeric -> min value</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>min</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### multiple

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>multiple</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### options

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>options</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```Option[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```[ { value: '1', label: 'One', disabled: true }, { value: '2', label: 'Two' }, { value: '3', label: 'Three', disabled: true }, { value: '4', label: 'Four' }, { value: '5', label: 'Five' }, { value: '6', label: 'Six' }, { value: '7', label: 'Seven' } ]```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### pattern

<table>
<tr><th>Description</th><td><Markdown>set the pattern for the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>pattern</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### readonly

<table>
<tr><th>Description</th><td><Markdown>decide if the input is readonly</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>readonly</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### required

<table>
<tr><th>Description</th><td><Markdown>decide if input is required (for forms)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>required</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### searchable

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>searchable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### size

<table>
<tr><th>Description</th><td><Markdown>size of the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>size</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"large" | "medium" | "small"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'medium'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### spellCheck

<table>
<tr><th>Description</th><td><Markdown>decide if spellcheck should be enabled</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>spell-check</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### step

<table>
<tr><th>Description</th><td><Markdown>if input type === numeric -> step value</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>step</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### validate

<table>
<tr><th>Description</th><td><Markdown>use function returning a boolean to validate the input -> if false, it displays error-msg</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>validate</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### value

<table>
<tr><th>Description</th><td><Markdown>the value of the input</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>value</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number | string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```''```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uBlur</Markdown></td><td><Markdown>emitted on blur</Markdown></td></tr>
<tr><td><Markdown>uChange</Markdown></td><td><Markdown>emitted on change</Markdown></td></tr>
<tr><td><Markdown>uFocus</Markdown></td><td><Markdown>emitted on focus</Markdown></td></tr>
<tr><td><Markdown>uInput</Markdown></td><td><Markdown>emitted on input</Markdown></td></tr></table>

## Methods

### setBlur

<table>
<tr><th>Description</th><td><Markdown>set blur on native input</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>setBlur() => Promise<void></Markdown></td></tr>
</table>

### setFocus

<table>
<tr><th>Description</th><td><Markdown>set focus on native input</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>setFocus() => Promise<void></Markdown></td></tr>
</table>

</table>
