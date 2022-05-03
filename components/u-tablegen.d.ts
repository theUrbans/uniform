import type { Components, JSX } from "../types/components";

interface UTablegen extends Components.UTablegen, HTMLElement {}
export const UTablegen: {
  prototype: UTablegen;
  new (): UTablegen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
