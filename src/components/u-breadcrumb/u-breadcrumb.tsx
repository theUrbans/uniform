import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

export interface BreadCrumbItem {
  name: string;
  link?: string;
}
@Component({
  tag: 'u-breadcrumb',
  styleUrl: 'u-breadcrumb.css',
  shadow: true,
})
export class UBreadcrumb {
  @Prop() items: Array<BreadCrumbItem> = [{ name: 'test1', link: '/test' }, { name: 'test2' }, { name: 'test3' }];
  @Prop() seperator?: string;
  @Event() uBreadcrumbClick: EventEmitter<string>;
  render() {
    return (
      <ul>
        {this.items.map((item, index) => {
          const lastElement = index === this.items.length - 1;
          return [
            <li>
              {!lastElement ? (
                <u-link secondary={true} onClick={() => this.uBreadcrumbClick.emit(item.name)} {...(item.link ? { link: item.link } : null)}>
                  {item.name}
                </u-link>
              ) : (
                <span class="last">{item.name}</span>
              )}
            </li>,
            <span
              class="separator"
              style={{
                display: !lastElement ? 'inline-block' : 'none',
              }}
            >
              {!!this.seperator ? this.seperator : <i>&#8250;</i>}
            </span>,
          ];
        })}
      </ul>
    );
  }
}
