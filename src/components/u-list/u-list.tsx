import { Component, h, Prop } from '@stencil/core';

/**
 * @name List
 * @state 🟡
 * @description List component
 * @slot default - list items
 */
@Component({
  tag: 'u-list',
  styleUrl: 'u-list.css'
})
export class UList {
  /**
   * list as row(x) or as column(y)
   */
  @Prop() alignment: 'x' | 'y' = 'y';

  /**
   * per default list is unordered, set true for ordered list
   */
  @Prop() ordered: boolean = false;

  /**
   * ordered list type, a = lowercase letters, A = uppercase letters,
   * i = lowercase romanian  letters, I = uppercase romanian letters,
   * 1 = arabic numbers
   */
  @Prop() type?: 'a' | 'A' | 'i' | 'I' | '1';

  /**
   * start of the ordered list
   */
  @Prop() start?: number;

  /**
   * reverse the list
   */
  @Prop() reversed?: boolean;

  /**
   * list style of unordered list, [possible values](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
   */
  @Prop() listStyle: string = 'none';

  private setOrdered() {
    const settings: any = {};
    if (this.reversed) settings.reversed = this.reversed;
    if (this.start) settings.start = this.start;
    if (this.type) settings.type = this.type;
    return settings;
  }

  private setUnordered() {
    const settings: any = {};
    if (this.listStyle) settings.listStyle = this.listStyle;
    return settings;
  }

  render() {
    if (this.ordered)
      return (
        <ol class={{ [this.alignment]: true }} {...this.setOrdered()}>
          <slot />
        </ol>
      );
    return (
      <ul class={{ [this.alignment]: true }} {...this.setUnordered()}>
        <slot />
      </ul>
    );
  }
}
