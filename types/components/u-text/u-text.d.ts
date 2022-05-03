/**
 * @name Text
 * @state 🟡
 * @description Text component to style fast. No added padding or margin.
 */
export declare class UText {
  /**
   * font size: string, e.g. '12px', '1rem'. Default is '1rem'.
   */
  size: string;
  /**
   * font weight: string, e.g. 'bold'. Default is 'normal'.
   */
  weight: string;
  /**
   * text-transfrom: string, e.g. 'uppercase', 'lowercase'.
   */
  transform: string;
  /**
   * font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).
   */
  color: string;
  render(): any;
}
