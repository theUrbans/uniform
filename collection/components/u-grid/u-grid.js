import { Component, Host, h, Prop, Element } from '@stencil/core';
/**
 * @name Grid
 * @state 🟡
 * @categorie Layout
 */
export class UGrid {
  constructor() {
    /**
     * optional naming of grid areas
     */
    this.area = [];
    /**
     * gap size
     */
    this.gap = '0';
    /**
     * height of grid
     */
    this.height = 'max-content';
    /**
     * width of grid
     */
    this.width = 'max-content';
  }
  formatColumns() {
    if (typeof this.columns === 'number') {
      return `repeat(${this.columns}, 1fr)`;
    }
    if (Array.isArray(this.columns)) {
      return this.columns.join(' ');
    }
    return 'repeat(12, 1fr)';
  }
  formatRows() {
    if (typeof this.rows === 'number') {
      return `repeat(${this.rows}, 1fr)`;
    }
    if (Array.isArray(this.rows)) {
      return this.rows.join(' ');
    }
    return 'repeat(2, 1fr)';
  }
  setAttributes() {
    if (!this.el)
      return;
    this.el.style.setProperty('display', 'grid');
    this.el.style.setProperty('width', this.width);
    this.el.style.setProperty('height', this.height);
    this.el.style.setProperty('gap', this.gap);
    this.el.style.setProperty('grid-template-columns', this.formatColumns());
    this.el.style.setProperty('grid-template-rows', this.formatRows());
    if (this.area.length === 0)
      return;
    const area = this.area.map((row) => `${row.join(' ')}`);
    this.el.style.setProperty('grid-template-areas', `"${area.join('" "')}"`);
  }
  componentDidLoad() {
    this.setAttributes();
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-grid.css"]
  }; }
  static get properties() { return {
    "columns": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | Array<string>",
        "resolved": "number | string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "number of columns or array of column widths"
      },
      "attribute": "columns",
      "reflect": false
    },
    "rows": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | Array<string>",
        "resolved": "number | string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "number of rows or array of row heights"
      },
      "attribute": "rows",
      "reflect": false
    },
    "area": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<string[]>",
        "resolved": "string[][]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "optional naming of grid areas"
      },
      "defaultValue": "[]"
    },
    "gap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "gap size"
      },
      "attribute": "gap",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "height": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "height of grid"
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "'max-content'"
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "width of grid"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'max-content'"
    }
  }; }
  static get elementRef() { return "el"; }
}
