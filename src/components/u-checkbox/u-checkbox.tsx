import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'u-checkbox',
  styleUrl: 'u-checkbox.css',
  shadow: true,
})
export class WCheckbox {
  @Prop() label: string = '';
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;
  @Event({ bubbles: false, composed: false }) wChange: EventEmitter;
  @Method() async set(checked: boolean) {
    this.checked = checked;
  }
  private handleInput = (event: UIEvent) => {
    if (this.disabled) return;
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.wChange.emit();
  };

  render() {
    return (
      <label
        class={{
          container: true,
          [`size-${this.size}`]: true,
          disabled: this.disabled,
        }}
      >
        <span
          class={{
            label: true,
            visible: !!this.label,
            hidden: !this.label,
          }}
        >
          {this.label}
        </span>
        <input type="checkbox" checked={this.checked} onInput={this.handleInput} disabled={this.disabled} />
        <span
          class={{
            checkmark: true,
            smCheck: this.size == 'small',
            mdCheck: this.size == 'medium',
            lgCheck: this.size == 'large',
          }}
        ></span>
      </label>
    );
  }
}
