---
title: u-stepper
description: formular with multiple steps
category: Input Control
menuTitle: Stepper
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

formular with multiple steps

## Properties

### alignment

<table>
<tr><th>Description</th><td><Markdown>decide the alignment of the stepper</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>alignment</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"horizontal" | "vertical"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'horizontal'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### allData

<table>
<tr><th>Description</th><td><Markdown>disabled state of the submit button</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>all-data</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### nextLabel

<table>
<tr><th>Description</th><td><Markdown>label of the next step button</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>next-label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'next'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### nextStepAvailable

<table>
<tr><th>Description</th><td><Markdown>disabled state of the next step button</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>next-step-available</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### prevLabel

<table>
<tr><th>Description</th><td><Markdown>label of the previous step button</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>prev-label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'previous'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### steps

<table>
<tr><th>Description</th><td><Markdown>define steps -
without label -> steps: 3,
with label -> steps: [1,'2',3],
both do the same, but with array you can define the label</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>steps</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```(string | number)[] | number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```['Step1', 'Step2', 'Step3']```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### submitLabel

<table>
<tr><th>Description</th><td><Markdown>label of the next step button</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>submit-label</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'submit'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uStep</Markdown></td><td><Markdown>emit wNextStep event on next/previous button click</Markdown></td></tr>
<tr><td><Markdown>uSubmit</Markdown></td><td><Markdown>emit wSubmit event on submit button click</Markdown></td></tr></table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>step-N</Markdown></td><td><Markdown>slot for every step, starting with N=1</Markdown></td></tr></table>
