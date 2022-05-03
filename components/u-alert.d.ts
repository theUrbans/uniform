import type { Components, JSX } from "../types/components";

interface UAlert extends Components.UAlert, HTMLElement {}
export const UAlert: {
  prototype: UAlert;
  new (): UAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
