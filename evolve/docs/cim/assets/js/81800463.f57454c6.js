"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[30643],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,y=u["".concat(g,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),l=n(75489);const i={title:"TroubleOrder",hide_table_of_contents:!0,slug:"TroubleOrder",sidebar_position:0},o=void 0,g={unversionedId:"cim100/TC57CIM/IEC61968/Operations/TroubleOrder",id:"cim100/TC57CIM/IEC61968/Operations/TroubleOrder",title:"TroubleOrder",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/TroubleOrder.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"TroubleOrder",hide_table_of_contents:!0,slug:"TroubleOrder",sidebar_position:0},sidebar:"docs",previous:{title:"TempEquipActionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/TempEquipActionKind"},next:{title:"UnplannedOutage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage"}},p={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Trouble order sends an incident to a crew to initiate a response to an unplanned outage."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"comment"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"Free-form comment associated with the trouble order.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plannedExecutionInterval"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"The planned start and end time for the trouble order.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",mdxType:"Link"},"TroubleOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/TroubleTicket",mdxType:"Link"},"TroubleTicket")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleTicket"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",mdxType:"Link"},"TroubleOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/Incident",mdxType:"Link"},"Incident")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Incident"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",mdxType:"Link"},"TroubleOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Common/Location",mdxType:"Link"},"Location")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Location"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",mdxType:"Link"},"TroubleOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/UnplannedOutage",mdxType:"Link"},"UnplannedOutage")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"UnplannedOutage"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TroubleOrder",mdxType:"Link"},"TroubleOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Work/WorkTask",mdxType:"Link"},"WorkTask")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"WorkTask"),(0,a.yg)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);