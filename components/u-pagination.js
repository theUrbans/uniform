import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './u-button2.js';
import { d as defineCustomElement$2 } from './u-group2.js';

const uPaginationCss = ":host{--tw-bg-opacity:1;background-color:rgba(209, 250, 229, var(--tw-bg-opacity));height:100%}.page{padding:0.25rem}.selected{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(96, 165, 250, var(--tw-text-opacity))}";

let UPagination$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.pageChange = createEvent(this, "pageChange", 7);
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
    return (h(Host, null, h("u-group", null, this.showButtons && (h("u-button", { rounded: "left", onClick: () => this.changePage(this.currentPage - 1), disabled: this.currentPage <= 1 }, "<")), Array(this.pages)
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
    }), this.showButtons && (h("u-button", { rounded: "right", onClick: () => this.changePage(this.currentPage + 1), disabled: this.currentPage >= this.pages }, ">")))));
  }
  static get style() { return uPaginationCss; }
};
UPagination$1 = /*@__PURE__*/ proxyCustomElement(UPagination$1, [1, "u-pagination", {
    "pages": [2],
    "showPages": [2, "show-pages"],
    "showButtons": [4, "show-buttons"],
    "showLastAndFirstPage": [4, "show-last-and-first-page"],
    "currentPage": [32],
    "goToPage": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-pagination", "u-button", "u-group"];
  components.forEach(tagName => { switch (tagName) {
    case "u-pagination":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UPagination$1);
      }
      break;
    case "u-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UPagination = UPagination$1;
const defineCustomElement = defineCustomElement$1;

export { UPagination, defineCustomElement };
