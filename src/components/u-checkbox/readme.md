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
- [u-tablecell](../u-tablecell)
- [u-tablegen](../u-tablegen)

### Graph

```mermaid
graph TD;
  u-select --> u-checkbox
  u-tablecell --> u-checkbox
  u-tablegen --> u-checkbox
  style u-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
