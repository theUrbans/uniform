import type { Components, JSX } from "../types/components";

interface UTablehead extends Components.UTablehead, HTMLElement {}
export const UTablehead: {
  prototype: UTablehead;
  new (): UTablehead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
