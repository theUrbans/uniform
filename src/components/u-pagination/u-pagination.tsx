import { Component, Host, h, Prop, State, Event, EventEmitter, Method } from '@stencil/core';

/**
 * @name Pagination
 * @state 🟡
 */
@Component({
  tag: 'u-pagination',
  styleUrl: 'u-pagination.css',
  shadow: true,
})
export class UPagination {
  @Prop() pages: number;
  @Prop() showPages: number = 1;
  @Prop() showButtons: boolean = true;
  @Prop() showLastAndFirstPage: boolean = true;
  @State() currentPage: number = 1;
  @Event() pageChange: EventEmitter<number>;
  @Method('goToPage') async goToPage(page: number, eventless: boolean = false) {
    this.changePage(page, eventless);
  }
  private changePage(page: number, eventless: boolean = false) {
    if (page > this.pages) this.currentPage = this.pages;
    else if (page < 1) this.currentPage = 1;
    else this.currentPage = page;
    if (!eventless) this.pageChange.emit(this.currentPage);
  }
  render() {
    return (
      <Host>
        <u-group>
          {this.showButtons && (
            <u-button rounded="left" onClick={() => this.changePage(this.currentPage - 1)} disabled={this.currentPage <= 1}>
              &lt;
            </u-button>
          )}
          {Array(this.pages)
            .fill(0)
            .map((_, i) => {
              const page = i + 1;
              if (this.showLastAndFirstPage && page === 1)
                return [
                  <u-button
                    rounded={this.showButtons ? 'none' : page === 1 ? 'left' : page === this.pages ? 'right' : 'none'}
                    onClick={() => this.changePage(page)}
                    design={page === this.currentPage ? 'primary' : 'secondary'}
                  >
                    {page}
                  </u-button>,
                  this.currentPage > 3 && <span> &bull;</span>,
                ];
              const showPage = () => {
                if (page >= this.currentPage - this.showPages && page <= this.currentPage + this.showPages) return true;
                if (this.currentPage === 1 && this.showPages * 2 + 1 >= page) return true;
                if (this.currentPage === this.pages && this.pages - this.showPages * 2 <= page) return true;
                return false;
              };
              if (showPage())
                return (
                  <u-button
                    design={page === this.currentPage ? 'primary' : 'secondary'}
                    onClick={() => this.changePage(page)}
                    rounded={
                      this.showButtons
                        ? 'none'
                        : this.currentPage - this.showPages - page === 0
                        ? 'left'
                        : page === 1
                        ? 'left'
                        : this.currentPage - this.showPages - page === -2 * this.showPages
                        ? 'right'
                        : page === this.pages
                        ? 'right'
                        : 'none'
                    }
                  >
                    {page}
                  </u-button>
                );
              if (this.showLastAndFirstPage && page === this.pages)
                return [
                  this.currentPage < this.pages - 2 && <span> &bull;</span>,
                  <u-button
                    rounded={this.showButtons ? 'none' : page === 1 ? 'left' : page === this.pages ? 'right' : 'none'}
                    onClick={() => this.changePage(page)}
                    design={page === this.currentPage ? 'primary' : 'secondary'}
                  >
                    {page}
                  </u-button>,
                ];
            })}
          {this.showButtons && (
            <u-button rounded="right" onClick={() => this.changePage(this.currentPage + 1)} disabled={this.currentPage >= this.pages}>
              &gt;
            </u-button>
          )}
        </u-group>
      </Host>
    );
  }
}
