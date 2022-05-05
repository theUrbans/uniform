import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Listen
} from '@stencil/core';

enum Width {
  sm = 'auto',
  md = '750px',
  lg = '970px',
  xl = '1170px'
}

enum Breakpoint {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200
}

/**
 * @name Column
 * @state 🟢
 * @description Responsive flexbox/grid column
 * @categorie Layout
 */
@Component({
  tag: 'u-col',
  styleUrl: 'u-col.scss',
  shadow: true
})
export class UCol {
  @Element() el: HTMLElement;

  /**
   * flex align-items: start | center | end | space-between | space-around | space-evenly
   */
  @Prop() align?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

  /**
   * flex justify-content: flex-start | flex-end | center | baseline | stretch
   */
  @Prop() justify?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * flex wrap: nowrap | wrap | wrap-reverse
   */
  @Prop() wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  @Prop() gap?: string;

  /**
   * padding bottom and top: string, e.g. '1rem', '1px'
   */
  @Prop() padding?: string;

  /**
   * used with w-grid, set size based on number of columns on w-grid (default is 12)
   */
  @Prop() size: number = 12;

  /**
   * use with w-grid to set area
   */
  @Prop() area?: string = '';

  /**
   * size in small (≥768px)
   */
  @Prop() sm?: number;

  /**
   * size in medium (≥992px)
   */
  @Prop() md?: number;

  /**
   * size in large (≥1200px)
   */
  @Prop() lg?: number;

  /**
   * size in extra large (≥1200px)
   */
  @Prop() xl?: number;

  /**
   * grid column start
   */
  @Prop() start?: number;

  /**
   * grid column end
   */
  @Prop() end?: number;

  @State() width: Width;

  @State() bp: Breakpoint = Breakpoint.sm;

  @State() colSize: number | 'auto';

  private setStyle() {
    const styles: any = {};
    if (this.start)
      styles.gridColumnStart = `span ${this.start} / span ${this.start}`;
    if (this.end) styles.gridColumnEnd = `span ${this.end} / span ${this.end}`;
    if (this.align) styles.alignItems = this.align;
    if (this.justify) styles.justifyContent = this.justify;
    if (this.wrap) styles.flexWrap = this.wrap;
    if (this.gap) styles.gap = this.gap;
    if (this.padding) styles.padding = this.padding;
    if (this.area) styles.gridArea = this.area;
    return styles;
  }

  @Listen('resize', { target: 'window' }) onWindowResize() {
    const width = window.innerWidth;
    this.setBreakpoint(width);
    this.calculatePosition();
  }

  private setBreakpoint(width: number) {
    if (width < Breakpoint.md) this.bp = Breakpoint.sm;
    else if (width < Breakpoint.lg) this.bp = Breakpoint.md;
    else if (width < Breakpoint.xl) this.bp = Breakpoint.lg;
    else if (width >= Breakpoint.xl) this.bp = Breakpoint.xl;
  }

  private calculatePosition() {
    switch (this.bp) {
      case Breakpoint.sm:
        this.colSize = this.sm;
        break;
      case Breakpoint.md:
        this.colSize = this.md || this.sm;
        break;
      case Breakpoint.lg:
        this.colSize = this.lg || this.md || this.sm;
        break;
      case Breakpoint.xl:
        this.colSize = this.xl || this.lg || this.md || this.sm;
        break;
      default:
        this.colSize = this.size;
        break;
    }
  }

  componentWillRender() {
    this.setBreakpoint(window.innerWidth);
    this.calculatePosition();
  }

  render() {
    return (
      <Host
        style={{
          ...this.setStyle(),
          width: this.width,
          gridColumn: `span ${this.colSize} / span ${this.colSize}`
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
