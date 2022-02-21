import { Component, h, Event, EventEmitter, Element, State } from '@stencil/core';

@Component({
  tag: 'u-observer',
  styleUrl: 'u-observer.css',
  shadow: true,
})
export class WObserver {
  @Element() el: HTMLElement;

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
  private onIntersection = entries => {
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
        threshold: [0, 0.8],
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
