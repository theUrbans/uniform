import type { Components, JSX } from "../types/components";

interface UTimepicker extends Components.UTimepicker, HTMLElement {}
export const UTimepicker: {
  prototype: UTimepicker;
  new (): UTimepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
