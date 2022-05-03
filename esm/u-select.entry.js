import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ac0beabc.js';

const uSelectCss = ":host{cursor:pointer;display:block;width:100%}*{outline:none}.-z-1{z-index:-1}.wrapper{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-radius:0.75rem;border-width:2px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;position:relative}.wrapper:hover{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.input{background-color:transparent;border-width:0px;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;width:100%}.input:focus{outline:2px solid transparent;outline-offset:2px}.input::-webkit-input-placeholder{color:transparent}.input::-moz-placeholder{color:transparent}.input:-ms-input-placeholder{color:transparent}.input::-ms-input-placeholder{color:transparent}.input::placeholder{color:transparent}.small{border-style:solid;border-width:1px;font-weight:400;font-size:0.875rem;line-height:1.25rem;padding-top:0px;padding-bottom:0px;padding-right:1rem}.top-small input:not(:-moz-placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.75rem}.top-small input:not(:-ms-input-placeholder)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.75rem}.top-small input~label,.top-small input:not(:placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.75rem}.medium{border-style:solid;border-width:2px;font-weight:600;font-size:1rem;line-height:1.5rem;padding-top:0px;padding-bottom:0px;padding-right:1.25rem}.top-medium input:not(:-moz-placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.875rem}.top-medium input:not(:-ms-input-placeholder)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.875rem}.top-medium input~label,.top-medium input:not(:placeholder-shown)~label{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-0.875rem}.large{border-style:solid;border-width:3px;font-weight:600;font-size:1.125rem;line-height:1.75rem;padding-right:1.5rem}.top-large input:not(:-moz-placeholder-shown)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1rem}.top-large input:not(:-ms-input-placeholder)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1rem}.top-large input~label,.top-large input:not(:placeholder-shown)~label{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:0.8;--tw-scale-y:0.8;--tw-scale-z:0.8;--tw-translate-y:-1rem}.text-small{font-size:0.875rem;line-height:1.25rem}.text-medium{font-size:1rem;line-height:1.5rem}.text-large{font-size:1.125rem;line-height:1.75rem}.help-text{font-weight:600;position:absolute;top:2.75rem;left:0.5rem;--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.label{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;pointer-events:none;position:absolute;top:0px;letter-spacing:0.025em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.label-small{font-weight:400;font-size:0.875rem;line-height:1.25rem}.label-medium{font-weight:600;font-size:1rem;line-height:1.5rem}.label-large{font-weight:600;font-size:1.125rem;line-height:1.75rem}.reset{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;position:absolute;right:0.25rem;top:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-y:-50%}.error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.disabled{cursor:not-allowed !important;opacity:0.5 !important}.chevron{-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.turn180{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-rotate:-180deg;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.options{border-radius:1rem;z-index:1000;--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;overflow-y:auto;position:absolute;left:0px;width:100%}.hovered{--tw-bg-opacity:1 !important;background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important;--tw-text-opacity:1 !important;color:rgba(243, 244, 246, var(--tw-text-opacity)) !important}.optionsTop{margin-bottom:0.5rem;bottom:100%;z-index:50}.optionsBottom{margin-top:0.25rem;top:100%}.option{cursor:pointer;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem}.option-error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(220, 38, 38, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.option-error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(185, 28, 28, var(--tw-bg-opacity))}.option-success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(16, 185, 129, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.option-success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(5, 150, 105, var(--tw-bg-opacity))}.option-warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(251, 191, 36, var(--tw-bg-opacity));color:rgba(50, 50, 50, var(--tw-text-opacity))}.option-warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.option-secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));color:rgba(50, 50, 50, var(--tw-text-opacity))}.option-secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity))}.option-primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.option-primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.selected{--tw-bg-opacity:1;background-color:rgba(222, 226, 230, var(--tw-bg-opacity));-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms;--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);--tw-hue-rotate:hue-rotate(180deg);--tw-invert:invert(0.7)}.selected-option{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));border-radius:0.375rem;margin:0.125rem;padding:0.125rem;--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.dark .selected-option{--tw-bg-opacity:1;background-color:rgba(74, 74, 74, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity))}.selected-rm{cursor:pointer;--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.dark .selected-rm{--tw-text-opacity:1;color:rgba(254, 202, 202, var(--tw-text-opacity))}";

let USelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uInput = createEvent(this, "uInput", 7);
    this.uChange = createEvent(this, "uChange", 3);
    this.uFocus = createEvent(this, "uFocus", 7);
    this.uBlur = createEvent(this, "uBlur", 7);
    this.hovered = false;
    this.focus = false;
    this.options = [
      { value: '1', label: 'One', disabled: true },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three', disabled: true },
      { value: '4', label: 'Four' },
      { value: '5', label: 'Five' },
      { value: '6', label: 'Six' },
      { value: '7', label: 'Seven' }
    ];
    this.searchable = false;
    this.multiple = false;
    this.index = 0;
    /**
     * the value of the input
     */
    this.value = '';
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
    /**
     * possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    this.autoComplete = 'off';
    /**
     * decide if autocorect should be enabled
     */
    this.autoCorrect = 'off';
    /**
     * decide if autocapitalize should be enabled
     */
    this.autoCapitalize = 'off';
    /**
     * decide if spellcheck should be enabled
     */
    this.spellCheck = false;
    this.filteredOptions = this.options;
    this.searchValue = '';
    this.onInput = (e) => {
      const input = e.target;
      if (!input)
        return;
      this.index = 0;
      this.searchValue = input.value;
      if (this.searchValue) {
        this.filteredOptions = this.options.filter((option) => option.label.toLowerCase().includes(this.searchValue.toLowerCase()));
      }
      else {
        this.filteredOptions = this.options;
      }
      // if (input) this.value = input.value || '';
      // this.uInput.emit(e as InputEvent);
    };
    this.onBlur = () => {
      this.doFocus = false;
      this.uBlur.emit();
    };
    this.position = 'bottom';
    this.onClick = () => {
      this.focus = true;
      this.position = 'bottom';
      // const el = this.el.shadowRoot.querySelector('#options') as HTMLElement;
      // console.log(el);
      // if (!el) return;
      // const { y, height } = this.el.getBoundingClientRect();
      // const optionHeight = el.getBoundingClientRect().height;
      // const windowHeight = window.innerHeight;
      // if (windowHeight - y < optionHeight + height + 20) this.position = 'top';
      // else if (windowHeight - y >= optionHeight + height) this.position = 'bottom';
    };
    this.onFocus = () => {
      this.focus = true;
      this.uFocus.emit();
    };
    this.onKeyDown = (e) => {
      // on 'esc' press blur
      if (e.keyCode === 27) {
        this.inputElement.blur();
        this.focus = false;
      }
      // on arrow down
      if (e.keyCode === 40) {
        e.preventDefault();
        this.index < this.filteredOptions.length - 1
          ? (this.index += 1)
          : (this.index = 0);
      }
      // on arrow up
      if (e.keyCode === 38) {
        e.preventDefault();
        this.index > 0
          ? (this.index -= 1)
          : (this.index = this.filteredOptions.length - 1);
      }
      // on enter
      if (e.keyCode === 13) {
        e.preventDefault();
        if (!this.filteredOptions[this.index].disabled) {
          this.selectOption(this.filteredOptions[this.index].value, this.filteredOptions[this.index].label);
        }
      }
    };
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.value = '';
        this.searchValue = '';
        this.filteredOptions = this.options;
        this.inputElement.value = '';
        this.focus = false;
      }
    };
    this.selected = this.options
      .filter((option) => option.selected)
      .map((option) => option.label);
    this.selectOption = (value, label) => {
      if (this.multiple) {
        if (!this.selected.includes(label)) {
          this.selected = [...this.selected, label];
        }
        else {
          this.selected = this.selected.filter((option) => option !== label);
        }
        this.getInputWidth();
        this.uChange.emit(this.options.filter((option) => this.selected.includes(option.label)));
        if (this.options.find((o) => o.label === label).selected) {
          this.options.find((o) => o.label === label).selected = false;
        }
      }
      else {
        this.selected = [label];
        this.focus = false;
        this.uChange.emit(value);
      }
      this.inputElement.focus();
    };
    // calculate the the count of options to show before breakdown and more are shown with eg '2+'
    this.shortenSelected = false;
    this.shortenBreakpoint = 0;
    this.oldSelectedLength = 0;
    this.removeOption = (label) => {
      this.selected = this.selected.filter((option) => option !== label);
      this.inputElement.focus();
      this.getInputWidth();
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
  getInputWidth() {
    const inputWidth = this.inputElement.getBoundingClientRect().width;
    const elementCount = this.selected.length;
    if (inputWidth < 200) {
      this.shortenSelected = true;
      if (this.oldSelectedLength > elementCount) {
        this.oldSelectedLength = elementCount;
        this.shortenBreakpoint = 0;
        this.shortenSelected = false;
      }
      else if (elementCount > this.oldSelectedLength &&
        this.shortenBreakpoint === 0) {
        this.shortenBreakpoint = elementCount - 1;
        this.oldSelectedLength = elementCount;
      }
    }
    else {
      this.shortenSelected = false;
    }
  }
  render() {
    const value = this.getValue();
    return (h(Host, { tabindex: "0", onBlur: () => (this.focus = false) }, h("div", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), class: {
        wrapper: true,
        disabled: this.disabled,
        [this.design]: true,
        [this.size]: true,
        [`top-${this.size}`]: this.focus || this.selected.length > 0
      } }, this.shortenSelected
      ? this.selected.map((option, index) => {
        if (index < this.shortenBreakpoint) {
          return (h("span", { class: "selected-option" }, option, h("span", { class: "selected-rm", onClick: () => this.removeOption(option) }, "\u00D7")));
        }
        if (index === this.selected.length - 1) {
          return (h("span", { class: "selected-option" }, "+", this.selected.slice(this.shortenBreakpoint, -1).length +
            1));
        }
        return null;
      })
      : this.selected.map((option) => (h("span", { class: "selected-option" }, option, h("span", { class: "selected-rm", onClick: () => this.removeOption(option) }, "\u00D7")))), h("input", { class: {
        input: true,
        [`text-${this.size}`]: true
      }, ref: (input) => (this.inputElement = input), min: this.min, max: this.max, type: this.inputType, value: value, onInput: this.onInput, onBlur: this.onBlur, onClick: this.onClick, onFocus: this.onFocus, onKeyDown: this.onKeyDown, pattern: this.pattern, required: this.required, readonly: this.readonly || !this.searchable, disabled: this.disabled, autoComplete: this.autoComplete, autoCapitalize: this.autoCapitalize, autoCorrect: this.autoCorrect, spellcheck: this.spellCheck, autoFocus: false, placeholder: " " }), !!this.label || this.selected.length ? (h("label", { class: {
        label: true,
        [this.design]: true,
        [`label-${this.size}`]: true
      } }, this.required ? `${this.label} *` : this.label)) : null, h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
        reset: true
      } }, this.value || this.searchValue ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focus || this.hovered
        ? 'text-red-500'
        : 'text-gray-500' }), h("circle", { cx: "12", cy: "12", r: "10", class: this.focus || this.hovered
        ? 'text-red-500'
        : 'text-gray-500' }))) : null, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: { chevron: true, turn180: this.focus }, fill: "none", viewBox: "0 0 24 24", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, stroke: "currentColor" }, h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, d: "M19 9l-7 7-7-7" }))), this.focus ? (h("div", { class: {
        options: true,
        optionsTop: this.position === 'top',
        optionsBottom: this.position === 'bottom'
      }, id: "options" }, this.filteredOptions.map(({ value, label, disabled, selected }) => (h("span", { class: {
        option: true,
        [`option-${this.design}`]: true,
        selected: this.selected.includes(label),
        hovered: this.filteredOptions[this.index].label === label,
        disabled
      }, role: "option", onClick: () => {
        if (!disabled) {
          this.selectOption(value, label);
        }
      }, onMouseEnter: () => (this.index = this.filteredOptions.findIndex((option) => option.label === label)) }, this.multiple ? (h("u-checkbox", {
      // onUChange={() => {
      //   if (!disabled) this.selectOption(value, label);
      // }}
      label: label, size: this.size, checked: this.selected.includes(label) || selected, disabled: disabled
    })) : (label)))))) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "doFocus": ["doFocusChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
USelect.style = uSelectCss;

export { USelect as u_select };
