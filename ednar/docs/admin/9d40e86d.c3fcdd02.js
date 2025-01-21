(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(243)),i={id:"editing-clientoverrides-lang-files",title:"Editing clientOverrides lang files",slug:"/editing-clientoverrides-lang-files"},c={unversionedId:"editing-clientoverrides-lang-files",id:"version-5.1.0/editing-clientoverrides-lang-files",isDocsHomePage:!1,title:"Editing clientOverrides lang files",description:"This guide goes over the steps to follow to edit the clientOverrides.json lang file. This file is used to change specific pieces of text in the EDNAR UI from their default values, e.g. changing NMI to ICP for New Zealand customers.",source:"@site/versioned_docs\\version-5.1.0\\editing-clientoverrides-lang-files.md",slug:"/editing-clientoverrides-lang-files",permalink:"/ednar/docs/admin/5.1.0/editing-clientoverrides-lang-files",editUrl:"https://github.com/zepben/versioned_docs/version-5.1.0/editing-clientoverrides-lang-files.md",version:"5.1.0",sidebar:"version-5.1.0/sidebar",previous:{title:"Steps to debug EDNAR",permalink:"/ednar/docs/admin/5.1.0/debugging-steps"}},s=[],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"This guide goes over the steps to follow to edit the clientOverrides.json lang file. This file is used to change specific pieces of text in the EDNAR UI from their default values, e.g. changing NMI to ICP for New Zealand customers."),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"This guide is written for people with little to no knowledge of JSON format"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"1."),' In the EDNAR web client folder, go to the "lang" directory. Open one of the English lang files (e.g. en.json) in Notepad++ (or similar). Hit Ctrl+F to find the text key(s) you want to change.',Object(r.a)("br",null)),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"2.")," Once you've found the key to change, you'll need to copy the name of the JSON object that key lives in. This is the \"section\" name (e.g customerNotificationTask)."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"3.")," In the clientOverrides.json file, paste the object name between the braces ({}), keeping the double quotes intact. Then add a colon and another set of braces after the object name.\ne.g."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "customerNotificationTask": {}\n}\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"4.")," Back in the en.json lang file, copy the key and value you wish to change. In the clientOverrides file, paste them between the braces you added after the corresponding object name (this should be across multiple lines for readability)\ne.g."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'   {\n   "customerNotificationTask": {\n      "saidiMinutes": "SAIDI Minutes"\n   }\n}\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"5."),"Now edit the value (right side of the colon) only to whatever text you want to display. If you edit the key (left side of colon) the change will not work.\ne.g."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "customerNotificationTask": {\n      "saidiMinutes": "CMOS Value"\n   }\n}\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"6.")," To add additional keys under the same object, make sure that each line has a comma between them. The last line in an object doesn't need a trailing comma.\ne.g."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "customerNotificationTask": {\n      "saidiMinutes": "CMOS Value",\n      "outageType_SHORT_SHUTDOWN": "Generator Shut Down - 15 minutes",\n      "outageType_MAYBE": "Target Outage"\n   }\n}\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"7."),' To add keys that belong to different objects (e.g. not under "customerNotificationTask"), you\'ll need to make sure that you include commas between each object as well.\ne.g.'),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "customerNotificationTask": {\n      "saidiMinutes": "CMOS Value",\n      "outageType_SHORT_SHUTDOWN": "Generator Shut Down - 15 minutes",\n      "outageType_MAYBE": "Target Outage"\n   },\n\n    "nar": {\n        "primaryEquipmentContainer": "Primary Feeder or Zone"\n    }\n}\n')),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"8.")," Once you've made the changes, as long as the clientOverrides is located in the lang folder, the changes should be reflected in the UI when you reload the EDNAR web page."))}d.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||r;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);