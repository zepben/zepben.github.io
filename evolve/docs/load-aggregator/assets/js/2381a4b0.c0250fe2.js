"use strict";(self.webpackChunkload_aggregator_doco=self.webpackChunkload_aggregator_doco||[]).push([[518],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(g,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const o={id:"configuring",title:"Configuring"},i=void 0,l={unversionedId:"configuring",id:"version-3.0.0/configuring",title:"Configuring",description:"Configuration for the load aggregator is specified in a JSON file.",source:"@site/versioned_docs/version-3.0.0/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/evolve/docs/load-aggregator/3.0.0/configuring",draft:!1,tags:[],version:"3.0.0",frontMatter:{id:"configuring",title:"Configuring"},sidebar:"version-3.0.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/load-aggregator/3.0.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/load-aggregator/3.0.0/run-app"}},g={},p=[{value:"Sample Configuration File",id:"sample-configuration-file",level:4}],c={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Configuration for the load aggregator is specified in a JSON file."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Option"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"ewbDataPath")),(0,a.yg)("td",{parentName:"tr",align:null},"The path to the ewb data directory"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"outputTimeZone")),(0,a.yg)("td",{parentName:"tr",align:null},"The timezone should match the specified output timezone in the load processor"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM.")),(0,a.yg)("h4",{id:"sample-configuration-file"},"Sample Configuration File"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "ewbDataPath": "/Users/zepben/server/ewb",\n    "outputTimeZone": "Australia/Sydney"\n}\n')))}s.isMDXComponent=!0}}]);