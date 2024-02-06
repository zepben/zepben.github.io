"use strict";(self.webpackChunkgis_network_extractor_doco=self.webpackChunkgis_network_extractor_doco||[]).push([[1615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"overview",title:"Overview",slug:"/"},i=void 0,c={unversionedId:"overview",id:"version-2.15.3/overview",title:"Overview",description:"The GIS Network Extractor builds an Energy Workbench network model from GIS json files in conjunction with other data sources.",source:"@site/versioned_docs/version-2.15.3/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/gis-network-extractor/2.15.3/",draft:!1,tags:[],version:"2.15.3",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar",next:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/2.15.3/input-files"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GIS Network Extractor builds an Energy Workbench network model from GIS json files in conjunction with other data sources.\nAs EWB deals with LV data, it also uses an LV mapping file to map meters and supply points to transformers in the\nnetwork model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:r(2330).Z,width:"695",height:"609"})),(0,o.kt)("p",null,"This tool will read the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"GIS JSON Network Data"))," as well as multiple other sources of auxiliary information and converts it to an ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"EWB Network")),"."))}f.isMDXComponent=!0},2330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gis_network_extractor_dataflow_diagram-e5528a19cacfac9a31b8e0e233b528e4.png"}}]);