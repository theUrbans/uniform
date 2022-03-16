import {
  Component, Host, h, State, Prop, Listen,
} from '@stencil/core';

/**
 * @name Alert
 * @state 🟡
 */
@Component({
  tag: 'u-alert',
  styleUrl: 'u-alert.css',
  shadow: true,
})
export class UAlert {
  private modal: HTMLUModalElement;

  @Prop() name: string = 'u-alert-default';

  @Prop() closeText: string = 'close';

  @State() open: boolean = false;

  @State() title: string = 'Alert';

  @State() content: string = '';

  @Listen('show-alert', { target: 'body' })
  openDialog(e: any) {
    const { params } = e.detail;
    this.title = params.title || '';
    this.content = params.content || '';
    this.modal.showModal(this.name);
  }

  render() {
    return (
      <Host>
        <u-modal
          name={this.name}
          ref={(modal) => (this.modal = modal)}
          resizeable={false}
          moveable={false}
          closeOnClick={false}
        >
          <span slot="header">{this.title}</span>
          <div slot="body" class="body">
            <u-paragraph>{this.content}</u-paragraph>
          </div>
          <div class="action">
            <u-button outline design="error">
              {this.closeText}
            </u-button>
          </div>
        </u-modal>
      </Host>
    );
  }
}
