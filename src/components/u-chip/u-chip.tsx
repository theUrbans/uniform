import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type ChipDesign =
  | 'slate'
  | 'stone'
  | 'red'
  | 'amber'
  | 'lime'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'indigo'
  | 'fuchsia'
  | 'pink'
  | 'success'
  | 'error'
  | 'warning'
  | 'primary'
  | 'secondary';

@Component({
  tag: 'u-chip',
  styleUrl: 'u-chip.css',
  shadow: true,
})
export class UChip {
  /**
   * color of the chip
   */
  @Prop() design: ChipDesign = 'stone';

  /**
   * size of the chip
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * (optional) label of the chip
   */
  @Prop() label?: string;

  /**
   * set chip text bold
   */
  @Prop() bold: boolean = false;

  /**
   * enable wClick event on chip
   */
  @Prop() clickable: boolean = false;

  /**
   * emit wClick event on chip click
   */
  @Event() wClick: EventEmitter<void>;
  private handleClick = () => {
    if (!this.clickable) return;
    this.wClick.emit();
  };
  render() {
    return (
      <div
        class={{
          chip: true,
          [this.size]: true,
          [this.design]: true,
          left: !!!this.label,
          click: this.clickable,
        }}
        onClick={this.handleClick}
      >
        {this.label && <div class="label">{this.label}</div>}
        <span
          class={{
            bold: this.bold,
          }}
        >
          <slot></slot>
        </span>
      </div>
    );
  }
}
