import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
// import { clickEvent } from '../../utils/utils';

@Component({
  tag: 'w-button',
  styleUrl: 'w-button.css',
  shadow: true,
})
export class WButton {
  // private button?: HTMLButtonElement;
  @Element() el: HTMLElement;
  @Prop() design?: 'secondary' | 'error' | 'success' | 'warning' | 'primary' = 'primary';
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled?: boolean = false;
  @Prop() outline?: boolean = false;
  @Prop() flat?: boolean = false;
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';
  @Event() wClick: EventEmitter;
  private handleOnClick() {
    // this.wClick.emit('test');
    // console.log(this.button);
  }

  render() {
    return (
      <button
        onClick={this.handleOnClick}
        // ref={button => (this.button = button)}
        disabled={this.disabled}
        type={this.type}
        class={{
          button: true,
          sm: this.size === 'small',
          md: this.size === 'medium',
          lg: this.size === 'large',
          [this.design]: true,
          [`fill-${this.design}`]: !this.outline && !this.flat,
          outline: this.outline,
          flat: this.flat,
          disabled: this.disabled,
        }}
      >
        <slot name="prefix"></slot>
        <slot>Button Text</slot>
        <slot name="suffix"></slot>
      </button>
    );
  }
}
