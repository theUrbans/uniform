import type { Components, JSX } from "../types/global";

interface URow extends Components.URow, HTMLElement {}
export const URow: {
  prototype: URow;
  new (): URow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
