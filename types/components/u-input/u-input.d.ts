import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Input
 * @state 🟡
 * @description handle user text input
 * @categorie Input Control
 */
export declare class UInput implements ComponentInterface {
  private inputElement?;
  hovered: boolean;
  focus: boolean;
  el: HTMLElement;
  /**
   * the value of the input
   */
  value: string | number | null;
  protected valueChanged(): void;
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
   * possible values:
   * - 'default', 'error', 'success', 'warning'
   */
  design?: 'primary' | 'error' | 'success' | 'warning' | 'secondary';
  /**
   * decide if (and which site) a slot should be rendered
   */
  showSlot?: 'left' | 'right' | 'both';
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
  uInput: EventEmitter<number | string>;
  /**
   * emitted on change
   */
  uChange: EventEmitter<number | string>;
  /**
   * emitted on focus
   */
  uFocus: EventEmitter<void>;
  /**
   * emitted on blur
   * */
  uBlur: EventEmitter<void>;
  /**
   * set focus on native input
   */
  setFocus(): Promise<void>;
  /**
   * set blur on native input
   */
  setBlur(): Promise<void>;
  private getValue;
  private onInput;
  private onBlur;
  private onClick;
  private onFocus;
  private onKeyDown;
  private resetValue;
  private setAttr;
  componentDidLoad(): void;
  render(): any;
}
