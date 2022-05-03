import type { Components, JSX } from "../types/global";

interface UText extends Components.UText, HTMLElement {}
export const UText: {
  prototype: UText;
  new (): UText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
