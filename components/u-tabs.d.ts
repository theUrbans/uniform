import type { Components, JSX } from "../types/global";

interface UTabs extends Components.UTabs, HTMLElement {}
export const UTabs: {
  prototype: UTabs;
  new (): UTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
