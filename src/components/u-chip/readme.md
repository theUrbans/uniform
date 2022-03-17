# w-chip

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute   | Description                  | Type                                                                                                                                                                                    | Default     |
| ----------- | ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `bold`      | `bold`      | set chip text bold           | `boolean`                                                                                                                                                                               | `false`     |
| `clickable` | `clickable` | enable uClick event on chip  | `boolean`                                                                                                                                                                               | `false`     |
| `design`    | `design`    | color of the chip            | `"amber" \| "cyan" \| "emerald" \| "error" \| "fuchsia" \| "indigo" \| "lime" \| "pink" \| "primary" \| "red" \| "secondary" \| "slate" \| "stone" \| "success" \| "teal" \| "warning"` | `'stone'`   |
| `label`     | `label`     | (optional) label of the chip | `string`                                                                                                                                                                                | `undefined` |
| `size`      | `size`      | size of the chip             | `"large" \| "medium" \| "small"`                                                                                                                                                        | `'medium'`  |

## Events

| Event    | Description                     | Type                |
| -------- | ------------------------------- | ------------------- |
| `uClick` | emit uClick event on chip click | `CustomEvent<void>` |

## Slots

| Slot        | Description  |
| ----------- | ------------ |
| `"default"` | text content |

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
