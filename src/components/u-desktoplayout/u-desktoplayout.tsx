import { Component, h, State } from '@stencil/core';

/**
 * @name Desktop Layout
 * @state 🟡
 * @description default Desktop Layout - with a sidebar and a main content area
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
@Component({
  tag: 'u-desktoplayout',
  styleUrl: 'u-desktoplayout.css',
  shadow: true
})
export class UDesktoplayout {
  @State() height: string;

  componentWillLoad() {
    this.height = `${window.innerHeight}px`;
  }

  render() {
    return (
      <u-grid
        columns={['6rem', '1fr', '1fr']}
        rows={1}
        area={[['menu', 'main', 'option']]}
        width="100%"
        height={this.height}
      >
        <section
          class="menu"
          style={{
            gridArea: 'menu'
          }}
        >
          <slot name="menu"></slot>
        </section>
        <section
          class="main"
          style={{
            gridArea: 'main'
          }}
        >
          <slot name="main"></slot>
        </section>
        <section
          class="option"
          style={{
            gridArea: 'option'
          }}
        >
          <slot name="option"></slot>
        </section>
      </u-grid>
    );
  }
}
