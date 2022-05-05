---
title: u-progress
description: no description provided
category: Components
menuTitle: Progress
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

no description provided

## Properties

### borderless

<table>
<tr><th>Description</th><td><Markdown>Remove border.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>borderless</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```false```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### height

<table>
<tr><th>Description</th><td><Markdown>Size of height of the bar, standard set to 1.25rem. Possible to use any unit.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>height</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```string```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'1.25rem'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### max

<table>
<tr><th>Description</th><td><Markdown>Maximum of values</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>max</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```100```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### showPercentage

<table>
<tr><th>Description</th><td><Markdown>Enables text, which shows the percentage.</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>show-percentage</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```boolean```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```true```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

### value

<table>
<tr><th>Description</th><td><Markdown>Value used to calculate progress</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>value</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```number```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```100```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

</table>
