---
title: u-stepper
subtitle: formular with multiple steps
category: Components
menuTitle: Stepper
position: 48
---

<badge> shadow </badge>








## Properties

### allData
|**Description**|disabled state of the submit button|
|---|---|
|**Attribute**|all-data|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### nextLabel
|**Description**|label of the next step button|
|---|---|
|**Attribute**|next-label|
|**Type**|`string`|
|**Default**|'next'|
|**Required**|false|


### nextStepAvailable
|**Description**|disabled state of the next step button|
|---|---|
|**Attribute**|next-step-available|
|**Type**|`boolean`|
|**Default**|true|
|**Required**|false|


### prevLabel
|**Description**|label of the previous step button|
|---|---|
|**Attribute**|prev-label|
|**Type**|`string`|
|**Default**|'previous'|
|**Required**|false|


### steps
|**Description**|define steps
without label -> steps: 3
with label -> steps: [1,'2',3]
both do the same, but with array you can define the label|
|---|---|
|**Attribute**|steps|
|**Type**|`(string \| number)[] \| number`|
|**Default**|['Step1', 'Step2', 'Step3']|
|**Required**|false|


### submitLabel
|**Description**|label of the next step button|
|---|---|
|**Attribute**|submit-label|
|**Type**|`string`|
|**Default**|'submit'|
|**Required**|false|



## Events
|Name|Description|
|---|---|
|uStep|emit wNextStep event on next/previous button click|
|uSubmit|emit wSubmit event on submit button click|










