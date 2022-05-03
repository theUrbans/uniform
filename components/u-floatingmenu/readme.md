# u-floatingmenu

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------- | --------- | ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fixed`  | `fixed`   |             | `boolean`    | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `menu`   | --        |             | `MenuItem[]` | `[     { name: '+ New' },     { divider: true },     {       name: 'Edit',       subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] }     },     { name: 'Copy' },     { divider: true },     {       name: 'Open Recent',       subMenu: {         items: [           {             name: 'HTML',             subMenu: {               items: [                 { name: 'index.html' },                 { name: 'about.html' },                 { name: 'impressum.html' }               ]             }           },           { name: 'Item 2' }         ]       }     }   ]` |


## Dependencies

### Depends on

- [u-menuitem](../u-menuitem)

### Graph
```mermaid
graph TD;
  u-floatingmenu --> u-menuitem
  u-menuitem --> u-submenu
  u-submenu --> u-menuitem
  style u-floatingmenu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

_Built with [StencilJS](https://stenciljs.com/) by Hoer_
