import {
  Component, h, Prop, State, Element,
} from '@stencil/core';

/**
 * @name Popup
 */
@Component({
  tag: 'u-popup',
  styleUrl: 'u-popup.css',
  shadow: true,
})
export class UPopup {
  @Element() el: HTMLElement;

  @Prop() axis:
    | 'x-start'
    | 'x-end'
    | 'x-center'
    | 'y-start'
    | 'y-end'
    | 'y-center' = 'y-center';

  @Prop({ mutable: true }) visible: boolean = false;

  // @Watch('visible') visibleChanged() {}
  @State() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @State() alignment: 'start' | 'end' | 'center' = 'start';

  private calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis.includes('y')) this.position = 'top';
    else if (y < 200 && this.axis.includes('y')) this.position = 'bottom';
    else if (x > 200 && this.axis.includes('x')) this.position = 'left';
    else if (x < 200 && this.axis.includes('x')) this.position = 'right';

    if (this.axis.includes('start')) this.alignment = 'start';
    else if (this.axis.includes('end')) this.alignment = 'end';
    else this.alignment = 'center';
  }

  componentWillLoad() {
    this.calcPos();
    console.log(this.alignment);
  }

  render() {
    return (
      <div
        class={{
          wrapper: true,
          popup: true,
          [this.position]: true,
          [this.alignment]: true,
        }}
        tabindex="0"
        onBlur={() => (this.visible = false)}
        onMouseEnter={() => this.calcPos()}
      >
        <slot></slot>
      </div>
    );
  }
}
