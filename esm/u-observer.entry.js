import { r as registerInstance, c as createEvent, h, g as getElement } from './index-4f6a2e7b.js';

const uObserverCss = ":host{display:block}";

let UObserver = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = createEvent(this, "visible", 3);
    this.invisible = createEvent(this, "invisible", 3);
    this.isVisible = false;
    this.onIntersection = (entries) => {
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
  }
  componentDidLoad() {
    const div = this.el.shadowRoot.querySelector('div');
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
    return (h("div", null, h("slot", null)));
  }
  get el() { return getElement(this); }
};
UObserver.style = uObserverCss;

export { UObserver as u_observer };
