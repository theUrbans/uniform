import { Component, ComponentInterface, h, Prop, Method, Element, Watch, State, Event, EventEmitter, Host } from '@stencil/core';

export interface Option {
  value: any;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

@Component({
  tag: 'u-select',
  styleUrl: 'u-select.css',
  shadow: true,
})
export class USelect implements ComponentInterface {
  private inputElement?: HTMLInputElement;
  @State() hovered: boolean = false;
  @State() focus: boolean = false;
  @Element() el: HTMLElement;

  @Prop() options: Option[] = [
    { value: '1', label: 'One', disabled: true },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three', disabled: true },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
    { value: '7', label: 'Seven' },
  ];

  @Prop() searchable: boolean = false;

  @Prop() multiple: boolean = false;

  @State() index: number = 0;

  /**
   * the value of the input
   */
  @State() value: string | number | null = '';
  @Watch('value')
  valueChanged() {
    this.wChange.emit(this.value);
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
   * - 'secondary', 'primary', 'error', 'success', 'warning'
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
  @Event({ bubbles: false }) wChange: EventEmitter;

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

  @State() filteredOptions: Option[] = this.options;
  @State() searchValue: string = '';
  private onInput = (e: Event) => {
    const input = e.target as HTMLInputElement | null;
    if (!input) return;
    this.index = 0;
    this.searchValue = input.value;
    if (!!this.searchValue) {
      this.filteredOptions = this.options.filter(option => option.label.toLowerCase().includes(this.searchValue.toLowerCase()));
    } else {
      this.filteredOptions = this.options;
    }
    // if (input) this.value = input.value || '';
    // this.wInput.emit(e as InputEvent);
  };

  private onBlur = () => {
    this.doFocus = false;
    this.wBlur.emit();
  };

  @State() position: 'top' | 'bottom' = 'bottom';
  private onClick = () => {
    this.focus = true;
    this.position = 'bottom';
    // const el = this.el.shadowRoot.querySelector('#options') as HTMLElement;
    // console.log(el);
    // if (!el) return;
    // const { y, height } = this.el.getBoundingClientRect();
    // const optionHeight = el.getBoundingClientRect().height;
    // const windowHeight = window.innerHeight;
    // if (windowHeight - y < optionHeight + height + 20) this.position = 'top';
    // else if (windowHeight - y >= optionHeight + height) this.position = 'bottom';
  };

  private onFocus = () => {
    this.focus = true;
    this.wFocus.emit();
  };

  private onKeyDown = e => {
    // on 'esc' press blur
    if (e.keyCode === 27) {
      this.inputElement.blur();
      this.focus = false;
    }
    // on arrow down
    if (e.keyCode === 40) {
      e.preventDefault();
      this.index < this.filteredOptions.length - 1 ? (this.index += 1) : (this.index = 0);
    }
    // on arrow up
    if (e.keyCode === 38) {
      e.preventDefault();
      this.index > 0 ? (this.index -= 1) : (this.index = this.filteredOptions.length - 1);
    }
    // on enter
    if (e.keyCode === 13) {
      e.preventDefault();
      if (!this.filteredOptions[this.index].disabled) this.selectOption(this.filteredOptions[this.index].value, this.filteredOptions[this.index].label);
    }
  };

  private resetValue = e => {
    if (e && !this.disabled && !this.readonly) {
      e.stopPropagation();
      e.preventDefault();
      this.value = '';
      this.searchValue = '';
      this.filteredOptions = this.options;
      this.inputElement.value = '';
      this.focus = false;
    }
  };

  @State() selected: string[] = this.options.filter(option => option.selected).map(option => option.label);
  private selectOption = (value: any, label: string) => {
    if (this.multiple) {
      if (!this.selected.includes(label)) {
        this.selected = [...this.selected, label];
      } else {
        this.selected = this.selected.filter(option => option !== label);
      }
      this.getInputWidth();
      this.wChange.emit(this.options.filter(option => this.selected.includes(option.label)));
      if (this.options.find(o => o.label === label).selected) {
        this.options.find(o => o.label === label).selected = false;
      }
    } else {
      this.selected = [label];
      this.focus = false;
      this.wChange.emit(value);
    }
    this.inputElement.focus();
  };

  // calculate the the count of options to show before breakdown and more are shown with eg '2+'
  @State() shortenSelected: boolean = false;
  @State() shortenBreakpoint: number = 0;
  private oldSelectedLength: number = 0;
  private getInputWidth() {
    const inputWidth = this.inputElement.getBoundingClientRect().width;
    const elementCount = this.selected.length;
    if (inputWidth < 200) {
      this.shortenSelected = true;
      if (this.oldSelectedLength > elementCount) {
        this.oldSelectedLength = elementCount;
        this.shortenBreakpoint = 0;
        this.shortenSelected = false;
      } else if (elementCount > this.oldSelectedLength && this.shortenBreakpoint == 0) {
        this.shortenBreakpoint = elementCount - 1;
        this.oldSelectedLength = elementCount;
      }
    } else {
      this.shortenSelected = false;
    }
  }

  private removeOption = (label: string) => {
    this.selected = this.selected.filter(option => option !== label);
    this.inputElement.focus();
    this.getInputWidth();
  };

  render() {
    const value = this.getValue();
    return (
      <Host tabindex="0" onBlur={() => (this.focus = false)}>
        <div
          onMouseEnter={() => (this.hovered = true)}
          onMouseLeave={() => (this.hovered = false)}
          class={{
            wrapper: true,
            disabled: this.disabled,
            [this.design]: true,
            [this.size]: true,
            [`top-${this.size}`]: this.focus || this.selected.length > 0,
          }}
        >
          {this.shortenSelected
            ? this.selected.map((option, index) => {
                if (index < this.shortenBreakpoint)
                  return (
                    <span class="selected-option">
                      {option}
                      <span class="selected-rm" onClick={() => this.removeOption(option)}>
                        &times;
                      </span>
                    </span>
                  );
                if (index == this.selected.length - 1) return <span class="selected-option">+{this.selected.slice(this.shortenBreakpoint, -1).length + 1}</span>;
              })
            : this.selected.map(option => {
                return (
                  <span class="selected-option">
                    {option}
                    <span class="selected-rm" onClick={() => this.removeOption(option)}>
                      &times;
                    </span>
                  </span>
                );
              })}
          <input
            class={{
              input: true,
              [`text-${this.size}`]: true,
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
            readonly={this.readonly || !this.searchable}
            disabled={this.disabled}
            autoComplete={this.autoComplete}
            autoCapitalize={this.autoCapitalize}
            autoCorrect={this.autoCorrect}
            spellcheck={this.spellCheck}
            autoFocus={false}
            placeholder=" "
          />
          {!!this.label || this.selected.length ? (
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
          <div
            onClick={this.resetValue}
            onTouchStart={this.resetValue}
            class={{
              reset: true,
            }}
          >
            {this.value || this.searchValue ? (
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={{ chevron: true, turn180: this.focus }}
              fill="none"
              viewBox="0 0 24 24"
              width={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
              height={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={this.size == 'small' ? 1 : this.size == 'medium' ? 1.5 : 2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {this.focus ? (
            <div
              class={{
                options: true,
                optionsTop: this.position == 'top',
                optionsBottom: this.position == 'bottom',
              }}
              id="options"
            >
              {this.filteredOptions.map(({ value, label, disabled, selected }) => {
                return (
                  <span
                    class={{
                      option: true,
                      [`option-${this.design}`]: true,
                      selected: this.value.toString().includes(label),
                      hovered: this.filteredOptions[this.index].label == label,
                      disabled,
                    }}
                    role="option"
                    // onClick={() => {
                    //   if (!disabled && !this.multiple) this.selectOption(value, label);
                    // }}
                    onMouseEnter={() => (this.index = this.filteredOptions.findIndex(option => option.label == label))}
                  >
                    {this.multiple ? (
                      <u-checkbox
                        onWChange={() => {
                          if (!disabled) this.selectOption(value, label);
                        }}
                        label={label}
                        size={this.size}
                        checked={this.selected.includes(label) || selected}
                        disabled={disabled}
                      ></u-checkbox>
                    ) : (
                      label
                    )}
                  </span>
                );
              })}
            </div>
          ) : null}
          {/* {!this.validate ? <span class={{ 'help-text': true }}>{this.errorMsg}</span> : null} */}
        </div>
      </Host>
    );
  }
}
