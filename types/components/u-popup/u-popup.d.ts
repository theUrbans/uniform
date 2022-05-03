/**
 * @name Popup
 */
export declare class UPopup {
  el: HTMLElement;
  axis: 'x-start' | 'x-end' | 'x-center' | 'y-start' | 'y-end' | 'y-center';
  visible: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  alignment: 'start' | 'end' | 'center';
  private calcPos;
  componentWillLoad(): void;
  render(): any;
}
