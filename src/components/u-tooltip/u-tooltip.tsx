import { Component, h, Prop, State, Element } from '@stencil/core';

/**
 * @name Tooltip
 * @state 🟢
 * @description This component allows you to display a tooltip.
 * @slot default - element which receives the tooltip
 * @slot content - (optional) content of the tooltip -> alternative to text, content prop must be used
 */
@Component({
  tag: 'u-tooltip',
  styleUrl: 'u-tooltip.css',
  shadow: true
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

  /**
   * arrow alignment
   */
  @Prop() alignment: 'start' | 'center' | 'end' = 'center';

  /**
   * choose trigger event
   */
  @Prop() trigger: 'click' | 'hover' = 'hover';

  /**
   * render custom content instead of text
   */
  @Prop() content?: boolean;

  @State() visible: boolean = false;

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
    if (this.trigger === 'click') return;
    this.calcPos();
    this.visible = true;
  };

  private handleMouseLeave = () => {
    if (this.trigger === 'click') return;
    this.visible = false;
  };

  private handleClick = () => {
    if (this.trigger === 'hover') return;
    this.calcPos();
    this.visible = !this.visible;
  };

  render() {
    return (
      <div
        class="wrapper"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleClick}
      >
        <div
          role="tooltip"
          onMouseDown={(e) => e.stopPropagation()}
          class={{
            tooltip: true,
            visible: this.visible,
            invisible: !this.visible,
            [this.position]: true,
            [this.alignment]: true
          }}
        >
          {!this.content ? this.text : <slot name="content" />}
        </div>
        <slot></slot>
      </div>
    );
  }
}
