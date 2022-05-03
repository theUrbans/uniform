import type { Components, JSX } from "../types/components";

interface UEditor extends Components.UEditor, HTMLElement {}
export const UEditor: {
  prototype: UEditor;
  new (): UEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
