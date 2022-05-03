import type { Components, JSX } from "../types/global";

interface ULabel extends Components.ULabel, HTMLElement {}
export const ULabel: {
  prototype: ULabel;
  new (): ULabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
