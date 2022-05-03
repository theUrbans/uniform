import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Checkbox
 * @state 🟡
 * @description handle bool user input
 * @categorie Input Control
 */
export declare class UCheckbox {
  private checkbox;
  label: string;
  checked: boolean;
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  tristate: boolean;
  uChange: EventEmitter<boolean>;
  set(checked: boolean): Promise<void>;
  private handleInput;
  render(): any;
}
