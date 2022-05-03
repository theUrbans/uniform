/**
 * @name Grid
 * @state 🟡
 * @categorie Layout
 */
export declare class UGrid {
  el: HTMLElement;
  /**
   * number of columns or array of column widths
   */
  columns: number | Array<string>;
  /**
   * number of rows or array of row heights
   */
  rows: number | Array<string>;
  /**
   * optional naming of grid areas
   */
  area: Array<string[]>;
  /**
   * gap size
   */
  gap: string;
  /**
   * height of grid
   */
  height: string;
  /**
   * width of grid
   */
  width: string;
  private formatColumns;
  private formatRows;
  private setAttributes;
  componentDidLoad(): void;
  render(): any;
}
