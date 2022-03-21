import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Method,
  Element,
  Watch
} from '@stencil/core';

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
@Component({
  tag: 'u-tablegen',
  styleUrl: 'u-tablegen.css',
  shadow: true
})
export class UTablegen {
  @Element() el: HTMLElement;

  /**
   * should the rows be resizeable (not implemented yet)
   */
  @Prop() resizeable: boolean = false;

  /**
   * renders a checkbox in front of each row
   */
  @Prop() selectable: boolean = true;

  /**
   * the header will be sticked to the top of the table
   */
  @Prop() fixedHeader: boolean = true;

  /**
   * emits uLastElement when the last row is visible
   */
  @Prop() observe: boolean = false;

  /**
   * the column definition and setting
   */
  @Prop() heading!: Array<HeadOptions>;
  // [
  //   { field: 'artno', label: 'Artikelnummer', sortable: true, width: '15%' },
  //   { field: 'name', label: 'Beschreibung', sortable: true, width: '65%' },
  //   { field: 'loc', label: 'Lagerort', sortable: true, width: '10%' },
  //   { field: 'qty', label: 'Menge', width: '10%' }
  // ];

  /**
   * the data to be rendered as rows
   */
  @Prop({ mutable: true }) data!: Array<any>;

  // [
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
  //   },
  //   {
  //     id: 7,
  //     artno: '001-010700',
  //     name: 'Z-Diode SMD 5,1V 0,5W 0805',
  //     unit: 'Stk',
  //     loc: 'I1',
  //     qty: '398'
  //   },
  //   {
  //     id: 8,
  //     artno: '001-010800',
  //     name: 'Z-Diode SMD 5,6V 0,5W SOD123',
  //     unit: 'Stk',
  //     loc: 'D1+D2+I1',
  //     qty: '2717'
  //   },
  //   {
  //     id: 9,
  //     artno: '001-010810',
  //     name: 'Z-Diode SMD 5,6V 0,5W 0805',
  //     unit: 'Stk',
  //     loc: 'I1',
  //     qty: '500'
  //   },
  //   {
  //     id: 10,
  //     artno: '001-020300',
  //     name: 'Z-Diode 2,7V 0,5W',
  //     unit: 'Stk',
  //     loc: 'H8',
  //     qty: '194'
  //   }
  // ];
  @Watch('data') watchData(newValue: any) {
    this.displayedData = JSON.parse(JSON.stringify(newValue));
  }

  @State() sort: { dir: 'asc' | 'desc' | 'none'; prop: string } = {
    dir: 'none',
    prop: ''
  };

  private format(value: string): Array<string> {
    const formattedValue: Array<string> = [];
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
      formattedValue.push(<p class={usedStyles.join(' ')}>{item}</p>);
    }
    return formattedValue;
  }

  @State() displayedData: Array<any> = JSON.parse(JSON.stringify(this.data));

  private handleSort(field: string, dir: 'asc' | 'desc' | 'none') {
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

  /**
   * emits uSelect when a row is selected. Returns an array of selected rows when selectable is true.
   */
  @Event() uSelect: EventEmitter<Array<any> | object>; // if selectable true return array on select, if false return row object

  /**
   * emits uUnselect when a row is unselected and selectable is false.
   */
  @Event() uUnselect: EventEmitter<void>;

  /**
   * emits uStartHover when a row is hovered.
   */
  @Event() uStartHover: EventEmitter<any>;

  /**
   * emits uStoptHover on mouse leave.
   */
  @Event() uStopHover: EventEmitter<any>;

  @State() selected: Array<any> = [];

  private selectAll() {
    let setVal = true;
    if (this.selected.length > 0) {
      this.selected = [];
      setVal = false;
    }
    this.displayedData = this.displayedData.map((item) => {
      if (setVal) this.selected.push(item);
      item.select = setVal;
      return item;
    });
    console.log(this.selected.map((item) => item.id));
  }

  private selectRow(row: any, rowIndex: number, state?: boolean) {
    const index = this.selected.indexOf(row);
    if (this.selectable) {
      if (index === -1) {
        this.selected = [...this.selected, row];
        this.displayedData[rowIndex].select = true;
      } else {
        this.selected = [
          ...this.selected.slice(0, index),
          ...this.selected.slice(index + 1)
        ];
        this.displayedData[rowIndex].select = false;
      }
      if (state !== undefined) this.displayedData[rowIndex].select = state;
    } else {
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
    console.log(this.selected.map((item) => item.id));
  }

  private lastIndex: number = 0;

  private handleShiftClick(index: number, e: MouseEvent) {
    if (!e.shiftKey || !this.selectable) return;
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
  @Method() async select(index: number) {
    this.selectRow(this.displayedData[index], index);
  }

  /**
   * programmatically unselect a row
   */
  @Method() async unselect(index: number) {
    this.selectRow(this.displayedData[index], index);
  }

  /**
   * emits uLastElement when the last element is reached and observe is true.
   */
  @Event() uLastElement: EventEmitter<void>;

  @State() currentColWidth: number = 0;

  @State() nextColWidth: number = 0;

  @State() startOffset: number = 0;

  @State() currentCol: HTMLTableCaptionElement = undefined;

  @State() nextCol: HTMLTableCaptionElement = undefined;

  private createResize(th: HTMLTableCaptionElement, height: string) {
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
    grip.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault();
      this.currentCol = th;
      this.startOffset = e.pageX;
      this.nextCol = th.nextElementSibling as HTMLTableCaptionElement;
      this.currentColWidth = this.currentCol.offsetWidth;
      if (this.nextCol) this.nextColWidth = this.nextCol.offsetWidth;
    });
    th.appendChild(grip);
  }

  componentDidLoad() {
    if (!this.resizeable) return;
    const table = this.el.shadowRoot.querySelector('tbody');
    const thead = this.el.shadowRoot.querySelector(
      'thead tr'
    ) as HTMLTableRowElement;
    const ths = this.el.shadowRoot.querySelectorAll('table th');
    ths.forEach((th) => {
      this.createResize(
        th as HTMLTableCaptionElement,
        `${table.offsetHeight + thead.clientHeight}px`
      );
    });
    const tds = this.el.shadowRoot.querySelectorAll('table td');
    tds.forEach((td: HTMLTableCellElement) => {
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
    document.removeEventListener('mousemove', () => {});
    document.removeEventListener('mouseup', () => {});
  }

  render() {
    let order = this.heading.map((h) => h.field);
    if (this.selectable) order = ['select', ...order];

    return (
      <Host>
        <table>
          <thead
            class={{
              sticky: this.fixedHeader,
              top: true
            }}
          >
            <tr class="headingslot">
              <td colSpan={order.length}>
                <slot name="header" />
              </td>
            </tr>
            <tr class="heading">
              {this.heading.map((item, index) => [
                this.selectable && index === 0 && (
                  <th class="center selectcell">
                    <u-checkbox
                      checked={this.selected.length > 0}
                      tristate={
                        this.selected.length > 0 &&
                        this.selected.length !== this.displayedData.length
                      }
                      onUChange={() => this.selectAll()}
                    ></u-checkbox>
                  </th>
                ),
                <th
                  class={{
                    [item.align ?? 'left']: true
                  }}
                  style={{
                    width: item.width ?? '100%'
                  }}
                >
                  <span class="label">
                    {item.label}
                    {item.sortable && (
                      <div class="sort">
                        {(this.sort.prop !== item.field ||
                          this.sort.dir === 'none') && [
                          <span
                            onClick={() => this.handleSort(item.field, 'asc')}
                          >
                            &#9651;
                          </span>,
                          <span
                            onClick={() => this.handleSort(item.field, 'desc')}
                          >
                            &#9661;
                          </span>
                        ]}
                        {this.sort.dir === 'asc' &&
                          this.sort.prop === item.field && [
                            <span
                              onClick={() =>
                                this.handleSort(item.field, 'none')
                              }
                            >
                              &#9650;
                            </span>,
                            <span
                              onClick={() =>
                                this.handleSort(item.field, 'desc')
                              }
                            >
                              &#9661;
                            </span>
                          ]}
                        {this.sort.dir === 'desc' &&
                          this.sort.prop === item.field && [
                            <span
                              onClick={() => this.handleSort(item.field, 'asc')}
                            >
                              &#9651;
                            </span>,
                            <span
                              onClick={() =>
                                this.handleSort(item.field, 'none')
                              }
                            >
                              &#9660;
                            </span>
                          ]}
                      </div>
                    )}
                  </span>
                </th>
              ])}
            </tr>
          </thead>
          <tbody>
            {this.displayedData.map((row, rowIndex) => {
              const rowData = new Array(order.length);
              Object.entries(row).forEach(([key, value]) => {
                const index = this.selectable
                  ? order.indexOf(key) + 1
                  : order.indexOf(key);
                if (this.selectable) {
                  rowData[0] = (
                    <td
                      class={{
                        tablecell: true,
                        selectcell: true,
                        center: true,
                        selected: row.select === true
                      }}
                    >
                      <u-checkbox
                        checked={row.select === true}
                        onUChange={() => {
                          this.selectRow(row, rowIndex);
                        }}
                        onClick={(e) => this.handleShiftClick(rowIndex, e)}
                      ></u-checkbox>
                    </td>
                  );
                }
                if (index > -1 && key !== 'select') {
                  let w = '100%';
                  let a = 'left';
                  let bg = '';
                  let ft = '';
                  if (this.heading.length) {
                    const params = this.heading.find((h) => h.field === key);
                    if (!params) return;
                    const { width, align, bgcolor, fontcolor } = params;
                    if (align) a = align;
                    if (width) w = width;
                    if (bgcolor) bg = bgcolor(row);
                    if (fontcolor) ft = fontcolor(row);
                  }
                  rowData[index] = (
                    <td
                      class={{
                        tablecell: true,
                        [a ?? 'left']: true,
                        selected: row.select === true
                      }}
                      style={{
                        width: w ?? '100%',
                        backgroundColor: bg,
                        color: ft
                      }}
                    >
                      {this.format(value.toString())}
                    </td>
                  );
                }
              });
              return this.observe && this.displayedData.length === rowIndex ? (
                <u-observe onUVisble={() => this.uLastElement.emit()}>
                  <tr
                    class="tablerow"
                    onClick={() => {
                      row.select = !row.select;
                      this.selectRow(row, rowIndex);
                    }}
                    onMouseEnter={() => this.uStartHover.emit(row)}
                    onMouseLeave={() => this.uStopHover.emit(row)}
                  >
                    {rowData}
                  </tr>
                </u-observe>
              ) : (
                <tr
                  class="tablerow"
                  onClick={() => {
                    row.select = !row.select;
                    this.selectRow(row, rowIndex);
                  }}
                  onMouseEnter={() => this.uStartHover.emit(row)}
                  onMouseLeave={() => this.uStopHover.emit(row)}
                >
                  {rowData}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <slot name="footer"></slot>
          </tfoot>
        </table>
      </Host>
    );
  }
}
