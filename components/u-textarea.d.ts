import type { Components, JSX } from "../types/global";

interface UTextarea extends Components.UTextarea, HTMLElement {}
export const UTextarea: {
  prototype: UTextarea;
  new (): UTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
