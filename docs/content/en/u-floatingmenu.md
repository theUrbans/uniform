---
title: u-floatingmenu
subtitle: Menu floating at initial position
category: Components
menuTitle: Floating Menu
position: 18
---

<badge> shadow </badge>








## Properties

### fixed
|**Description**|*not provided*|
|---|---|
|**Attribute**|fixed|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### menu
|**Description**|*not provided*|
|---|---|
|**Attribute**|undefined|
|**Type**|`MenuItem[]`|
|**Default**|[
{ name: '+ New' },
{ divider: true },
{ name: 'Edit', subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] } },
{ name: 'Copy' },
{ divider: true },
{
name: 'Open Recent',
subMenu: {
items: [{ name: 'HTML', subMenu: { items: [{ name: 'index.html' }, { name: 'about.html' }, { name: 'impressum.html' }] } }, { name: 'Item 2' }],
},
},
]|
|**Required**|false|















