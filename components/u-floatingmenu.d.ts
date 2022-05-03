import type { Components, JSX } from "../types/global";

interface UFloatingmenu extends Components.UFloatingmenu, HTMLElement {}
export const UFloatingmenu: {
  prototype: UFloatingmenu;
  new (): UFloatingmenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
