(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(122)),i={id:"overview",title:"Overview",slug:"/"},c={unversionedId:"overview",id:"version-2.10.0/overview",isDocsHomePage:!1,title:"Overview",description:"The GIS Network Extractor builds an Energy Workbench network model from GIS json files in conjunction with other data sources.",source:"@site/versioned_docs/version-2.10.0/overview.md",slug:"/",permalink:"/evolve/docs/gis-network-extractor/2.10.0/",version:"2.10.0",sidebar:"version-2.10.0/sidebar",next:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/2.10.0/input-files"}},s=[],l={toc:s};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"The GIS Network Extractor builds an Energy Workbench network model from GIS json files in conjunction with other data sources.\nAs EWB deals with LV data, it also uses an LV mapping file to map meters and supply points to transformers in the\nnetwork model."),Object(a.a)("p",null,Object(a.a)("img",{alt:"Architecture",src:r(125).default})),Object(a.a)("p",null,"This tool will read the ",Object(a.a)("em",{parentName:"p"},Object(a.a)("strong",{parentName:"em"},"GIS JSON Network Data"))," as well as multiple other sources of auxiliary information and converts it to an ",Object(a.a)("em",{parentName:"p"},Object(a.a)("strong",{parentName:"em"},"EWB Network")),"."))}u.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?o.a.createElement(d,c({ref:t},l,{components:r})):o.a.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},125:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/gis_network_extractor_dataflow_diagram-e5528a19cacfac9a31b8e0e233b528e4.png"}}]);