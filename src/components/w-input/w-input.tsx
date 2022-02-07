import { Component, ComponentInterface, h, Prop, Method, Element, Watch, State, Event, EventEmitter, Host } from '@stencil/core';
// import close from '../../assets/close.svg';
// import { inputEvent } from '../../utils/utils';
@Component({
  tag: 'w-input',
  styleUrl: 'w-input.css',
  shadow: true,
})
export class WInput implements ComponentInterface {
  private inputElement?: HTMLInputElement;
  @State() hovered: boolean = false;
  @State() focus: boolean = false;
  @Element() el: HTMLElement;

  /**
   * the value of the input
   */
  @Prop({ mutable: true, reflect: true }) value: string | number | null = '';
  @Watch('value')
  protected valueChanged() {
    this.wChange.emit({ value: this.value === null ? this.value : this.value.toString() });
  }

  /**
   * text of label
   * The label replace the placeholder
   */
  @Prop() label: string;

  /**
   * size of the input
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * type of the input
   */
  @Prop() inputType?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' = 'text';

  /**
   * if input type == numeric -> min value
   */
  @Prop() min?: string;

  /**
   * if input type == numeric -> max value
   */
  @Prop() max?: string;

  /**
   * if input type == numeric -> step value
   */
  @Prop() step?: string;

  /**
   * use function returning a boolean to validate the input -> if false, it displays error-msg
   */
  @Prop() validate: boolean = true;

  /**
   * select design
   * possible values:
   * - 'default', 'error', 'success', 'warning'
   */
  @Prop() design?: 'primary' | 'error' | 'success' | 'warning' | 'secondary' = 'secondary';

  /**
   * show error message below the input
   */
  @Prop() errorMsg?: string = '';

  /**
   * change this prop to true to focus the input
   */
  @Prop({ mutable: true }) doFocus?: boolean = false;
  @Watch('doFocus') doFocusChanged() {
    if (this.doFocus) {
      this.inputElement.focus();
    }
  }

  /**
   * decide if input should have border radius
   */
  @Prop() borderStyle?: 'none' | 'small' | 'large' | 'round' = 'none';

  /**
   * decide if input is required (for forms)
   */
  @Prop() required?: boolean = false;

  /**
   * decide if the input is disabled
   */
  @Prop() disabled?: boolean = false;
  @Watch('disabled') disabledChanged() {
    if (this.disabled) {
      this.inputElement.setAttribute('disabled', 'true');
    } else {
      this.inputElement.removeAttribute('disabled');
    }
  }

  /**
   * decide if the input is readonly
   */
  @Prop() readonly?: boolean = false;

  /**
   * possible types:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  @Prop() autoComplete?: string = 'off';

  /**
   * decide if autocorect should be enabled
   */
  @Prop() autoCorrect?: 'off' | 'on' = 'off';

  /**
   * decide if autocapitalize should be enabled
   */
  @Prop() autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' = 'off';

  /**
   * decide if spellcheck should be enabled
   */
  @Prop() spellCheck?: boolean = false;

  /**
   * set the pattern for the input
   */
  @Prop() pattern?: string;

  /**
   * emitted on input
   */
  @Event() wInput: EventEmitter;

  /**
   * emitted on change
   */
  @Event() wChange: EventEmitter;

  /**
   * emitted on focus
   */
  @Event() wFocus: EventEmitter;

  /**
   * emitted on blur
   **/
  @Event() wBlur: EventEmitter;

  /**
   * set focus on native input
   */
  @Method()
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  /**
   * set blur on native input
   */
  @Method()
  async setBlur() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }

  private getValue(): string {
    return this.value.toString();
  }

  private onInput = (e: Event) => {
    const input = e.target as HTMLInputElement | null;
    if (input) {
      if (this.inputType === 'numeric') {
        // allow only numbers
        input.value = input.value.replace(/[^0-9]/g, '');
        this.value = input.value || 0;
      } else if (this.inputType === 'decimal') {
        // allow only numbers with comma and dot
        input.value = input.value.replace(/[^0-9.,]/g, '');
        this.value = input.value || 0;
      } else if (this.inputType === 'email') {
        // email pattern
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(input.value).toLowerCase())) this.value = input.value;
      } else {
        this.value = input.value;
      }
      this.wInput.emit(this.value);
    }
  };

  private onBlur = () => {
    this.focus = false;
    this.doFocus = false;
    this.wBlur.emit();
  };

  private onClick = () => {
    this.focus = true;
  };

  private onFocus = () => {
    this.focus = true;
    this.wFocus.emit();
  };

  private onKeyDown = e => {
    // on 'esc' press blur
    if (e.keyCode === 27) {
      this.inputElement.blur();
    }
  };

  private resetValue = e => {
    if (e && !this.disabled && !this.readonly) {
      e.stopPropagation();
      e.preventDefault();
      this.setFocus();
      this.value = '';
      this.inputElement.value = '';
    }
  };

  render() {
    const value = this.getValue();
    return (
      <Host>
        <div
          onMouseEnter={() => (this.hovered = true)}
          onMouseLeave={() => (this.hovered = false)}
          class={{
            wrapper: true,
            disabled: this.disabled,
            // sm: this.size == 'small',
            // md: this.size == 'medium',
            // lg: this.size == 'large',
            [this.design]: true,
            [this.size]: true,
            errorText: !this.validate && !!!this.errorMsg,
          }}
        >
          <input
            class={{
              input: true,
              [`text-${this.size}`]: true,
              [`padding-${this.size}`]: this.hovered || this.focus || !!this.value,
              // [this.design]: true,
            }}
            ref={input => (this.inputElement = input)}
            min={this.min}
            max={this.max}
            type={this.inputType}
            value={value}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onClick={this.onClick}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            pattern={this.pattern}
            required={this.required}
            readonly={this.readonly}
            disabled={this.disabled}
            autoComplete={this.autoComplete}
            autoCapitalize={this.autoCapitalize}
            autoCorrect={this.autoCorrect}
            spellcheck={this.spellCheck}
            autoFocus={false}
            placeholder={this.label}
          />
          {!!this.label ? (
            <label
              class={{
                label: true,
                // smLabel: this.size == 'small',
                // mdLabel: this.size == 'medium',
                // lgLabel: this.size == 'large',
                [this.design]: true,
                [`label-${this.size}`]: true,
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
              {this.focus || this.hovered || this.value ? (
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
                  <path d="M15 15L9 9m6 0l-6 6" class={this.focus || this.hovered ? 'text-red-500' : 'text-gray-500'} />
                  <circle cx="12" cy="12" r="10" class={this.focus || this.hovered ? 'text-red-500' : 'text-gray-500'} />
                </svg>
              ) : null}
            </div>
          ) : null}
          {!this.validate ? <span class={{ 'help-text': true }}>{this.errorMsg}</span> : null}
        </div>
      </Host>
    );
  }
}
