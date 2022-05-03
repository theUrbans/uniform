import type { Components, JSX } from "../types/components";

interface UDialog extends Components.UDialog, HTMLElement {}
export const UDialog: {
  prototype: UDialog;
  new (): UDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
