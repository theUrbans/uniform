# Uniform

## Modal

- opened as external component

> open modal

```JS
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('show-modal', {
    detail: { name: 'MODAL_NAME', params: { customParam: '42' } }
    })
);
```

> close modal

```JS
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('close-modal', {
    detail: { name: 'MODAL_NAME' }
    })
);
```

---

## Dialog

> open dialog with name (external component)

```JS
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('open-dialog', {
    detail: { name: 'DIALOG_NAME' }
    })
);
```

> - open dialog (fill blueprint, <u-dialog /> must be in current page)
> - reusable, no need for multiple elements on page

```JS
const body = document.querySelector('body');
body.dispatchEvent(new CustomEvent('open-dialog', {
    detail: { params: {
        title: 'YOUR TITLE',
        content: 'YOUR CONTENT TEXT',
        buttons: [{
            title: 'BUTTON TITLE',
            design: 'use button design, default is outline',
            handler: () => {
                console.log('Button clicked');
                yourHandler();
            }
        }]
    }}
}));
```

> if no handler is given, button will close the dialog
