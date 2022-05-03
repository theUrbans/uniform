import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name File Picker
 * @state 🟡
 * @description pick single or multiple files
 * @categorie Input Control
 */
export declare class UFilepicker {
  size: 'small' | 'large';
  label: string;
  fileEnding: string;
  multiple: boolean;
  noFile: string;
  filePlural: string;
  uSelect: EventEmitter<FileList>;
  file: FileList;
  private handleFileInput;
  private dropHandler;
  fileText: string;
  private getFileText;
  render(): any;
}
