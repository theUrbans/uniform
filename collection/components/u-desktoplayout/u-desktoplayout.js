import { Component, h } from '@stencil/core';
/**
 * @name Desktop Layout
 * @state 🟡
 * @description default Desktop Layout - with a sidebar and a main content area
 * @categorie Layout
 */
export class UDesktoplayout {
  render() {
    return (h("u-grid", { columns: ['6rem', '1fr'], rows: 1, area: [['menu', 'main']], width: "100%", height: "100vh" },
      h("section", { class: "menu", style: {
          gridArea: 'menu'
        } },
        h("slot", { name: "menu" })),
      h("section", { class: "main", style: {
          gridArea: 'main'
        } },
        h("slot", { name: "main" }))));
  }
  static get is() { return "u-desktoplayout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-desktoplayout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-desktoplayout.css"]
  }; }
}
