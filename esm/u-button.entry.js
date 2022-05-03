import { r as registerInstance, c as createEvent, h, H as Host } from './index-4f6a2e7b.js';

const uButtonCss = ".button{border-color:transparent;border-style:solid;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;width:100%;grid-gap:0.5rem;gap:0.5rem}.button:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.rounded-all{border-radius:1rem}.rounded-left{border-top-left-radius:0.75rem;border-bottom-left-radius:0.75rem}.rounded-right{border-top-right-radius:0.75rem;border-bottom-right-radius:0.75rem}.rounded-bottom{border-bottom-right-radius:0.75rem;border-bottom-left-radius:0.75rem}.rounded-top{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem}.rounded-none{border-radius:0px}.small{border-width:1px;font-weight:400;font-size:0.875rem;line-height:1.25rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem}.medium{border-width:2px;font-weight:400;font-size:1rem;line-height:1.5rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:1rem;letter-spacing:0.025em}.large{border-width:3px;font-weight:600;font-size:1.125rem;line-height:1.75rem;padding-top:0.375rem;padding-bottom:0.375rem;padding-left:2rem;padding-right:2rem;letter-spacing:0.025em}.primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-primary{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-primary:hover{--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-error{--tw-bg-opacity:1;background-color:rgba(220, 38, 38, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-error:hover{--tw-bg-opacity:1;background-color:rgba(185, 28, 28, var(--tw-bg-opacity))}.success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-success{--tw-bg-opacity:1;background-color:rgba(16, 185, 129, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-success:hover{--tw-bg-opacity:1;background-color:rgba(5, 150, 105, var(--tw-bg-opacity))}.warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-warning{--tw-bg-opacity:1;background-color:rgba(251, 191, 36, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(50, 50, 50, var(--tw-text-opacity))}.fill-warning:hover{--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-secondary{--tw-bg-opacity:1;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(50, 50, 50, var(--tw-text-opacity))}.fill-secondary:hover{--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity))}.outline{background-color:transparent}.flat{background-color:transparent;border-color:transparent}.flat:hover{border-color:transparent}.disabled{cursor:not-allowed;opacity:0.5}";

let UButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uClick = createEvent(this, "uClick", 7);
    /**
     * color design
     */
    this.design = 'primary';
    /**
     * change design, only show outlines
     */
    this.outline = false;
    /**
     * button size
     */
    this.size = 'medium';
    /**
     * show disabled state
     */
    this.disabled = false;
    /**
     * show only text
     */
    this.flat = false;
    /**
     * set button type
     */
    this.type = 'button';
    /**
     * enable border radius
     */
    this.rounded = 'all';
    this.handleOnClick = () => {
      this.uClick.emit();
    };
  }
  render() {
    return (h(Host, null, h("button", { onClick: this.handleOnClick, disabled: this.disabled, type: this.type, class: {
        button: true,
        [this.size]: true,
        [this.design]: true,
        [`fill-${this.design}`]: !this.outline && !this.flat,
        outline: this.outline,
        flat: this.flat,
        disabled: this.disabled,
        [`rounded-${this.rounded}`]: true
      } }, h("slot", { name: "prefix" }), h("slot", null, "Button Text"), h("slot", { name: "suffix" }))));
  }
};
UButton.style = uButtonCss;

export { UButton as u_button };
