import type { Components, JSX } from "../types/components";

interface UContainer extends Components.UContainer, HTMLElement {}
export const UContainer: {
  prototype: UContainer;
  new (): UContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
