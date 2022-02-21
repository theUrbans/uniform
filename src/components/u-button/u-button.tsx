import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'u-button',
  styleUrl: 'u-button.css',
  shadow: true,
})
export class WButton {
  /**
   * color design
   */
  @Prop() design?: 'secondary' | 'error' | 'success' | 'warning' | 'primary' = 'primary';

  /**
   * change design, only show outlines
   */
  @Prop() outline?: boolean = false;

  /**
   * button size
   */
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';

  /**
   * show disabled state
   */
  @Prop() disabled?: boolean = false;

  /**
   * show only text
   */
  @Prop() flat?: boolean = false;

  /**
   * set button type
   */
  @Prop() type?: 'button' | 'submit' | 'reset' = 'button';

  /**
   * enable border radius
   */
  @Prop() rounded?: 'left' | 'right' | 'top' | 'bottom' | 'none' | 'all' = 'all';

  /**
   * emit wClick on button click
   */
  @Event() wClick: EventEmitter<void>;
  private handleOnClick = () => {
    this.wClick.emit();
  };

  render() {
    return (
      <button
        onClick={this.handleOnClick}
        disabled={this.disabled}
        type={this.type}
        class={{
          button: true,
          [this.size]: true,
          [this.design]: true,
          [`fill-${this.design}`]: !this.outline && !this.flat,
          outline: this.outline,
          flat: this.flat,
          disabled: this.disabled,
          [`rounded-${this.rounded}`]: true,
        }}
      >
        <slot name="prefix"></slot>
        <slot>Button Text</slot>
        <slot name="suffix"></slot>
      </button>
    );
  }
}
