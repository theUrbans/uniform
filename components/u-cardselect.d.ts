import type { Components, JSX } from "../types/global";

interface UCardselect extends Components.UCardselect, HTMLElement {}
export const UCardselect: {
  prototype: UCardselect;
  new (): UCardselect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
