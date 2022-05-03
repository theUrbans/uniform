import { EventEmitter } from '../../stencil-public-runtime';
export interface Option {
  value: any;
  label: string;
}
/**
 * @name Radio Group
 * @state 🟡
 * @categorie Input Control
 */
export declare class URadiogroup {
  options: Array<Option>;
  value: any;
  alignment: 'vertical' | 'horizontal';
  label: string;
  uInput: EventEmitter;
  hovered: string;
  private handleInput;
  render(): any;
}
