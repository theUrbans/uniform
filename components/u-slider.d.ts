import type { Components, JSX } from "../types/components";

interface USlider extends Components.USlider, HTMLElement {}
export const USlider: {
  prototype: USlider;
  new (): USlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
