import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'w-stepper',
  styleUrl: 'w-stepper.css',
  shadow: true,
})
export class WStepper {
  /**
   * define steps
   * without label -> steps: 3
   * with label -> steps: [1,'2',3]
   * both do the same, but with array you can define the label
   */
  @Prop() steps: number | Array<number | string> = ['Step1', 'Step2', 'Step3'];

  /**
   * disabled state of the submit button
   */
  @Prop() allData: boolean = true;

  /**
   * disabled state of the next step button
   */
  @Prop() nextStepAvailable: boolean = true;

  /**
   * label of the previous step button
   */
  @Prop() prevLabel?: string = 'previous';

  /**
   * label of the next step button
   */
  @Prop() nextLabel?: string = 'next';

  /**
   * label of the next step button
   */
  @Prop() submitLabel?: string = 'submit';

  /**
   * emit wSubmit event on submit button click
   */
  @Event() wSubmit: EventEmitter<void>;

  /**
   * emit wNextStep event on next/previous button click
   */
  @Event() wStep: EventEmitter<number>;

  @State() currentStep: number = 0;
  private formatSteps() {
    if (typeof this.steps == 'number') {
      this.steps = [...Array(this.steps).keys()];
    }
    return this.steps;
  }

  private handleSubmit = () => {
    this.wSubmit.emit();
  };

  private handleNextStep = () => {
    this.currentStep += 1;
    this.wStep.emit(this.currentStep + 1);
  };

  private handlePreviousStep = () => {
    this.currentStep -= 1;
    this.wStep.emit(this.currentStep);
  };

  render() {
    const steps = this.formatSteps();
    return (
      <Host>
        <div class="wrapper">
          <div class="head">
            {steps.map((step, index) => {
              return [
                <w-row wrap="wrap">
                  <div
                    class={{
                      step: true,
                      activeStep: index === this.currentStep,
                    }}
                  >
                    <span class={{ no: true, activeStep: index === this.currentStep }}>{index + 1}</span>
                    {typeof step == 'string' ? <span class="label">{step}</span> : null}
                  </div>
                </w-row>,
                index < steps.length - 1 ? <div class={{ line: true, doneLine: index < this.currentStep }} /> : null,
              ];
            })}
          </div>

          <div class="content">
            {steps.map((_, index) => {
              return (
                <div
                  class={{
                    visible: index === this.currentStep,
                    hidden: index !== this.currentStep,
                  }}
                >
                  <slot name={`step-${index + 1}`}>keine Daten in dem Slot</slot>
                </div>
              );
            })}
          </div>
          <div class="footer">
            <w-button design="error" flat disabled={this.currentStep == 0} onWClick={this.handlePreviousStep}>
              {this.prevLabel}
              <span slot="prefix">&#171;</span>
            </w-button>
            {this.currentStep < steps.length - 1 ? (
              <w-button design="success" flat disabled={this.currentStep == steps.length - 1 || !this.nextStepAvailable} onClick={this.handleNextStep}>
                {this.nextLabel}
                <span slot="suffix">&#187;</span>
              </w-button>
            ) : (
              <w-button design="success" flat disabled={!this.allData} onWClick={this.handleSubmit}>
                {this.submitLabel}
              </w-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
