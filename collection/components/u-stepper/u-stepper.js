import { Component, Host, h, Prop, Event, State } from '@stencil/core';
/**
 * @name Stepper
 * @state 🟡
 * @description formular with multiple steps
 * @categorie Input Control
 * @slot step-N - slot for every step, starting with N=1
 */
export class UStepper {
  constructor() {
    /**
     * define steps -
     * without label -> steps: 3,
     * with label -> steps: [1,'2',3],
     * both do the same, but with array you can define the label
     */
    this.steps = ['Step1', 'Step2', 'Step3'];
    /**
     * disabled state of the submit button
     */
    this.allData = true;
    /**
     * disabled state of the next step button
     */
    this.nextStepAvailable = true;
    /**
     * label of the previous step button
     */
    this.prevLabel = 'previous';
    /**
     * label of the next step button
     */
    this.nextLabel = 'next';
    /**
     * label of the next step button
     */
    this.submitLabel = 'submit';
    /**
     * decide the alignment of the stepper
     */
    this.alignment = 'horizontal';
    this.currentStep = 0;
    this.handleSubmit = () => {
      this.uSubmit.emit();
    };
    this.handleNextStep = () => {
      this.currentStep += 1;
      this.uStep.emit(this.currentStep + 1);
    };
    this.handlePreviousStep = () => {
      this.currentStep -= 1;
      this.uStep.emit(this.currentStep);
    };
  }
  formatSteps() {
    if (typeof this.steps === 'number') {
      this.steps = [...Array(this.steps).keys()];
    }
    return this.steps;
  }
  render() {
    const steps = this.formatSteps();
    const layout = () => {
      if (this.alignment === 'horizontal')
        return {
          columns: 1,
          rows: ['3rem', '1fr', '2rem'],
          area: [['header'], ['content'], ['footer']]
        };
      if (this.alignment === 'vertical')
        return {
          columns: ['6rem', '1fr'],
          rows: ['1fr', '2rem'],
          // columns: 2,
          // rows: 2,
          area: [
            ['header', 'content'],
            ['x', 'footer']
          ]
        };
    };
    return (h(Host, null,
      h("u-grid", Object.assign({}, layout(), { width: "100%", height: "100%" }),
        h("div", { class: {
            head: true,
            [this.alignment]: true
          }, style: {
            gridArea: 'header'
          } }, steps.map((step, index) => {
          if (this.alignment === 'horizontal')
            return [
              h("u-row", { width: "content" },
                h("div", { class: {
                    step: true,
                    activeStep: index === this.currentStep
                  } },
                  h("span", { class: {
                      no: true,
                      activeStep: index === this.currentStep
                    } }, index + 1),
                  typeof step === 'string' && (h("span", { class: "label" }, step)))),
              index < steps.length - 1 && (h("div", { class: {
                  line: true,
                  doneLine: index < this.currentStep
                } }))
            ];
          if (this.alignment === 'vertical')
            return [
              h("div", { class: {
                  step: true,
                  activeStep: index === this.currentStep
                } },
                h("span", { class: {
                    no: true,
                    activeStep: index === this.currentStep
                  } }, index + 1),
                typeof step === 'string' && (h("span", { class: "label" }, step)))
            ];
          return null;
        })),
        h("div", { class: {
            content: true,
            [this.alignment]: true
          }, style: {
            gridArea: 'content'
          } }, steps.map((_, index) => (h("div", { class: {
            visible: index === this.currentStep,
            hidden: index !== this.currentStep
          } },
          h("slot", { name: `step-${index + 1}` }, "keine Daten in dem Slot"))))),
        h("div", { class: {
            footer: true,
            [this.alignment]: true
          }, style: {
            gridArea: 'footer'
          } },
          h("u-button", { design: "error", flat: true, disabled: this.currentStep === 0, onUClick: this.handlePreviousStep },
            this.prevLabel,
            h("span", { slot: "prefix" }, "\u00AB")),
          this.currentStep < steps.length - 1 ? (h("u-button", { design: "success", flat: true, disabled: this.currentStep === steps.length - 1 ||
              !this.nextStepAvailable, onClick: this.handleNextStep },
            this.nextLabel,
            h("span", { slot: "suffix" }, "\u00BB"))) : (h("u-button", { design: "success", flat: true, disabled: !this.allData, onUClick: this.handleSubmit }, this.submitLabel))),
        this.alignment === 'vertical' && (h("div", { class: "x", style: {
            gridArea: 'x'
          } })))));
  }
  static get is() { return "u-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-stepper.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-stepper.css"]
  }; }
  static get properties() { return {
    "steps": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | Array<number | string>",
        "resolved": "(string | number)[] | number",
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
        "text": "define steps -\nwithout label -> steps: 3,\nwith label -> steps: [1,'2',3],\nboth do the same, but with array you can define the label"
      },
      "attribute": "steps",
      "reflect": false,
      "defaultValue": "['Step1', 'Step2', 'Step3']"
    },
    "allData": {
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
        "text": "disabled state of the submit button"
      },
      "attribute": "all-data",
      "reflect": false,
      "defaultValue": "true"
    },
    "nextStepAvailable": {
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
        "text": "disabled state of the next step button"
      },
      "attribute": "next-step-available",
      "reflect": false,
      "defaultValue": "true"
    },
    "prevLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "label of the previous step button"
      },
      "attribute": "prev-label",
      "reflect": false,
      "defaultValue": "'previous'"
    },
    "nextLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "label of the next step button"
      },
      "attribute": "next-label",
      "reflect": false,
      "defaultValue": "'next'"
    },
    "submitLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "label of the next step button"
      },
      "attribute": "submit-label",
      "reflect": false,
      "defaultValue": "'submit'"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'horizontal' | 'vertical'",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "decide the alignment of the stepper"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'horizontal'"
    }
  }; }
  static get states() { return {
    "currentStep": {}
  }; }
  static get events() { return [{
      "method": "uSubmit",
      "name": "uSubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit wSubmit event on submit button click"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "uStep",
      "name": "uStep",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit wNextStep event on next/previous button click"
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
}
