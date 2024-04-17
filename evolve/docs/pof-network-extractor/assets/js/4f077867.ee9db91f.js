"use strict";(self.webpackChunkpof_network_extractor_doco=self.webpackChunkpof_network_extractor_doco||[]).push([[951],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8208:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"overview",title:"Overview",slug:"/"},u=void 0,l={unversionedId:"overview",id:"version-2.3.0/overview",title:"Overview",description:"The PoF Network Extractor builds an Energy Workbench network model from a PowerOn Fusion model.",source:"@site/versioned_docs/version-2.3.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/pof-network-extractor/2.3.0/",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"version-2.3.0/sidebar",next:{title:"Configuring",permalink:"/evolve/docs/pof-network-extractor/2.3.0/configuring"}},s={},f=[],p={toc:f},d="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The PoF Network Extractor builds an Energy Workbench network model from a PowerOn Fusion model.\nAs the EWB deals with LV data, it also uses an LV mapping file to map meters and supply points to transformers in the\nnetwork model."),(0,i.kt)("p",null,"As PoF is a massively configurable system, the PoF Network Extractor needs to be configured to each specific PoF system.\nMore detail can be found under ",(0,i.kt)("a",{parentName:"p",href:"configuring"},"configuration"),"."))}m.isMDXComponent=!0}}]);