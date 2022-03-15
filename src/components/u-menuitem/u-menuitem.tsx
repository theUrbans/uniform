import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { SubMenu } from '../u-submenu/u-submenu';

export interface MenuItem {
  name?: string;
  subMenu?: SubMenu;
  divider?: boolean;
  disabled?: boolean;
}

/**
 * @name Menu Item
 */
@Component({
  tag: 'u-menuitem',
  styleUrl: 'u-menuitem.css',
  scoped: true,
})
export class UMenuitem {
  @Prop() item: MenuItem;
  @Prop({ mutable: true }) active: boolean = false;
  @Prop() depthLevel: number = 0;
  @Event() uItemSelect: EventEmitter<MenuItem>;
  render() {
    if (this.item.divider) return <hr />;
    else
      return (
        <li>
          {this.item.subMenu ? (
            [
              <div
                class="more"
                onClick={() => {
                  this.uItemSelect.emit(this.item);
                  if (this.item.subMenu) {
                    this.active = !this.active;
                    return;
                  }
                  this.active = false;
                }}
              >
                <span>{this.item.name}</span>
                <span> &raquo;</span>
              </div>,
              <u-submenu
                subMenu={this.item.subMenu.items}
                active={this.active}
                depthLevel={this.depthLevel}
                // onUOpenSubMenu={({ detail }) => {
                // if (this.item.subMenu.items === detail.menu)
                // this.active = this.item.subMenu.items === detail.menu;
                // }}
              />,
            ]
          ) : (
            <span>{this.item.name}</span>
          )}
        </li>
      );
  }
}
