import { EventEmitter } from '../../stencil-public-runtime';
import { MenuItem } from '../u-menuitem/u-menuitem';
export interface SubMenu {
  items: Array<MenuItem>;
}
/**
 * @name Sub-Menu
 * @state 🟡
 */
export declare class USubmenu {
  subMenu: Array<MenuItem>;
  active: boolean;
  onActiveChange(): void;
  uOpenSubMenu: EventEmitter<{
    menu: Array<MenuItem>;
    open: boolean;
  }>;
  depthLevel: number;
  render(): any;
}
