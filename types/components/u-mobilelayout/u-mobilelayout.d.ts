/**
 * @name Mobile Layout
 * @state 🟡
 * @description Discord-App like layout with 3 swipeable columns
 * @categorie Layout
 */
export declare class UMobilelayout {
  el: HTMLElement;
  showOptions: boolean;
  sideWidth: string;
  showMenu(): Promise<void>;
  showMain(): Promise<void>;
  showOption(): Promise<void>;
  activateOption(): Promise<void>;
  disableOption(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
