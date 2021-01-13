(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(78)),c={id:"overview",title:"Overview",hide_title:!0,slug:"/"},i={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"EWB Bundle Release r13.0",source:"@site/docs/release-notes.md",slug:"/",permalink:"/evolve/docs/ewb-bundle/next/",version:"current",sidebar:"sidebar",next:{title:"Data Ingestion",permalink:"/evolve/docs/ewb-bundle/next/data-ingestion"}},l=[{value:"EWB Bundle Release r13.0",id:"ewb-bundle-release-r130",children:[]},{value:"Bundled Software",id:"bundled-software",children:[]}],b={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"ewb-bundle-release-r130"},"EWB Bundle Release r13.0"),Object(a.b)("p",null,"This document describes how to configure and run the energy workbench server and required tools."),Object(a.b)("h2",{id:"bundled-software"},"Bundled Software"),Object(a.b)("p",null,"The bundle includes the following products:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/energy-workbench-server/"}),"Energy Workbench Server - 2.6.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/ewb-web-client/"}),"EWB Web Client - 1.11.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/pof-network-extractor/"}),"PoF Network Extractor - 2.3.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/weather-processor/"}),"Weather Processor - 1.2.1")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/load-aggregator/"}),"Load Aggregator - 3.0.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/load-processor/"}),"Load Processor - 3.0.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/gis-network-extractor/"}),"GIS Network Extractor - 2.8.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/pof-historian/"}),"PoF Historian - 1.3.3")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/network-server/"}),"EWB Network Server - 2.1.0")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/feeder-load-analysis/"}),"Feeder Load Analysis - 1.3.0"))))}u.isMDXComponent=!0},78:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return r?o.a.createElement(f,i({ref:t},b,{components:r})):o.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);