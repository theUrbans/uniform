import type { Components, JSX } from "../types/components";

interface UNavbar extends Components.UNavbar, HTMLElement {}
export const UNavbar: {
  prototype: UNavbar;
  new (): UNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
