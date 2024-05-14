"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[9677],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,y=m["".concat(p,".").concat(c)]||m[c]||g[c]||l;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const i={title:"PlannedMarket",hide_table_of_contents:!0,slug:"PlannedMarket",sidebar_position:0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",title:"PlannedMarket",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"PlannedMarket",hide_table_of_contents:!0,slug:"PlannedMarket",sidebar_position:0},sidebar:"docs",previous:{title:"MarketRun",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketRun"},next:{title:"PlannedMarketEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarketEvent"}},s={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:d},g="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Represent a planned market. For example a planned DA/HA/RT market."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"marketEndTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"Market end time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"marketStartTime"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"Market start time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"marketType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MarketType",mdxType:"Link"},"MarketType")),(0,r.yg)("td",{parentName:"tr",align:null},"Market type.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",mdxType:"Link"},"PlannedMarket")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarketEvent",mdxType:"Link"},"PlannedMarketEvent")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},"PlannedMarket"),(0,r.yg)("td",{parentName:"tr",align:null},"A planned market shall have a set of planned events"),(0,r.yg)("td",{parentName:"tr",align:null},"PlannedMarketEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"A planned market shall have a set of planned events")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",mdxType:"Link"},"PlannedMarket")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketRun",mdxType:"Link"},"MarketRun")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"PlannedMarket"),(0,r.yg)("td",{parentName:"tr",align:null},"A planned market could have multiple market runs for the reason that a planned market could have a rerun."),(0,r.yg)("td",{parentName:"tr",align:null},"MarketRun"),(0,r.yg)("td",{parentName:"tr",align:null},"A planned market could have multiple market runs for the reason that a planned market could have a rerun.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/PlannedMarket",mdxType:"Link"},"PlannedMarket")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketPlan",mdxType:"Link"},"MarketPlan")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"PlannedMarket"),(0,r.yg)("td",{parentName:"tr",align:null},"A market plan has a number of markets (DA, HA, RT)."),(0,r.yg)("td",{parentName:"tr",align:null},"MarketPlan"),(0,r.yg)("td",{parentName:"tr",align:null},"A market plan has a number of markets (DA, HA, RT).")))))}c.isMDXComponent=!0}}]);