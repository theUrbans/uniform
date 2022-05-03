import type { Components, JSX } from "../types/components";

interface UCol extends Components.UCol, HTMLElement {}
export const UCol: {
  prototype: UCol;
  new (): UCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
