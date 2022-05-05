---
title: u-modal
description: A modal window that can be used to display information to the user.
category: Modal
menuTitle: Modal
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

A modal window that can be used to display information to the user.

## Usage

### events

- open modal

```js
const body = document.querySelector('body');
body.dispatchEvent(
  new CustomEvent('show-modal', {
    detail: { name: 'MODAL_NAME', params: { customParam: '42' } }
  })
);
```

- close modal

```js
const body = document.querySelector('body');
body.dispatchEvent(
  new CustomEvent('close-modal', {
    detail: { name: 'MODAL_NAME' }
  })
);
```

## Properties

### closeOnClick

<table>
<tr><th>Description</th><td><Markdown>should the modal be closed on backdrop click</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>close-on-click</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### maxHeight

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) resizable max width</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>max-height</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'auto'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### maxWidth

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) resizable max height</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>max-width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'auto'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### minHeight

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) resizable min height</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>min-height</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'auto'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### minWidth

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) resizable min width</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>min-width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'auto'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### mode

<table>
<tr><th>Description</th><td><Markdown>autoset mode for mobile or desktop</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>mode</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"desktop" | "mobile"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'desktop'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### moveable

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) should the modal be moveable by dragging the header</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>moveable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### name

<table>
<tr><th>Description</th><td><Markdown>name of the modal - needed to call methods</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>name</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### resetPosition

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) reset the modal position to the center of the screen</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>reset-position</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### resizeable

<table>
<tr><th>Description</th><td><Markdown>(DESKTOP only) should the modal be resizable</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>resizeable</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### topRightClose

<table>
<tr><th>Description</th><td><Markdown>display a close button in the top right corner</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>top-right-close</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>beforeOpen</Markdown></td><td><Markdown>event with given params</Markdown></td></tr></table>

## Methods

### closeModal

<table>
<tr><th>Description</th><td><Markdown>method to close the modal</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>closeModal(name: string) => Promise<void></Markdown></td></tr>
</table>

### showModal

<table>
<tr><th>Description</th><td><Markdown>method to open the modal</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>showModal(name: string) => Promise<void></Markdown></td></tr>
</table>

## Slots

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>body</Markdown></td><td><Markdown>The body of the modal</Markdown></td></tr>
<tr><td><Markdown>header</Markdown></td><td><Markdown>The header of the modal</Markdown></td></tr></table>
