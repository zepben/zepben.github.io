(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(97)),o={id:"index",title:"EDNAR Config Spreadsheet Mapping",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"EDNAR Config Spreadsheet Mapping",description:"This guide has been developed to assist with filling out the EDNAR Configuration Spreadsheet. Included in this document are instructions for the spreadsheet tabs and fields, as well as a mapping of the configuration to the EDNAR application.",source:"@site/docs\\index.mdx",slug:"/",permalink:"/ednar/docs/config-mapping/",editUrl:"https://github.com/zepben/docs/index.mdx",version:"current",sidebar:"sidebar",next:{title:"Access Types",permalink:"/ednar/docs/config-mapping/access-types"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"How it works",id:"how-it-works",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This guide has been developed to assist with filling out the EDNAR Configuration Spreadsheet. Included in this document are instructions for the spreadsheet tabs and fields, as well as a mapping of the configuration to the EDNAR application. "),Object(i.a)("p",null,"The guide will cover each tab of the config spreadsheet and outline what each option correlates to in EDNAR. "),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The numbers from each spreadsheet column are matched to the numbers in the EDNAR screenshots."))),Object(i.a)("h3",{id:"getting-started"},"Getting Started"),Object(i.a)("p",null,"The EDNAR Configuration Spreadsheet contains all the information required to set up a fully operational EDNAR instance and the spreadsheet directly correlates to the database schema used by EDNAR. The documentation for this schema can be found in Zepben\u2019s ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/ednar/docs/admin/index"}),"EDNAR Admin Documentation"),"."),Object(i.a)("p",null,"The EDNAR Config Spreadsheet is hosted as a Google Sheets spreadsheet. If you are a customer, you should have received a link to this spreadsheet. "),Object(i.a)("h3",{id:"how-it-works"},"How it works"),Object(i.a)("p",null,"In order to populate the EDNAR database with the config data from the spreadsheet, a Python script has been developed. This script pulls the values directly from the Google Sheets spreadsheet and turns them into SQL statements that are run on the EDNAR database. The Python script can either be executed for the entire spreadsheet or on specific options as required. "),Object(i.a)("p",null,"Certain fields in the spreadsheet are required to be filled in specific formats in order for this script to run correctly. These fields are outlined in the guide below."),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"You can click on any image to view it in full size."))))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(o,".").concat(u)]||h[u]||l[u]||i;return n?r.a.createElement(m,c({ref:t},d,{components:n})):r.a.createElement(m,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);