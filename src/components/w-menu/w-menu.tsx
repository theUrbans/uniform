import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-menu',
  styleUrl: 'w-menu.css',
  shadow: true,
})
export class WMenu {
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
