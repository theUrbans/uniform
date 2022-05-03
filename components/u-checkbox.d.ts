import type { Components, JSX } from "../types/components";

interface UCheckbox extends Components.UCheckbox, HTMLElement {}
export const UCheckbox: {
  prototype: UCheckbox;
  new (): UCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
