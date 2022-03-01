import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'u-checkbox',
  styleUrl: 'u-checkbox.css',
  shadow: true,
})
export class UCheckbox {
  private checkbox: HTMLInputElement;
  @Prop() label: string = '';
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;
  @Prop() tristate: boolean = false;
  @Event({ bubbles: false, composed: false }) uChange: EventEmitter<boolean>; // inter indicates indeterminate state
  @Method() async set(checked: boolean) {
    this.checked = checked;
  }
  private handleInput = (event: UIEvent) => {
    if (this.disabled) return;
    const input: HTMLInputElement = event.target as HTMLInputElement;
    if (this.tristate) {
      this.checkbox.indeterminate = true;
    }
    this.checked = input.checked;
    this.uChange.emit(input.checked);
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
        <input type="checkbox" ref={cb => (this.checkbox = cb)} checked={this.checked} onInput={this.handleInput} disabled={this.disabled} />
        <span
          class={{
            checkmark: !this.tristate,
            [`check-${this.size}`]: !this.tristate,
            indeterminate: this.tristate,
            [`indeterminate-${this.size}`]: this.tristate,
          }}
        ></span>
      </label>
    );
  }
}
