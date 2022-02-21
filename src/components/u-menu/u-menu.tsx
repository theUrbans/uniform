import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'u-menu',
  styleUrl: 'u-menu.css',
  shadow: true,
})
export class UMenu {
  private nav: HTMLElement;
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() area?: string;
  @Prop() minimizeable: boolean = false;
  componentWillLoad(): void {
    if (!!this.area) this.nav.style.setProperty('grid-area', this.area);
  }
  render() {
    return (
      <nav
        ref={nav => (this.nav = nav)}
        class={{
          menu: true,
          [`menu-${this.direction}`]: true,
        }}
      >
        <slot></slot>
      </nav>
    );
  }
}
