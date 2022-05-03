import type { Components, JSX } from "../types/components";

interface UPagination extends Components.UPagination, HTMLElement {}
export const UPagination: {
  prototype: UPagination;
  new (): UPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
