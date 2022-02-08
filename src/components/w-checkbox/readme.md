# w-checkbox



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                             | Default    |
| ---------- | ---------- | ----------- | -------------------------------- | ---------- |
| `checked`  | `checked`  |             | `boolean`                        | `false`    |
| `disabled` | `disabled` |             | `boolean`                        | `false`    |
| `label`    | `label`    |             | `string`                         | `''`       |
| `size`     | `size`     |             | `"large" \| "medium" \| "small"` | `'medium'` |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `wChange` |             | `CustomEvent<any>` |


## Methods

### `set(checked: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [w-select](../w-select)

### Graph
```mermaid
graph TD;
  w-select --> w-checkbox
  style w-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
