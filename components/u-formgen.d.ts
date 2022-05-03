import type { Components, JSX } from "../types/components";

interface UFormgen extends Components.UFormgen, HTMLElement {}
export const UFormgen: {
  prototype: UFormgen;
  new (): UFormgen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
