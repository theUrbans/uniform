import type { Components, JSX } from "../types/components";

interface UMenuitem extends Components.UMenuitem, HTMLElement {}
export const UMenuitem: {
  prototype: UMenuitem;
  new (): UMenuitem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
