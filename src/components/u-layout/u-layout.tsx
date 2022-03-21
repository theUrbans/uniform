import { Component, Host, h, Listen, State, Method } from '@stencil/core';

/**
 * @name Layout
 * @state 🟡
 * @description layout which decides whether to use mobile or desktop layout
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
@Component({
  tag: 'u-layout',
  styleUrl: 'u-layout.css',
  shadow: true
})
export class ULayout {
  private mobilelayout: HTMLUMobilelayoutElement;

  @State() mode: 'mobile' | 'desktop';

  @Listen('resize', { target: 'window' }) onWindowResize() {
    if (window.innerWidth <= 768) this.mode = 'mobile';
    else this.mode = 'desktop';
  }

  componentWillLoad() {
    this.onWindowResize();
  }

  @Method() async showOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.activateOption();
      this.mobilelayout.showOption();
    }
    if (this.mode === 'desktop') {
      document.dispatchEvent(
        new CustomEvent('show-modal', {
          detail: { name: 'uniform-layout-option' }
        })
      );
    }
  }

  @Method() async closeOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.showMain();
      this.mobilelayout.disableOption();
    }
    if (this.mode === 'desktop') {
      document.dispatchEvent(
        new CustomEvent('close-modal', {
          detail: { name: 'uniform-layout-option' }
        })
      );
    }
  }

  render() {
    return (
      <Host>
        {this.mode === 'mobile' ? (
          <u-mobilelayout ref={(mobile) => (this.mobilelayout = mobile)}>
            <div slot="menu">
              <slot name="menu" />
            </div>
            <div slot="main">
              <slot name="main" />
            </div>
            <div slot="option">
              <slot name="option" />
            </div>
          </u-mobilelayout>
        ) : (
          <u-desktoplayout>
            <div slot="menu">
              <slot name="menu" />
            </div>
            <div slot="main">
              <slot name="main" />
            </div>
            <u-modal name="uniform-layout-option">
              <slot name="option" />
            </u-modal>
          </u-desktoplayout>
        )}
      </Host>
    );
  }
}