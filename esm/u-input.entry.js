import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ac0beabc.js';

const uInputCss = ":host{cursor:text;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1}*{outline:none}.wrapper{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-radius:0.75rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;padding-left:0.5rem;padding-right:0.5rem;position:relative}.wrapper:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.slot-left{border-top-left-radius:0px !important;border-bottom-left-radius:0px !important}.slot-right{border-top-right-radius:0px !important;border-bottom-right-radius:0px !important}.slot-both{border-radius:0px !important}.errorText{margin-bottom:1rem}.input{background-color:transparent;border-width:0px;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;width:100%}.input:focus{outline:2px solid transparent;outline-offset:2px}.input::-webkit-input-placeholder{color:transparent}.input::-moz-placeholder{color:transparent}.input:-ms-input-placeholder{color:transparent}.input::-ms-input-placeholder{color:transparent}.input::placeholder{color:transparent}.small{border-style:solid;border-width:1px;font-weight:400;font-size:0.875rem;line-height:1.25rem;padding-top:0px;padding-bottom:0px;padding-right:1rem}.small input:not(:-moz-placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.125rem}.small input:not(:-ms-input-placeholder)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.125rem}.small input:focus-within~label,.small input:not(:placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.125rem}.medium{border-style:solid;border-width:2px;font-weight:600;font-size:1rem;line-height:1.5rem;padding-top:0px;padding-bottom:0px;padding-right:1.25rem}.medium input:not(:-moz-placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.375rem}.medium input:not(:-ms-input-placeholder)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.375rem}.medium input:focus-within~label,.medium input:not(:placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.375rem}.large{border-style:solid;border-width:3px;font-weight:600;font-size:1.125rem;line-height:1.75rem;padding-top:0px;padding-bottom:0px;padding-right:1.5rem}.large input:not(:-moz-placeholder-shown)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.625rem}.large input:not(:-ms-input-placeholder)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.625rem}.large input:focus-within~label,.large input:not(:placeholder-shown)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1.625rem}.text-small{font-size:0.875rem;line-height:1.25rem}.text-medium{font-size:1rem;line-height:1.5rem}.text-large{font-size:1.125rem;line-height:1.75rem}.help-text{font-weight:600;position:absolute;top:2.75rem;left:0.5rem}.label{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;pointer-events:none;position:absolute;top:20%;letter-spacing:0.025em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.label-small{font-weight:400;font-size:0.875rem;line-height:1.25rem}.label-medium{font-weight:600;font-size:1rem;line-height:1.5rem}.label-large{font-weight:600;font-size:1.125rem;line-height:1.75rem}.reset{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;position:absolute;right:0.25rem;top:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-y:-50%}.error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.disabled{cursor:not-allowed;opacity:0.5}";

let UInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uInput = createEvent(this, "uInput", 7);
    this.uChange = createEvent(this, "uChange", 3);
    this.uFocus = createEvent(this, "uFocus", 7);
    this.uBlur = createEvent(this, "uBlur", 7);
    this.hovered = false;
    this.focus = false;
    /**
     * the value of the input
     */
    this.value = '';
    /**
     * text of label
     * The label replace the placeholder
     */
    this.label = 'Label';
    /**
     * size of the input
     */
    this.size = 'medium';
    /**
     * type of the input
     */
    this.inputType = 'text';
    /**
     * use function returning a boolean to validate the input -> if false, it displays error-msg
     */
    this.validate = true;
    /**
     * select design
     * possible values:
     * - 'default', 'error', 'success', 'warning'
     */
    this.design = 'secondary';
    /**
     * show error message below the input
     */
    this.errorMsg = '';
    /**
     * change this prop to true to focus the input
     */
    this.doFocus = false;
    /**
     * decide if input should have border radius
     */
    this.borderStyle = 'none';
    /**
     * decide if input is required (for forms)
     */
    this.required = false;
    /**
     * decide if the input is disabled
     */
    this.disabled = false;
    /**
     * decide if the input is readonly
     */
    this.readonly = false;
    this.onInput = (e) => {
      const input = e.target;
      if (input) {
        if (this.inputType === 'numeric') {
          // allow only numbers
          input.value = input.value.replace(/[^0-9]/g, '');
          this.value = input.value || '';
        }
        else if (this.inputType === 'decimal') {
          // allow only numbers with comma and dot
          input.value = input.value.replace(/[^0-9.,]/g, '');
          this.value = input.value || '';
        }
        else if (this.inputType === 'email') {
          // email pattern
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(input.value).toLowerCase()))
            this.value = input.value;
        }
        else {
          this.value = input.value;
        }
        this.uInput.emit(this.value);
        this.uInput.emit(this.value);
      }
    };
    this.onBlur = () => {
      this.focus = false;
      this.doFocus = false;
      this.uBlur.emit();
    };
    this.onClick = () => {
      this.focus = true;
    };
    this.onFocus = () => {
      this.focus = true;
      this.uFocus.emit();
    };
    this.onKeyDown = (e) => {
      // on 'esc' press blur
      if (e.keyCode === 27) {
        this.inputElement.blur();
      }
    };
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.setFocus();
        this.value = '';
        this.inputElement.value = '';
      }
    };
  }
  valueChanged() {
    this.uChange.emit(this.value);
  }
  doFocusChanged() {
    if (this.doFocus) {
      this.inputElement.focus();
    }
  }
  disabledChanged() {
    if (this.disabled) {
      this.inputElement.setAttribute('disabled', 'true');
    }
    else {
      this.inputElement.removeAttribute('disabled');
    }
  }
  /**
   * set focus on native input
   */
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }
  /**
   * set blur on native input
   */
  async setBlur() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }
  getValue() {
    return this.value.toString();
  }
  setAttr() {
    if (!this.inputElement)
      return;
    if (this.min)
      this.inputElement.setAttribute('min', this.min);
    if (this.max)
      this.inputElement.setAttribute('max', this.max);
    if (this.step)
      this.inputElement.setAttribute('step', this.step);
    if (this.autoComplete)
      this.inputElement.setAttribute('autocomplete', this.autoComplete);
    if (this.autoCorrect)
      this.inputElement.setAttribute('autocorrect', this.autoCorrect);
    if (this.autoCapitalize)
      this.inputElement.setAttribute('autocapitalize', this.autoCapitalize);
    if (this.pattern)
      this.inputElement.setAttribute('pattern', this.pattern);
    if (this.spellCheck)
      this.inputElement.setAttribute('spellcheck', this.spellCheck.toString());
    if (this.required)
      this.inputElement.setAttribute('required', this.required.toString());
    if (this.disabled)
      this.inputElement.setAttribute('disabled', this.disabled.toString());
    if (this.readonly)
      this.inputElement.setAttribute('readonly', this.readonly.toString());
    // autoFocus={false}
  }
  componentDidLoad() {
    this.setAttr();
  }
  render() {
    const value = this.getValue();
    return (h(Host, null, this.showSlot === 'left' && h("slot", null), this.showSlot === 'both' && h("slot", { name: "left" }), h("div", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), onClick: () => this.inputElement.focus(), class: {
        wrapper: true,
        disabled: this.disabled,
        [this.design]: true,
        [this.size]: true,
        errorText: !this.validate && !this.errorMsg,
        [`slot-${this.showSlot}`]: !!this.showSlot
      } }, h("input", { type: this.inputType, class: {
        input: true,
        [`text-${this.size}`]: true
        // [`padding-${this.size}`]: this.hovered || this.focus || !!this.value,
      }, ref: (input) => (this.inputElement = input), value: value, onInput: this.onInput, onBlur: this.onBlur, onClick: this.onClick, onFocus: this.onFocus, onKeyDown: this.onKeyDown, placeholder: this.label }), this.label ? (h("label", { class: {
        label: true,
        [this.design]: true,
        [`label-${this.size}`]: true
      } }, this.required ? `${this.label} *` : this.label)) : null, !this.readonly && !this.disabled && this.value && (h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
        reset: true
      } }, (this.focus || this.hovered || this.value) && (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small'
        ? 16
        : this.size === 'medium'
          ? 20
          : 24, height: this.size === 'small'
        ? 16
        : this.size === 'medium'
          ? 20
          : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focus || this.hovered
        ? 'text-red-500'
        : 'text-gray-500' }), h("circle", { cx: "12", cy: "12", r: "10", class: this.focus || this.hovered
        ? 'text-red-500'
        : 'text-gray-500' }))))), !this.validate ? (h("span", { class: { 'help-text': true } }, this.errorMsg)) : null), this.showSlot === 'right' && h("slot", null), this.showSlot === 'both' && h("slot", { name: "right" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "doFocus": ["doFocusChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
UInput.style = uInputCss;

export { UInput as u_input };
