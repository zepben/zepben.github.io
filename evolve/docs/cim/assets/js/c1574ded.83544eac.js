"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[31968],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),i=r(75489);const o={title:"MarketLedger",hide_table_of_contents:!0,slug:"MarketLedger",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger",title:"MarketLedger",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MarketLedger",hide_table_of_contents:!0,slug:"MarketLedger",sidebar_position:0},sidebar:"docs",previous:{title:"MarketInvoiceLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"},next:{title:"MarketLedgerEntry",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedgerEntry"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"In accounting transactions, a ledger is a book containing accounts to which debits and credits are posted from journals, where transactions are initially recorded. Journal entries are periodically posted to the ledger. Ledger actual represents actual amounts by account within ledger within company or within business area. Actual amounts may be generated in a source application and then loaded to a specific ledger within the enterprise general ledger or budget application."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("p",null,"No ancestor classes"),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger",mdxType:"Link"},"MarketLedger")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedgerEntry",mdxType:"Link"},"MarketLedgerEntry")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"MarketLedger"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"MarketLedgerEntries"),(0,a.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);