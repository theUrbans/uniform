import Vue from 'vue';
import {
  applyPolyfills,
  defineCustomElements
} from '@theUrbans/uniform/loader';
import '@theUrbans/uniform/dist/uniform/windi.css';
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/u-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});
