import type { Components, JSX } from "../types/global";

interface UIcon extends Components.UIcon, HTMLElement {}
export const UIcon: {
  prototype: UIcon;
  new (): UIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
