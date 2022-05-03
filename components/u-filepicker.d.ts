import type { Components, JSX } from "../types/components";

interface UFilepicker extends Components.UFilepicker, HTMLElement {}
export const UFilepicker: {
  prototype: UFilepicker;
  new (): UFilepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
