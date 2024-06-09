"use strict";(self.webpackChunkgis_network_extractor_doco=self.webpackChunkgis_network_extractor_doco||[]).push([[6143],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),g=p(a),m=n,h=g["".concat(d,".").concat(m)]||g[m]||c[m]||i;return a?r.createElement(h,l(l({ref:e},o),{},{components:a})):r.createElement(h,l({ref:e},o))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[g]="string"==typeof t?t:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1454:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},l="Regulator Repairing",s={unversionedId:"cppal-regulator-repair",id:"version-2.14.0/cppal-regulator-repair",title:"Regulator Repairing",description:'Some regulators in the CPPAL source data are not electrically correct, others split phases in ways the EWB does not handle, so we need to "repair" them for use',source:"@site/versioned_docs/version-2.14.0/cppal-regulator-repair.md",sourceDirName:".",slug:"/cppal-regulator-repair",permalink:"/evolve/docs/gis-network-extractor/2.14.0/cppal-regulator-repair",draft:!1,tags:[],version:"2.14.0",frontMatter:{}},d={},p=[{value:"Invalid Regulator Site Types",id:"invalid-regulator-site-types",level:2},{value:"Single Regulator Sites",id:"single-regulator-sites",level:2},{value:"Dual Regulator Sites",id:"dual-regulator-sites",level:2},{value:"Triple Regulator Sites",id:"triple-regulator-sites",level:2}],o={toc:p},g="wrapper";function c(t){let{components:e,...i}=t;return(0,n.kt)(g,(0,r.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"regulator-repairing"},"Regulator Repairing"),(0,n.kt)("p",null,'Some regulators in the CPPAL source data are not electrically correct, others split phases in ways the EWB does not handle, so we need to "repair" them for use\nin EWB. These repairs will not try to change the connectivity, but will remove connectivity that causes EWB problems, and potentially change phases.'),(0,n.kt)("p",null,"In any error reports about step failures, the steps represent the minimum distance from any of the regulator sites regulators, counting all conductors,\njunctions and switchgear. The names of the types below are not intended to reference any external system, and are labelled by their layout characteristics."),(0,n.kt)("h2",{id:"invalid-regulator-site-types"},"Invalid Regulator Site Types"),(0,n.kt)("p",null,"There are other regulator configurations than those mentioned below, many of which are valid and have been excluded from this documentation."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Sub-variant"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a"),(0,n.kt)("td",{parentName:"tr",align:null},"Boxed three connection single regulator sites with bypass"),(0,n.kt)("td",{parentName:"tr",align:null},"The five digit sub-variant represents the incoming connection location, then the number of switches on supply side, load side, spur and bypass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2a"),(0,n.kt)("td",{parentName:"tr",align:null},"Parallel dual regulator sites"),(0,n.kt)("td",{parentName:"tr",align:null},"There are no known sub-variants of this type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b"),(0,n.kt)("td",{parentName:"tr",align:null},"Boxed dual regulator sites with bypass"),(0,n.kt)("td",{parentName:"tr",align:null},"The four digit sub-variant represents the number of switches on the supply, load, spur and bypass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2c"),(0,n.kt)("td",{parentName:"tr",align:null},"Parallel boxed dual regulator sites"),(0,n.kt)("td",{parentName:"tr",align:null},"There are no known sub-variants of this type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3a"),(0,n.kt)("td",{parentName:"tr",align:null},"Parallel triple regulator sites"),(0,n.kt)("td",{parentName:"tr",align:null},"The two digit sub-variant represents the regulator block connection location, and the number of switches inline with each regulator")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For each of the above, the supply and load side switch counts may be swapped, as the direction of feed is not required for the regulator processing")),(0,n.kt)("h2",{id:"single-regulator-sites"},"Single Regulator Sites"),(0,n.kt)("p",null,"We support the following standard single regulator site layouts:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Repaired"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 11111"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 11111",src:a(8995).Z,width:"521",height:"650"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 11111",src:a(1248).Z,width:"521",height:"650"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21112"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21112",src:a(5658).Z,width:"482",height:"605"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21112",src:a(3270).Z,width:"482",height:"605"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21112 swapped"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21112 swapped",src:a(4585).Z,width:"647",height:"625"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21112 swapped",src:a(843).Z,width:"647",height:"625"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21212"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21212",src:a(7642).Z,width:"656",height:"637"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21212",src:a(3754).Z,width:"656",height:"637"}))))),(0,n.kt)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Repaired"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 11111 node"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 11111 node",src:a(1683).Z,width:"589",height:"687"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 11111 node",src:a(7327).Z,width:"589",height:"687"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21112 nodes"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21112 nodes",src:a(5377).Z,width:"592",height:"626"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21112 nodes",src:a(4100).Z,width:"592",height:"626"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21212 extra"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21212 extra",src:a(2891).Z,width:"576",height:"411"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21212 extra",src:a(8492).Z,width:"576",height:"411"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21212 junction"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21212 junction",src:a(7049).Z,width:"527",height:"609"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21212 junction",src:a(3409).Z,width:"527",height:"609"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a 21212 node"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 1a 21212 node",src:a(206).Z,width:"517",height:"756"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 1a 21212 node",src:a(5125).Z,width:"517",height:"756"}))))),(0,n.kt)("h2",{id:"dual-regulator-sites"},"Dual Regulator Sites"),(0,n.kt)("p",null,"We support the following standard dual regulator site layouts:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Repaired"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2a"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2a",src:a(3763).Z,width:"633",height:"602"})),(0,n.kt)("td",{parentName:"tr",align:"center"},"unchanged")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1111"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1111",src:a(621).Z,width:"602",height:"601"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1111",src:a(5945).Z,width:"602",height:"601"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1112"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1112",src:a(922).Z,width:"770",height:"739"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1112",src:a(2997).Z,width:"770",height:"739"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1211"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1211",src:a(9535).Z,width:"680",height:"734"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1211",src:a(5135).Z,width:"680",height:"734"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2c",src:a(7171).Z,width:"767",height:"609"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2c",src:a(9514).Z,width:"767",height:"609"}))))),(0,n.kt)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Repaired"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2a nodes"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2a nodes",src:a(3506).Z,width:"466",height:"730"})),(0,n.kt)("td",{parentName:"tr",align:"center"},"unchanged")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2a spur"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2a spur",src:a(74).Z,width:"671",height:"547"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2a spur",src:a(7174).Z,width:"671",height:"547"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1110"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1110",src:a(3505).Z,width:"756",height:"756"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1110",src:a(5886).Z,width:"756",height:"756"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1112 node"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1112 node",src:a(593).Z,width:"651",height:"607"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1112 node",src:a(8159).Z,width:"651",height:"607"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1112 nodes"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1112 nodes",src:a(1376).Z,width:"796",height:"739"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1112 nodes",src:a(3423).Z,width:"796",height:"739"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2b 1211 node"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 2b 1211 node",src:a(3171).Z,width:"778",height:"569"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"repaired type 2b 1211 node",src:a(1428).Z,width:"778",height:"569"}))))),(0,n.kt)("h2",{id:"triple-regulator-sites"},"Triple Regulator Sites"),(0,n.kt)("p",null,"All regulators in a triple regulator site will have their phases updated to ABC. This prevents EWB from dropping phases, as EWB is not able to detect the way\nthe split-phase regulator is connected as a 3-phase split. If at some stage it is deemed that these regulators must be modelled as individual phased\ntransformers, these repair algorithms will need to be revisited to split the phases in a way that EWB detects."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3a 10"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"type 3a 10 original",src:a(6713).Z,width:"485",height:"367"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3a 20"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"type 3a 20 original",src:a(9925).Z,width:"451",height:"310"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3a 21"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"type 3a 21 original",src:a(2212).Z,width:"406",height:"360"}))))),(0,n.kt)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Original"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3a 10 node"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"original type 3a 10 node",src:a(5012).Z,width:"399",height:"388"}))))))}c.isMDXComponent=!0},1683:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-11111-node-46c94f783404ae662bd1a860272bf542.png"},8995:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-11111-5c416201a275309005ae14353bfdfdb4.png"},5377:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21112-nodes-e090ac5d2100dc8f465c04f50142afa8.png"},4585:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21112-swapped-2631b57b20d90c8206cf2aa60b06aefb.png"},5658:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21112-52e14aeba1aca5b5b6660277fcb16b55.png"},2891:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21212-extra-1c5d8c08e7624eec933c0089dbb6f714.png"},7049:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21212-junction-80494ffdefa681fe3d3367b58e909465.png"},206:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21212-node-d9d467d03f0ec8a28570fa6f53e0c23f.png"},7642:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-1a-21212-4dd4c3bbbf0a4556f8e208d395fad16a.png"},3506:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2a-nodes-271d78b52f9b80cfb7558024b9d04f2c.png"},74:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2a-spur-7ea5c1ee89c09a9aaa1c025881df299d.png"},3763:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2a-0234e71d15c1443daf151d02d0f07fa6.png"},3505:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1110-fcc2dff6dea0daa1eff099521e252c76.png"},621:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1111-4a3170140267e772d25327a8c56061a5.png"},593:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1112-node-05f80ea9dc11653b7b950e1d499d4199.png"},1376:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1112-nodes-fa8a95d8bee2e08a066e01ae14d73c22.png"},922:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1112-0c3be65cd2986d4c074e5d0b582b512f.png"},3171:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1211-node-02dadd5da135cd7f96d373fbd64106b4.png"},9535:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2b-1211-eee0bc4c1824fc46de8571055268867f.png"},7171:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-2c-e1ee879e6520a0ab15dda3e3eda48f29.png"},5012:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-3a-10-node-4ea5bc29db21803584d2ae00db4a4316.png"},6713:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-3a-10-b29ece28372de51f172589080befe765.png"},9925:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-3a-20-8c78962f96b0abe29529b66cefd0d7d4.png"},2212:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/original-3a-21-8e9c7132e3b2ebf3ad72af3e03969217.png"},7327:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-11111-node-1933c7291800c603491dc59a53c8d578.png"},1248:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-11111-8f859e772ae1869013233561a5999b06.png"},4100:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21112-nodes-25a435600a570ea5450abdc54c7bde4f.png"},843:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21112-swapped-5fa1b1fd01a99366921ea92b2126adac.png"},3270:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21112-021652c5fe8eb93bdf214b427a61976e.png"},8492:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21212-extra-47757489c6e1b44926a167cba636fc1f.png"},3409:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21212-junction-e33619eee014f0d117c70201119e8953.png"},5125:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21212-node-172d0c26f860009af3195e3f939e4a32.png"},3754:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-1a-21212-0ab9f7bbece338fe93a2a617fe81d4ad.png"},7174:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2a-spur-42e9a3c66a6acabd3460a36492e5d788.png"},5886:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1110-1913b442ceba43596f64eab574bae9b0.png"},5945:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1111-b6f1be19fbb1855418b68329e776e3f0.png"},8159:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1112-node-9fc4c96643cee617736a730ed0c4a6a6.png"},3423:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1112-nodes-c3f8c89e36c2b3675b4008cbe30f5060.png"},2997:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1112-a4ebf862f719b226e834987caf028069.png"},1428:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1211-node-9e00201ebae95dd4569817301be9cb98.png"},5135:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2b-1211-0330dbd24edfa357a4f1fecabea204ab.png"},9514:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/repaired-2c-3bb1a59d8592bf768afda0f2bba9ec33.png"}}]);