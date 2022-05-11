# u-breadcrumb

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                       | Type                       | Default     |
| -------- | --------- | --------------------------------- | -------------------------- | ----------- |
| `design` | `design`  | appereance of the breadcrumb link | `"primary" \| "secondary"` | `undefined` |
| `link`   | `link`    | link of the breadcrumb item       | `string`                   | `undefined` |

## Events

| Event              | Description                 | Type                |
| ------------------ | --------------------------- | ------------------- |
| `uBreadcrumbClick` | emit event on element click | `CustomEvent<void>` |

## Slots

| Slot        | Description        |
| ----------- | ------------------ |
| `"default"` | Breadcrumb content |

## Dependencies

### Depends on

- [u-link](../u-link)

### Graph

```mermaid
graph TD;
  u-breadcrumb --> u-link
  style u-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
