# w-checkbox

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                             | Default    |
| ---------- | ---------- | ----------- | -------------------------------- | ---------- |
| `checked`  | `checked`  |             | `boolean`                        | `false`    |
| `disabled` | `disabled` |             | `boolean`                        | `false`    |
| `label`    | `label`    |             | `string`                         | `''`       |
| `size`     | `size`     |             | `"large" \| "medium" \| "small"` | `'medium'` |
| `tristate` | `tristate` |             | `boolean`                        | `false`    |


## Events

| Event     | Description | Type                   |
| --------- | ----------- | ---------------------- |
| `uChange` |             | `CustomEvent<boolean>` |


## Methods

### `set(checked: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [u-select](../u-select)
 - [u-table](../u-table)
 - [u-tablecell](../u-tablecell)

### Graph
```mermaid
graph TD;
  u-select --> u-checkbox
  u-table --> u-checkbox
  u-tablecell --> u-checkbox
  style u-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
