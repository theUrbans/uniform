import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'u-tooltip',
  styleUrl: 'u-tooltip.css',
  shadow: true,
})
export class WTooltip {
  @Element() el: HTMLElement;

  /**
   * text of the tooltip
   */
  @Prop() text: string;

  /**
   * position of the tooltip
   */
  @Prop() axis: 'x' | 'y' = 'y';

  @State() hover: boolean = false;
  @State() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  private calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis === 'y') this.position = 'top';
    else if (y < 200 && this.axis === 'y') this.position = 'bottom';
    else if (x > 200 && this.axis === 'x') this.position = 'left';
    else if (x < 200 && this.axis === 'x') this.position = 'right';
  }

  componentWillLoad() {
    this.calcPos();
  }

  private handleMouseEnter = () => {
    this.calcPos();
    this.hover = true;
  };

  private handleMouseLeave = () => {
    this.hover = false;
  };

  render() {
    return (
      <div class="wrapper" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <span
          role="tooltip"
          class={{
            tooltip: true,
            visible: this.hover,
            top: this.position === 'top' && this.axis === 'y',
            bottom: this.position === 'bottom' && this.axis === 'y',
            left: this.position === 'left' && this.axis === 'x',
            right: this.position === 'right' && this.axis === 'x',
          }}
        >
          {this.text}
        </span>
        <slot></slot>
      </div>
    );
  }
}