import type { Components, JSX } from "../types/global";

interface UWeekpicker extends Components.UWeekpicker, HTMLElement {}
export const UWeekpicker: {
  prototype: UWeekpicker;
  new (): UWeekpicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
