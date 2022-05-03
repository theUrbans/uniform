import type { Components, JSX } from "../types/components";

interface UMonthpicker extends Components.UMonthpicker, HTMLElement {}
export const UMonthpicker: {
  prototype: UMonthpicker;
  new (): UMonthpicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
