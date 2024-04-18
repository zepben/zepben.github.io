"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[58480],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=r,m=c["".concat(p,".").concat(y)]||c[y]||g[y]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},15293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const i={title:"MarketActualEvent",hide_table_of_contents:!0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",title:"MarketActualEvent",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",draft:!1,tags:[],version:"current",frontMatter:{title:"MarketActualEvent",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Market",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/Market"},next:{title:"MarketFactors",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors"}},u={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:s},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"This class represents the actual instance of an event."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventComments"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Free format comments for the event, for any purpose needed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventEndTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"End time of the event.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventStartTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"Start time of the event.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventStatus"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketEventStatusKind",mdxType:"Link"},"MarketEventStatusKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Event status, e.g. active, canceled, expired, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eventType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Actual event type.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/DistributedResourceActualEvent",mdxType:"Link"},"DistributedResourceActualEvent"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",mdxType:"Link"},"MarketActualEvent")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketRun",mdxType:"Link"},"MarketRun")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"MarketActualEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"All actual events that trigger this market run."),(0,r.yg)("td",{parentName:"tr",align:null},"MarketRun"),(0,r.yg)("td",{parentName:"tr",align:null},"Market run triggered by this actual event. For example, the DA market run is triggered by the actual open bid submission event and terminated by the actual execution and completion of the DA market run captured by the runState of the MarketRun.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent",mdxType:"Link"},"MarketActualEvent")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarketEvent",mdxType:"Link"},"PlannedMarketEvent")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"MarketActualEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"All actual events that execute this planned event."),(0,r.yg)("td",{parentName:"tr",align:null},"PlannedMarketEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Planned event executed by this actual event.")))))}y.isMDXComponent=!0}}]);