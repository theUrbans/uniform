import type { Components, JSX } from "../types/components";

interface ULayout extends Components.ULayout, HTMLElement {}
export const ULayout: {
  prototype: ULayout;
  new (): ULayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
