"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[18637],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),y=n,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||l;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},93113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(58168),n=(r(96540),r(15680)),l=r(75489);const i={title:"RegularIntervalSchedule",hide_table_of_contents:!0},o=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",id:"cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",title:"RegularIntervalSchedule",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Core",slug:"/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",draft:!1,tags:[],version:"current",frontMatter:{title:"RegularIntervalSchedule",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PowerSystemResource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource"},next:{title:"RegularTimePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/RegularTimePoint"}},u={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:s},d="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"The schedule has time points where the time between them is constant."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"endTime"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,n.yg)("td",{parentName:"tr",align:null},"The time for the last time point.  The value can be a time of day, not a specific date.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timeStep"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,n.yg)("td",{parentName:"tr",align:null},"The time between each pair of subsequent regular time points in sequence order.")))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/BasicIntervalSchedule",mdxType:"Link"},"BasicIntervalSchedule"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/AreaLoadCurve",mdxType:"Link"},"AreaLoadCurve")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidHourlyProductSchedule",mdxType:"Link"},"BidHourlyProductSchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidHourlySchedule",mdxType:"Link"},"BidHourlySchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidPriceSchedule",mdxType:"Link"},"BidPriceSchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidSelfSched",mdxType:"Link"},"BidSelfSched")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpSchedule",mdxType:"Link"},"GenUnitOpSchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/HydroPumpOpSchedule",mdxType:"Link"},"HydroPumpOpSchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/InflowForecast",mdxType:"Link"},"InflowForecast")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourcePerformanceTimeSeriesFactor",mdxType:"Link"},"ResourcePerformanceTimeSeriesFactor")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/LoadModel/SeasonDayTypeSchedule",mdxType:"Link"},"SeasonDayTypeSchedule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/SteamSendoutSchedule",mdxType:"Link"},"SteamSendoutSchedule"))),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/RegularIntervalSchedule",mdxType:"Link"},"RegularIntervalSchedule")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/RegularTimePoint",mdxType:"Link"},"RegularTimePoint")),(0,n.yg)("td",{parentName:"tr",align:null},"1..*"),(0,n.yg)("td",{parentName:"tr",align:null},"IntervalSchedule"),(0,n.yg)("td",{parentName:"tr",align:null},"Regular interval schedule containing this time point."),(0,n.yg)("td",{parentName:"tr",align:null},"TimePoints"),(0,n.yg)("td",{parentName:"tr",align:null},"The regular interval time point data values that define this schedule.")))))}y.isMDXComponent=!0}}]);