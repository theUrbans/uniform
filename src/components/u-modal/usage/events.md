- open modal

```js
const body = document.querySelector('body');
body.dispatchEvent(
  new CustomEvent('show-modal', {
    detail: { name: 'MODAL_NAME', params: { customParam: '42' } },
  }),
);
```

- close modal

```js
const body = document.querySelector('body');
body.dispatchEvent(
  new CustomEvent('close-modal', {
    detail: { name: 'MODAL_NAME' },
  }),
);
```
