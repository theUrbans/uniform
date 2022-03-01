import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

export interface Action {
  title: string;
  design?: 'secondary' | 'error' | 'success' | 'warning' | 'primary';
  handler?: () => void;
}

@Component({
  tag: 'u-dialog',
  styleUrls: {
    desktop: 'u-dialog.desktop.css',
    mobile: 'u-dialog.mobile.css',
  },
  shadow: true,
})
export class UDialog {
  private modal: HTMLUModalElement;
  @Prop() name: string = 'u-dialog-default';
  @State() open: boolean = false;
  @State() title: string = 'u-dialog title';
  @State() content: string = '';
  @State() buttons: Array<Action> = [{ title: 'OK' }];
  @Listen('open-dialog', { target: 'body' })
  openDialog(e: any) {
    const { params } = e.detail;
    // if (name == this.name) this.open = true;
    this.title = params.title || '';
    this.content = params.content || '';
    this.buttons = params.buttons || [{ title: 'OK' }];
    this.modal.showModal(this.name);
  }

  // componentWillLoad() {
  //   if (this.name == 'w-dialog-default') {
  //   }
  // }
  render() {
    return (
      <Host>
        <u-modal name={this.name} ref={modal => (this.modal = modal)} resizeable={false} moveable={false} closeOnClick={false}>
          <span slot="header">{this.title}</span>
          <div slot="body" class="body">
            <p>{this.content}</p>
            <div class="actions">
              {this.buttons.map((action: Action) => {
                return (
                  <u-button design={action.design || 'secondary'} outline onClick={!!action.handler ? action.handler : () => this.modal.closeModal(this.name)}>
                    {action.title}
                  </u-button>
                );
              })}
            </div>
          </div>
        </u-modal>
      </Host>
    );
  }
}
