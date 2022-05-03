import type { Components, JSX } from "../types/components";

interface UTable extends Components.UTable, HTMLElement {}
export const UTable: {
  prototype: UTable;
  new (): UTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
