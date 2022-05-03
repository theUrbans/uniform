import { Component, h } from '@stencil/core';
/**
 * @name Cardbody
 * @state 🟡
 * @description Wrapper of body of a card, can be filled with a cardimage.
 */
export class UCardbody {
  render() {
    return h("slot", null);
  }
  static get is() { return "u-cardbody"; }
  static get encapsulation() { return "shadow"; }
}
