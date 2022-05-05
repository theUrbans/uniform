import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

/**
 * @name Breadcrumb Item
 * @state 🟢
 * @description Breadcrumb navigation component
 * @slot default - Breadcrumb content
 */
@Component({
  tag: 'u-breadcrumb',
  styleUrl: 'u-breadcrumb.css',
  shadow: true
})
export class UBreadcrumb {
  /**
   * link of the breadcrumb item
   */
  @Prop() link?: string;

  /**
   * appereance of the breadcrumb link
   */
  @Prop() design?: 'secondary' | 'primary';

  /**
   * emit event on element click
   */
  @Event() uBreadcrumbClick: EventEmitter<void>;

  render() {
    if (this.link)
      return (
        <li>
          <u-link secondary={this.design === 'primary'} link={this.link}>
            <slot></slot>
          </u-link>
        </li>
      );
    return (
      <li>
        <span class="bc">
          <slot></slot>
        </span>
      </li>
    );
  }
}
