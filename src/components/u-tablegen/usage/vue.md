tested with Vue 2.6

```html
<template>
  <u-tablegen :data.prop="data" :heading.prop="heading">
    <h1 slot="header">Example Table</h1>
  </u-tablegen>
</template>

<script>
  export default {
      data: () {
          return {
              data: [
                  { id: 1, text: 'Id no 1' },
                  { id: 2, text: 'Id no 2' },
                  { id: 3, text: 'Id no 3' },
                  { id: 4, text: 'Id no 4' },
                  { id: 5, text: 'Id no 5' },
              ]
          },
          heading: [{
              field: 'id',
              label: 'ID',
              align: 'center',
          }, {
              field: 'text',
              label: 'Description',
              sortable: true,
              bgcolor: (row) => row.id > 3 ? 'green' : 'blue',
          }]
      }
  }
</script>
```
