import { Component, ComponentInterface, h, Prop, Method, Element, Watch, State, Event, EventEmitter, Host } from '@stencil/core';
// import close from '../../assets/close.svg';
// import { inputEvent } from '../../utils/utils';
@Component({
  tag: 'u-input',
  styleUrl: 'u-input.css',
  shadow: true,
})
export class UInput implements ComponentInterface {
  private inputElement?: HTMLInputElement;
  @State() hovered: boolean = false;
  @State() focus: boolean = false;
  @Element() el: HTMLElement;

  /**
   * the value of the input
   */
  @Prop({ mutable: true }) value: string | number | null = '';
  @Watch('value')
  protected valueChanged() {
    this.uChange.emit(this.value);
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
   * decide if (and which site) a slot should be rendered
   */
  @Prop() showSlot?: 'left' | 'right' | 'both';

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
  @Prop() autoComplete?: string;

  /**
   * decide if autocorect should be enabled
   */
  @Prop() autoCorrect?: 'off' | 'on';

  /**
   * decide if autocapitalize should be enabled
   */
  @Prop() autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /**
   * decide if spellcheck should be enabled
   */
  @Prop() spellCheck?: boolean;

  /**
   * set the pattern for the input
   */
  @Prop() pattern?: string;

  /**
   * emitted on input
   */
  @Event() uInput: EventEmitter<number | string>;

  /**
   * emitted on change
   */
  @Event({ bubbles: false }) uChange: EventEmitter<number | string>;

  /**
   * emitted on focus
   */
  @Event() uFocus: EventEmitter<void>;

  /**
   * emitted on blur
   **/
  @Event() uBlur: EventEmitter<void>;

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
        this.value = input.value || '';
      } else if (this.inputType === 'decimal') {
        // allow only numbers with comma and dot
        input.value = input.value.replace(/[^0-9.,]/g, '');
        this.value = input.value || '';
      } else if (this.inputType === 'email') {
        // email pattern
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(input.value).toLowerCase())) this.value = input.value;
      } else {
        this.value = input.value;
      }
      this.uInput.emit(this.value);
      this.uInput.emit(this.value);
    }
  };

  private onBlur = () => {
    this.focus = false;
    this.doFocus = false;
    this.uBlur.emit();
  };

  private onClick = () => {
    this.focus = true;
  };

  private onFocus = () => {
    this.focus = true;
    this.uFocus.emit();
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
  private setAttr(): void {
    if (!this.inputElement) return;
    if (!!this.min) this.inputElement.setAttribute('min', this.min);
    if (!!this.max) this.inputElement.setAttribute('max', this.max);
    if (!!this.step) this.inputElement.setAttribute('step', this.step);
    if (!!this.autoComplete) this.inputElement.setAttribute('autocomplete', this.autoComplete);
    if (!!this.autoCorrect) this.inputElement.setAttribute('autocorrect', this.autoCorrect);
    if (!!this.autoCapitalize) this.inputElement.setAttribute('autocapitalize', this.autoCapitalize);
    if (!!this.pattern) this.inputElement.setAttribute('pattern', this.pattern);
    if (this.spellCheck) this.inputElement.setAttribute('spellcheck', this.spellCheck.toString());
    if (this.required) this.inputElement.setAttribute('required', this.required.toString());
    if (this.disabled) this.inputElement.setAttribute('disabled', this.disabled.toString());
    if (this.readonly) this.inputElement.setAttribute('readonly', this.readonly.toString());
    // autoFocus={false}
  }

  componentDidLoad(): void {
    this.setAttr();
  }

  render() {
    const value = this.getValue();
    return (
      <Host>
        {this.showSlot === 'left' && <slot></slot>}
        {this.showSlot === 'both' && <slot name="left"></slot>}
        <div
          onMouseEnter={() => (this.hovered = true)}
          onMouseLeave={() => (this.hovered = false)}
          onClick={() => this.inputElement.focus()}
          class={{
            wrapper: true,
            disabled: this.disabled,
            [this.design]: true,
            [this.size]: true,
            errorText: !this.validate && !!!this.errorMsg,
            [`slot-${this.showSlot}`]: !!this.showSlot,
          }}
        >
          <input
            class={{
              input: true,
              [`text-${this.size}`]: true,
              // [`padding-${this.size}`]: this.hovered || this.focus || !!this.value,
            }}
            ref={input => (this.inputElement = input)}
            type={this.inputType}
            value={value}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onClick={this.onClick}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            placeholder={this.label}
          />
          {!!this.label ? (
            <label
              class={{
                label: true,
                [this.design]: true,
                [`label-${this.size}`]: true,
              }}
            >
              {this.required ? this.label + ' *' : this.label}
            </label>
          ) : null}
          {!this.readonly && !this.disabled && this.value && (
            <div
              onClick={this.resetValue}
              onTouchStart={this.resetValue}
              class={{
                reset: true,
              }}
            >
              {(this.focus || this.hovered || this.value) && (
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
              )}
            </div>
          )}
          {!this.validate ? <span class={{ 'help-text': true }}>{this.errorMsg}</span> : null}
        </div>
        {this.showSlot === 'right' && <slot></slot>}
        {this.showSlot === 'both' && <slot name="right"></slot>}
      </Host>
    );
  }
}
