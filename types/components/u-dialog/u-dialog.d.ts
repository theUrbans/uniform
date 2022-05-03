export interface DialogAction {
  title: string;
  design?: 'secondary' | 'error' | 'success' | 'warning' | 'primary';
  handler?: () => void;
}
/**
 * @name Dialog
 * @state 🟡
 * @description pre configured Modal
 * @categorie Modal
 */
export declare class UDialog {
  private modal;
  name: string;
  open: boolean;
  title: string;
  content: string;
  buttons: Array<DialogAction>;
  openDialog(e: any): void;
  render(): any;
}
