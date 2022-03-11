import { Component, h, Prop, State, Element } from '@stencil/core';

/**
 * @name Tooltip
 * @state 🟡
 * @description This component allows you to display a tooltip.
 */
@Component({
  tag: 'u-tooltip',
  styleUrl: 'u-tooltip.css',
  shadow: true,
})
export class UTooltip {
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
            [this.position]: true,
          }}
        >
          {this.text}
        </span>
        <slot></slot>
      </div>
    );
  }
}
