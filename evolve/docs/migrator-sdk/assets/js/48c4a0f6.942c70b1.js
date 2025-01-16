"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[7213],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8029:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"overview",title:"Migrator SDK Overview",slug:"/"},l=void 0,c={unversionedId:"overview",id:"version-0.18.0/overview",title:"Migrator SDK Overview",description:"The migrator SDK is an internal library of classes and processors commonly used by Zepben authored migration utilities. It contains the following modules:",source:"@site/versioned_docs/version-0.18.0/overview.mdx",sourceDirName:".",slug:"/",permalink:"/evolve/docs/migrator-sdk/0.18.0/",draft:!1,tags:[],version:"0.18.0",frontMatter:{id:"overview",title:"Migrator SDK Overview",slug:"/"},sidebar:"someSidebar",next:{title:"Phase Consistency Processor",permalink:"/evolve/docs/migrator-sdk/0.18.0/phase-consistency"}},p={},u=[],d={toc:u},m="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The migrator SDK is an internal library of classes and processors commonly used by Zepben authored migration utilities. It contains the following modules:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Module"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/evolve/docs/migrator-sdk/0.18.0/phase-consistency"},"Phase Consistency")),(0,a.kt)("td",{parentName:"tr",align:null},"Module used to repair phase inconsistencies in a ",(0,a.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/jvm-sdk/0.9.0/sdk-services/#network-service"},"NetworkService"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/evolve/docs/migrator-sdk/0.18.0/lv-feeder-creator"},"LV Feeder Creator")),(0,a.kt)("td",{parentName:"tr",align:null},"Processor that creates LvFeeders in a ",(0,a.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/jvm-sdk/0.9.0/sdk-services/#network-service"},"NetworkService"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/evolve/docs/migrator-sdk/0.18.0/network-simplifier"},"Network Simplifier")),(0,a.kt)("td",{parentName:"tr",align:null},"Processor that simplifies ",(0,a.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/jvm-sdk/0.9.0/sdk-services/#network-service"},"NetworkService")," to a form suitable for translation to a bus-branch model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/evolve/docs/migrator-sdk/0.18.0/metrics-creators"},"Metrics Creators")),(0,a.kt)("td",{parentName:"tr",align:null},"Module with processors that create common metrics (e.g. total line length) and a customizable abstract metrics creator.")))))}v.isMDXComponent=!0}}]);