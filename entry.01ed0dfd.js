import{r as o,a as S}from"./chunks/chunk.06970d3c.js";var m={exports:{}},i={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=o.exports,y=60103;i.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var h=Symbol.for;y=h("react.element"),i.Fragment=h("react.fragment")}var k=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,l){var r,n={},a=null,c=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)O.call(e,r)&&!R.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:y,type:t,key:a,ref:c,props:n,_owner:k.current}}i.jsx=x;i.jsxs=x;m.exports=i;var j=m.exports;const{jsx:s,jsxs:d,Fragment:w}=j,{DocSearchModal:C,useDocSearchKeyboardEvents:E}=void 0;function N(){const[t,e]=o.exports.useState(!1),l=o.exports.useRef(),[r,n]=o.exports.useState(null),a=o.exports.useCallback(()=>{e(!0)},[e]),c=o.exports.useCallback(()=>{e(!1)},[e]),_=o.exports.useCallback(p=>{e(!0),n(p.key)},[e,n]);return E({isOpen:t,onOpen:a,onClose:c,onInput:_,searchButtonRef:l}),d(w,{children:[d("button",{type:"button",ref:l,onClick:a,className:"search-input",children:[s("svg",{width:"24",height:"24",fill:"none",children:s("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),s("span",{children:"Search"}),d("span",{className:"search-hint",children:[s("span",{className:"sr-only",children:"Press "}),s("kbd",{children:"/"}),s("span",{className:"sr-only",children:" to search"})]})]}),t&&S.exports.createPortal(s(C,{initialQuery:r,initialScrollY:window.scrollY,onClose:c,indexName:void 0,appId:void 0,apiKey:void 0,transformItems:p=>p.map(f=>{const u=document.createElement("a");u.href=f.url;const v=u.hash==="#overview"?"":u.hash;return{...f,url:`${u.pathname}${v}`}})}),document.body)]})}export{N as default};
