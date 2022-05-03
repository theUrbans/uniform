import type { Components, JSX } from "../types/global";

interface UMenu extends Components.UMenu, HTMLElement {}
export const UMenu: {
  prototype: UMenu;
  new (): UMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
