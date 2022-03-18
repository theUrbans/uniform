import { Component, h } from '@stencil/core';

/**
 * @name Form
 * @state 🟡
 * @description optical wrapper for input fields
 * @categorie Input Control
 */
@Component({
  tag: 'u-form',
  styleUrl: 'u-form.css',
  scoped: true
})
export class UForm {
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <slot />
      </form>
    );
  }
}
