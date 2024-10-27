"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[4084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),c=n,f=p["".concat(d,".").concat(c)]||p[c]||u[c]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={id:"sdk-overview",title:"Overview"},i="EWB SDK",l={unversionedId:"sdk-overview",id:"version-0.23.0/sdk-overview",title:"Overview",description:"The EWB SDK contains everything necessary to write software for the EWB platform. Common use cases are:",source:"@site/versioned_docs/version-0.23.0/overview.md",sourceDirName:".",slug:"/sdk-overview",permalink:"/evolve/docs/jvm-sdk/0.23.0/sdk-overview",draft:!1,tags:[],version:"0.23.0",frontMatter:{id:"sdk-overview",title:"Overview"},sidebar:"someSidebar",next:{title:"Data Model",permalink:"/evolve/docs/jvm-sdk/0.23.0/"}},d={},s=[],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ewb-sdk"},"EWB SDK"),(0,n.kt)("p",null,"The EWB SDK contains everything necessary to write software for the EWB platform. Common use cases are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Writing ingestors to process source data into the EWB CIM data model"),(0,n.kt)("li",{parentName:"ul"},"Pulling network data from a EWB server for analysis")),(0,n.kt)("p",null,"The following features are present in the JVM version of the EWB SDK:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CIM data model"),(0,n.kt)("td",{parentName:"tr",align:null},"The CIM data model for networks, customers, and diagrams used in EWB.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tracing"),(0,n.kt)("td",{parentName:"tr",align:null},"A set of utility functions that can trace through a network, accounting for connectivity/phasing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Network consumer"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to pull network data from EWB into an in-memory CIM data model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Customer consumer"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to pull customer data from EWB into an in-memory CIM data model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Diagram consumer"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to pull diagram data from EWB into an in-memory CIM data model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CIM database reading/writing"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to save and load an in-memory CIM data model into databases.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CIM database upgrades"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to upgrade a CIM database into a newer version of EWB CIM.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metrics data model"),(0,n.kt)("td",{parentName:"tr",align:null},"The data model used for representing ingestion jobs and their corresponding metrics and data sources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metrics database reading/writing"),(0,n.kt)("td",{parentName:"tr",align:null},"The ability to save and load an in-memory metrics data model into databases.")))))}u.isMDXComponent=!0}}]);