import type { Components, JSX } from "../types/components";

interface UDatepicker extends Components.UDatepicker, HTMLElement {}
export const UDatepicker: {
  prototype: UDatepicker;
  new (): UDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
