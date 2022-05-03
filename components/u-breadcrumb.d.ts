import type { Components, JSX } from "../types/components";

interface UBreadcrumb extends Components.UBreadcrumb, HTMLElement {}
export const UBreadcrumb: {
  prototype: UBreadcrumb;
  new (): UBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
