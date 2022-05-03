import type { Components, JSX } from "../types/components";

interface UDatetimepicker extends Components.UDatetimepicker, HTMLElement {}
export const UDatetimepicker: {
  prototype: UDatetimepicker;
  new (): UDatetimepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
