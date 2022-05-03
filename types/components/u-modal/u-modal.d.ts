import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Modal
 * @state 🟡
 * @description A modal window that can be used to display information to the user.
 * @categorie Modal
 * @slot header - The header of the modal
 * @slot body - The body of the modal
 */
export declare class UModal {
  el: HTMLElement;
  /**
   * name of the modal - needed to call methods
   */
  name: string;
  /**
   * should the modal be closed on backdrop click
   */
  closeOnClick: boolean;
  /**
   * display a close button in the top right corner
   */
  topRightClose: boolean;
  /**
   * (DESKTOP only) should the modal be moveable by dragging the header
   */
  moveable: boolean;
  /**
   * (DESKTOP only) reset the modal position to the center of the screen
   */
  resetPosition: boolean;
  /**
   * (DESKTOP only) should the modal be resizable
   */
  resizeable: boolean;
  /**
   * autoset mode for mobile or desktop
   */
  mode: 'desktop' | 'mobile';
  /**
   * (DESKTOP only) resizable min width
   */
  minWidth: string;
  /**
   * (DESKTOP only) resizable min height
   */
  minHeight: string;
  /**
   * (DESKTOP only) resizable max width
   */
  maxHeight: string;
  /**
   * (DESKTOP only) resizable max height
   */
  maxWidth: string;
  /**
   * event with given params
   */
  beforeOpen: EventEmitter<any>;
  showModalHandler(e: any): void;
  closeModalHandler(e: any): void;
  setParams(params: any): void;
  /**
   * method to open the modal
   */
  showModal(name: string): Promise<void>;
  /**
   * method to close the modal
   */
  closeModal(name: string): Promise<void>;
  isOpen: boolean;
  params: any;
  private initPosition;
  private handleCloseClick;
  private handleBlur;
  drag: boolean;
  dragoffset: {
    x: number;
    y: number;
  };
  private node;
  private handleStartDrag;
  private mouseUp;
  private handleMove;
  render(): any;
}
