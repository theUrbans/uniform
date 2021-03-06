import { Component, Element, h, Method, Prop, State } from '@stencil/core';

/**
 * @name Mobile Layout
 * @state 🟡
 * @description Discord-App like layout with 3 swipeable columns
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
@Component({
  tag: 'u-mobilelayout',
  styleUrl: 'u-mobilelayout.css',
  shadow: true
})
export class UMobilelayout {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) showOptions: boolean = false;

  @Prop() sideWidth: string = '94%';

  @Method() async showMenu() {
    const menu = this.el.shadowRoot.querySelector('.menu') as HTMLElement;
    if (!menu) return;
    menu.scrollIntoView();
  }

  @Method() async showMain() {
    const main = this.el.shadowRoot.querySelector('.main') as HTMLElement;
    if (!main) return;
    main.scrollIntoView();
  }

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

  componentDidLoad() {
    this.showMain();
  }

  render() {
    return (
      <div
        class="layout"
        style={{
          height: this.height
        }}
      >
        <section class="section menu">
          <slot name="menu"></slot>
        </section>
        <section class="section main" onClick={() => this.showMain()}>
          <slot name="main"></slot>
        </section>
        {this.showOptions && (
          <section
            class="section option"
            style={{
              width: this.sideWidth
            }}
          >
            <slot name="option"></slot>
          </section>
        )}
      </div>
    );
  }
}
