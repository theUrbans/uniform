# u-breadcrumb

<!-- Auto Generated Below -->

## Usage

### Example

```html
<u-breadcrumb
  :items.prop="[
{ name: 'test1', link: '/' },	
{ name: 'test2' },	
{ name: 'test3' }	
]"
>
</u-breadcrumb>
```

## Properties

| Property    | Attribute   | Description | Type               | Default                                                                      |
| ----------- | ----------- | ----------- | ------------------ | ---------------------------------------------------------------------------- |
| `items`     | --          |             | `BreadCrumbItem[]` | `[ { name: 'test1', link: '/test' }, { name: 'test2' }, { name: 'test3' } ]` |
| `seperator` | `seperator` |             | `string`           | `undefined`                                                                  |

## Events

| Event              | Description | Type                  |
| ------------------ | ----------- | --------------------- |
| `uBreadcrumbClick` |             | `CustomEvent<string>` |

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
