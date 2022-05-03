# u-formgen

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default |
| --------- | --------- | ----------- | -------------- | ------- |
| `buttons` | --        |             | `FormButton[]` | `[]`    |
| `fields`  | --        |             | `FormField[]`  | `[]`    |
| `layout`  | `layout`  |             | `string`       | `''`    |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `uNextStep` |             | `CustomEvent<any>` |
| `uSubmit`   |             | `CustomEvent<any>` |


## Slots

| Slot        | Description                       |
| ----------- | --------------------------------- |
| `"default"` | custom content in top of the form |


## Dependencies

### Depends on

- [u-stepper](../u-stepper)
- [u-grid](../u-grid)
- [u-row](../u-row)
- [u-button](../u-button)

### Graph
```mermaid
graph TD;
  u-formgen --> u-stepper
  u-formgen --> u-grid
  u-formgen --> u-row
  u-formgen --> u-button
  u-stepper --> u-grid
  u-stepper --> u-row
  u-stepper --> u-button
  style u-formgen fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
