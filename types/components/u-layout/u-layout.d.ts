/**
 * @name Layout
 * @state 🟡
 * @description layout which decides whether to use mobile or desktop layout
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
export declare class ULayout {
  private mobilelayout;
  mode: 'mobile' | 'desktop';
  onWindowResize(): void;
  componentWillLoad(): void;
  showOption(): Promise<void>;
  closeOption(): Promise<void>;
  render(): any;
}
