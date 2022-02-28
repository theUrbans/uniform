import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
export interface Option {
  value: any;
  label: string;
}

@Component({
  tag: 'u-radiogroup',
  styleUrl: 'u-radiogroup.css',
  shadow: true,
})
export class URadiogroup {
  @Prop() options: Array<Option> = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  @Prop({ mutable: true }) value: any;
  @Prop() alignment: 'vertical' | 'horizontal' = 'vertical';
  @Prop() label: string = 'Test';
  @Event() uInput: EventEmitter;
  @State() hovered: string;

  private handleInput = (e: Event, option: Option) => {
    const input = e.target as HTMLInputElement;
    if (input) {
      this.value = input.value;
      this.uInput.emit(option);
    }
  };

  render() {
    return (
      <Host>
        <div
          class={{
            wrapper: true,
            [this.alignment]: true,
          }}
        >
          {this.label ? <span class={{ label: true }}>{this.label}</span> : null}
          {this.options.map(option => {
            return (
              <label htmlFor={option.label} class="container" onMouseEnter={() => (this.hovered = option.label)} onMouseLeave={() => (this.hovered = '')}>
                {option.label}
                <input
                  type="radio"
                  id={option.label}
                  value={option.value}
                  checked={this.value == option.value}
                  onInput={(e: Event) => this.handleInput(e, option)}
                  class={{
                    checkbox: true,
                  }}
                />
                <span
                  class={{
                    checkmark: true,
                    hovered: this.hovered == option.label,
                  }}
                ></span>
              </label>
            );
          })}
        </div>
      </Host>
    );
  }
}
