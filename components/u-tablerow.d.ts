import type { Components, JSX } from "../types/components";

interface UTablerow extends Components.UTablerow, HTMLElement {}
export const UTablerow: {
  prototype: UTablerow;
  new (): UTablerow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
