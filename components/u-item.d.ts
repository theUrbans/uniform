import type { Components, JSX } from "../types/global";

interface UItem extends Components.UItem, HTMLElement {}
export const UItem: {
  prototype: UItem;
  new (): UItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
