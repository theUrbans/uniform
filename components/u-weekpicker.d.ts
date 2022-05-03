import type { Components, JSX } from "../types/components";

interface UWeekpicker extends Components.UWeekpicker, HTMLElement {}
export const UWeekpicker: {
  prototype: UWeekpicker;
  new (): UWeekpicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
