---
title: u-notification
description: Toast like notifications
category: Components
menuTitle: Notification
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

Toast like notifications

## Properties

### position

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>position</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```"bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right"```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown>```'top-right'```</Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

</table>

## Methods

### error

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>error(title: string, message?: string, delay?: number) => Promise<void></Markdown></td></tr>
</table>

### show

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>show(type: NotificationType, options: NotficationOption) => Promise<void></Markdown></td></tr>
</table>

### success

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>success(title: string, message?: string, delay?: number) => Promise<void></Markdown></td></tr>
</table>

### warning

<table>
<tr><th>Description</th><td><Markdown>*not provided*</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>warning(title: string, message?: string, delay?: number) => Promise<void></Markdown></td></tr>
</table>

</table>
