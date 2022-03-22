# u-collapsible

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                 | Type                             | Default     |
| -------- | --------- | --------------------------- | -------------------------------- | ----------- |
| `label`  | `label`   | label of the spoiler        | `string`                         | `undefined` |
| `size`   | `size`    | set the size of the spoiler | `"large" \| "medium" \| "small"` | `'medium'`  |

## Events

| Event    | Description                     | Type                |
| -------- | ------------------------------- | ------------------- |
| `uClose` | emit when the spoiler is closed | `CustomEvent<void>` |
| `uOpen`  | emit when the spoiler is opened | `CustomEvent<void>` |

## Methods

### `closeCollapsible() => Promise<void>`

method to close collapsible

#### Returns

Type: `Promise<void>`

### `openCollapsible() => Promise<void>`

method to open collapsible

#### Returns

Type: `Promise<void>`

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
