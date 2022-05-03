import type { Components, JSX } from "../types/global";

interface UTablecell extends Components.UTablecell, HTMLElement {}
export const UTablecell: {
  prototype: UTablecell;
  new (): UTablecell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
