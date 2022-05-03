import type { Components, JSX } from "../types/components";

interface UHeadline extends Components.UHeadline, HTMLElement {}
export const UHeadline: {
  prototype: UHeadline;
  new (): UHeadline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
