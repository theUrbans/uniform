import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Pagination
 * @state 🟡
 */
export declare class UPagination {
  pages: number;
  showPages: number;
  showButtons: boolean;
  showLastAndFirstPage: boolean;
  currentPage: number;
  pageChange: EventEmitter<number>;
  goToPage(page: number, eventless?: boolean): Promise<void>;
  private changePage;
  render(): any;
}
