import type { Components, JSX } from "../types/components";

interface UProgress extends Components.UProgress, HTMLElement {}
export const UProgress: {
  prototype: UProgress;
  new (): UProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
