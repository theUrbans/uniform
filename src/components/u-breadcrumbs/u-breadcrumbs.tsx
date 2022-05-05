import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Element
} from '@stencil/core';

/**
 * @name Breadcrumb Wrapper
 * @state 🟢
 * @description Breadcrumb List
 */
@Component({
  tag: 'u-breadcrumbs',
  styleUrl: 'u-breadcrumbs.css',
  shadow: true
})
export class UBreadcrumbs {
  @Element() el: HTMLElement;

  /**
   * element between breadcrumbs
   */
  @Prop() seperator?: string = '›';

  /**
   * emit event on element click
   */
  @Event() uBreadcrumbClick: EventEmitter<string>;

  componentWillLoad() {
    Array.from(this.el.children).forEach((element, index) => {
      const seperator = document.createElement('span');
      seperator.innerHTML = this.seperator;
      seperator.className = 'separator';
      element.addEventListener('uBreadcrumbClick', () => {
        this.uBreadcrumbClick.emit(element.innerHTML);
      });
      if (index * 2 < this.el.children.length - 1) element.after(seperator);
    });
  }

  render() {
    return (
      <ul>
        <slot></slot>
      </ul>
    );
  }
}
