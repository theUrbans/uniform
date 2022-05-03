import type { Components, JSX } from "../types/components";

interface UMobilelayout extends Components.UMobilelayout, HTMLElement {}
export const UMobilelayout: {
  prototype: UMobilelayout;
  new (): UMobilelayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
