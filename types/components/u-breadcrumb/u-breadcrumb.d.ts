import { EventEmitter } from '../../stencil-public-runtime';
export interface BreadCrumbItem {
  name: string;
  link?: string;
}
/**
 * @name Breadcrumb
 * @state 🟡
 * @description Breadcrumb navigation component
 */
export declare class UBreadcrumb {
  items: Array<BreadCrumbItem>;
  seperator?: string;
  uBreadcrumbClick: EventEmitter<string>;
  render(): any;
}
