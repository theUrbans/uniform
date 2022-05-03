import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Button
 * @state 🟢
 */
export declare class UButton {
  /**
   * color design
   */
  design?: 'secondary' | 'error' | 'success' | 'warning' | 'primary';
  /**
   * change design, only show outlines
   */
  outline?: boolean;
  /**
   * button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * show disabled state
   */
  disabled?: boolean;
  /**
   * show only text
   */
  flat?: boolean;
  /**
   * set button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * enable border radius
   */
  rounded?: 'left' | 'right' | 'top' | 'bottom' | 'none' | 'all';
  /**
   * emit wClick on button click
   */
  uClick: EventEmitter<void>;
  private handleOnClick;
  render(): any;
}
