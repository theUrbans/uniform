import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Textarea
 * @state 🟡
 * @categorie Input Control
 */
export declare class UTextarea {
  private textarea;
  el: HTMLElement;
  disabled: boolean;
  readonly: boolean;
  label?: string;
  required: boolean;
  size: 'small' | 'medium' | 'large';
  design: 'primary' | 'error' | 'success' | 'warning' | 'outline' | 'secondary';
  resize: 'none' | 'both' | 'horizontal' | 'vertical';
  value: string | null;
  cols: number;
  rows: number;
  valueChanged(): void;
  uInput: EventEmitter;
  focused: boolean;
  private resetValue;
  private handleInput;
  private handleFocus;
  private handleBlur;
  render(): any;
}
