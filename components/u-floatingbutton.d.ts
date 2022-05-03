import type { Components, JSX } from "../types/components";

interface UFloatingbutton extends Components.UFloatingbutton, HTMLElement {}
export const UFloatingbutton: {
  prototype: UFloatingbutton;
  new (): UFloatingbutton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
