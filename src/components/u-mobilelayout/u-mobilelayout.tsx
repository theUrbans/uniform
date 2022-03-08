import { Component, Element, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'u-mobilelayout',
  styleUrl: 'u-mobilelayout.css',
  shadow: true,
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
  componentDidLoad() {
    this.showMain();
  }
  render() {
    return (
      <div class="layout">
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
              width: this.sideWidth,
            }}
          >
            <slot name="option"></slot>
          </section>
        )}
      </div>
    );
  }
}
