import {
  Component,
  Host,
  h,
  State,
  Prop,
  Event,
  EventEmitter,
  Element
} from '@stencil/core';

/**
 * @name Spoiler
 * @state 🟡
 * @description accordion like component
 */
@Component({
  tag: 'u-spoiler',
  styleUrl: 'u-spoiler.css',
  shadow: true
})
export class USpoiler {
  @Element() el: HTMLElement;

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
  @Event() uOpen: EventEmitter<void>;

  /**
   * emit when the spoiler is closed
   */
  @Event() uClose: EventEmitter<void>;

  @State() isOpen: boolean = false;

  private handleOnClick = () => {
    this.isOpen = !this.isOpen;
    const spoiler: HTMLDivElement =
      this.el.shadowRoot.querySelector('#collapsible');
    if (this.isOpen) this.uOpen.emit();
    if (!this.isOpen) this.uClose.emit();

    const content = spoiler.nextElementSibling as HTMLDivElement;
    if (content.style.maxHeight) {
      content.style.opacity = '0';
      content.style.maxHeight = null;
    } else {
      content.style.opacity = '1';
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  };

  render() {
    return (
      <Host>
        <div
          id="collapsible"
          class={{
            spoiler: true,
            opened: this.isOpen,
            closed: !this.isOpen,
            [this.size]: true
          }}
          onClick={this.handleOnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={{ chevron: true, turn180: this.isOpen }}
            fill="none"
            viewBox="0 0 24 24"
            width={
              this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24
            }
            height={
              this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24
            }
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={
                this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2
              }
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>{this.label}</span>
        </div>
        <div class="content" style={{ opacity: '0' }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
