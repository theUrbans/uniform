# w-select

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute         | Description                                                                               | Type                                                                                  | Default                                                                                                                                                                                                                                                      |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `autoCapitalize` | `auto-capitalize` | decide if autocapitalize should be enabled                                                | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words"`                   | `'off'`                                                                                                                                                                                                                                                      |
| `autoComplete`   | `auto-complete`   | possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | `string`                                                                              | `'off'`                                                                                                                                                                                                                                                      |
| `autoCorrect`    | `auto-correct`    | decide if autocorect should be enabled                                                    | `"off" \| "on"`                                                                       | `'off'`                                                                                                                                                                                                                                                      |
| `borderStyle`    | `border-style`    | decide if input should have border radius                                                 | `"large" \| "none" \| "round" \| "small"`                                             | `'none'`                                                                                                                                                                                                                                                     |
| `design`         | `design`          | select design                                                                             | `"error" \| "primary" \| "secondary" \| "success" \| "warning"`                       | `'secondary'`                                                                                                                                                                                                                                                |
| `disabled`       | `disabled`        | decide if the input is disabled                                                           | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `doFocus`        | `do-focus`        | change this prop to true to focus the input                                               | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `errorMsg`       | `error-msg`       | show error message below the input                                                        | `string`                                                                              | `''`                                                                                                                                                                                                                                                         |
| `inputType`      | `input-type`      | type of the input                                                                         | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `'text'`                                                                                                                                                                                                                                                     |
| `label`          | `label`           | text of label The label replace the placeholder                                           | `string`                                                                              | `undefined`                                                                                                                                                                                                                                                  |
| `max`            | `max`             | if input type === numeric -> max value                                                    | `string`                                                                              | `undefined`                                                                                                                                                                                                                                                  |
| `min`            | `min`             | if input type === numeric -> min value                                                    | `string`                                                                              | `undefined`                                                                                                                                                                                                                                                  |
| `multiple`       | `multiple`        |                                                                                           | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `options`        | --                |                                                                                           | `Option[]`                                                                            | `[ { value: '1', label: 'One', disabled: true }, { value: '2', label: 'Two' }, { value: '3', label: 'Three', disabled: true }, { value: '4', label: 'Four' }, { value: '5', label: 'Five' }, { value: '6', label: 'Six' }, { value: '7', label: 'Seven' } ]` |
| `pattern`        | `pattern`         | set the pattern for the input                                                             | `string`                                                                              | `undefined`                                                                                                                                                                                                                                                  |
| `readonly`       | `readonly`        | decide if the input is readonly                                                           | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `required`       | `required`        | decide if input is required (for forms)                                                   | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `searchable`     | `searchable`      |                                                                                           | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `size`           | `size`            | size of the input                                                                         | `"large" \| "medium" \| "small"`                                                      | `'medium'`                                                                                                                                                                                                                                                   |
| `spellCheck`     | `spell-check`     | decide if spellcheck should be enabled                                                    | `boolean`                                                                             | `false`                                                                                                                                                                                                                                                      |
| `step`           | `step`            | if input type === numeric -> step value                                                   | `string`                                                                              | `undefined`                                                                                                                                                                                                                                                  |
| `validate`       | `validate`        | use function returning a boolean to validate the input -> if false, it displays error-msg | `boolean`                                                                             | `true`                                                                                                                                                                                                                                                       |
| `value`          | `value`           | the value of the input                                                                    | `number \| string`                                                                    | `''`                                                                                                                                                                                                                                                         |

## Events

| Event     | Description       | Type               |
| --------- | ----------------- | ------------------ |
| `uBlur`   | emitted on blur   | `CustomEvent<any>` |
| `uChange` | emitted on change | `CustomEvent<any>` |
| `uFocus`  | emitted on focus  | `CustomEvent<any>` |
| `uInput`  | emitted on input  | `CustomEvent<any>` |

## Methods

### `setBlur() => Promise<void>`

set blur on native input

#### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

set focus on native input

#### Returns

Type: `Promise<void>`

## Dependencies

### Depends on

- [u-checkbox](../u-checkbox)

### Graph

```mermaid
graph TD;
  u-select --> u-checkbox
  style u-select fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
