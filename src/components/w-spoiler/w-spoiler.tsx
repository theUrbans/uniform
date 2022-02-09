import { Component, Host, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'w-spoiler',
  styleUrl: 'w-spoiler.css',
  shadow: true,
})
export class WSpoiler {
  /**
   * label of the spoiler
   */
  @Prop() label: string;

  /**
   * set the size of the spoiler
   */
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';

  /**
   * emit when the spoiler is opened
   */
  @Event() wOpen: EventEmitter<void>;

  /**
   * emit when the spoiler is closed
   */
  @Event() wClose: EventEmitter<void>;

  @State() isOpen: boolean = false;

  private handleOnClick = () => {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.wOpen.emit() : this.wClose.emit();
  };

  render() {
    return (
      <Host>
        <div
          class={{
            spoiler: true,
            opened: this.isOpen,
            closed: !this.isOpen,
            [this.size]: true,
          }}
          onClick={this.handleOnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={{ chevron: true, turn180: this.isOpen }}
            fill="none"
            viewBox="0 0 24 24"
            width={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
            height={this.size == 'small' ? 16 : this.size == 'medium' ? 20 : 24}
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={this.size == 'small' ? 1 : this.size == 'medium' ? 1.5 : 2} d="M19 9l-7 7-7-7" />
          </svg>
          <span>{this.label}</span>
        </div>
        <div
          class={{
            content: true,
            visible: this.isOpen,
            hidden: !this.isOpen,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
