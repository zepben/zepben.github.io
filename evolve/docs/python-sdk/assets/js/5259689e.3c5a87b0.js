"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[8319],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"sdk-overview",title:"Overview"},u="EWB SDK",c={unversionedId:"sdk-overview",id:"version-0.44.0/sdk-overview",title:"Overview",description:"The EWB SDK contains everything necessary to write software for the EWB platform. Common use cases are:",source:"@site/versioned_docs/version-0.44.0/overview.md",sourceDirName:".",slug:"/sdk-overview",permalink:"/evolve/docs/python-sdk/0.44.0/sdk-overview",draft:!1,tags:[],version:"0.44.0",frontMatter:{id:"sdk-overview",title:"Overview"},sidebar:"someSidebar",next:{title:"Virtual Environment Setup",permalink:"/evolve/docs/python-sdk/0.44.0/venv-setup"}},s={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ewb-sdk"},"EWB SDK"),(0,o.kt)("p",null,"The EWB SDK contains everything necessary to write software for the EWB platform. Common use cases are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Writing ingestors to process source data into the EWB CIM data model"),(0,o.kt)("li",{parentName:"ul"},"Pulling network data from a EWB server for analysis")),(0,o.kt)("p",null,"The following features are present in the Python version of the EWB SDK:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CIM data model"),(0,o.kt)("td",{parentName:"tr",align:null},"The CIM data model for networks, customers, and diagrams used in EWB.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tracing"),(0,o.kt)("td",{parentName:"tr",align:null},"A set of utility functions that can trace through a network, accounting for connectivity/phasing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network consumer"),(0,o.kt)("td",{parentName:"tr",align:null},"The ability to pull network data from EWB into an in-memory CIM data model.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Customer consumer"),(0,o.kt)("td",{parentName:"tr",align:null},"The ability to pull customer data from EWB into an in-memory CIM data model.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Diagram consumer"),(0,o.kt)("td",{parentName:"tr",align:null},"The ability to pull diagram data from EWB into an in-memory CIM data model.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CIM database reading/writing"),(0,o.kt)("td",{parentName:"tr",align:null},"The ability to save and load an in-memory CIM data model into databases.")))))}f.isMDXComponent=!0}}]);