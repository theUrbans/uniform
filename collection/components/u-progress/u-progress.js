import { Component, h, Prop, State, Watch } from '@stencil/core';
/**
 * @name Progress
 * @state 🟡
 */
export class UProgress {
  constructor() {
    /**
     * Maximum of values
     */
    this.max = 100;
    /**
     * Value used to calculate progress
     */
    this.value = 100;
    /**
     * Size of height of the bar, standard set to 1.25rem. Possible to use any unit.
     */
    this.height = '1.25rem';
    /**
     * Remove border.
     */
    this.borderless = false;
    /**
     * Enables text, which shows the percentage.
     */
    this.showPercentage = true;
  }
  valueChange() {
    // this.value = newValue;
    this.calcProgress();
  }
  calcProgress() {
    this.setProgress(String(((this.value * 100) / this.max).toFixed(2)));
  }
  setProgress(value) {
    this.progressResult = value;
  }
  render() {
    this.calcProgress();
    return (h("div", null,
      h("div", { class: { frame: true, border: !this.borderless } },
        h("div", { class: "progress", style: {
            width: `${this.progressResult}%`,
            height: this.height
          } }, this.showPercentage ? (h("div", null,
          " ",
          this.progressResult,
          " %")) : (h("div", null,
          h("slot", null)))))));
  }
  static get is() { return "u-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-progress.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-progress.css"]
  }; }
  static get properties() { return {
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum of values"
      },
      "attribute": "max",
      "reflect": false,
      "defaultValue": "100"
    },
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value used to calculate progress"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "100"
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
        "text": "Size of height of the bar, standard set to 1.25rem. Possible to use any unit."
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "'1.25rem'"
    },
    "borderless": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Remove border."
      },
      "attribute": "borderless",
      "reflect": false,
      "defaultValue": "false"
    },
    "showPercentage": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Enables text, which shows the percentage."
      },
      "attribute": "show-percentage",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "progressResult": {}
  }; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChange"
    }]; }
}
