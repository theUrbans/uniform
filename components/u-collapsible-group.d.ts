import type { Components, JSX } from "../types/components";

interface UCollapsibleGroup extends Components.UCollapsibleGroup, HTMLElement {}
export const UCollapsibleGroup: {
  prototype: UCollapsibleGroup;
  new (): UCollapsibleGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
