(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o({},r,{},e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?a.a.createElement(b,o({ref:r},u,{components:t})):a.a.createElement(b,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),i=(t(0),t(100)),c={id:"hardware-specification",title:"Hardware Specification",slug:"/hardware-specification"},o={unversionedId:"hardware-specification",id:"hardware-specification",isDocsHomePage:!1,title:"Hardware Specification",description:"EDNAR Web API Server",source:"@site/docs\\hardware-specification.md",slug:"/hardware-specification",permalink:"/ednar/docs/admin/hardware-specification",editUrl:"https://github.com/zepben/docs/hardware-specification.md",version:"current",sidebar:"sidebar",previous:{title:"NAR Lifecycles",permalink:"/ednar/docs/admin/nar-lifecycles"},next:{title:"DMS",permalink:"/ednar/docs/admin/dms"}},l=[{value:"EDNAR Web API Server",id:"ednar-web-api-server",children:[{value:"Hardware requirements",id:"hardware-requirements",children:[]}]},{value:"EDNAR Content Server",id:"ednar-content-server",children:[{value:"Hardware requirements",id:"hardware-requirements-1",children:[]}]}],u={toc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"ednar-web-api-server"},"EDNAR Web API Server"),Object(i.a)("p",null,"EDNAR Web API server hosts the below components"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"EDNAR Web API"),Object(i.a)("li",{parentName:"ul"},"EDNAR Reporting Service"),Object(i.a)("li",{parentName:"ul"},"EWB Data Service")),Object(i.a)("h3",{id:"hardware-requirements"},"Hardware requirements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"24 GB RAM"),Object(i.a)("li",{parentName:"ul"},"Quad core processor"),Object(i.a)("li",{parentName:"ul"},"500 GB SSD")),Object(i.a)("h2",{id:"ednar-content-server"},"EDNAR Content Server"),Object(i.a)("p",null,"EDNAR Content server hosts the static web content for the single page application."),Object(i.a)("h3",{id:"hardware-requirements-1"},"Hardware requirements"),Object(i.a)("p",null,"The hardware requirements for the web content server are minimal because we are just rendering static content for the single page application. Use of minimum required hardware for the operating system should suffice."),Object(i.a)("p",null,"If Windows Server 2012 was being used, the below specification would work:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"2 GB RAM"),Object(i.a)("li",{parentName:"ul"},"2 GHz or faster"),Object(i.a)("li",{parentName:"ul"},"40 GB")),Object(i.a)("hr",null))}s.isMDXComponent=!0}}]);