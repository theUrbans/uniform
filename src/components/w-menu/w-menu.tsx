import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-menu',
  styleUrl: 'w-menu.css',
  shadow: true,
})
export class WMenu {
  @Prop() position: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Prop() minimizeable: boolean = false;
  render() {
    return (
      <Host>
        {this.position === 'top' || this.position === 'bottom' ? (
          <nav>
            <w-row justify="center" align="center" wrap="wrap" gap="1rem" padding="0">
              <slot></slot>
            </w-row>
          </nav>
        ) : (
          <nav>
            <w-col align="center" justify="center" wrap="wrap" gap="1rem" padding="0">
              <slot></slot>
            </w-col>
          </nav>
        )}
      </Host>
    );
  }
}
