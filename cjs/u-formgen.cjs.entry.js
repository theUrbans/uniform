'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uFormgenCss = "form{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;grid-gap:1rem;gap:1rem}";

let UFormgen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uSubmit = index.createEvent(this, "uSubmit", 7);
    this.uNextStep = index.createEvent(this, "uNextStep", 7);
    this.layout = ''; // create layout with descriptive text, eg: stepper, 2 cols, 3 rows
    this.fields = [];
    this.buttons = [];
    this.submitForm = () => {
      console.log('submitForm', this.returnValue);
      this.uSubmit.emit(this.returnValue);
    };
    this.steps = [];
    this.stepper = false;
    this.sendStep = (e) => {
      this.uNextStep.emit({ step: e.detail, value: this.returnValue });
    };
  }
  setAttr(field) {
    this.returnValue = Object.assign(Object.assign({}, this.returnValue), { [field.prop]: field.value || '' });
    if (field.type === 'input' || field.type === 'textarea') {
      return Object.assign({ onUInput: (event) => {
          this.returnValue = Object.assign(Object.assign({}, this.returnValue), { [field.prop]: event.detail });
        }, label: field.label, value: field.value, inputType: field.subType || 'text', required: field.required }, field.options);
    }
    if (field.type === 'select') {
      return Object.assign({ onUChange: (event) => {
          this.returnValue = Object.assign(Object.assign({}, this.returnValue), { [field.prop]: event.detail });
        }, label: field.label, value: field.value, options: field.data, required: field.required }, field.options);
    }
    if (field.type === 'filepicker') {
      return Object.assign({ onUSelect: (event) => {
          this.returnValue = Object.assign(Object.assign({}, this.returnValue), { [field.prop]: event.detail });
        }, label: field.label, required: field.required }, field.options);
    }
    if (field.type === 'checkbox')
      return {};
    if (field.type === 'radio')
      return {};
  }
  getLayout() {
    const layout = this.layout.split(',');
    layout.forEach((row) => {
      row = row.trim();
      if (row === 'stepper')
        this.stepper = true;
      if (row.includes('col') ||
        row.includes('cols') ||
        row.includes('column') ||
        row.includes('columns')) {
        const cols = row.split(' ');
        this.cols = Number(cols[0]);
        // if (cols.length > 2) return this.steps = [...this.steps, cols[0]];
        // return
      }
      if (row.includes('row') || row.includes('rows')) {
        const rows = row.split(' ');
        this.rows = Number(rows[0]);
      }
      if (row.includes('gap')) {
        const [gap] = row.split(' ');
        this.gap = gap;
      }
    });
  }
  componentWillLoad() {
    this.getLayout();
    this.fields.forEach((field) => {
      if (field.step)
        if (!this.steps.includes(field.step))
          this.steps = [...this.steps, field.step];
    });
  }
  handleButtonClick(button) {
    if (!button.event) {
      this.submitForm();
      return;
    }
    button.event();
    if (!this.el)
      return;
    if (!button.eventName)
      return;
    this.el.dispatchEvent(new CustomEvent(button.eventName));
  }
  render() {
    return (index.h(index.Host, null, this.stepper ? (index.h("u-stepper", { onUSubmit: this.submitForm, onUStep: this.sendStep, steps: this.steps }, this.steps.map((step, index$1) => (index.h("u-grid", { rows: this.rows, columns: this.cols, gap: this.gap, slot: `step-${index$1 + 1}`, width: "calc(100% - 2rem)", style: {
        padding: '1rem'
      } }, this.fields.map((Field) => {
      if (Field.step !== step)
        return;
      const Tag = `u-${Field.type}`;
      return (index.h(Tag, Object.assign({}, this.setAttr(Field), { style: {
          'grid-area': Field.place
        } })));
    })))))) : (index.h("form", { onSubmit: this.submitForm }, index.h("u-grid", { rows: this.rows, columns: this.cols, gap: this.gap }, this.fields.map((Field) => {
      const Tag = `w-${Field.type}`;
      return (index.h(Tag, Object.assign({}, this.setAttr(Field), { style: {
          'grid-area': Field.place
        } })));
    })), index.h("slot", null), index.h("u-row", { justify: "space-between", padding: "0" }, this.buttons.map((button) => (index.h("u-button", { onUClick: () => this.handleButtonClick(button), type: button.event ? 'button' : 'submit', design: button.design || 'secondary' }, button.text || 'Submit'))))))));
  }
  get el() { return index.getElement(this); }
};
UFormgen.style = uFormgenCss;

exports.u_formgen = UFormgen;
