---
title: u-card
description: Classic card component, usable with or without picture. Structured into header, body and footer. In the body can be added a picture.
category: Components
menuTitle: Card
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Classic card component, usable with or without picture. Structured into header, body and footer. In the body can be added a picture.

## Usage

### default

```html
<u-card>
  <u-cardheader>
    <u-col padding="0em" gap="0em">
      <u-text
        size="0.75rem"
        color="#9e9e9e"
        weight="bold"
        transform="uppercase"
      >
        Your day your way
      </u-text>
      <u-text size="1.25rem"> Your checklist for better sleep </u-text>
    </u-col>
  </u-cardheader>
  <u-cardbody>
    <u-cardimage src="https://api.lorem.space/image/shoes" />
  </u-cardbody>
  <u-cardfooter>
    <u-col>
      <u-button>BUY</u-button>
    </u-col>
  </u-cardfooter>
</u-card>
```

## Properties

### color

<table>
<tr><th>Description</th><td><Markdown>color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>color</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'#9EBADE'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### width

<table>
<tr><th>Description</th><td><Markdown>width of card: string, e.g. '12px', '20rem'. Default: '24rem'</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>width</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'24rem'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
