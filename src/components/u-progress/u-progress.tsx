import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'u-progress',
  styleUrl: 'u-progress.css',
  shadow: true,
})
export class UProgress {
  /**
   * Maximum of values
   */
  @Prop() max: number = 100;
  /**
   * Value used to calculate progress
   */
  @Prop() value: number = 100;
  /**
   * Size of height of the bar, standard set to 1.25rem. Possible to use any unit.
   */
  @Prop() height: string = '1.25rem';
  /**
   * Remove border.
   */
  @Prop() borderless: boolean = false;
  @Watch('value') valueChange() {
    // this.value = newValue;
    this.calcProgress();
  }

  /**
   * Enables text, which shows the percentage.
   */
  @Prop() showPercentage: boolean = true;

  private calcProgress(): void {
    this.setProgress(String(((this.value * 100) / this.max).toFixed(2)));
  }

  private setProgress(value): void {
    this.progressResult = value;
  }

  @State() progressResult: string;

  render() {
    this.calcProgress();
    return (
      <div>
        <div class={{ frame: true, border: !this.borderless }}>
          <div class="progress" style={{ width: this.progressResult + '%', height: this.height }}>
            {this.showPercentage ? (
              <div> {this.progressResult} %</div>
            ) : (
              <div>
                <slot></slot>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
