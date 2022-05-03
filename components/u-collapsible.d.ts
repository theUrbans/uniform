import type { Components, JSX } from "../types/components";

interface UCollapsible extends Components.UCollapsible, HTMLElement {}
export const UCollapsible: {
  prototype: UCollapsible;
  new (): UCollapsible;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
