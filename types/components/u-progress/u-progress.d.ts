/**
 * @name Progress
 * @state 🟡
 */
export declare class UProgress {
  /**
   * Maximum of values
   */
  max: number;
  /**
   * Value used to calculate progress
   */
  value: number;
  /**
   * Size of height of the bar, standard set to 1.25rem. Possible to use any unit.
   */
  height: string;
  /**
   * Remove border.
   */
  borderless: boolean;
  valueChange(): void;
  /**
   * Enables text, which shows the percentage.
   */
  showPercentage: boolean;
  private calcProgress;
  private setProgress;
  progressResult: string;
  render(): any;
}
