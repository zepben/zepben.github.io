"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[9268],{15680:(t,e,r)=>{r.d(e,{xA:()=>d,yg:()=>m});var a=r(96540);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var g=a.createContext({}),p=function(t){var e=a.useContext(g),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,g=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(r),y=n,m=u["".concat(g,".").concat(y)]||u[y]||c[y]||l;return r?a.createElement(m,i(i({ref:e},d),{},{components:r})):a.createElement(m,i({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},98898:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var a=r(58168),n=(r(96540),r(15680)),l=r(75489);const i={title:"MarketProduct",hide_table_of_contents:!0,slug:"MarketProduct",sidebar_position:0},o=void 0,g={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",title:"MarketProduct",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MarketProduct",hide_table_of_contents:!0,slug:"MarketProduct",sidebar_position:0},sidebar:"docs",previous:{title:"MarketPlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketPlan"},next:{title:"MarketRun",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketRun"}},p={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:d},c="wrapper";function y(t){let{components:e,...r}=t;return(0,n.yg)(c,(0,a.A)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"A product traded by an RTO (e.g. energy, 10 minute spinning reserve).  Ancillary service product examples include: Regulation, Regulation Up, Regulation Down, Spinning Reserve, Non-Spinning Reserve, etc."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"marketProductType"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketProductType",mdxType:"Link"},"MarketProductType")),(0,n.yg)("td",{parentName:"tr",align:null},"Market product type examples:")))),(0,n.yg)("p",null,"EN (Energy)\nRU (Regulation Up)\nRD (Regulation Dn)\nSR (Spinning Reserve)\nNR (Non-Spinning Reserve)\nRC (RUC) |\n| rampInterval | ",(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Ramping time interval for the specific market product type specified by marketProductType attribute. For example, if marketProductType = EN (from enumeration MarketProductType), then the rampInterval is the ramping time interval for Energy. |"),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("p",null,"No descendent classes"),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ProductBid",mdxType:"Link"},"ProductBid")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"ProductBids"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceAwardInstruction",mdxType:"Link"},"ResourceAwardInstruction")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"ResourceAwardInstruction"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidError",mdxType:"Link"},"BidError")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"BidError"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/BidPriceCap",mdxType:"Link"},"BidPriceCap")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"BidPriceCap"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MarketRegionResults",mdxType:"Link"},"MarketRegionResults")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"MarketRegionResults"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"1..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/Market",mdxType:"Link"},"Market")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProducts"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Market"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfExternalInputs/ReserveReq",mdxType:"Link"},"ReserveReq")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null},"Market product associated with reserve requirement must be a reserve or regulation product."),(0,n.yg)("td",{parentName:"tr",align:null},"ReserveReqs"),(0,n.yg)("td",{parentName:"tr",align:null},"Market product associated with reserve requirement must be a reserve or regulation product.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketProduct",mdxType:"Link"},"MarketProduct")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/CommodityDefinition",mdxType:"Link"},"CommodityDefinition")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketProduct"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"CommodityDefinition"),(0,n.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);