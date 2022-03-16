---
title: u-table
subtitle: no description provided
category: Components
menuTitle: Table
position: 50
---

<badge> shadow </badge>








## Properties

### data
|**Description**|*not provided*|
|---|---|
|**Attribute**|undefined|
|**Type**|`any[]`|
|**Default**|[
{ id: 1, name: 'test', age: '20' },
{ id: 2, age: 20, name: '*test2*\n_test_\n*xd*' },
{ id: 3, name: 'test3', age: '40' },
{ id: 4, name: 'test4', age: '50' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 5, name: 'test5', age: '-60' },
{ id: 6, name: 'test6', age: '70' },
{ id: 7, name: 'test2', age: '30' },
{ id: 8, name: '.test3.', age: '40' },
{ id: 9, name: 'test4', age: '50' },
{ id: 10, name: 'test5', age: '60' },
{ id: 11, name: 'test6', age: '70' },
{ id: 12, name: 'test2', age: '30' },
{ id: 6, name: 'test6', age: '70' },
{ id: 7, name: 'test2', age: '-30' },
{ id: 8, name: '.test3.', age: '40' },
]|
|**Required**|false|


### fixedHeader
|**Description**|*not provided*|
|---|---|
|**Attribute**|fixed-header|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### heading
|**Description**|*not provided*|
|---|---|
|**Attribute**|undefined|
|**Type**|`HeadOptions[]`|
|**Default**|[
{ field: 'id', label: 'ID', align: 'center', sortable: true, width: '10%' },
{
field: 'name',
label: 'Name',
width: '80%',
bgcolor: row => {
return row.name.includes('2') ? '#e7c2ff' : '';
},
},
{
field: 'age',
label: 'Age',
align: 'right',
sortable: true,
width: '10%',
// bgcolor: row => {
//   return row.age >= 0 ? '#afe6a8' : '#ffc382';
// },
// fontcolor: () => {
//   return 'black';
// },
},
]|
|**Required**|false|


### observe
|**Description**|*not provided*|
|---|---|
|**Attribute**|observe|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### resizeable
|**Description**|*not provided*|
|---|---|
|**Attribute**|resizeable|
|**Type**|`boolean`|
|**Default**|false|
|**Required**|false|


### selectable
|**Description**|*not provided*|
|---|---|
|**Attribute**|selectable|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|



## Events
|Name|Description|
|---|---|
|uLastElement|*not provided*|
|uSelect|*not provided*|
|uStartHover|*not provided*|
|uStopHover|*not provided*|
|uUnselect|*not provided*|


## Methods


### select
|**Description**|*not provided*|
|---|---|
|**Signature**|`select(index: number) => Promise<void>`|


### unselect
|**Description**|*not provided*|
|---|---|
|**Signature**|`unselect(index: number) => Promise<void>`|





