import type { Components, JSX } from "../types/global";

interface UTablefoot extends Components.UTablefoot, HTMLElement {}
export const UTablefoot: {
  prototype: UTablefoot;
  new (): UTablefoot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
