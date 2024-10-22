"use strict";(self.webpackChunkload_processor_doco=self.webpackChunkload_processor_doco||[]).push([[149],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const i={id:"input-files",title:"Input Files"},a=void 0,l={unversionedId:"input-files",id:"version-3.1.0/input-files",title:"Input Files",description:"The input file name for the load readings CPPAL CSV files should follow the following format:",source:"@site/versioned_docs/version-3.1.0/input-files.md",sourceDirName:".",slug:"/input-files",permalink:"/evolve/docs/load-processor/3.1.0/input-files",draft:!1,tags:[],version:"3.1.0",frontMatter:{id:"input-files",title:"Input Files"},sidebar:"version-3.1.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/load-processor/3.1.0/"},next:{title:"Configuring",permalink:"/evolve/docs/load-processor/3.1.0/configuring"}},p={},s=[],c={toc:s},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The input file name for the load readings CPPAL CSV files should follow the following format:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"HANA_(15|30)M_CONS_(CITI|PCOR)_<YYYYMMdd>_<YYYYMMdd>.csv")),(0,o.yg)("p",null,"where ",(0,o.yg)("inlineCode",{parentName:"p"},"<YYYY>")," ",(0,o.yg)("inlineCode",{parentName:"p"},"<MM>")," ",(0,o.yg)("inlineCode",{parentName:"p"},"<dd>")," are the year, month and date."),(0,o.yg)("p",null,"Some examples:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"HANA_15M_CONS_CITI_20160101_20160101"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"HANA_30M_CONS_CITI_20150501_20150101"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"HANA_15M_CONS_PCOR_20130201_20130201"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"HANA_30M_CONS_PCOR_20110901_20110901")),(0,o.yg)("p",null,"Alternatively, the input files for EE JSON files can be named anything, but have to end with ",(0,o.yg)("inlineCode",{parentName:"p"},".json"),"; the format expected is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "readings": [\n      {\n        "start": "2020-01-01T00:00:00+10:00",\n        "interval": 1800,\n        "entries": [\n          {\n            "id": "1007190",\n            "realValues": false,\n            "valueUnit": "kwh",\n            "valueType": "net",\n            "values": [0.5651, 0.537, 0.5167, 0.4901, 0.4838, 0.4791, 0.4724, 0.4621, 0.4661, 0.4846, 0.4699, 0.3888, 0.3225, 0.2427, 0.1771, 0.0739, -0.0397, -0.2177, -0.4392, -0.7568, -1.0484, -1.3821, -1.562, -1.6874, -1.7632, -1.7583, -1.6812, -1.5108, -1.3238, -1.0467, -0.7282, -0.3567, 0.0044, 0.3096, 0.5251, 0.674, 0.7369, 0.7391, 0.7246, 0.6962, 0.6623, 0.6252, 0.6122, 0.6016, 0.5776, 0.5555, 0.5312, 0.5179]\n          },\n          ...\n        ]\n      },\n      ...\n  ]\n}\n')))}f.isMDXComponent=!0}}]);