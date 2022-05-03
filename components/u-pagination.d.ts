import type { Components, JSX } from "../types/global";

interface UPagination extends Components.UPagination, HTMLElement {}
export const UPagination: {
  prototype: UPagination;
  new (): UPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
