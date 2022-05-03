export interface MenuItems {
  label?: string;
  icon?: HTMLElement | SVGElement;
  disabled?: boolean;
}
/**
 * @name Menu
 * @state 🟡
 */
export declare class UMenu {
  axis: 'x' | 'y';
  width: 'fullwidth' | 'contentwidth';
  padding: boolean;
  items: Array<MenuItems>;
  render(): any;
}
