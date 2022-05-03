import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Observer
 * @state 🟢
 * @description emits events when slot becomes visible
 */
export declare class UObserver {
  el: HTMLElement;
  /**
   * emit `visible` event, when element get visible in viewport
   */
  visible: EventEmitter<void>;
  /**
   * emit `invisible` event, when element looses visibility in viewport
   */
  invisible: EventEmitter<void>;
  isVisible: boolean;
  private observer;
  private onIntersection;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
