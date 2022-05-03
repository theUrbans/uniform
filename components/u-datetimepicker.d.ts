import type { Components, JSX } from "../types/global";

interface UDatetimepicker extends Components.UDatetimepicker, HTMLElement {}
export const UDatetimepicker: {
  prototype: UDatetimepicker;
  new (): UDatetimepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
