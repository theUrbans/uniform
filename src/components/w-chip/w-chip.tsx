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
  tag: 'w-chip',
  styleUrl: 'w-chip.css',
  shadow: true,
})
export class WChip {
  @Prop() design: ChipDesign = 'stone';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() label?: string;
  @Prop() bold: boolean = false;
  @Prop() clickable: boolean = false;
  @Event() wClick: EventEmitter;
  private handleClick = () => {
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
