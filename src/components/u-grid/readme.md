# w-grid

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute | Description                                 | Type                 | Default         |
| --------- | --------- | ------------------------------------------- | -------------------- | --------------- |
| `area`    | --        | optional naming of grid areas               | `string[][]`         | `[]`            |
| `columns` | `columns` | number of columns or array of column widths | `number \| string[]` | `undefined`     |
| `gap`     | `gap`     | gap size                                    | `string`             | `'0'`           |
| `height`  | `height`  | height of grid                              | `string`             | `'max-content'` |
| `rows`    | `rows`    | number of rows or array of row heights      | `number \| string[]` | `undefined`     |
| `width`   | `width`   | width of grid                               | `string`             | `'max-content'` |

## Dependencies

### Used by

- [u-desktoplayout](../u-desktoplayout)
- [u-formgen](../u-formgen)
- [u-stepper](../u-stepper)
- [u-tabletlayout](../u-tabletlayout)

### Graph

```mermaid
graph TD;
  u-desktoplayout --> u-grid
  u-formgen --> u-grid
  u-stepper --> u-grid
  u-tabletlayout --> u-grid
  style u-grid fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
