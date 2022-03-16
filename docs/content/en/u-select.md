---
title: u-select
subtitle: no description provided
category: Components
menuTitle: Select
position: 45
---

<badge> shadow </badge>








## Properties

### autoCapitalize
|**Description**|decide if autocapitalize should be enabled|
|---|---|
|**Attribute**|auto-capitalize|
|**Type**|`"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words"`|
|**Default**|'off'|
|**Required**|false|


### autoComplete
|**Description**|possible types:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete|
|---|---|
|**Attribute**|auto-complete|
|**Type**|`string`|
|**Default**|'off'|
|**Required**|false|


### autoCorrect
|**Description**|decide if autocorect should be enabled|
|---|---|
|**Attribute**|auto-correct|
|**Type**|`"off" \| "on"`|
|**Default**|'off'|
|**Required**|false|


### borderStyle
|**Description**|decide if input should have border radius|
|---|---|
|**Attribute**|border-style|
|**Type**|`"large" \| "none" \| "round" \| "small"`|
|**Default**|'none'|
|**Required**|false|


### design
|**Description**|select design
possible values:
- 'secondary', 'primary', 'error', 'success', 'warning'|
|---|---|
|**Attribute**|design|
|**Type**|`"error" \| "primary" \| "secondary" \| "success" \| "warning"`|
|**Default**|'secondary'|
|**Required**|false|


### disabled
|**Description**|decide if the input is disabled|
|---|---|
|**Attribute**|disabled|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### doFocus
|**Description**|change this prop to true to focus the input|
|---|---|
|**Attribute**|do-focus|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### errorMsg
|**Description**|show error message below the input|
|---|---|
|**Attribute**|error-msg|
|**Type**|`string`|
|**Default**|''|
|**Required**|false|


### inputType
|**Description**|type of the input|
|---|---|
|**Attribute**|input-type|
|**Type**|`"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`|
|**Default**|'text'|
|**Required**|false|


### label
|**Description**|text of label
The label replace the placeholder|
|---|---|
|**Attribute**|label|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### max
|**Description**|if input type == numeric -> max value|
|---|---|
|**Attribute**|max|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### min
|**Description**|if input type == numeric -> min value|
|---|---|
|**Attribute**|min|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### multiple
|**Description**|*not provided*|
|---|---|
|**Attribute**|multiple|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### options
|**Description**|*not provided*|
|---|---|
|**Attribute**|undefined|
|**Type**|`Option[]`|
|**Default**|[
{ value: '1', label: 'One', disabled: true },
{ value: '2', label: 'Two' },
{ value: '3', label: 'Three', disabled: true },
{ value: '4', label: 'Four' },
{ value: '5', label: 'Five' },
{ value: '6', label: 'Six' },
{ value: '7', label: 'Seven' },
]|
|**Required**|false|


### pattern
|**Description**|set the pattern for the input|
|---|---|
|**Attribute**|pattern|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### readonly
|**Description**|decide if the input is readonly|
|---|---|
|**Attribute**|readonly|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### required
|**Description**|decide if input is required (for forms)|
|---|---|
|**Attribute**|required|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### searchable
|**Description**|*not provided*|
|---|---|
|**Attribute**|searchable|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### size
|**Description**|size of the input|
|---|---|
|**Attribute**|size|
|**Type**|`"large" \| "medium" \| "small"`|
|**Default**|'medium'|
|**Required**|false|


### spellCheck
|**Description**|decide if spellcheck should be enabled|
|---|---|
|**Attribute**|spell-check|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### step
|**Description**|if input type == numeric -> step value|
|---|---|
|**Attribute**|step|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### validate
|**Description**|use function returning a boolean to validate the input -> if false, it displays error-msg|
|---|---|
|**Attribute**|validate|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### value
|**Description**|the value of the input|
|---|---|
|**Attribute**|value|
|**Type**|`number \| string`|
|**Default**|''|
|**Required**|false|



## Events
|Name|Description|
|---|---|
|uBlur|emitted on blur|
|uChange|emitted on change|
|uFocus|emitted on focus|
|uInput|emitted on input|


## Methods


### setBlur
|**Description**|set blur on native input|
|---|---|
|**Signature**|`setBlur() => Promise<void>`|


### setFocus
|**Description**|set focus on native input|
|---|---|
|**Signature**|`setFocus() => Promise<void>`|





