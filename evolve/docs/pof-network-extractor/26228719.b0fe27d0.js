(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(t),d=n,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||a;return t?o.a.createElement(m,c({ref:r},s,{components:t})):o.a.createElement(m,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(113)),i={id:"overview",title:"Overview",slug:"/"},c={unversionedId:"overview",id:"version-2.4.0/overview",isDocsHomePage:!1,title:"Overview",description:"The PoF Network Extractor builds an Energy Workbench network model from a PowerOn Fusion model.",source:"@site/versioned_docs/version-2.4.0/overview.md",slug:"/",permalink:"/evolve/docs/pof-network-extractor/2.4.0/",version:"2.4.0",sidebar:"version-2.4.0/sidebar",next:{title:"configuring",permalink:"/evolve/docs/pof-network-extractor/2.4.0/configuring"}},u=[],s={toc:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.a)("p",null,"The PoF Network Extractor builds an Energy Workbench network model from a PowerOn Fusion model.\nAs the EWB deals with LV data, it also uses an LV mapping file to map meters and supply points to transformers in the\nnetwork model."),Object(a.a)("p",null,"As PoF is a massively configurable system, the PoF Network Extractor needs to be configured to each specific PoF system.\nMore detail can be found under ",Object(a.a)("a",Object(n.a)({parentName:"p"},{href:"configuring"}),"configuration"),"."))}p.isMDXComponent=!0}}]);