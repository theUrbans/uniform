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

/**
 * @name Chip
 * @state 🟢
 * @description show status of something
 * @slot default - text content
 */
@Component({
  tag: 'u-chip',
  styleUrl: 'u-chip.css',
  shadow: true
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
   * enable uClick event on chip
   */
  @Prop() clickable: boolean = false;

  /**
   * emit uClick event on chip click
   */
  @Event() uClick: EventEmitter<void>;

  private handleClick = () => {
    if (!this.clickable) return;
    this.uClick.emit();
  };

  render() {
    return (
      <div
        class={{
          chip: true,
          [this.size]: true,
          [this.design]: true,
          left: !this.label,
          click: this.clickable
        }}
        onClick={this.handleClick}
      >
        {this.label && <div class="label">{this.label}</div>}
        <span
          class={{
            bold: this.bold
          }}
        >
          <slot>Chip</slot>
        </span>
      </div>
    );
  }
}
