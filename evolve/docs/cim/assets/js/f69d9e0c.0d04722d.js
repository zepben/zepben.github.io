"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[79373],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,y=g["".concat(p,".").concat(d)]||g[d]||c[d]||i;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"MarketInvoice",hide_table_of_contents:!0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",title:"MarketInvoice",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",draft:!1,tags:[],version:"current",frontMatter:{title:"MarketInvoice",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CongestionRevenueRight",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight"},next:{title:"MarketInvoiceLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}},s={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A roll up of invoice line items. The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"Total amount due on this invoice based on line items and applicable adjustments.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"billMediaKind"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/MktBillMediaKind",mdxType:"Link"},"MktBillMediaKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Kind of media by which the CustomerBillingInfo was delivered.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dueDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculated date upon which the Invoice amount is due.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kind"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/MktAccountKind",mdxType:"Link"},"MktAccountKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Kind of invoice (default is 'sales').")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mailedDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Date on which the customer billing statement/invoice was printed/mailed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"proForma"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated. EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"referenceNumber"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Number of an invoice to be reference by this invoice.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transactionDateTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"Date and time when the invoice is issued.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transferType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of invoice transfer.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",mdxType:"Link"},"MarketInvoice")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/MajorChargeGroup",mdxType:"Link"},"MajorChargeGroup")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},"MarketInvoice"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MajorChargeGroup"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",mdxType:"Link"},"MarketInvoice")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",mdxType:"Link"},"MarketInvoiceLineItem")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"MarketInvoice"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"MarketInvoiceLineItems"),(0,r.yg)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);