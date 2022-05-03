import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Collapsible
 * @state 🟢
 * @description accordion like component
 * @slot default - content inside of the collapsible
 */
export declare class UCollapsible {
  el: HTMLElement;
  /**
   * label of the spoiler
   */
  label: string;
  /**
   * set the size of the spoiler
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * emit when the spoiler is opened
   */
  uOpen: EventEmitter<void>;
  /**
   * emit when the spoiler is closed
   */
  uClose: EventEmitter<void>;
  /**
   * method to close collapsible
   */
  closeCollapsible(): Promise<void>;
  /**
   * method to open collapsible
   */
  openCollapsible(): Promise<void>;
  isOpen: boolean;
  private handleOnClick;
  private open;
  private close;
  render(): any;
}
