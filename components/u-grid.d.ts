import type { Components, JSX } from "../types/components";

interface UGrid extends Components.UGrid, HTMLElement {}
export const UGrid: {
  prototype: UGrid;
  new (): UGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
