import { Component, Host, h, Prop, Listen, Element, Watch, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'w-input',
  styleUrl: 'w-input.css',
  shadow: true,
})
export class WInput {
  @State() hovered: boolean = false;
  @State() focus: boolean = false;
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) setFocus: boolean = false;
  @Prop({ mutable: true }) value: string = 'tes';
  @Prop() label: string;
  @Prop() type: string = 'text';
  @Prop() required: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() validate: Function = () => {};
  @Prop() errorMsg: string = '';
  @Prop() warning: boolean = false;
  @Prop() success: boolean = false;
  @Prop() border: string = 'none';
  @Listen('focus') handleFocus() {
    this.focus = true;
    this.focusInput();
  }
  @Watch('value') watchValue() {
    // this.validate();
  }
  @Watch('setFocus') watchFocus(newValue: boolean, _oldValue: boolean) {
    if (newValue) {
      this.focusInput();
      this.setFocus = false;
    } else {
      this.blurInput();
    }
  }
  @Event() changed: EventEmitter;

  focusInput() {
    this.el.shadowRoot.querySelector('input').focus();
  }
  blurInput() {
    this.el.shadowRoot.querySelector('input').blur();
  }

  handleBlur() {
    this.focus = false;
    this.setFocus = false;
  }
  handleClick() {
    this.focus = true;
  }
  handleInput(e: any) {
    this.value = e.target.value;
    console.log(this.value);
  }
  handleChange(e: any) {
    this.value = e.target ? e.target.value : '';
    this.changed.emit(this.value);
  }
  handleReset() {
    this.value = null;
    this.focus = false;
    console.log(this.value);
  }

  render() {
    return (
      <Host onMouseEnter={() => (this.hovered = true)} onMouseLeave={() => (this.hovered = false)} class={{ hover: this.hovered, active: this.focus }}>
        <span>{this.hovered.toString()}</span>
        {!!this.label ? <label>{this.label}</label> : null}
        <span class="more" onClick={this.handleReset}>
          {this.focus ? '❌' : '✖️'} {this.focus.toString()}
        </span>
        <input
          min={this.min}
          max={this.max}
          type={this.type}
          value={this.value}
          onInput={e => this.handleInput(e)}
          onChange={e => this.handleChange(e)}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          class={{
            border0: this.border === 'none',
            border8: this.border === 'small',
            border12: this.border === 'large',
            round: this.border === 'round',
            error: !!this.errorMsg,
            warning: this.warning,
            success: this.success,
          }}
        />
        <span>{this.value}</span>
      </Host>
    );
  }
}
