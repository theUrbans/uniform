import type { Components, JSX } from "../types/components";

interface UCard extends Components.UCard, HTMLElement {}
export const UCard: {
  prototype: UCard;
  new (): UCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
