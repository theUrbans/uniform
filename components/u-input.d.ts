import type { Components, JSX } from "../types/components";

interface UInput extends Components.UInput, HTMLElement {}
export const UInput: {
  prototype: UInput;
  new (): UInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
