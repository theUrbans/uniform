---
title: u-tooltip
subtitle: This component allows you to display a tooltip.
category: Components
menuTitle: Tooltip
position: 60
---

<badge> shadow </badge>




## Usage

### default
```html
<u-tooltip text="i am a button with an tooltip">
    <u-button></u-button>
</u-tooltip>
```

```html
<u-tooltip content>
    <div slot="content">
        <u-headline>Button with Custom Tooltip</u-headline>
        <u-paragraph>Custom components in tootltip</u-paragraph>
    </div>
    <u-button></u-button>
</u-tooltip>
```


## Properties

### alignment
|**Description**|arrow alignment|
|---|---|
|**Attribute**|alignment|
|**Type**|`"center" \| "end" \| "start"`|
|**Default**|'center'|
|**Required**|false|


### axis
|**Description**|position of the tooltip|
|---|---|
|**Attribute**|axis|
|**Type**|`"x" \| "y"`|
|**Default**|'y'|
|**Required**|false|


### content
|**Description**|render custom content instead of text|
|---|---|
|**Attribute**|content|
|**Type**|`boolean`|
|**Default**|undefined|
|**Required**|false|


### text
|**Description**|text of the tooltip|
|---|---|
|**Attribute**|text|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### trigger
|**Description**|choose trigger event|
|---|---|
|**Attribute**|trigger|
|**Type**|`"click" \| "hover"`|
|**Default**|'hover'|
|**Required**|false|












## Slots
|Name|Description|
|---|---|
|content|(optional) content of the tooltip -> alternative to text, content prop must be used|
|default|element which receives the tooltip|

