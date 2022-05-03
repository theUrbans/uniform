import type { Components, JSX } from "../types/global";

interface USubmenu extends Components.USubmenu, HTMLElement {}
export const USubmenu: {
  prototype: USubmenu;
  new (): USubmenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
