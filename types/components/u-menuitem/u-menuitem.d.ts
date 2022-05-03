import { EventEmitter } from '../../stencil-public-runtime';
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
export declare class UMenuitem {
  item: MenuItem;
  active: boolean;
  depthLevel: number;
  uItemSelect: EventEmitter<MenuItem>;
  render(): any;
}
