"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[6243],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83398:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"network-model",title:"Network Model"},l=void 0,s={unversionedId:"network-model",id:"version-2.11.1/network-model",title:"Network Model",description:"CIM Model",source:"@site/versioned_docs/version-2.11.1/network-model.md",sourceDirName:".",slug:"/network-model",permalink:"/evolve/docs/energy-workbench-server/2.11.1/network-model",draft:!1,tags:[],version:"2.11.1",frontMatter:{id:"network-model",title:"Network Model"},sidebar:"version-2.11.1/sidebar",previous:{title:"Data File Structure",permalink:"/evolve/docs/energy-workbench-server/2.11.1/data-file-structure"},next:{title:"Load Data Store",permalink:"/evolve/docs/energy-workbench-server/2.11.1/load-data-store"}},u={},p=[{value:"CIM Model",id:"cim-model",level:2}],d={toc:p},f="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cim-model"},"CIM Model"),(0,a.kt)("p",null,"The EWB Server is composed around a domain model based on the 'Common Information Model' (CIM). The CIM is a very large standard that covers a huge amount of use cases. To make things more digestible, Evolve publishes its own CIM profile. CIM profiles are subsets of the whole CIM standard that dictates which parts of the model are in use. Evolve publishes its model at ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/"},"https://zepben.github.io/evolve/docs/cim/evolve/"),"."),(0,a.kt)("p",null,"The Evolve CIM Profile has been implemented in the Evolve JVM SDK on which the EWB Server has been built. More information on can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/jvm-sdk"},"Evolve JVM SDK documentation"),"."),(0,a.kt)("p",null,"If the Evolve profile doesn't contain a part of CIM that you require for your use case, you can request or propose a change to the model by starting a discussion at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve/discussions"},"Evolve GitHub discussions")," or by contacting Zepben directly at ",(0,a.kt)("a",{parentName:"p",href:"https://www.zepben.com/contact"},"https://www.zepben.com/contact"),"."))}v.isMDXComponent=!0}}]);