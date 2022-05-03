import type { Components, JSX } from "../types/components";

interface UDesktoplayout extends Components.UDesktoplayout, HTMLElement {}
export const UDesktoplayout: {
  prototype: UDesktoplayout;
  new (): UDesktoplayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
