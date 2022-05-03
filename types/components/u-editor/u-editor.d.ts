export interface EditorTools {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  headline?: boolean;
  ol?: boolean;
  ul?: boolean;
  nl?: boolean;
  link?: boolean;
}
/**
 * @name Editor
 */
export declare class UEditor {
  tools: EditorTools;
  edits: Array<any>;
  render(): any;
}
