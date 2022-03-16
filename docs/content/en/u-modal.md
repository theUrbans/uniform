---
title: u-modal
subtitle: A modal window that can be used to display information to the user.
category: Components
menuTitle: Modal
position: 34
---

<badge> shadow </badge>




## Usage

### events

- open modal

```js
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('show-modal', {
    detail: { name: 'MODAL_NAME', params: { customParam: '42' } }
    })
);
```

- close modal

```js
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('close-modal', {
    detail: { name: 'MODAL_NAME' }
    })
);
```



## Properties

### closeOnClick
|**Description**|should the modal be closed on backdrop click|
|---|---|
|**Attribute**|close-on-click|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### maxHeight
|**Description**|(DESKTOP only) resizable max width|
|---|---|
|**Attribute**|max-height|
|**Type**|`string`|
|**Default**|'auto'|
|**Required**|false|


### maxWidth
|**Description**|(DESKTOP only) resizable max height|
|---|---|
|**Attribute**|max-width|
|**Type**|`string`|
|**Default**|'auto'|
|**Required**|false|


### minHeight
|**Description**|(DESKTOP only) resizable min height|
|---|---|
|**Attribute**|min-height|
|**Type**|`string`|
|**Default**|'auto'|
|**Required**|false|


### minWidth
|**Description**|(DESKTOP only) resizable min width|
|---|---|
|**Attribute**|min-width|
|**Type**|`string`|
|**Default**|'auto'|
|**Required**|false|


### mode
|**Description**|autoset mode for mobile or desktop|
|---|---|
|**Attribute**|mode|
|**Type**|`"desktop" \| "mobile"`|
|**Default**|'desktop'|
|**Required**|false|


### moveable
|**Description**|(DESKTOP only) should the modal be moveable by dragging the header|
|---|---|
|**Attribute**|moveable|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### name
|**Description**|name of the modal - needed to call methods|
|---|---|
|**Attribute**|name|
|**Type**|`string`|
|**Default**|undefined|
|**Required**|false|


### resetPosition
|**Description**|(DESKTOP only) reset the modal position to the center of the screen|
|---|---|
|**Attribute**|reset-position|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### resizeable
|**Description**|(DESKTOP only) should the modal be resizable|
|---|---|
|**Attribute**|resizeable|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### topRightClose
|**Description**|display a close button in the top right corner|
|---|---|
|**Attribute**|top-right-close|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|



## Events
|Name|Description|
|---|---|
|beforeOpen|event with given params|


## Methods


### closeModal
|**Description**|method to close the modal|
|---|---|
|**Signature**|`closeModal(name: string) => Promise<void>`|


### showModal
|**Description**|method to open the modal|
|---|---|
|**Signature**|`showModal(name: string) => Promise<void>`|


## Slots
|Name|Description|
|---|---|
|body|The body of the modal|
|header|The header of the modal|

