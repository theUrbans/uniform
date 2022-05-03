import type { Components, JSX } from "../types/global";

interface UButton extends Components.UButton, HTMLElement {}
export const UButton: {
  prototype: UButton;
  new (): UButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
