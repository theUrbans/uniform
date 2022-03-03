import { Component, h } from '@stencil/core';

@Component({
  tag: 'u-desktoplayout',
  styleUrl: 'u-desktoplayout.css',
  shadow: true,
})
export class UDesktoplayout {
  render() {
    return (
      <u-grid columns={['6rem', '1fr']} rows={1} area={[['menu', 'main']]} width="100%" height="100vh">
        <section
          class="menu"
          style={{
            gridArea: 'menu',
          }}
        >
          <slot name="menu"></slot>
        </section>
        <section
          class="main"
          style={{
            gridArea: 'main',
          }}
        >
          <slot name="main"></slot>
        </section>
      </u-grid>
    );
  }
}
