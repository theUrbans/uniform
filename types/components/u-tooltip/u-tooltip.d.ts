/**
 * @name Tooltip
 * @state 🟢
 * @description This component allows you to display a tooltip.
 * @slot default - element which receives the tooltip
 * @slot content - (optional) content of the tooltip -> alternative to text, content prop must be used
 */
export declare class UTooltip {
  el: HTMLElement;
  /**
   * text of the tooltip
   */
  text: string;
  /**
   * position of the tooltip
   */
  axis: 'x' | 'y';
  /**
   * arrow alignment
   */
  alignment: 'start' | 'center' | 'end';
  /**
   * choose trigger event
   */
  trigger: 'click' | 'hover';
  /**
   * render custom content instead of text
   */
  content?: boolean;
  visible: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  private calcPos;
  componentWillLoad(): void;
  private handleMouseEnter;
  private handleMouseLeave;
  private handleClick;
  render(): any;
}
