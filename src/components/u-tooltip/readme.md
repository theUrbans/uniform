# w-tooltip



<!-- Auto Generated Below -->


## Usage

### Default

```html
<u-tooltip text="i am a button with an tooltip">
    <u-button></u-button>
</u-tooltip>
```

```html
<u-tooltip content>
    <div slot="content">
        <u-headline>Button with Custom Tooltip</u-headline>
        <u-paragraph>Custom components in tootltip</u-paragraph>
    </div>
    <u-button></u-button>
</u-tooltip>
```



## Properties

| Property    | Attribute   | Description                           | Type                           | Default     |
| ----------- | ----------- | ------------------------------------- | ------------------------------ | ----------- |
| `alignment` | `alignment` | arrow alignment                       | `"center" \| "end" \| "start"` | `'center'`  |
| `axis`      | `axis`      | position of the tooltip               | `"x" \| "y"`                   | `'y'`       |
| `content`   | `content`   | render custom content instead of text | `boolean`                      | `undefined` |
| `text`      | `text`      | text of the tooltip                   | `string`                       | `undefined` |
| `trigger`   | `trigger`   | choose trigger event                  | `"click" \| "hover"`           | `'hover'`   |


## Slots

| Slot        | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| `"content"` | (optional) content of the tooltip -> alternative to text, content prop must be used |
| `"default"` | element which receives the tooltip                                                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
