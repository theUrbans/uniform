import type { Components, JSX } from "../types/global";

interface UToggle extends Components.UToggle, HTMLElement {}
export const UToggle: {
  prototype: UToggle;
  new (): UToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
