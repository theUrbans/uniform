'use strict';

const index = require('./index-6d55ac51.js');

try {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    index.Context.mode = 'mobile';
  }
  else if (/android/i.test(userAgent)) {
    index.Context.mode = 'mobile';
  }
  else if (/iPad|iPhone|iPod/.test(userAgent)) {
    index.Context.mode = 'mobile';
  }
  else {
    index.Context.mode = 'desktop';
  }
  document.documentElement.setAttribute('mode', index.Context.mode);
}
catch (error) {
  index.Context.mode = 'desktop';
}
index.setMode(() => index.Context.mode);
