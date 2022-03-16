# u-pagination

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                  | Description | Type      | Default     |
| ---------------------- | -------------------------- | ----------- | --------- | ----------- |
| `pages`                | `pages`                    |             | `number`  | `undefined` |
| `showButtons`          | `show-buttons`             |             | `boolean` | `true`      |
| `showLastAndFirstPage` | `show-last-and-first-page` |             | `boolean` | `true`      |
| `showPages`            | `show-pages`               |             | `number`  | `1`         |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `pageChange` |             | `CustomEvent<number>` |


## Methods

### `goToPage(page: number, eventless?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [u-group](../u-group)
- [u-button](../u-button)

### Graph
```mermaid
graph TD;
  u-pagination --> u-group
  u-pagination --> u-button
  style u-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
