import {
  Component,
  h,
  Event,
  EventEmitter,
  Element,
  State,
  Prop
} from '@stencil/core';

/**
 * @name Observer
 * @state 🟢
 * @description emits events when slot becomes visible
 */
@Component({
  tag: 'u-observer',
  styleUrl: 'u-observer.css',
  shadow: true
})
export class UObserver {
  @Element() el: HTMLElement;

  /**
   * observer threshold
   */
  @Prop() threshold?: number | number[];

  /**
   * margin around the element
   */
  @Prop() margin?: number;

  /**
   * emit `visible` event, when element get visible in viewport
   */
  @Event({ bubbles: false }) visible: EventEmitter<void>;

  /**
   * emit `invisible` event, when element looses visibility in viewport
   */
  @Event({ bubbles: false }) invisible: EventEmitter<void>;

  @State() isVisible: boolean = false;

  private observer: IntersectionObserver;

  private onIntersection = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.visible.emit();
        this.isVisible = true;
        return;
      }
      if (this.isVisible) {
        this.invisible.emit();
        this.isVisible = false;
      }
    }
  };

  componentDidLoad() {
    const div: HTMLDivElement = this.el.shadowRoot.querySelector('div');
    if (div) {
      this.observer = new IntersectionObserver(this.onIntersection, {
        threshold: this.threshold || [0, 0.8],
        rootMargin: `${this.margin || 0}px`
      });
      this.observer.observe(div);
    }
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
