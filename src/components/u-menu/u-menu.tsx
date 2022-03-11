import { Component, h, Prop } from '@stencil/core';
export interface MenuItems {
  label?: string;
  icon?: HTMLElement | SVGElement;
  disabled?: boolean;
}

/**
 * @name Menu
 * @state 🟡
 */
@Component({
  tag: 'u-menu',
  styleUrl: 'u-menu.css',
  shadow: true,
})
export class UMenu {
  @Prop() axis: 'x' | 'y' = 'y';
  @Prop() width: 'fullwidth' | 'contentwidth' = 'fullwidth';
  @Prop() padding: boolean = true;
  @Prop() items: Array<MenuItems> = [
    {
      label: 'test1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      label: 'test2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
  ];
  render() {
    return (
      <ul
        class={{
          [this.axis]: true,
          [this.width]: true,
          padding: this.padding,
        }}
      >
        {this.items.map((item, index) => {
          const row = [];
          const attr = null;
          if (item.icon) row.push(item.icon);
          if (item.disabled) attr.disabled = true;
          if (item.label) row.push(<span>{item.label}</span>);
          return (
            <li
              class={{
                item: true,
                start: !this.padding && index === 0,
                middle: !this.padding && index > 0 && index < this.items.length - 1,
                end: !this.padding && index === this.items.length - 1,
                rounded: this.padding,
              }}
              {...attr}
            >
              {row}
            </li>
          );
        })}
      </ul>
    );
  }
}
