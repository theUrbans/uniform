import type { Components, JSX } from "../types/global";

interface UForm extends Components.UForm, HTMLElement {}
export const UForm: {
  prototype: UForm;
  new (): UForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
