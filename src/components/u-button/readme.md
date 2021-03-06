# w-button

<!-- Auto Generated Below -->

## Usage

### Example

```html
<u-button> Test Button </u-button>
<u-button design="success" outline> Outline Success Button </u-button>
<u-button design="error" flat> Flat Error Button </u-button>
```

## Properties

| Property   | Attribute  | Description                       | Type                                                            | Default     |
| ---------- | ---------- | --------------------------------- | --------------------------------------------------------------- | ----------- |
| `design`   | `design`   | color design                      | `"error" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled` | `disabled` | show disabled state               | `boolean`                                                       | `false`     |
| `flat`     | `flat`     | show only text                    | `boolean`                                                       | `false`     |
| `outline`  | `outline`  | change design, only show outlines | `boolean`                                                       | `false`     |
| `rounded`  | `rounded`  | enable border radius              | `"all" \| "bottom" \| "left" \| "none" \| "right" \| "top"`     | `'all'`     |
| `size`     | `size`     | button size                       | `"large" \| "medium" \| "small"`                                | `'medium'`  |
| `type`     | `type`     | set button type                   | `"button" \| "reset" \| "submit"`                               | `'button'`  |

## Events

| Event    | Description                 | Type                |
| -------- | --------------------------- | ------------------- |
| `uClick` | emit wClick on button click | `CustomEvent<void>` |

## Dependencies

### Used by

- [u-alert](../u-alert)
- [u-barcodescanner](../u-barcodescanner)
- [u-dialog](../u-dialog)
- [u-filepicker](../u-filepicker)
- [u-formgen](../u-formgen)
- [u-pagination](../u-pagination)
- [u-stepper](../u-stepper)

### Graph

```mermaid
graph TD;
  u-alert --> u-button
  u-barcodescanner --> u-button
  u-dialog --> u-button
  u-filepicker --> u-button
  u-formgen --> u-button
  u-pagination --> u-button
  u-stepper --> u-button
  style u-button fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
