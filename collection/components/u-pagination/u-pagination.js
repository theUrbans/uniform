import { Component, Host, h, Prop, State, Event, Method } from '@stencil/core';
/**
 * @name Pagination
 * @state 🟡
 */
export class UPagination {
  constructor() {
    this.showPages = 1;
    this.showButtons = true;
    this.showLastAndFirstPage = true;
    this.currentPage = 1;
  }
  async goToPage(page, eventless = false) {
    this.changePage(page, eventless);
  }
  changePage(page, eventless = false) {
    if (page > this.pages)
      this.currentPage = this.pages;
    else if (page < 1)
      this.currentPage = 1;
    else
      this.currentPage = page;
    if (!eventless)
      this.pageChange.emit(this.currentPage);
  }
  render() {
    return (h(Host, null,
      h("u-group", null,
        this.showButtons && (h("u-button", { rounded: "left", onClick: () => this.changePage(this.currentPage - 1), disabled: this.currentPage <= 1 }, "<")),
        Array(this.pages)
          .fill(0)
          .map((_, i) => {
          const page = i + 1;
          if (this.showLastAndFirstPage && page === 1) {
            return [
              h("u-button", { rounded: this.showButtons
                  ? 'none'
                  : page === 1
                    ? 'left'
                    : page === this.pages
                      ? 'right'
                      : 'none', onClick: () => this.changePage(page), design: page === this.currentPage ? 'primary' : 'secondary' }, page),
              this.currentPage > 3 && h("span", null, " \u2022")
            ];
          }
          const showPage = () => {
            if (page >= this.currentPage - this.showPages &&
              page <= this.currentPage + this.showPages)
              return true;
            if (this.currentPage === 1 && this.showPages * 2 + 1 >= page)
              return true;
            if (this.currentPage === this.pages &&
              this.pages - this.showPages * 2 <= page)
              return true;
            return false;
          };
          if (showPage()) {
            return (h("u-button", { design: page === this.currentPage ? 'primary' : 'secondary', onClick: () => this.changePage(page), rounded: this.showButtons
                ? 'none'
                : this.currentPage - this.showPages - page === 0
                  ? 'left'
                  : page === 1
                    ? 'left'
                    : this.currentPage - this.showPages - page ===
                      -2 * this.showPages
                      ? 'right'
                      : page === this.pages
                        ? 'right'
                        : 'none' }, page));
          }
          if (this.showLastAndFirstPage && page === this.pages) {
            return [
              this.currentPage < this.pages - 2 && h("span", null, " \u2022"),
              h("u-button", { rounded: this.showButtons
                  ? 'none'
                  : page === 1
                    ? 'left'
                    : page === this.pages
                      ? 'right'
                      : 'none', onClick: () => this.changePage(page), design: page === this.currentPage ? 'primary' : 'secondary' }, page)
            ];
          }
          return null;
        }),
        this.showButtons && (h("u-button", { rounded: "right", onClick: () => this.changePage(this.currentPage + 1), disabled: this.currentPage >= this.pages }, ">")))));
  }
  static get is() { return "u-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-pagination.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-pagination.css"]
  }; }
  static get properties() { return {
    "pages": {
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
        "text": ""
      },
      "attribute": "pages",
      "reflect": false
    },
    "showPages": {
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
        "text": ""
      },
      "attribute": "show-pages",
      "reflect": false,
      "defaultValue": "1"
    },
    "showButtons": {
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
        "text": ""
      },
      "attribute": "show-buttons",
      "reflect": false,
      "defaultValue": "true"
    },
    "showLastAndFirstPage": {
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
        "text": ""
      },
      "attribute": "show-last-and-first-page",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "currentPage": {}
  }; }
  static get events() { return [{
      "method": "pageChange",
      "name": "pageChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "goToPage": {
      "complexType": {
        "signature": "(page: number, eventless?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
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
        "text": "",
        "tags": []
      }
    }
  }; }
}
