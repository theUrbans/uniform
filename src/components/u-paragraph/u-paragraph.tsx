import { Component, h, Prop } from '@stencil/core';

/**
 * @name Paragraph
 * @state 🟡
 */
@Component({
  tag: 'u-paragraph',
  styleUrl: 'u-paragraph.css',
  shadow: true,
})
export class UParagraph {
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() hyphens: string;
  @Prop() textAlign: 'jusitfy' | 'center' | 'left' | 'right';
  @Prop() textAlignLast: 'jusitfy' | 'center' | 'left' | 'right' | 'none' = 'none';
  render() {
    return (
      <p
        style={{
          color: this.color,
          backgroundColor: this.backgroundColor,
          hyphens: this.hyphens,
          textAlign: this.textAlign,
          textAlignLast: this.textAlignLast,
        }}
      >
        <slot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum animi amet quas perspiciatis? Dolores, tempore necessitatibus impedit deleniti laudantium facere
          facilis, sint quo, minus velit sit quibusdam hic. Rem?
        </slot>
      </p>
    );
  }
}
