import type { Components, JSX } from "../types/components";

interface UParagraph extends Components.UParagraph, HTMLElement {}
export const UParagraph: {
  prototype: UParagraph;
  new (): UParagraph;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
