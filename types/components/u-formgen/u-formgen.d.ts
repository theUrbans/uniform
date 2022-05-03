import { EventEmitter } from '../../stencil-public-runtime';
export interface FormButton {
  text: string;
  design: 'primary' | 'error' | 'success' | 'warning' | 'secondary';
  event: () => void;
  eventName: string;
}
export interface FormField {
  type: 'input' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'filepicker';
  step?: number | string;
  subType?: string;
  data?: any;
  label: string;
  place: string;
  prop: string;
  value: any;
  required?: boolean;
  options: {
    [key: string]: any;
  };
}
export declare type Field = string;
/**
 * @name Form Generator
 * @state 🟡
 * @description generate automatic forms with a JSON schema
 * @categorie Generator
 * @slot default - custom content in top of the form
 */
export declare class UFormgen {
  el: HTMLElement;
  layout: string;
  fields: Array<FormField>;
  buttons: Array<FormButton>;
  uSubmit: EventEmitter;
  uNextStep: EventEmitter;
  private submitForm;
  returnValue: {
    [key: string]: any;
  };
  steps: Array<number | string>;
  private setAttr;
  stepper: boolean;
  rows: number;
  cols: number;
  gap: string;
  private getLayout;
  componentWillLoad(): void;
  private handleButtonClick;
  private sendStep;
  render(): any;
}
