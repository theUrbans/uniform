import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export interface Option {
  value: any;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}
/**
 * @name Select
 * @state 🟡
 * @description handle single or multiple option input
 * @categorie Input Control
 */
export declare class USelect implements ComponentInterface {
  private inputElement?;
  hovered: boolean;
  focus: boolean;
  el: HTMLElement;
  options: Option[];
  searchable: boolean;
  multiple: boolean;
  index: number;
  /**
   * the value of the input
   */
  value: string | number | null;
  valueChanged(): void;
  /**
   * text of label
   * The label replace the placeholder
   */
  label: string;
  /**
   * size of the input
   */
  size: 'small' | 'medium' | 'large';
  /**
   * type of the input
   */
  inputType?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * if input type === numeric -> min value
   */
  min?: string;
  /**
   * if input type === numeric -> max value
   */
  max?: string;
  /**
   * if input type === numeric -> step value
   */
  step?: string;
  /**
   * use function returning a boolean to validate the input -> if false, it displays error-msg
   */
  validate: boolean;
  /**
   * select design
   */
  design?: 'primary' | 'error' | 'success' | 'warning' | 'secondary';
  /**
   * show error message below the input
   */
  errorMsg?: string;
  /**
   * change this prop to true to focus the input
   */
  doFocus?: boolean;
  doFocusChanged(): void;
  /**
   * decide if input should have border radius
   */
  borderStyle?: 'none' | 'small' | 'large' | 'round';
  /**
   * decide if input is required (for forms)
   */
  required?: boolean;
  /**
   * decide if the input is disabled
   */
  disabled?: boolean;
  disabledChanged(): void;
  /**
   * decide if the input is readonly
   */
  readonly?: boolean;
  /**
   * possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete?: string;
  /**
   * decide if autocorect should be enabled
   */
  autoCorrect?: 'off' | 'on';
  /**
   * decide if autocapitalize should be enabled
   */
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  /**
   * decide if spellcheck should be enabled
   */
  spellCheck?: boolean;
  /**
   * set the pattern for the input
   */
  pattern?: string;
  /**
   * emitted on input
   */
  uInput: EventEmitter;
  /**
   * emitted on change
   */
  uChange: EventEmitter;
  /**
   * emitted on focus
   */
  uFocus: EventEmitter;
  /**
   * emitted on blur
   * */
  uBlur: EventEmitter;
  /**
   * set focus on native input
   */
  setFocus(): Promise<void>;
  /**
   * set blur on native input
   */
  setBlur(): Promise<void>;
  private getValue;
  filteredOptions: Option[];
  searchValue: string;
  private onInput;
  private onBlur;
  position: 'top' | 'bottom';
  private onClick;
  private onFocus;
  private onKeyDown;
  private resetValue;
  selected: string[];
  private selectOption;
  shortenSelected: boolean;
  shortenBreakpoint: number;
  private oldSelectedLength;
  private getInputWidth;
  private removeOption;
  render(): any;
}
