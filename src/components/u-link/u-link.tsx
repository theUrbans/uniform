import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'u-link',
  styleUrl: 'u-link.css',
  shadow: true,
})
export class ULink {
  @Prop() link: string;
  @Prop() target: string = 'self';
  @Prop() secondary: boolean = false;
  render() {
    return (
      <a href={this.link} target={'_' + this.target} class={{ primary: !this.secondary, secondary: this.secondary }}>
        <slot></slot>
      </a>
    );
  }
}
