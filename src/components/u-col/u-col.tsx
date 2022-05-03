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
 * @description Flexbox column
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
  @Prop() align:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly' = 'start';

  /**
   * flex justify-content: flex-start | flex-end | center | baseline | stretch
   */
  @Prop() justify: 'start' | 'center' | 'end' | 'stretch' = 'center';

  /**
   * flex wrap: nowrap | wrap | wrap-reverse
   */
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';

  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  @Prop() gap: string = '1em';

  /**
   * padding bottom and top: string, e.g. '1rem', '1px'
   */
  @Prop() padding: string = '0';

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

  @Prop() start?: number;

  @Prop() end?: number;

  @State() width: Width;

  @State() bp: Breakpoint = Breakpoint.sm;

  @State() colSize: number | 'auto';

  private setStyle() {
    return {
      gridColumnStart: this.start ? this.start.toString() : '',
      gridColumnEnd: this.end ? this.end.toString() : ''
    };
  }

  @Listen('resize', { target: 'window' }) onWindowResize() {
    const width = window.innerWidth;
    this.setBreakpoint(width);
    this.calculatePosition();
    console.log(Breakpoint[this.bp]);
  }

  private setBreakpoint(width: number) {
    if (width < Breakpoint.md) this.bp = Breakpoint.sm;
    else if (width < Breakpoint.lg) this.bp = Breakpoint.md;
    else if (width < Breakpoint.xl) this.bp = Breakpoint.lg;
    else if (width >= Breakpoint.xl) this.bp = Breakpoint.xl;
    // console.log({ width, bp: this.bp });
  }

  private calculatePosition() {
    // const gutter = this.el.parentElement.attributes['gutter'];
    // let cols = 12;ack
    // if (gutter) cols = parseInt(gutter.value);
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
        // class={this.setClasses().join(' ')}
        style={{
          width: this.width,
          ...this.setStyle(),
          gridColumn: `span ${this.colSize} / span ${this.colSize}`
          // alignItems: this.align,
          // justifyContent: this.justify,
          // flexWrap: this.wrap,
          // gap: this.gap
          // padding: `${this.padding}`,
          // gridArea: this.area,
        }}
      >
        {this.colSize}
        <slot></slot>
      </Host>
    );
  }
}
