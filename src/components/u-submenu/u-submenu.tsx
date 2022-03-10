import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { MenuItem } from '../u-menuitem/u-menuitem';
export interface SubMenu {
  items: Array<MenuItem>;
}
@Component({
  tag: 'u-submenu',
  styleUrl: 'u-submenu.css',
  scoped: true,
})
export class USubmenu {
  @Prop() subMenu: Array<MenuItem>;
  @Prop({ mutable: true }) active: boolean = false;
  @Watch('active') onActiveChange() {
    this.uOpenSubMenu.emit({ menu: this.subMenu, open: this.active });
  }
  @Event() uOpenSubMenu: EventEmitter<{ menu: Array<MenuItem>; open: boolean }>;
  @Prop() depthLevel: number = 0;
  render() {
    return (
      <ul
        class={{
          sub: true,
          submenu: true,
          show: this.active,
        }}
      >
        {this.subMenu.map(item => (
          <u-menuitem item={item} active={false} depthLevel={this.depthLevel + 1}></u-menuitem>
        ))}
      </ul>
    );
  }
}
