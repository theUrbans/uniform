import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  State
} from '@stencil/core';

/**
 * @name Stepper
 * @state 🟡
 * @description formular with multiple steps
 * @categorie Input Control
 * @slot step-N - slot for every step, starting with N=1
 */
@Component({
  tag: 'u-stepper',
  styleUrl: 'u-stepper.css',
  shadow: true
})
export class UStepper {
  /**
   * define steps -
   * without label -> steps: 3,
   * with label -> steps: [1,'2',3],
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
   * decide the alignment of the stepper
   */
  @Prop() alignment: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * emit wSubmit event on submit button click
   */
  @Event() uSubmit: EventEmitter<void>;

  /**
   * emit wNextStep event on next/previous button click
   */
  @Event() uStep: EventEmitter<number>;

  @State() currentStep: number = 0;

  private formatSteps() {
    if (typeof this.steps === 'number') {
      this.steps = [...Array(this.steps).keys()];
    }
    return this.steps;
  }

  private handleSubmit = () => {
    this.uSubmit.emit();
  };

  private handleNextStep = () => {
    this.currentStep += 1;
    this.uStep.emit(this.currentStep + 1);
  };

  private handlePreviousStep = () => {
    this.currentStep -= 1;
    this.uStep.emit(this.currentStep);
  };

  render() {
    const steps = this.formatSteps();
    const layout = () => {
      if (this.alignment === 'horizontal')
        return {
          columns: 1,
          rows: ['3rem', '1fr', '2rem'],
          area: [['header'], ['content'], ['footer']]
        };
      if (this.alignment === 'vertical')
        return {
          columns: ['6rem', '1fr'],
          rows: ['1fr', '2rem'],
          // columns: 2,
          // rows: 2,
          area: [
            ['header', 'content'],
            ['x', 'footer']
          ]
        };
    };
    return (
      <Host>
        <u-grid {...layout()} width="100%" height="100%">
          {/* <div
            class={{
              wrapper: true,
              [this.alignment]: true
            }}
          > */}
          <div
            class={{
              head: true,
              [this.alignment]: true
            }}
            style={{
              gridArea: 'header'
            }}
          >
            {steps.map((step, index) => {
              if (this.alignment === 'horizontal')
                return [
                  <u-row width="content">
                    <div
                      class={{
                        step: true,
                        activeStep: index === this.currentStep
                      }}
                    >
                      <span
                        class={{
                          no: true,
                          activeStep: index === this.currentStep
                        }}
                      >
                        {index + 1}
                      </span>
                      {typeof step === 'string' && (
                        <span class="label">{step}</span>
                      )}
                    </div>
                  </u-row>,
                  index < steps.length - 1 && (
                    <div
                      class={{
                        line: true,
                        doneLine: index < this.currentStep
                      }}
                    />
                  )
                ];
              if (this.alignment === 'vertical')
                return [
                  <div
                    class={{
                      step: true,
                      activeStep: index === this.currentStep
                    }}
                  >
                    <span
                      class={{
                        no: true,
                        activeStep: index === this.currentStep
                      }}
                    >
                      {index + 1}
                    </span>
                    {typeof step === 'string' && (
                      <span class="label">{step}</span>
                    )}
                  </div>
                ];
              return null;
            })}
          </div>

          <div
            class={{
              content: true,
              [this.alignment]: true
            }}
            style={{
              gridArea: 'content'
            }}
          >
            {steps.map((_, index) => (
              <div
                class={{
                  visible: index === this.currentStep,
                  hidden: index !== this.currentStep
                }}
              >
                <slot name={`step-${index + 1}`}>keine Daten in dem Slot</slot>
              </div>
            ))}
          </div>

          <div
            class={{
              footer: true,
              [this.alignment]: true
            }}
            style={{
              gridArea: 'footer'
            }}
          >
            <u-button
              design="error"
              flat
              disabled={this.currentStep === 0}
              onUClick={this.handlePreviousStep}
            >
              {this.prevLabel}
              <span slot="prefix">&#171;</span>
            </u-button>
            {this.currentStep < steps.length - 1 ? (
              <u-button
                design="success"
                flat
                disabled={
                  this.currentStep === steps.length - 1 ||
                  !this.nextStepAvailable
                }
                onClick={this.handleNextStep}
              >
                {this.nextLabel}
                <span slot="suffix">&#187;</span>
              </u-button>
            ) : (
              <u-button
                design="success"
                flat
                disabled={!this.allData}
                onUClick={this.handleSubmit}
              >
                {this.submitLabel}
              </u-button>
            )}
          </div>
          {this.alignment === 'vertical' && (
            <div
              class="x"
              style={{
                gridArea: 'x'
              }}
            ></div>
          )}
          {/* </div> */}
        </u-grid>
      </Host>
    );
  }
}
