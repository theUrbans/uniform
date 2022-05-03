import type { Components, JSX } from "../types/components";

interface USelect extends Components.USelect, HTMLElement {}
export const USelect: {
  prototype: USelect;
  new (): USelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
