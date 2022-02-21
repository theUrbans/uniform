import { Component, Host, Element, h, Prop, Watch, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'u-textarea',
  styleUrl: 'u-textarea.css',
  shadow: true,
})
export class WTextarea {
  private textarea: HTMLTextAreaElement;
  @Element() el: HTMLElement;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() label?: string;
  @Prop() required: boolean = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() design: 'primary' | 'error' | 'success' | 'warning' | 'outline' | 'secondary' = 'secondary';
  @Prop() resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'vertical';
  @Prop({ mutable: true }) value: string | null = '';
  @Prop() cols: number = 50;
  @Prop() rows: number = 6;
  @Watch('value') valueChanged() {
    this.textarea.value = this.value;
    this.wInput.emit(this.value);
  }
  @Event() wInput: EventEmitter;
  @State() focused: boolean = false;

  private resetValue = e => {
    if (e && !this.disabled && !this.readonly) {
      e.stopPropagation();
      e.preventDefault();
      this.value = '';
      this.textarea.value = '';
      this.textarea.focus();
      this.focused = true;
    }
  };

  private handleInput = e => {
    const input = e.target as HTMLInputElement;
    if (input) {
      this.value = input.value;
    }
  };

  private handleFocus = () => {
    this.focused = true;
  };
  private handleBlur = () => {
    this.focused = false;
  };

  render() {
    return (
      <Host>
        <div
          class={{
            wrapper: true,
            disabled: this.disabled,
            [`design-${this.design}`]: true,
            [`textarea-${this.size}`]: true,
          }}
        >
          <textarea
            ref={ta => (this.textarea = ta)}
            required={this.required}
            readonly={this.readonly}
            disabled={this.disabled}
            value={this.value}
            class={{
              textarea: true,
              [`resize-${this.resize}`]: true,
            }}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            rows={this.rows}
            cols={this.cols}
          ></textarea>
          {!!this.label ? (
            <label
              class={{
                label: true,
                [`label-${this.size}`]: true,
                [`label-${this.design}`]: true,
                labeltop: !!this.value || this.focused,
              }}
            >
              {this.required ? this.label + ' *' : this.label}
            </label>
          ) : null}
          {!this.readonly && !this.disabled && this.value ? (
            <div
              onClick={this.resetValue}
              onTouchStart={this.resetValue}
              class={{
                reset: true,
              }}
            >
              {this.focused || this.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
                  height={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width={this.size == 'small' ? 1 : this.size == 'medium' ? 1.5 : 2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 15L9 9m6 0l-6 6" class={this.focused ? 'text-red-500' : 'text-gray-500'} />
                  <circle cx="12" cy="12" r="10" class={this.focused ? 'text-red-500' : 'text-gray-500'} />
                </svg>
              ) : null}
            </div>
          ) : null}
        </div>
      </Host>
    );
  }
}
