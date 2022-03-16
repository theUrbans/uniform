import { Component, h } from '@stencil/core';

/**
 * @name Cardbody
 * @state 🟡
 * @description Wrapper of body of a card, can be filled with a cardimage.
 */
@Component({
  tag: 'u-cardbody',
  shadow: true,
})
export class UCardbody {
  render() {
    return <slot />;
  }
}
