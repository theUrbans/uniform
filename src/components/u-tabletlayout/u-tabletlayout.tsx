import {
  Component,
  h,
  Method,
  Prop,
  State,
  Element,
  Host
} from '@stencil/core';

/**
 * @name Tablet Layout
 * @state 🟡
 * @description default Desktop Layout - with a sidebar and a main content area
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
@Component({
  tag: 'u-tabletlayout',
  styleUrl: 'u-tabletlayout.css',
  shadow: true
})
export class UTabletlayout {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) showOptions: boolean = false;

  @Prop() sideWidth: string = '94%';

  @Method() async showOption() {
    const option = this.el.shadowRoot.querySelector('.option') as HTMLElement;
    if (!option) return;
    option.scrollIntoView();
  }

  @Method() async activateOption() {
    this.showOptions = true;
  }

  @Method() async disableOption() {
    this.showOptions = false;
  }

  @State() height: string;

  componentWillLoad() {
    this.height = `${window.innerHeight}px`;
  }

  render() {
    return (
      <Host>
        <u-grid
          columns={['6rem', '1fr']}
          rows={1}
          area={[['menu', 'main']]}
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
        </u-grid>
        <section
          class={{
            option: true,
            active: this.showOptions
          }}
          style={{
            gridArea: 'option',
            width: this.sideWidth
          }}
        >
          <slot name="option"></slot>
        </section>
      </Host>
    );
  }
}
