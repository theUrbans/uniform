declare const Context: any;
const userAgent = navigator.userAgent || navigator.vendor || (<any>window).opera;

if (/windows phone/i.test(userAgent)) {
    Context.mode = "mobile";
} else if (/android/i.test(userAgent)) {
    Context.mode = "mobile";
} else if (/iPad|iPhone|iPod/.test(userAgent)) {
    Context.mode = "mobile";
} else {
    Context.mode = "desktop";
}

document.documentElement.setAttribute('mode', Context.mode);

import { setMode } from "@stencil/core";
setMode(() => Context.mode);