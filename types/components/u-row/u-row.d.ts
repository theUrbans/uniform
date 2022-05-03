/**
 * @name Row
 * @state 🟢
 * @description flexbox row
 * @categorie Layout
 */
export declare class URow {
  /**
   * flex justify-content
   */
  justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  /**
   * flex align-items
   */
  align: 'start' | 'center' | 'end' | 'stretch';
  /**
   * flex wrap
   */
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  gap: string;
  /**
   * padding left and right: string, e.g. '1rem', '1px'
   */
  padding: string;
  /**
   * flex width behaviour
   */
  width: 'full' | 'content' | 'auto';
  /**
   * should row be responsive?
   */
  container?: boolean;
  /**
   * how many columns are in the row?
   */
  gutter?: number;
  private setStyle;
  render(): any;
}
