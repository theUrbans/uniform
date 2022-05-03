import type { Components, JSX } from "../types/global";

interface UNotification extends Components.UNotification, HTMLElement {}
export const UNotification: {
  prototype: UNotification;
  new (): UNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
