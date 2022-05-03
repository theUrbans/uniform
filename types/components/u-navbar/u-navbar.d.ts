/**
 * @name Navigation Bar
 * @state 🟡
 * @description top or bottom navigation bar
 * @categorie Layout
 */
export declare class UNavbar {
  /**
   *  position of the navbar
   */
  position: 'top' | 'bottom';
  /**
   * should the navbar be fixed to the top or bottom of the screen -
   * layout should be position relative
   */
  fixed: boolean;
  render(): any;
}
