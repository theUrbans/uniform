import type { Components, JSX } from "../types/global";

interface UCard extends Components.UCard, HTMLElement {}
export const UCard: {
  prototype: UCard;
  new (): UCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
