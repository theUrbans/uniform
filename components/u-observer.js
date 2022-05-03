import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const uObserverCss = ":host{display:block}";

let UObserver$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get style() { return uObserverCss; }
};
UObserver$1 = /*@__PURE__*/ proxyCustomElement(UObserver$1, [1, "u-observer", {
    "threshold": [2],
    "margin": [2],
    "isVisible": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-observer"];
  components.forEach(tagName => { switch (tagName) {
    case "u-observer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UObserver$1);
      }
      break;
  } });
}

const UObserver = UObserver$1;
const defineCustomElement = defineCustomElement$1;

export { UObserver, defineCustomElement };
