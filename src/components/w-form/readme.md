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
| `wNextStep` |             | `CustomEvent<any>` |
| `wSubmit`   |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [w-stepper](../w-stepper)
- [w-grid](../w-grid)
- [w-row](../w-row)
- [w-button](../w-button)

### Graph
```mermaid
graph TD;
  w-form --> w-stepper
  w-form --> w-grid
  w-form --> w-row
  w-form --> w-button
  w-stepper --> w-row
  w-stepper --> w-button
  style w-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
