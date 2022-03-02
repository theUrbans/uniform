# w-form



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


## Dependencies

### Depends on

- [u-stepper](../u-stepper)
- [u-grid](../u-grid)
- [u-row](../u-row)
- [u-button](../u-button)

### Graph
```mermaid
graph TD;
  u-form --> u-stepper
  u-form --> u-grid
  u-form --> u-row
  u-form --> u-button
  u-stepper --> u-row
  u-stepper --> u-button
  style u-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
