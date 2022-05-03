import type { Components, JSX } from "../types/components";

interface UModal extends Components.UModal, HTMLElement {}
export const UModal: {
  prototype: UModal;
  new (): UModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
