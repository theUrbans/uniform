import type { Components, JSX } from "../types/global";

interface UTooltip extends Components.UTooltip, HTMLElement {}
export const UTooltip: {
  prototype: UTooltip;
  new (): UTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
