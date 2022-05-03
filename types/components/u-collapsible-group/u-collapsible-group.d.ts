/**
 * @name Collapsible Group
 * @state 🟢
 * @description group collapsible elements
 * @slot default - collapsible elements
 */
export declare class UCollapsibleGroup {
  el: HTMLElement;
  /**
   * if true, only one collapsible can be open at a time
   */
  onlyOneOpen: boolean;
  componentDidRender(): void;
  private closeInactive;
  render(): any;
}
