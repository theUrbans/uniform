import type { Components, JSX } from "../types/global";

interface UTouch extends Components.UTouch, HTMLElement {}
export const UTouch: {
  prototype: UTouch;
  new (): UTouch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
