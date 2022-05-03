import type { Components, JSX } from "../types/global";

interface URadiogroup extends Components.URadiogroup, HTMLElement {}
export const URadiogroup: {
  prototype: URadiogroup;
  new (): URadiogroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
