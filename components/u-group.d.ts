import type { Components, JSX } from "../types/components";

interface UGroup extends Components.UGroup, HTMLElement {}
export const UGroup: {
  prototype: UGroup;
  new (): UGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
