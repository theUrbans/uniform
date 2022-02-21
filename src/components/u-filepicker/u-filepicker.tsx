import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'u-filepicker',
  styleUrl: 'u-filepicker.css',
  shadow: true,
})
export class WFilepicker {
  @Prop() size: 'small' | 'large' = 'small';
  @Prop() label: string = 'Choose file';
  @Prop() fileEnding: string = '*';
  @Prop() multiple: boolean = false;
  @Prop() noFile: string = 'No file selected';
  @Prop() filePlural: string = 'files';
  @Event() wSelect: EventEmitter<FileList>;
  @State() file: FileList;

  private handleFileInput = (event: Event) => {
    const file = event.target['files'];
    this.file = file;
    this.getFileText();
    this.wSelect.emit(this.file);
  };

  private dropHandler(e: DragEvent) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    this.file = files;
    this.getFileText();
    this.wSelect.emit(this.file);
  }

  @State() fileText: string = this.noFile;
  private getFileText(): void {
    if (this.file) {
      if (this.file.length === 1) {
        this.fileText = this.file[0].name;
      } else {
        this.fileText = this.file.length + ' ' + this.filePlural;
      }
    } else {
      this.fileText = this.noFile;
    }
  }

  render() {
    return (
      <Host
        class={{
          [this.size]: true,
        }}
      >
        {this.size === 'small' ? (
          <u-group>
            <u-button rounded="left">
              <svg slot="prefix" fill="currentColor" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
              </svg>
              {this.label}
            </u-button>
            <u-button rounded="right" design="primary" outline>
              {this.fileText}
            </u-button>
            <input class="input" type="file" accept={this.fileEnding} multiple={this.multiple} onChange={this.handleFileInput} />
          </u-group>
        ) : (
          <div onDrop={this.dropHandler} class="dropzone">
            <u-col align="center">
              <u-row>
                <span>
                  <svg slot="prefix" fill="currentColor" height="18" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                  </svg>
                  <span>{this.label}</span>
                </span>
              </u-row>
              {this.fileText}
            </u-col>
            <input class="input" type="file" accept={this.fileEnding} multiple={this.multiple} onChange={this.handleFileInput} />
          </div>
        )}
      </Host>
    );
  }
}
