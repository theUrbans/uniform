import type { Components, JSX } from "../types/components";

interface UTerms extends Components.UTerms, HTMLElement {}
export const UTerms: {
  prototype: UTerms;
  new (): UTerms;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
