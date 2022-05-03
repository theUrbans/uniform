import type { Components, JSX } from "../types/global";

interface UModal extends Components.UModal, HTMLElement {}
export const UModal: {
  prototype: UModal;
  new (): UModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
