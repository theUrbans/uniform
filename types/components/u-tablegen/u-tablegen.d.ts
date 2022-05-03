import { EventEmitter } from '../../stencil-public-runtime';
export interface HeadOptions {
  field: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right' | string;
  sortable?: boolean;
  bgcolor?(row: any): string;
  fontcolor?(row: any): string;
}
/**
 * @name Table Generator
 * @description a table gets generated from the data passed in
 * @state 🟡
 * @categorie Generator
 * @slot header - table head
 * @slot footer - table foot
 */
export declare class UTablegen {
  el: HTMLElement;
  /**
   * should the rows be resizeable (not implemented yet)
   */
  resizeable: boolean;
  /**
   * renders a checkbox in front of each row
   */
  selectable: boolean;
  /**
   * the header will be sticked to the top of the table
   */
  fixedHeader: boolean;
  /**
   * emits uLastElement when the last row is visible
   */
  observe: boolean;
  /**
   * the column definition and setting
   */
  heading: Array<HeadOptions>;
  /**
   * the data to be rendered as rows
   */
  data: Array<any>;
  watchData(newValue: any): void;
  sort: {
    dir: 'asc' | 'desc' | 'none';
    prop: string;
  };
  private format;
  displayedData: Array<any>;
  private handleSort;
  /**
   * emits uSelect when a row is selected. Returns an array of selected rows when selectable is true.
   */
  uSelect: EventEmitter<Array<any> | object>;
  /**
   * emits uUnselect when a row is unselected and selectable is false.
   */
  uUnselect: EventEmitter<void>;
  /**
   * emits uStartHover when a row is hovered.
   */
  uStartHover: EventEmitter<any>;
  /**
   * emits uStoptHover on mouse leave.
   */
  uStopHover: EventEmitter<any>;
  selected: Array<any>;
  private selectAll;
  private selectRow;
  private lastIndex;
  private handleShiftClick;
  /**
   * programmatically select a row
   */
  select(index: number): Promise<void>;
  /**
   * programmatically unselect a row
   */
  unselect(index: number): Promise<void>;
  /**
   * emits uLastElement when the last element is reached and observe is true.
   */
  uLastElement: EventEmitter<void>;
  currentColWidth: number;
  nextColWidth: number;
  startOffset: number;
  currentCol: HTMLTableCaptionElement;
  nextCol: HTMLTableCaptionElement;
  private createResize;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
