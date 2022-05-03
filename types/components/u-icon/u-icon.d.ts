/**
 * @name Icon Wrapper
 * @state 🟡
 * @description Wrapper for icons (svg preferred)
 * @slot default - eg. svg or img
 */
export declare class UIcon {
  el: HTMLElement;
  /**
   * border style of the icon wrapper
   */
  borderRadius: 'rounded' | 'square' | 'circle';
  /**
   * if true hide the border and background color of the wrapper
   */
  flat: boolean;
  /**
   * if true hide the background color of the wrapper
   */
  outline: boolean;
  /**
   * select the design of the icon wrapper
   */
  design: 'error' | 'success' | 'warning' | 'primary' | 'secondary';
  /**
   * if true, svg color matches color with design
   */
  udpateSvgColor: boolean;
  componentDidRender(): void;
  render(): any;
}
