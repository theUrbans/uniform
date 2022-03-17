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
 * @description table gets generated from the data passed in
 * @state 🟡
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

  @Prop() resizeable: boolean = false;

  @Prop() selectable: boolean = true;

  @Prop() fixedHeader: boolean = true;

  @Prop() observe: boolean = false;

  @Prop() heading: Array<HeadOptions> = [
    {
      field: 'id',
      label: 'ID',
      align: 'center',
      sortable: true,
      width: '10%'
    },
    {
      field: 'name',
      label: 'Name',
      width: '80%',
      bgcolor: (row) => (row.name.includes('2') ? '#e7c2ff' : '')
    },
    {
      field: 'age',
      label: 'Age',
      align: 'right',
      sortable: true,
      width: '10%'
    }
  ];

  @Prop({ mutable: true }) data: Array<any> = [
    { id: 1, name: 'test', age: '20' },
    { id: 2, age: 20, name: '*test2*\n_test_\n*xd*' },
    { id: 3, age: 30, name: 'test3' },
    { id: 4, age: 40, name: 'test4' },
    { id: 5, age: 50, name: 'test5' },
    { id: 6, age: 60, name: 'test6' },
    { id: 7, age: 70, name: 'test7' },
    { id: 8, age: 80, name: 'test8' },
    { id: 9, age: 90, name: 'test9' },
    { id: 10, age: 100, name: 'test10' },
    { id: 11, age: 110, name: 'test11' },
    { id: 12, age: 120, name: 'test12' },
    { id: 13, age: 130, name: 'test13' },
    { id: 14, age: 140, name: 'test14' },
    { id: 15, age: 150, name: 'test15' },
    { id: 16, age: 160, name: 'test16' },
    { id: 17, age: 170, name: 'test17' },
    { id: 18, age: 180, name: 'test18' },
    { id: 19, age: 190, name: 'test19' },
    { id: 20, age: 200, name: 'test20' },
    { id: 21, age: 210, name: 'test21' },
    { id: 22, age: 220, name: 'test22' },
    { id: 23, age: 230, name: 'test23' },
    { id: 24, age: 240, name: 'test24' },
    { id: 25, age: 250, name: 'test25' },
    { id: 26, age: 260, name: 'test26' },
    { id: 27, age: 270, name: 'test27' },
    { id: 28, age: 280, name: 'test28' },
    { id: 29, age: 290, name: 'test29' },
    { id: 30, age: 300, name: 'test30' },
    { id: 31, age: 310, name: 'test31' }
  ];

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

  @Event() uSelect: EventEmitter<Array<any> | object>; // if selectable true return array on select, if false return row object

  @Event() uUnselect: EventEmitter<void>; // if selectable true return array on select, if false return row object

  @Event() uStartHover: EventEmitter<any>;

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
  }

  private selectRow(row: any, rowIndex: number) {
    const index = this.selected.indexOf(row);
    if (this.selectable) {
      if (index === -1) {
        this.selected = [...this.selected, row];
      } else {
        this.selected = [
          ...this.selected.slice(0, index),
          ...this.selected.slice(index + 1)
        ];
      }
      this.displayedData[rowIndex].select =
        this.displayedData[this.lastIndex].select;
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
        this.selectRow(item, i);
      }
      return item;
    });
    this.lastIndex = index;
  }

  @Method() async select(index: number) {
    this.selectRow(this.displayedData[index], index);
  }

  @Method() async unselect(index: number) {
    this.selectRow(this.displayedData[index], index);
  }

  @Event() uLastElement: EventEmitter<void>;

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
            <div class="head">
              <tr class="headingslot">
                <slot name="header" />
              </tr>
              <tr class="heading">
                {this.heading.map((item, index) => [
                  this.selectable && index === 0 && (
                    <th class="center">
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
                              onClick={() =>
                                this.handleSort(item.field, 'desc')
                              }
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
                                onClick={() =>
                                  this.handleSort(item.field, 'asc')
                                }
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
            </div>
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
                    const { width, align } = this.heading.find(
                      (h) => h.field === key
                    );
                    a = align;
                    w = width;
                    const { bgcolor, fontcolor } = this.heading.find(
                      (h) => h.field === key
                    );
                    // const fontcolor = this.heading.find(h => h.field === key);
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
