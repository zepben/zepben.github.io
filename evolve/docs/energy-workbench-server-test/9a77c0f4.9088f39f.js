(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{210:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(315)),i={id:"network-model",title:"Network Model"},c={unversionedId:"network-model",id:"version-2.6.0/network-model",isDocsHomePage:!1,title:"Network Model",description:"CIM Model",source:"@site/versioned_docs/version-2.6.0/network-model.md",slug:"/network-model",permalink:"/evolve/docs/energy-workbench-server/2.6.0/network-model",version:"2.6.0",sidebar:"version-2.6.0/sidebar",previous:{title:"Data File Structure",permalink:"/evolve/docs/energy-workbench-server/2.6.0/data-file-structure"},next:{title:"Load Data Store",permalink:"/evolve/docs/energy-workbench-server/2.6.0/load-data-store"}},l=[{value:"CIM Model",id:"cim-model",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"cim-model"},"CIM Model"),Object(a.b)("p",null,"The EWB Server is composed around a domain model based on the 'Common Information Model' (CIM). The CIM is a very large standard that covers a huge amount of use cases. To make things more digestible, Evolve publishes its own CIM profile. CIM profiles are subsets of the whole CIM standard that dictates which parts of the model are in use. Evolve publishes its model at ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/"}),"https://zepben.github.io/evolve/docs/cim/evolve/"),"."),Object(a.b)("p",null,"The Evolve CIM Profile has been implemented in the Evolve JVM SDK on which the EWB Server has been built. More information on can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/jvm-sdk"}),"Evolve JVM SDK documentation"),"."),Object(a.b)("p",null,"If the Evolve profile doesn't contain a part of CIM that you require for your use case, you can request or propose a change to the model by starting a discussion at the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve/discussions"}),"Evolve GitHub discussions")," or by contacting Zepben directly at ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.zepben.com/contact"}),"https://www.zepben.com/contact"),"."))}u.isMDXComponent=!0},315:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);