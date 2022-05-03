import type { Components, JSX } from "../types/global";

interface UBarcodescanner extends Components.UBarcodescanner, HTMLElement {}
export const UBarcodescanner: {
  prototype: UBarcodescanner;
  new (): UBarcodescanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
