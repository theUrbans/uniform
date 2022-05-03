/**
 * @name Column
 * @state 🟢
 * @description Flexbox column
 * @categorie Layout
 */
export declare class UCol {
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
  render(): any;
}
