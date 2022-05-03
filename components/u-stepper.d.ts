import type { Components, JSX } from "../types/components";

interface UStepper extends Components.UStepper, HTMLElement {}
export const UStepper: {
  prototype: UStepper;
  new (): UStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
