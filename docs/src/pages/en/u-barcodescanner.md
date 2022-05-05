---
title: u-barcodescanner
description: This component allows you to scan barcodes and QR codes. It is based on the [Capacitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.
category: Capacitor Specific
menuTitle: Barcode Scanner
badge: beta
layout: ../../layouts/MainLayout.astro
setup: |
  import Uniform from '../../components/Uniform.vue';
  import Badge from '../../components/Badge.vue';
  import { Markdown } from 'astro/components';
---

<Badge> shadow </Badge>

This component allows you to scan barcodes and QR codes. It is based on the [Capacitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.

## Properties

### library

<table>
<tr><th>Description</th><td><Markdown>[used library](https://github.com/capacitor-community/barcode-scanner)</Markdown></td></tr>
<tr><th>Attribute</th><td><Markdown>library</Markdown></td></tr>
<tr><th>Type</th><td><Markdown>```any```</Markdown></td></tr>
<tr><th>Default</th><td><Markdown></Markdown></td></tr>
<tr><th>Required</th><td><Markdown>false</Markdown></td></tr>
</table>

## Events

<table>
<tr><th>Name</th><th>Description</th></tr>

<tr><td><Markdown>uScan</Markdown></td><td><Markdown>return scanned element</Markdown></td></tr>
<tr><td><Markdown>uStartScan</Markdown></td><td><Markdown>event when scan is started</Markdown></td></tr>
<tr><td><Markdown>uStopScan</Markdown></td><td><Markdown>event when scan is stopped</Markdown></td></tr></table>

## Methods

### getPermission

<table>
<tr><th>Description</th><td><Markdown>force get camera permission</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>getPermission() => Promise<void></Markdown></td></tr>
</table>

### prepareCamera

<table>
<tr><th>Description</th><td><Markdown>prepare camera for faster startup</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>prepareCamera() => Promise<void></Markdown></td></tr>
</table>

### startScanner

<table>
<tr><th>Description</th><td><Markdown>begin scanning</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>startScanner() => Promise<void></Markdown></td></tr>
</table>

### stopScanner

<table>
<tr><th>Description</th><td><Markdown>cancel scanning</Markdown></td></tr>
<tr><th>Signature</th><td><Markdown>stopScanner() => Promise<void></Markdown></td></tr>
</table>

</table>
