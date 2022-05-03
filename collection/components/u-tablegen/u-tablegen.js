import { Component, Host, h, Prop, State, Event, Method, Element, Watch } from '@stencil/core';
/**
 * @name Table Generator
 * @description a table gets generated from the data passed in
 * @state 🟡
 * @categorie Generator
 * @slot header - table head
 * @slot footer - table foot
 */
export class UTablegen {
  constructor() {
    /**
     * should the rows be resizeable (not implemented yet)
     */
    this.resizeable = false;
    /**
     * renders a checkbox in front of each row
     */
    this.selectable = false;
    /**
     * the header will be sticked to the top of the table
     */
    this.fixedHeader = true;
    /**
     * emits uLastElement when the last row is visible
     */
    this.observe = false;
    this.sort = {
      dir: 'none',
      prop: ''
    };
    this.displayedData = JSON.parse(JSON.stringify(this.data || []));
    this.selected = [];
    this.lastIndex = 0;
    this.currentColWidth = 0;
    this.nextColWidth = 0;
    this.startOffset = 0;
    this.currentCol = undefined;
    this.nextCol = undefined;
  }
  //  = [
  //   {
  //     id: 1,
  //     artno: '000-000000',
  //     name: 'DUMMY - Barcode X000000 nicht löschen',
  //     unit: 'Stk',
  //     loc: 'A1+A2',
  //     qty: '0'
  //   },
  //   {
  //     id: 2,
  //     artno: '001-010200',
  //     name: '1N4007 P',
  //     unit: 'Stk',
  //     loc: 'H5+H6+H8',
  //     qty: '92'
  //   },
  //   {
  //     id: 3,
  //     artno: '001-010300',
  //     name: '1N4148',
  //     unit: 'Stk',
  //     loc: 'H8',
  //     qty: '2548'
  //   },
  //   {
  //     id: 4,
  //     artno: '001-010301',
  //     name: '4148-SMD 0805',
  //     unit: 'Stk',
  //     loc: 'I1',
  //     qty: '5261'
  //   },
  //   {
  //     id: 5,
  //     artno: '001-010302',
  //     name: '4148-SMD 0603',
  //     unit: 'Stk',
  //     loc: 'C3',
  //     qty: '0'
  //   },
  //   {
  //     id: 6,
  //     artno: '001-010600',
  //     name: 'Z-Diode SMD 3,3V 0,5W 0805',
  //     unit: 'Stk',
  //     loc: 'I1',
  //     qty: '50375'
  //   }
  // ];
  watchData(newValue) {
    this.displayedData = JSON.parse(JSON.stringify(newValue));
  }
  format(value) {
    const formattedValue = [];
    for (let item of value.split('\n')) {
      if (/(^\t)|(\t$)/g.test(item)) {
        item = item.replace(/(^\t)|(\t$)/g, '');
      }
      const usedStyles = [];
      if (/^\*.*\*$/g.test(item)) {
        item = item.substring(1, item.length - 1);
        usedStyles.push('bold');
      }
      if (/^_.*_$/g.test(item)) {
        item = item.substring(1, item.length - 1);
        usedStyles.push('underline');
      }
      if (/^\..*\.$/g.test(item)) {
        item = item.substring(1, item.length - 1);
        usedStyles.push('italic');
      }
      if (/^-.*-$/g.test(item)) {
        item = item.substring(1, item.length - 1);
        usedStyles.push('strike');
      }
      formattedValue.push(h("p", { class: usedStyles.join(' ') }, item));
    }
    return formattedValue;
  }
  handleSort(field, dir) {
    this.sort = { dir, prop: field };
    if (dir === 'none') {
      this.displayedData = [...this.data];
      return;
    }
    if (!this.selectable) {
      delete this.displayedData[this.lastIndex].select;
      this.uUnselect.emit();
    }
    this.displayedData = this.displayedData.sort((a, b) => {
      if (dir === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      }
      if (dir === 'desc') {
        return a[field] < b[field] ? 1 : -1;
      }
      return 0;
    });
  }
  selectAll() {
    let setVal = true;
    if (this.selected.length > 0) {
      this.selected = [];
      setVal = false;
    }
    this.displayedData = this.displayedData.map((item) => {
      if (setVal)
        this.selected.push(item);
      item.select = setVal;
      return item;
    });
  }
  selectRow(row, rowIndex, state) {
    const index = this.selected.indexOf(row);
    if (this.selectable) {
      if (index === -1) {
        this.selected = [...this.selected, row];
        this.displayedData[rowIndex].select = true;
      }
      else {
        this.selected = [
          ...this.selected.slice(0, index),
          ...this.selected.slice(index + 1)
        ];
        this.displayedData[rowIndex].select = false;
      }
      if (state !== undefined)
        this.displayedData[rowIndex].select = state;
    }
    else {
      this.displayedData[rowIndex].select = true;
      delete this.displayedData[this.lastIndex].select;
      this.selected = [row];
    }
    if (!this.selectable && this.lastIndex === rowIndex) {
      this.uUnselect.emit();
      this.lastIndex = rowIndex;
      return;
    }
    this.lastIndex = rowIndex;
    this.uSelect.emit(this.selectable ? this.selected : row);
  }
  handleShiftClick(index, e) {
    if (!e.shiftKey || !this.selectable)
      return;
    const start = this.lastIndex > index ? index : this.lastIndex;
    const end = this.lastIndex > index ? this.lastIndex : index;
    const setVal = this.displayedData[this.lastIndex].select;
    this.displayedData = this.displayedData.map((item, i) => {
      if (i > start && i < end) {
        item.select = setVal;
        this.selectRow(item, i, setVal);
      }
      return item;
    });
    this.lastIndex = index;
  }
  /**
   * programmatically select a row
   */
  async select(index) {
    this.selectRow(this.displayedData[index], index);
  }
  /**
   * programmatically unselect a row
   */
  async unselect(index) {
    this.selectRow(this.displayedData[index], index);
  }
  createResize(th, height) {
    th.style.position = 'relative';
    th.style.width = `${th.offsetWidth}px`;
    const grip = document.createElement('div');
    grip.innerHTML = '&nbsp;';
    grip.style.top = '0';
    grip.style.right = '0';
    grip.style.bottom = '0';
    grip.style.width = '5px';
    grip.style.height = height;
    grip.className = 'columnSelector';
    grip.style.position = 'absolute';
    grip.style.cursor = 'col-resize';
    grip.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.currentCol = th;
      this.startOffset = e.pageX;
      this.nextCol = th.nextElementSibling;
      this.currentColWidth = this.currentCol.offsetWidth;
      if (this.nextCol)
        this.nextColWidth = this.nextCol.offsetWidth;
    });
    th.appendChild(grip);
  }
  componentDidLoad() {
    if (!this.resizeable)
      return;
    const table = this.el.shadowRoot.querySelector('tbody');
    const thead = this.el.shadowRoot.querySelector('thead tr');
    const ths = this.el.shadowRoot.querySelectorAll('table th');
    ths.forEach((th) => {
      this.createResize(th, `${table.offsetHeight + thead.clientHeight}px`);
    });
    const tds = this.el.shadowRoot.querySelectorAll('table td');
    tds.forEach((td) => {
      td.style.width = `${td.offsetWidth}px`;
    });
    document.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (this.currentCol) {
        const diff = e.pageX - this.startOffset;
        if (this.nextCol)
          this.nextCol.style.width = `${this.nextColWidth - diff}px`;
        this.currentCol.style.width = `${this.currentColWidth + diff}px`;
      }
    });
    document.addEventListener('mouseup', () => {
      this.currentCol = undefined;
      this.nextCol = undefined;
    });
  }
  disconnectedCallback() {
    document.removeEventListener('mousemove', () => { });
    document.removeEventListener('mouseup', () => { });
  }
  render() {
    if (!this.data || !this.heading)
      return h("span", null, "loading ...");
    let order = this.heading.map((h) => h.field);
    if (this.selectable)
      order = ['select', ...order];
    return (h(Host, null,
      h("table", null,
        h("thead", { class: {
            sticky: this.fixedHeader,
            top: true
          } },
          h("tr", { class: "headingslot" },
            h("td", { colSpan: order.length },
              h("slot", { name: "header" }))),
          h("tr", { class: "heading" }, this.heading.map((item, index) => {
            var _a, _b;
            return [
              this.selectable && index === 0 && (h("th", { class: "center selectcell" },
                h("u-checkbox", { checked: this.selected.length > 0, tristate: this.selected.length > 0 &&
                    this.selected.length !== this.displayedData.length, onUChange: () => this.selectAll() }))),
              h("th", { class: {
                  [(_a = item.align) !== null && _a !== void 0 ? _a : 'left']: true
                }, style: {
                  width: (_b = item.width) !== null && _b !== void 0 ? _b : '100%'
                } },
                h("span", { class: "label" },
                  item.label,
                  item.sortable && (h("div", { class: "sort" },
                    (this.sort.prop !== item.field ||
                      this.sort.dir === 'none') && [
                      h("span", { onClick: () => this.handleSort(item.field, 'asc') }, "\u25B3"),
                      h("span", { onClick: () => this.handleSort(item.field, 'desc') }, "\u25BD")
                    ],
                    this.sort.dir === 'asc' &&
                      this.sort.prop === item.field && [
                      h("span", { onClick: () => this.handleSort(item.field, 'none') }, "\u25B2"),
                      h("span", { onClick: () => this.handleSort(item.field, 'desc') }, "\u25BD")
                    ],
                    this.sort.dir === 'desc' &&
                      this.sort.prop === item.field && [
                      h("span", { onClick: () => this.handleSort(item.field, 'asc') }, "\u25B3"),
                      h("span", { onClick: () => this.handleSort(item.field, 'none') }, "\u25BC")
                    ]))))
            ];
          }))),
        h("tbody", null, this.displayedData.map((row, rowIndex) => {
          const rowData = new Array(order.length);
          Object.entries(row).forEach(([key, value]) => {
            const index = this.selectable
              ? order.indexOf(key) + 1
              : order.indexOf(key);
            if (this.selectable) {
              rowData[0] = (h("td", { class: {
                  tablecell: true,
                  selectcell: true,
                  center: true,
                  selected: row.select === true
                } },
                h("u-checkbox", { checked: row.select === true, onUChange: () => {
                    this.selectRow(row, rowIndex);
                  }, onClick: (e) => this.handleShiftClick(rowIndex, e) })));
            }
            if (index > -1 && key !== 'select') {
              let w = '100%';
              let a = 'left';
              let bg = '';
              let ft = '';
              if (this.heading.length) {
                const params = this.heading.find((h) => h.field === key);
                if (!params)
                  return;
                const { width, align, bgcolor, fontcolor } = params;
                if (align)
                  a = align;
                if (width)
                  w = width;
                if (bgcolor)
                  bg = bgcolor(row);
                if (fontcolor)
                  ft = fontcolor(row);
              }
              rowData[index] = (h("td", { class: {
                  tablecell: true,
                  [a !== null && a !== void 0 ? a : 'left']: true,
                  selected: row.select === true
                }, style: {
                  width: w !== null && w !== void 0 ? w : '100%',
                  backgroundColor: bg,
                  color: ft
                } }, this.format(value.toString())));
            }
          });
          return this.observe && this.displayedData.length === rowIndex ? (h("u-observe", { onUVisble: () => this.uLastElement.emit() },
            h("tr", { class: "tablerow", onClick: () => {
                row.select = !row.select;
                this.selectRow(row, rowIndex);
              }, onMouseEnter: () => this.uStartHover.emit(row), onMouseLeave: () => this.uStopHover.emit(row) }, rowData))) : (h("tr", { class: "tablerow", onClick: () => {
              row.select = !row.select;
              this.selectRow(row, rowIndex);
            }, onMouseEnter: () => this.uStartHover.emit(row), onMouseLeave: () => this.uStopHover.emit(row) }, rowData));
        })),
        h("tfoot", null,
          h("slot", { name: "footer" })))));
  }
  static get is() { return "u-tablegen"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tablegen.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tablegen.css"]
  }; }
  static get properties() { return {
    "resizeable": {
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
        "text": "should the rows be resizeable (not implemented yet)"
      },
      "attribute": "resizeable",
      "reflect": false,
      "defaultValue": "false"
    },
    "selectable": {
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
        "text": "renders a checkbox in front of each row"
      },
      "attribute": "selectable",
      "reflect": false,
      "defaultValue": "false"
    },
    "fixedHeader": {
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
        "text": "the header will be sticked to the top of the table"
      },
      "attribute": "fixed-header",
      "reflect": false,
      "defaultValue": "true"
    },
    "observe": {
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
        "text": "emits uLastElement when the last row is visible"
      },
      "attribute": "observe",
      "reflect": false,
      "defaultValue": "false"
    },
    "heading": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<HeadOptions>",
        "resolved": "HeadOptions[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "HeadOptions": {
            "location": "local"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "the column definition and setting"
      }
    },
    "data": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "the data to be rendered as rows"
      }
    }
  }; }
  static get states() { return {
    "sort": {},
    "displayedData": {},
    "selected": {},
    "currentColWidth": {},
    "nextColWidth": {},
    "startOffset": {},
    "currentCol": {},
    "nextCol": {}
  }; }
  static get events() { return [{
      "method": "uSelect",
      "name": "uSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emits uSelect when a row is selected. Returns an array of selected rows when selectable is true."
      },
      "complexType": {
        "original": "Array<any> | object",
        "resolved": "any[] | object",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "uUnselect",
      "name": "uUnselect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emits uUnselect when a row is unselected and selectable is false."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "uStartHover",
      "name": "uStartHover",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emits uStartHover when a row is hovered."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "uStopHover",
      "name": "uStopHover",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emits uStoptHover on mouse leave."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "uLastElement",
      "name": "uLastElement",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emits uLastElement when the last element is reached and observe is true."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "select": {
      "complexType": {
        "signature": "(index: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "programmatically select a row",
        "tags": []
      }
    },
    "unselect": {
      "complexType": {
        "signature": "(index: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "programmatically unselect a row",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchData"
    }]; }
}
