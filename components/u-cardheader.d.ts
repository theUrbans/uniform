import type { Components, JSX } from "../types/components";

interface UCardheader extends Components.UCardheader, HTMLElement {}
export const UCardheader: {
  prototype: UCardheader;
  new (): UCardheader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
