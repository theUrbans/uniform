import { Component, Host, h, Listen, State, Method } from '@stencil/core';

/**
 * @name Layout
 * @state 🟡
 * @description layout which decides whether to use mobile or desktop layout
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - mobile option view
 * @slot option-header - desktop option title
 * @slot option-body - desktop option content
 */
@Component({
  tag: 'u-layout',
  styleUrl: 'u-layout.css',
  shadow: true
})
export class ULayout {
  private mobilelayout: HTMLUMobilelayoutElement;

  private tabletlayout: HTMLUTabletlayoutElement;

  // TODO add tablet option
  @State() mode: 'mobile' | 'tablet' | 'desktop';

  @Listen('resize', { target: 'window' }) onWindowResize() {
    if (window.innerWidth <= 768) this.mode = 'mobile';
    else if (window.innerWidth <= 992) this.mode = 'tablet';
    else this.mode = 'desktop';
  }

  componentWillLoad() {
    this.onWindowResize();
  }

  @Method() async showOption() {
    switch (this.mode) {
      case 'mobile':
        this.mobilelayout.activateOption();
        this.mobilelayout.showOption();
        break;
      case 'tablet':
        this.tabletlayout.showOption();
        break;
      default:
        break;
    }
  }

  @Method() async closeOption() {
    switch (this.mode) {
      case 'mobile':
        this.mobilelayout.showMain();
        this.mobilelayout.disableOption();
        break;
      case 'tablet':
        this.tabletlayout.hideOption();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Host>
        {this.mode === 'mobile' && (
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
        )}
        {this.mode === 'desktop' && (
          <u-desktoplayout>
            <div slot="menu">
              <slot name="menu" />
            </div>
            <div slot="main">
              <slot name="main" />
            </div>
            <div slot="option">
              <slot name="option" />
            </div>
          </u-desktoplayout>
        )}
        {this.mode === 'tablet' && (
          <u-tabletlayout ref={(tablet) => (this.tabletlayout = tablet)}>
            <div slot="menu">
              <slot name="menu" />
            </div>
            <div slot="main">
              <slot name="main" />
            </div>
            <div slot="option">
              <slot name="option" />
            </div>
          </u-tabletlayout>
        )}
      </Host>
    );
  }
}
