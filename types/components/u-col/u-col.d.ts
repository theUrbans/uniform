declare enum Width {
  sm = "auto",
  md = "750px",
  lg = "970px",
  xl = "1170px"
}
declare enum Breakpoint {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200
}
/**
 * @name Column
 * @state 🟢
 * @description Flexbox column
 * @categorie Layout
 */
export declare class UCol {
  el: HTMLElement;
  /**
   * flex align-items: start | center | end | space-between | space-around | space-evenly
   */
  align: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  /**
   * flex justify-content: flex-start | flex-end | center | baseline | stretch
   */
  justify: 'start' | 'center' | 'end' | 'stretch';
  /**
   * flex wrap: nowrap | wrap | wrap-reverse
   */
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  gap: string;
  /**
   * padding bottom and top: string, e.g. '1rem', '1px'
   */
  padding: string;
  /**
   * used with w-grid, set size based on number of columns on w-grid (default is 12)
   */
  size: number;
  /**
   * use with w-grid to set area
   */
  area?: string;
  /**
   * size in small (≥768px)
   */
  sm?: number;
  /**
   * size in medium (≥992px)
   */
  md?: number;
  /**
   * size in large (≥1200px)
   */
  lg?: number;
  /**
   * size in extra large (≥1200px)
   */
  xl?: number;
  start?: number;
  end?: number;
  width: Width;
  bp: Breakpoint;
  colSize: number | 'auto';
  private setStyle;
  onWindowResize(): void;
  private setBreakpoint;
  private calculatePosition;
  componentWillRender(): void;
  render(): any;
}
export {};
