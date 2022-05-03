import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Stepper
 * @state 🟡
 * @description formular with multiple steps
 * @categorie Input Control
 * @slot step-N - slot for every step, starting with N=1
 */
export declare class UStepper {
  /**
   * define steps -
   * without label -> steps: 3,
   * with label -> steps: [1,'2',3],
   * both do the same, but with array you can define the label
   */
  steps: number | Array<number | string>;
  /**
   * disabled state of the submit button
   */
  allData: boolean;
  /**
   * disabled state of the next step button
   */
  nextStepAvailable: boolean;
  /**
   * label of the previous step button
   */
  prevLabel?: string;
  /**
   * label of the next step button
   */
  nextLabel?: string;
  /**
   * label of the next step button
   */
  submitLabel?: string;
  /**
   * decide the alignment of the stepper
   */
  alignment: 'horizontal' | 'vertical';
  /**
   * emit wSubmit event on submit button click
   */
  uSubmit: EventEmitter<void>;
  /**
   * emit wNextStep event on next/previous button click
   */
  uStep: EventEmitter<number>;
  currentStep: number;
  private formatSteps;
  private handleSubmit;
  private handleNextStep;
  private handlePreviousStep;
  render(): any;
}
