import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

export interface FormButton {
  text: string;
  design: 'primary' | 'error' | 'success' | 'warning' | 'secondary';
  event: () => void;
  eventName: string;
}

export interface FormField {
  type: 'input' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'filepicker';
  step?: number | string;
  subType?: string; // eg 'email' for input ...
  data?: any; // data for select or radio
  label: string;
  place: string; // grid placement with grid area
  prop: string; // binded value for type
  value: any; // init value / wont work for now
  required?: boolean;
  options: { [key: string]: any }; // eg 'multiple:true' for select
}

export type Field = string;

@Component({
  tag: 'u-form',
  styleUrl: 'u-form.css',
  shadow: true,
})
export class WForm {
  @Element() el: HTMLElement;
  @Prop() layout: string = ''; // create layout with descriptive text, eg: stepper, 2 cols, 3 rows
  @Prop() fields: Array<FormField> = [];
  @Prop() buttons: Array<FormButton> = [];
  @Event() wSubmit: EventEmitter;
  @Event() wNextStep: EventEmitter;
  private submitForm = () => {
    console.log('submitForm', this.returnValue);
    this.wSubmit.emit(this.returnValue);
  };

  @State() returnValue: { [key: string]: any };
  @State() steps: Array<number | string> = [];
  private setAttr(field: FormField): any {
    this.returnValue = { ...this.returnValue, [field.prop]: field.value || '' };
    if (field.type === 'input' || field.type === 'textarea') {
      return {
        onWInput: (event: any) => {
          this.returnValue = { ...this.returnValue, [field.prop]: event.detail };
        },
        label: field.label,
        value: field.value,
        inputType: field.subType || 'text',
        required: field.required,
        ...field.options,
      };
    }
    if (field.type === 'select')
      return {
        onWChange: (event: any) => {
          this.returnValue = { ...this.returnValue, [field.prop]: event.detail };
        },
        label: field.label,
        value: field.value,
        options: field.data,
        required: field.required,
        ...field.options,
      };

    if (field.type === 'filepicker') {
      return {
        onWSelect: (event: any) => {
          this.returnValue = { ...this.returnValue, [field.prop]: event.detail };
        },
        label: field.label,
        required: field.required,
        ...field.options,
      };
    }
    if (field.type === 'checkbox') return {};
    if (field.type === 'radio') return {};
  }

  @State() stepper: boolean = false;
  @State() rows: number;
  @State() cols: number;
  @State() gap: string;
  private getLayout() {
    const layout = this.layout.split(',');
    layout.forEach((row: string) => {
      row = row.trim();
      if (row === 'stepper') this.stepper = true;
      if (row.includes('col') || row.includes('cols') || row.includes('column') || row.includes('columns')) {
        const cols = row.split(' ');
        this.cols = Number(cols[0]);
        // if (cols.length > 2) return this.steps = [...this.steps, cols[0]];
        // return
      }
      if (row.includes('row') || row.includes('rows')) {
        const rows = row.split(' ');
        this.rows = Number(rows[0]);
      }
      if (row.includes('gap')) {
        const gap = row.split(' ');
        this.gap = gap[0];
      }
    });
  }

  componentWillLoad() {
    this.getLayout();
    this.fields.forEach((field: FormField) => {
      if (field.step) {
        !this.steps.includes(field.step) ? (this.steps = [...this.steps, field.step]) : null;
      }
    });
  }

  private handleButtonClick(button: FormButton) {
    if (!button.event) {
      this.submitForm();
      return;
    }
    button.event();
    if (!this.el) return;
    if (!button.eventName) return;
    this.el.dispatchEvent(new CustomEvent(button.eventName));
  }

  private sendStep = (e: CustomEvent) => {
    this.wNextStep.emit({ step: e.detail, value: this.returnValue });
  };

  render() {
    return (
      <Host>
        {this.stepper ? (
          <u-stepper onWSubmit={this.submitForm} onWStep={this.sendStep} steps={this.steps}>
            {this.steps.map((step, index: number) => {
              return (
                <u-grid
                  rows={this.rows}
                  columns={this.cols}
                  gap={this.gap}
                  slot={`step-${index + 1}`}
                  width="calc(100% - 2rem)"
                  style={{
                    padding: '1rem',
                  }}
                >
                  {this.fields.map((Field: FormField) => {
                    if (Field.step !== step) return;
                    const Tag = 'w-' + Field.type;
                    return (
                      <Tag
                        {...this.setAttr(Field)}
                        style={{
                          'grid-area': Field.place,
                        }}
                      ></Tag>
                    );
                  })}
                </u-grid>
              );
            })}
          </u-stepper>
        ) : (
          <form onSubmit={this.submitForm}>
            <u-grid rows={this.rows} columns={this.cols} gap={this.gap}>
              {this.fields.map((Field: FormField) => {
                const Tag = 'w-' + Field.type;
                return (
                  <Tag
                    {...this.setAttr(Field)}
                    style={{
                      'grid-area': Field.place,
                    }}
                  ></Tag>
                );
              })}
            </u-grid>
            <slot />
            <u-row justify="space-between" padding="0">
              {this.buttons.map((button: FormButton) => (
                <u-button onWClick={() => this.handleButtonClick(button)} type={button.event ? 'button' : 'submit'} design={button.design || 'secondary'}>
                  {button.text || 'Submit'}
                </u-button>
              ))}
            </u-row>
          </form>
        )}
      </Host>
    );
  }
}
