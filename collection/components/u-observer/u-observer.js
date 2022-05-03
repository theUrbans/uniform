import { Component, h, Event, Element, State } from '@stencil/core';
/**
 * @name Observer
 * @state 🟢
 * @description emits events when slot becomes visible
 */
export class UObserver {
  constructor() {
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
        threshold: [0, 0.8]
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
    return (h("div", null,
      h("slot", null)));
  }
  static get is() { return "u-observer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-observer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-observer.css"]
  }; }
  static get states() { return {
    "isVisible": {}
  }; }
  static get events() { return [{
      "method": "visible",
      "name": "visible",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit `visible` event, when element get visible in viewport"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "invisible",
      "name": "invisible",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit `invisible` event, when element looses visibility in viewport"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
