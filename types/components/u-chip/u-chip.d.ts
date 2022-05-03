import { EventEmitter } from '../../stencil-public-runtime';
export declare type ChipDesign = 'slate' | 'stone' | 'red' | 'amber' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'indigo' | 'fuchsia' | 'pink' | 'success' | 'error' | 'warning' | 'primary' | 'secondary';
/**
 * @name Chip
 * @state 🟢
 * @description show status of something
 * @slot default - text content
 */
export declare class UChip {
  /**
   * color of the chip
   */
  design: ChipDesign;
  /**
   * size of the chip
   */
  size: 'small' | 'medium' | 'large';
  /**
   * (optional) label of the chip
   */
  label?: string;
  /**
   * set chip text bold
   */
  bold: boolean;
  /**
   * enable uClick event on chip
   */
  clickable: boolean;
  /**
   * emit uClick event on chip click
   */
  uClick: EventEmitter<void>;
  private handleClick;
  render(): any;
}
