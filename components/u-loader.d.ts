import type { Components, JSX } from "../types/global";

interface ULoader extends Components.ULoader, HTMLElement {}
export const ULoader: {
  prototype: ULoader;
  new (): ULoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
