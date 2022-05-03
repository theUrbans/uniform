import type { Components, JSX } from "../types/global";

interface ULink extends Components.ULink, HTMLElement {}
export const ULink: {
  prototype: ULink;
  new (): ULink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
