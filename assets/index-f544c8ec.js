(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();var l={},m={get exports(){return l},set exports(s){l=s}},d={};const h=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=h,v=Symbol.for("react.element"),y=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,R=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function p(s,t,n){var o,e={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)_.call(t,o)&&!O.hasOwnProperty(o)&&(e[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)e[o]===void 0&&(e[o]=t[o]);return{$$typeof:v,type:s,key:r,ref:i,props:e,_owner:R.current}}d.Fragment=y;d.jsx=p;d.jsxs=p;(function(s){s.exports=d})(m);const c=l.jsx,a=l.jsxs;var u={};const x=ReactDOM;var f=x;u.createRoot=f.createRoot,u.hydrateRoot=f.hydrateRoot;const b="/vite-react-app/assets/react-35ef61ed.svg",j="/vite-react-app/assets/vite-4a748afd.svg";function N(){const[s,t]=React.useState(0);return a("div",{className:"App",children:[a("div",{children:[c("a",{href:"https://vitejs.dev",target:"_blank",children:c("img",{src:j,className:"logo",alt:"Vite logo"})}),c("a",{href:"https://reactjs.org",target:"_blank",children:c("img",{src:b,className:"logo react",alt:"React logo"})})]}),c("h1",{children:"Vite + React"}),a("div",{className:"card",children:[a("button",{onClick:()=>t(n=>n+1),children:["count is ",s]}),a("p",{children:["Edit ",c("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),c("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}u.createRoot(document.getElementById("root")).render(c(React.StrictMode,{children:c(N,{})}));
