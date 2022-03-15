# w-input

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                               | Type                                                                                  | Default       |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------- |
| `autoCapitalize` | `auto-capitalize` | decide if autocapitalize should be enabled                                                | `"characters" \| "none" \| "off" \| "on" \| "sentences" \| "words"`                   | `undefined`   |
| `autoComplete`   | `auto-complete`   | possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | `string`                                                                              | `undefined`   |
| `autoCorrect`    | `auto-correct`    | decide if autocorect should be enabled                                                    | `"off" \| "on"`                                                                       | `undefined`   |
| `borderStyle`    | `border-style`    | decide if input should have border radius                                                 | `"large" \| "none" \| "round" \| "small"`                                             | `'none'`      |
| `design`         | `design`          | select design possible values: - 'default', 'error', 'success', 'warning'                 | `"error" \| "primary" \| "secondary" \| "success" \| "warning"`                       | `'secondary'` |
| `disabled`       | `disabled`        | decide if the input is disabled                                                           | `boolean`                                                                             | `false`       |
| `doFocus`        | `do-focus`        | change this prop to true to focus the input                                               | `boolean`                                                                             | `false`       |
| `errorMsg`       | `error-msg`       | show error message below the input                                                        | `string`                                                                              | `''`          |
| `inputType`      | `input-type`      | type of the input                                                                         | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `'text'`      |
| `label`          | `label`           | text of label The label replace the placeholder                                           | `string`                                                                              | `'Label'`     |
| `max`            | `max`             | if input type == numeric -> max value                                                     | `string`                                                                              | `undefined`   |
| `min`            | `min`             | if input type == numeric -> min value                                                     | `string`                                                                              | `undefined`   |
| `pattern`        | `pattern`         | set the pattern for the input                                                             | `string`                                                                              | `undefined`   |
| `readonly`       | `readonly`        | decide if the input is readonly                                                           | `boolean`                                                                             | `false`       |
| `required`       | `required`        | decide if input is required (for forms)                                                   | `boolean`                                                                             | `false`       |
| `showSlot`       | `show-slot`       | decide if (and which site) a slot should be rendered                                      | `"both" \| "left" \| "right"`                                                         | `undefined`   |
| `size`           | `size`            | size of the input                                                                         | `"large" \| "medium" \| "small"`                                                      | `'medium'`    |
| `spellCheck`     | `spell-check`     | decide if spellcheck should be enabled                                                    | `boolean`                                                                             | `undefined`   |
| `step`           | `step`            | if input type == numeric -> step value                                                    | `string`                                                                              | `undefined`   |
| `validate`       | `validate`        | use function returning a boolean to validate the input -> if false, it displays error-msg | `boolean`                                                                             | `true`        |
| `value`          | `value`           | the value of the input                                                                    | `number \| string`                                                                    | `''`          |


## Events

| Event     | Description       | Type                            |
| --------- | ----------------- | ------------------------------- |
| `uBlur`   | emitted on blur   | `CustomEvent<void>`             |
| `uChange` | emitted on change | `CustomEvent<number \| string>` |
| `uFocus`  | emitted on focus  | `CustomEvent<void>`             |
| `uInput`  | emitted on input  | `CustomEvent<number \| string>` |


## Methods

### `setBlur() => Promise<void>`

set blur on native input

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

set focus on native input

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
