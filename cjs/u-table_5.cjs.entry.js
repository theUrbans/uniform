'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uTableCss = "";

let UTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * control border-collapse style
     */
    this.borderStyle = 'collapse';
    /**
     * control border-spacing styöe
     */
    this.borderSpacing = '0';
  }
  render() {
    return (index.h("table", { style: {
        borderCollapse: this.borderStyle,
        borderSpacing: this.borderSpacing
      } }));
  }
};
UTable.style = uTableCss;

const uTablecellCss = ":host{display:block}";

let UTablecell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * should checkbox be rendered
     */
    this.checkbox = false;
  }
  render() {
    return (index.h("td", null, this.checkbox && index.h("u-checkbox", { size: "small" }), " ", this.data));
  }
};
UTablecell.style = uTablecellCss;

const uTablefootCss = ":host{display:block}";

let UTablefoot = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UTablefoot.style = uTablefootCss;

const uTableheadCss = ":host{display:block}";

let UTablehead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UTablehead.style = uTableheadCss;

const uTablerowCss = ":host{display:block}";

let UTablerow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("tr", null, index.h("u-tablecell", null)));
  }
};
UTablerow.style = uTablerowCss;

exports.u_table = UTable;
exports.u_tablecell = UTablecell;
exports.u_tablefoot = UTablefoot;
exports.u_tablehead = UTablehead;
exports.u_tablerow = UTablerow;
