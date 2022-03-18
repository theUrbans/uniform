import { Component, Host, h, Prop, State } from '@stencil/core';

export interface EditorTools {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  // subscript?: boolean;
  // superscript?: boolean;
  headline?: boolean;
  // quote?: boolean;
  ol?: boolean;
  ul?: boolean;
  nl?: boolean;
  link?: boolean;
  // image?: boolean;
}

/**
 * @name Editor
 */
@Component({
  tag: 'u-editor',
  styleUrl: 'u-editor.css',
  shadow: true
})
export class UEditor {
  @Prop() tools: EditorTools;

  @State() edits: Array<any>;

  render() {
    return (
      <Host>
        <div class="toolbar">
          <w-group>
            <w-button outline design="secondary" rounded="left">
              a
            </w-button>
            <w-button outline design="secondary" rounded="none">
              b
            </w-button>
            <w-button outline design="secondary" rounded="right">
              c
            </w-button>
          </w-group>
        </div>
        <u-textarea></u-textarea>
      </Host>
    );
  }
}
