"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[78532],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=m(a),y=r,s=p["".concat(d,".").concat(y)]||p[y]||c[y]||i;return a?n.createElement(s,l(l({ref:t},g),{},{components:a})):n.createElement(s,l({ref:t},g))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},38372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),i=a(75489);const l={title:"LoadBid",hide_table_of_contents:!0,slug:"LoadBid",sidebar_position:0},o=void 0,d={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",title:"LoadBid",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LoadBid",hide_table_of_contents:!0,slug:"LoadBid",sidebar_position:0},sidebar:"docs",previous:{title:"InterTieDispatchResponse",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/InterTieDispatchResponse"},next:{title:"LoadFollowingInst",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadFollowingInst"}},m={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:g},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Offer to supply energy/ancillary services from a load resource (participating load reduces consumption)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dropRampRate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePowerChangeRate",mdxType:"Link"},"ActivePowerChangeRate")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum rate that load can be reduced (MW/minute)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"loadRedInitiationCost"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"load reduction initiation cost")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"loadRedInitiationTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"load reduction initiation time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"marketDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"The date represents the NextMarketDate for which the load response bids apply to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"meteredValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Flag indicated that the load reduction is metered. (See above)",(0,r.yg)("br",null),"If priceSetting and meteredValue both equal 1, then the facility is eligible to set LMP in the real time market.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minLoad"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum MW load below which it may not be reduced.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minLoadReduction"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum MW for a load reduction (e.g. MW rating of a discrete pump.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minLoadReductionCost"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"Cost in $ at the minimum reduced load")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minLoadReductionInterval"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Shortest period load reduction shall be maintained before load can be restored to normal levels.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minTimeBetLoadRed"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Shortest time that load shall be left at normal levels before a new load reduction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pickUpRampRate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePowerChangeRate",mdxType:"Link"},"ActivePowerChangeRate")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum rate load may be restored (MW/minute)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"priceSetting"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Flag to indicate that the facility can set LMP Works in tandem with Metered Value.  Greater chance of this being dynamic than the Metered Value, however, it is requested that Price Setting and Metered Value stay at the same source.  Currently no customers have implemented the metering capability, but if this option is implemented, then Price Setting could become dynamic.  However, Metered Value will remain static.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reqNoticeTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Time period that is required from an order to reduce a load to the time that it takes to get to the minimum load reduction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"shutdownCost"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"The fixed cost associated with committing a load reduction.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",mdxType:"Link"},"ResourceBid"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadReductionPriceCurve",mdxType:"Link"},"LoadReductionPriceCurve")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadBid"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"LoadReductionPriceCurve"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/RampRateCurve",mdxType:"Link"},"RampRateCurve")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadBid"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"RampRateCurve"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",mdxType:"Link"},"AreaLoadBid")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadBid"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"AreaLoadBid"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/RegisteredLoad",mdxType:"Link"},"RegisteredLoad")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadBids"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"RegisteredLoad"),(0,r.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);