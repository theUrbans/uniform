import type { Components, JSX } from "../types/global";

interface UPopup extends Components.UPopup, HTMLElement {}
export const UPopup: {
  prototype: UPopup;
  new (): UPopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
