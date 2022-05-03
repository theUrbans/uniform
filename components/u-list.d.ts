import type { Components, JSX } from "../types/global";

interface UList extends Components.UList, HTMLElement {}
export const UList: {
  prototype: UList;
  new (): UList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
