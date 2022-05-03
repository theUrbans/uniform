import type { Components, JSX } from "../types/global";

interface UColorpicker extends Components.UColorpicker, HTMLElement {}
export const UColorpicker: {
  prototype: UColorpicker;
  new (): UColorpicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
