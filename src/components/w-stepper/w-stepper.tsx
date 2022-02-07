import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'w-stepper',
  styleUrl: 'w-stepper.css',
  shadow: true,
})
export class WStepper {
  /**
   * define steps
   * without label -> input number of steps
   * with label -> input label of each step as array
   */
  @Prop() steps: number | any[] = ['Name', 'Daten', 'Bestätigen'];
  @Prop() allData: boolean = false;
  @Prop() nextStepAvailable: boolean = false;
  @Event() wSubmit: EventEmitter;
  @Event() wStep: EventEmitter;

  private currentStep: number = 0;
  private formatSteps() {
    if (typeof this.steps == 'number') {
      this.steps = [...Array(this.steps).keys()];
    }
    return this.steps;
  }

  private handleSubmit() {
    this.wSubmit.emit();
  }

  private handleNextStep() {
    this.currentStep += 1;
    this.wStep.emit(this.currentStep);
  }

  private handlePreviousStep() {
    this.currentStep -= 1;
    this.wStep.emit(this.currentStep);
  }

  render() {
    const steps = this.formatSteps();
    return (
      <Host>
        <div class="wrapper">
          <div class="head">
            {steps.map((step, index) => {
              return [
                <div
                  class={{
                    step: true,
                    activeStep: index === this.currentStep,
                  }}
                >
                  <span class={{ no: true, activeStep: index === this.currentStep }}>{index + 1}</span>
                  {typeof step == 'string' ? <span class="label">{step}</span> : null}
                </div>,
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
            <w-button design="error" flat disabled={this.currentStep == 0} onClick={this.handlePreviousStep}>
              zurück
              <span slot="prefix">&#171;</span>
            </w-button>
            {this.currentStep < steps.length - 1 ? (
              <w-button design="success" flat disabled={this.currentStep == steps.length - 1 || !this.nextStepAvailable} onClick={this.handleNextStep}>
                weiter
                <span slot="suffix">&#187;</span>
              </w-button>
            ) : (
              <w-button design="success" flat disabled={!this.allData} onClick={this.handleSubmit}>
                abschließen
                <span slot="suffix">&#187;</span>
              </w-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
