# w-filepicker



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                 | Default              |
| ------------ | ------------- | ----------- | -------------------- | -------------------- |
| `fileEnding` | `file-ending` |             | `string`             | `'*'`                |
| `filePlural` | `file-plural` |             | `string`             | `'files'`            |
| `label`      | `label`       |             | `string`             | `'Choose file'`      |
| `multiple`   | `multiple`    |             | `boolean`            | `false`              |
| `noFile`     | `no-file`     |             | `string`             | `'No file selected'` |
| `size`       | `size`        |             | `"large" \| "small"` | `'small'`            |


## Events

| Event     | Description | Type                    |
| --------- | ----------- | ----------------------- |
| `wSelect` |             | `CustomEvent<FileList>` |


## Dependencies

### Depends on

- [u-group](../u-group)
- [u-button](../u-button)
- [u-col](../u-col)
- [u-row](../u-row)

### Graph
```mermaid
graph TD;
  u-filepicker --> u-group
  u-filepicker --> u-button
  u-filepicker --> u-col
  u-filepicker --> u-row
  style u-filepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*