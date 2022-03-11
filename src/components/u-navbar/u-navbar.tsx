import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @name Navigation Bar
 * @state 🟡
 * @description top or bottom navigation bar
 */
@Component({
  tag: 'u-navbar',
  styleUrl: 'u-navbar.css',
  shadow: true,
})
export class UNavbar {
  /**
   *  position of the navbar
   */
  @Prop() position: 'top' | 'bottom' = 'top';

  /**
   * should the navbar be fixed to the top or bottom of the screen -
   * layout should be position relative
   */
  @Prop() fixed: boolean = true;
  render() {
    return (
      <Host
        role="navigation"
        class={{
          [this.position]: true,
          fixed: this.fixed,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
