import { setMode } from '@stencil/core';

declare const Context: any;
try {
  // const userAgent =
  //   navigator.userAgent || navigator.vendor || (<any>window).opera;
  // if (/windows phone/i.test(userAgent)) {
  //   Context.mode = 'mobile';
  // } else if (/android/i.test(userAgent)) {
  //   Context.mode = 'mobile';
  // } else if (/iPad|iPhone|iPod/.test(userAgent)) {
  //   Context.mode = 'tablet';
  // } else {
  //   Context.mode = 'desktop';
  // }
  const mode =
    window.innerWidth <= 768
      ? 'mobile'
      : window.innerWidth <= 992
      ? 'tablet'
      : 'desktop';
  Context.mode = mode;
  document.documentElement.setAttribute('mode', mode);
} catch (error) {
  Context.mode = 'desktop';
}
setMode(() => Context.mode);
