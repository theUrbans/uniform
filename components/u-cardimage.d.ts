import type { Components, JSX } from "../types/components";

interface UCardimage extends Components.UCardimage, HTMLElement {}
export const UCardimage: {
  prototype: UCardimage;
  new (): UCardimage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
