import type { Components, JSX } from "../types/global";

interface UChip extends Components.UChip, HTMLElement {}
export const UChip: {
  prototype: UChip;
  new (): UChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
