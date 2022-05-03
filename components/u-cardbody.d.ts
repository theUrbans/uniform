import type { Components, JSX } from "../types/components";

interface UCardbody extends Components.UCardbody, HTMLElement {}
export const UCardbody: {
  prototype: UCardbody;
  new (): UCardbody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
