import type { Components, JSX } from "../types/components";

interface ULink extends Components.ULink, HTMLElement {}
export const ULink: {
  prototype: ULink;
  new (): ULink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
