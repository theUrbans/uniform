import { setMode } from '@stencil/core';

declare const Context: any;
try {
  const userAgent = navigator.userAgent || navigator.vendor || (<any>window).opera;
  if (/windows phone/i.test(userAgent)) {
    Context.mode = 'mobile';
  } else if (/android/i.test(userAgent)) {
    Context.mode = 'mobile';
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    Context.mode = 'mobile';
  } else {
    Context.mode = 'desktop';
  }

  document.documentElement.setAttribute('mode', Context.mode);
} catch (error) {
  Context.mode = 'desktop';
}
setMode(() => Context.mode);
