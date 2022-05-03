'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uTablegenCss = ":host{width:100%}table{border-collapse:separate;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-spacing:0 0.3rem}.heading{--tw-bg-opacity:1;background-color:rgba(71, 85, 105, var(--tw-bg-opacity));border-radius:0.5rem;display:table;--tw-text-opacity:1;color:rgba(241, 243, 245, var(--tw-text-opacity));width:100%}.headingslot{width:100%}th{--tw-bg-opacity:1;background-color:rgba(71, 85, 105, var(--tw-bg-opacity));height:100%;padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-text-opacity:1;color:rgba(241, 243, 245, var(--tw-text-opacity));vertical-align:middle}th:last-child{padding-right:1rem}tbody{display:block;overflow-y:scroll;width:100%;-ms-flex:1 1 auto;flex:1 1 auto}thead{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));width:100%;-ms-flex:0 0 auto;flex:0 0 auto}.dark thead{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.dark tfoot{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}tfoot{position:-webkit-sticky;position:sticky;bottom:0px;width:100%;inset-block-end:0}.tablerow{cursor:pointer;display:table;white-space:pre-wrap;width:100%}.tablerow:hover>.tablecell{--tw-border-opacity:1;border-color:rgba(148, 163, 184, var(--tw-border-opacity))}.tablecell{--tw-bg-opacity:1;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));border-color:transparent;border-style:solid;border-top-width:2px;border-bottom-width:2px;border-left-width:0px;border-right-width:0px;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:0.5rem;padding-right:0.5rem;overflow-wrap:break-word}.selectcell{width:2.5rem}.sticky{position:-webkit-sticky;position:sticky;inset-block-start:0}.top{top:0px}.bottom{bottom:0px}.tablerow .tablecell:first-child,th:first-child{border-top-left-radius:0.75rem;border-bottom-left-radius:0.75rem;border-left-width:2px}.tablerow .tablecell:last-child,th:last-child{border-top-right-radius:0.75rem;border-bottom-right-radius:0.75rem;border-right-width:2px}p{margin:0px;padding:0px}.selected{--tw-bg-opacity:1;background-color:rgba(191, 219, 254, var(--tw-bg-opacity))}.bold{font-weight:700}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.strike{-webkit-text-decoration-line:line-through;text-decoration-line:line-through}.center{text-align:center}.right{text-align:right}.left{text-align:left}.label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;grid-gap:0.25rem;gap:0.25rem}.sort{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;font-size:0.75rem;line-height:1rem;line-height:1;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;--tw-text-opacity:1;color:rgba(222, 226, 230, var(--tw-text-opacity))}.sort>span{cursor:pointer}.columnSelector:hover{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity))}";

let UTablegen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uSelect = index.createEvent(this, "uSelect", 7);
    this.uUnselect = index.createEvent(this, "uUnselect", 7);
    this.uStartHover = index.createEvent(this, "uStartHover", 7);
    this.uStopHover = index.createEvent(this, "uStopHover", 7);
    this.uLastElement = index.createEvent(this, "uLastElement", 7);
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
      formattedValue.push(index.h("p", { class: usedStyles.join(' ') }, item));
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
      return index.h("span", null, "loading ...");
    let order = this.heading.map((h) => h.field);
    if (this.selectable)
      order = ['select', ...order];
    return (index.h(index.Host, null, index.h("table", null, index.h("thead", { class: {
        sticky: this.fixedHeader,
        top: true
      } }, index.h("tr", { class: "headingslot" }, index.h("td", { colSpan: order.length }, index.h("slot", { name: "header" }))), index.h("tr", { class: "heading" }, this.heading.map((item, index$1) => {
      var _a, _b;
      return [
        this.selectable && index$1 === 0 && (index.h("th", { class: "center selectcell" }, index.h("u-checkbox", { checked: this.selected.length > 0, tristate: this.selected.length > 0 &&
            this.selected.length !== this.displayedData.length, onUChange: () => this.selectAll() }))),
        index.h("th", { class: {
            [(_a = item.align) !== null && _a !== void 0 ? _a : 'left']: true
          }, style: {
            width: (_b = item.width) !== null && _b !== void 0 ? _b : '100%'
          } }, index.h("span", { class: "label" }, item.label, item.sortable && (index.h("div", { class: "sort" }, (this.sort.prop !== item.field ||
          this.sort.dir === 'none') && [
          index.h("span", { onClick: () => this.handleSort(item.field, 'asc') }, "\u25B3"),
          index.h("span", { onClick: () => this.handleSort(item.field, 'desc') }, "\u25BD")
        ], this.sort.dir === 'asc' &&
          this.sort.prop === item.field && [
          index.h("span", { onClick: () => this.handleSort(item.field, 'none') }, "\u25B2"),
          index.h("span", { onClick: () => this.handleSort(item.field, 'desc') }, "\u25BD")
        ], this.sort.dir === 'desc' &&
          this.sort.prop === item.field && [
          index.h("span", { onClick: () => this.handleSort(item.field, 'asc') }, "\u25B3"),
          index.h("span", { onClick: () => this.handleSort(item.field, 'none') }, "\u25BC")
        ]))))
      ];
    }))), index.h("tbody", null, this.displayedData.map((row, rowIndex) => {
      const rowData = new Array(order.length);
      Object.entries(row).forEach(([key, value]) => {
        const index$1 = this.selectable
          ? order.indexOf(key) + 1
          : order.indexOf(key);
        if (this.selectable) {
          rowData[0] = (index.h("td", { class: {
              tablecell: true,
              selectcell: true,
              center: true,
              selected: row.select === true
            } }, index.h("u-checkbox", { checked: row.select === true, onUChange: () => {
              this.selectRow(row, rowIndex);
            }, onClick: (e) => this.handleShiftClick(rowIndex, e) })));
        }
        if (index$1 > -1 && key !== 'select') {
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
          rowData[index$1] = (index.h("td", { class: {
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
      return this.observe && this.displayedData.length === rowIndex ? (index.h("u-observe", { onUVisble: () => this.uLastElement.emit() }, index.h("tr", { class: "tablerow", onClick: () => {
          row.select = !row.select;
          this.selectRow(row, rowIndex);
        }, onMouseEnter: () => this.uStartHover.emit(row), onMouseLeave: () => this.uStopHover.emit(row) }, rowData))) : (index.h("tr", { class: "tablerow", onClick: () => {
          row.select = !row.select;
          this.selectRow(row, rowIndex);
        }, onMouseEnter: () => this.uStartHover.emit(row), onMouseLeave: () => this.uStopHover.emit(row) }, rowData));
    })), index.h("tfoot", null, index.h("slot", { name: "footer" })))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchData"]
  }; }
};
UTablegen.style = uTablegenCss;

exports.u_tablegen = UTablegen;
