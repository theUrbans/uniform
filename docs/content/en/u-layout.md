---
title: u-layout
subtitle: layout which decides whether to use mobile or desktop layout
category: Components
menuTitle: Layout
position: 27
---

<badge> shadow </badge>




## Usage

### nuxt
```vue
<template>
  <u-layout>
    <u-menu slot="menu" />
    <nuxt slot="main" />
  </u-layout>
</template>
```












## Methods


### closeOption
|**Description**|*not provided*|
|---|---|
|**Signature**|`closeOption() => Promise<void>`|


### showOption
|**Description**|*not provided*|
|---|---|
|**Signature**|`showOption() => Promise<void>`|


## Slots
|Name|Description|
|---|---|
|main|main view|
|menu|menu view|
|option|option view|

