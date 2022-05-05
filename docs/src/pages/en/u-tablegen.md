---
title: u-tablegen
description: a table gets generated from the data passed in
category: Generator
menuTitle: Table Generator
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

a table gets generated from the data passed in

## Usage

### general

Column definition

```ts
interface HeadOptions {
  field: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right' | string;
  sortable?: boolean;
  bgcolor?(row: any): string;
  fontcolor?(row: any): string;
}
```

the `data` Property must use the same schema like the HeadOption.
eg is `field: 'id'`, the data must have objects with `id` keys.

### vue

tested with Vue 2.6

```html
<template>
  <u-tablegen :data.prop="data" :heading.prop="heading">
    <h1 slot="header">Example Table</h1>
  </u-tablegen>
</template>

<script>
  export default {
      data: () {
          return {
            data: [
              { id: 1, text: 'Id no 1' },
              { id: 2, text: 'Id no 2' },
              { id: 3, text: 'Id no 3' },
              { id: 4, text: 'Id no 4' },
              { id: 5, text: 'Id no 5' },
            ]
            heading: [{
              field: 'id',
              label: 'ID',
              align: 'center'
              }, {
              field: 'text',
              label: 'Description',
              sortable: true,
              bgcolor: (row) => row.id > 3 ? 'green' : 'blue',
            }]
         },
      }
  }
</script>
```

## Properties

### data

<table>
<tr><th>Description</th><td><Markdown>the data to be rendered as rows</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>data</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```any[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>true</Markdown></td></tr>
</table>

### fixedHeader

<table>
<tr><th>Description</th><td><Markdown>the header will be sticked to the top of the table</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>fixed-header</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### heading

<table>
<tr><th>Description</th><td><Markdown>the column definition and setting</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>heading</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```HeadOptions[]```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>true</Markdown></td></tr>
</table>

### observe

<table>
<tr><th>Description</th><td><Markdown>emits uLastElement when the last row is visible</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>observe</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### resizeable

<table>
<tr><th>Description</th><td><Markdown>should the rows be resizeable (not implemented yet)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>resizeable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### selectable

<table>
<tr><th>Description</th><td><Markdown>renders a checkbox in front of each row</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>selectable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uLastElement</Markdown></td><td><Markdown>emits uLastElement when the last element is reached and observe is true.</Markdown></td></tr>
<tr><td><Markdown>uSelect</Markdown></td><td><Markdown>emits uSelect when a row is selected. Returns an array of selected rows when selectable is true.</Markdown></td></tr>
<tr><td><Markdown>uStartHover</Markdown></td><td><Markdown>emits uStartHover when a row is hovered.</Markdown></td></tr>
<tr><td><Markdown>uStopHover</Markdown></td><td><Markdown>emits uStoptHover on mouse leave.</Markdown></td></tr>
<tr><td><Markdown>uUnselect</Markdown></td><td><Markdown>emits uUnselect when a row is unselected and selectable is false.</Markdown></td></tr></table>

## Methods

### select

<table>
<tr><th>Description</th><td><Markdown>programmatically select a row</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>select(index: number) => Promise<void></Markdown></td></tr>
</table>

### unselect

<table>
<tr><th>Description</th><td><Markdown>programmatically unselect a row</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>unselect(index: number) => Promise<void></Markdown></td></tr>
</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>footer</Markdown></td><td><Markdown>table foot</Markdown></td></tr>
<tr><td><Markdown>header</Markdown></td><td><Markdown>table head</Markdown></td></tr></table>
