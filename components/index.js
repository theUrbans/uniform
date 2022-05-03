import { Context, setMode } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

try {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    Context.mode = 'mobile';
  }
  else if (/android/i.test(userAgent)) {
    Context.mode = 'mobile';
  }
  else if (/iPad|iPhone|iPod/.test(userAgent)) {
    Context.mode = 'mobile';
  }
  else {
    Context.mode = 'desktop';
  }
  document.documentElement.setAttribute('mode', Context.mode);
}
catch (error) {
  Context.mode = 'desktop';
}
setMode(() => Context.mode);
