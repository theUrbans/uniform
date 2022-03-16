---
title: u-barcodescanner
subtitle: This component allows you to scan barcodes and QR codes. It is based on the [Capicitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.
category: Components
menuTitle: Barcode Scanner
position: 2
---

<badge> shadow </badge>








## Properties

### library
|**Description**|[used library](https://github.com/capacitor-community/barcode-scanner)|
|---|---|
|**Attribute**|library|
|**Type**|`any`|
|**Default**|undefined|
|**Required**|false|



## Events
|Name|Description|
|---|---|
|uScan|return scanned element|
|uStartScan|event when scan is started|
|uStopScan|event when scan is stopped|


## Methods


### getPermission
|**Description**|force get camera permission|
|---|---|
|**Signature**|`getPermission() => Promise<void>`|


### prepareCamera
|**Description**|prepare camera for faster startup|
|---|---|
|**Signature**|`prepareCamera() => Promise<void>`|


### startScanner
|**Description**|begin scanning|
|---|---|
|**Signature**|`startScanner() => Promise<void>`|


### stopScanner
|**Description**|cancel scanning|
|---|---|
|**Signature**|`stopScanner() => Promise<void>`|





