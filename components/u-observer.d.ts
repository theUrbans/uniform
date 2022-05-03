import type { Components, JSX } from "../types/global";

interface UObserver extends Components.UObserver, HTMLElement {}
export const UObserver: {
  prototype: UObserver;
  new (): UObserver;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
