'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uObserverCss = ":host{display:block}";

let UObserver = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.visible = index.createEvent(this, "visible", 3);
    this.invisible = index.createEvent(this, "invisible", 3);
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
    return (index.h("div", null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
UObserver.style = uObserverCss;

exports.u_observer = UObserver;
