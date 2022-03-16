import { Component, Host, h, Prop, Element } from '@stencil/core';

/**
 * @name Grid
 * @state 🟡
 */
@Component({
  tag: 'u-grid',
  styleUrl: 'u-grid.css',
  shadow: true
})
export class UGrid {
  @Element() el: HTMLElement;

  /**
   * number of columns or array of column widths
   */
  @Prop() columns: number | Array<string>;

  /**
   * number of rows or array of row heights
   */
  @Prop() rows: number | Array<string>;

  /**
   * optional naming of grid areas
   */
  @Prop() area: Array<string[]> = [];

  /**
   * gap size
   */
  @Prop() gap: string = '0';

  /**
   * height of grid
   */
  @Prop() height: string = 'max-content';

  /**
   * width of grid
   */
  @Prop() width: string = 'max-content';

  private formatColumns(): string {
    if (typeof this.columns === 'number') {
      return `repeat(${this.columns}, 1fr)`;
    }
    if (Array.isArray(this.columns)) {
      return this.columns.join(' ');
    }
    return 'repeat(12, 1fr)';
  }

  private formatRows(): string {
    if (typeof this.rows === 'number') {
      return `repeat(${this.rows}, 1fr)`;
    }
    if (Array.isArray(this.rows)) {
      return this.rows.join(' ');
    }
    return 'repeat(2, 1fr)';
  }

  private setAttributes(): void {
    if (!this.el) return;
    this.el.style.setProperty('display', 'grid');
    this.el.style.setProperty('width', this.width);
    this.el.style.setProperty('height', this.height);
    this.el.style.setProperty('gap', this.gap);
    this.el.style.setProperty('grid-template-columns', this.formatColumns());
    this.el.style.setProperty('grid-template-rows', this.formatRows());
    if (this.area.length === 0) return;
    const area = this.area.map((row) => `${row.join(' ')}`);
    this.el.style.setProperty('grid-template-areas', `"${area.join('" "')}"`);
  }

  componentDidLoad() {
    this.setAttributes();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
