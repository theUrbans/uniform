import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { MenuItem } from '../u-menuitem/u-menuitem';

/**
 * @name Floating Menu
 * @state 🟡
 * @description Menu floating at initial position
 */
@Component({
  tag: 'u-floatingmenu',
  styleUrl: 'u-floatingmenu.css',
  shadow: true
})
export class UFloatingmenu {
  private node: HTMLElement;

  @Element() el: HTMLElement;

  @Prop() fixed: boolean = false;

  @State() drag: boolean = false;

  @State() dragoffset: { x: number; y: number } = { x: 0, y: 0 };

  private onPointerDown = (event: PointerEvent) => {
    if (this.fixed || !this.node) return;
    event.preventDefault();
    this.drag = true;
    this.dragoffset = {
      x: event.pageX - this.node.offsetLeft,
      y: event.pageY - this.node.offsetTop
    };
  };

  private onPointerUp = () => {
    this.drag = false;
  };

  private onPointerMove = (event: PointerEvent) => {
    if (!this.drag || !this.node || this.fixed) return;
    let newtop: string = '0px';
    let newleft: string = '0px';

    if (event.pageX - this.dragoffset.x < 0) newleft = '0px';
    else if (
      event.pageX - this.dragoffset.x + this.node.clientWidth >
      window.innerWidth
    )
      newleft = `${window.innerWidth - this.node.clientWidth}px`;
    else newleft = `${event.pageX - this.dragoffset.x}px`;

    if (event.pageY - this.dragoffset.y < 0) newtop = '0px';
    else if (
      event.pageY - this.dragoffset.y + this.node.clientHeight >
      window.innerHeight
    )
      newtop = `${window.innerHeight - this.node.clientHeight}px`;
    else newtop = `${event.pageY - this.dragoffset.y}px`;

    this.node.style.left = newleft;
    this.node.style.top = newtop;
  };

  @State() isOpen: boolean = false;

  @State()
  selected: string = '';

  @Prop() menu: Array<MenuItem> = [
    { name: '+ New' },
    { divider: true },
    {
      name: 'Edit',
      subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] }
    },
    { name: 'Copy' },
    { divider: true },
    {
      name: 'Open Recent',
      subMenu: {
        items: [
          {
            name: 'HTML',
            subMenu: {
              items: [
                { name: 'index.html' },
                { name: 'about.html' },
                { name: 'impressum.html' }
              ]
            }
          },
          { name: 'Item 2' }
        ]
      }
    }
  ];

  render() {
    return (
      <Host>
        <div ref={(e) => (this.node = e)} class="button">
          <div
            onPointerDown={(e) => this.onPointerDown(e)}
            onPointerUp={() => this.onPointerUp()}
            onPointerMove={(e) => this.onPointerMove(e)}
            onClick={() => (this.isOpen = !this.isOpen)}
          >
            <slot>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </slot>
          </div>
          <nav
            style={{ display: this.isOpen ? 'block' : 'none' }}
            tabindex={0}
            onBlur={() => (this.isOpen = false)}
          >
            <ul>
              {this.menu.map((item) => {
                const depthLevel = 0;
                return (
                  <u-menuitem
                    item={item}
                    depthLevel={depthLevel}
                    onUItemSelect={({ detail }) => {
                      console.log(detail);
                    }}
                  ></u-menuitem>
                );
              })}
            </ul>
          </nav>
        </div>
      </Host>
    );
  }
}
