import { MenuItem } from '../u-menuitem/u-menuitem';
/**
 * @name Floating Menu
 * @state 🟡
 * @description Menu floating at initial position
 */
export declare class UFloatingmenu {
  private node;
  el: HTMLElement;
  fixed: boolean;
  drag: boolean;
  dragoffset: {
    x: number;
    y: number;
  };
  private onPointerDown;
  private onPointerUp;
  private onPointerMove;
  isOpen: boolean;
  selected: string;
  menu: Array<MenuItem>;
  render(): any;
}
