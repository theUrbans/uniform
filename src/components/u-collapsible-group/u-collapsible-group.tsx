import { Component, Host, h, Element, Prop } from '@stencil/core';

/**
 * @name Collapsible Group
 * @state 🟡
 * @description accordion like component group
 */
@Component({
  tag: 'u-collapsible-group',
  styleUrl: 'u-collapsible-group.css',
  shadow: true
})
export class UCollapsibleGroup {
  @Element() el: HTMLElement;

  /**
   * if true, only one collapsible can be open at a time
   */
  @Prop() onlyOneOpen: boolean = true;

  componentDidRender() {
    const children = Array.from(this.el.children);
    for (let index = 0, len = children.length; index < len; index += 1) {
      const element = children[index] as HTMLUCollapsibleElement;
      const el = element.shadowRoot.childNodes[1] as HTMLDivElement;
      if (index === 0) el.classList.add('topradius');
      if (index > 0 && index < len - 1) el.classList.add('noradius');
      if (index === len - 1) el.classList.add('botradius');
      element.addEventListener('uOpen', () => {
        this.closeInactive(element, children);
      });
    }
  }

  private closeInactive(
    element: HTMLUCollapsibleElement,
    children: Array<any>
  ) {
    if (this.onlyOneOpen) {
      for (let index = 0, len = children.length; index < len; index += 1) {
        const actEl = children[index] as HTMLUCollapsibleElement;
        if (element !== actEl) actEl.closeCollapsible();
      }
    }
  }

  render() {
    return (
      <Host role="group">
        <slot></slot>
      </Host>
    );
  }
}
