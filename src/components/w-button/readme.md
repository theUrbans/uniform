# w-button



<!-- Auto Generated Below -->


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
| `wClick` | emit wClick on button click | `CustomEvent<void>` |


## Dependencies

### Used by

 - [w-dialog](../w-dialog)
 - [w-stepper](../w-stepper)

### Graph
```mermaid
graph TD;
  w-dialog --> w-button
  w-stepper --> w-button
  style w-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
