import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'u-breadcrumb',
  styleUrl: 'u-breadcrumb.css',
  shadow: true,
})
export class UBreadcrumb {
  @Prop() items: Array<string> = ['test1', 'test2', 'test3'];
  @Prop() seperator?: string;
  @Event() uBreadcrumbClick: EventEmitter<string>;
  render() {
    const defaultSeparator = <i>&#8250;</i>;
    return (
      <ul>
        {this.items.map((item, index) => {
          const lastElement = index === this.items.length - 1;
          return [
            <li>
              {!lastElement ? (
                <u-link secondary={true} onClick={() => this.uBreadcrumbClick.emit(item)}>
                  {item}
                </u-link>
              ) : (
                <span class="last">{item}</span>
              )}
            </li>,
            <span
              class="separator"
              style={{
                display: !lastElement ? 'inline-block' : 'none',
              }}
            >
              {!!this.seperator ? this.seperator : defaultSeparator}
            </span>,
          ];
        })}
      </ul>
    );
  }
}
