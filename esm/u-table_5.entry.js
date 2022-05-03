import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uTableCss = "";

let UTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("table", { style: {
        borderCollapse: this.borderStyle,
        borderSpacing: this.borderSpacing
      } }));
  }
};
UTable.style = uTableCss;

const uTablecellCss = ":host{display:block}";

let UTablecell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * should checkbox be rendered
     */
    this.checkbox = false;
  }
  render() {
    return (h("td", null, this.checkbox && h("u-checkbox", { size: "small" }), " ", this.data));
  }
};
UTablecell.style = uTablecellCss;

const uTablefootCss = ":host{display:block}";

let UTablefoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UTablefoot.style = uTablefootCss;

const uTableheadCss = ":host{display:block}";

let UTablehead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UTablehead.style = uTableheadCss;

const uTablerowCss = ":host{display:block}";

let UTablerow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("tr", null, h("u-tablecell", null)));
  }
};
UTablerow.style = uTablerowCss;

export { UTable as u_table, UTablecell as u_tablecell, UTablefoot as u_tablefoot, UTablehead as u_tablehead, UTablerow as u_tablerow };
