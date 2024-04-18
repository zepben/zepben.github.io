"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[57878],{15680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>d});var i=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var g=i.createContext({}),c=function(t){var e=i.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(g.Provider,{value:e},t.children)},m="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,g=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(n),s=a,d=m["".concat(g,".").concat(s)]||m[s]||y[s]||r;return n?i.createElement(d,l(l({ref:e},p),{},{components:n})):i.createElement(d,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=t,o[m]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7651:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const l={title:"SwitchingAction",hide_table_of_contents:!0,slug:"SwitchingAction",sidebar_position:0},o=void 0,g={unversionedId:"cim100/TC57CIM/IEC61968/Operations/SwitchingAction",id:"cim100/TC57CIM/IEC61968/Operations/SwitchingAction",title:"SwitchingAction",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/SwitchingAction.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SwitchingAction",hide_table_of_contents:!0,slug:"SwitchingAction",sidebar_position:0},sidebar:"docs",previous:{title:"SwitchActionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchActionKind"},next:{title:"SwitchingEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingEvent"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:p},y="wrapper";function s(t){let{components:e,...n}=t;return(0,a.yg)(y,(0,i.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Atomic switching action."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"executedDateTime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Actual date and time of this switching step.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"issuedDateTime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Date and time when the crew was given the instruction to execute the action; not applicable if the action is performed by operator remote control.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"phases"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),(0,a.yg)("td",{parentName:"tr",align:null},"Phases of the Switching Action")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plannedDateTime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Planned date and time of this switching step.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/ClampAction",mdxType:"Link"},"ClampAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/ClearanceAction",mdxType:"Link"},"ClearanceAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/ControlAction",mdxType:"Link"},"ControlAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/CutAction",mdxType:"Link"},"CutAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/EnergyConsumerAction",mdxType:"Link"},"EnergyConsumerAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/EnergySourceAction",mdxType:"Link"},"EnergySourceAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/GenericAction",mdxType:"Link"},"GenericAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/GroundAction",mdxType:"Link"},"GroundAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/JumperAction",mdxType:"Link"},"JumperAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/MeasurementAction",mdxType:"Link"},"MeasurementAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/ShuntCompensatorAction",mdxType:"Link"},"ShuntCompensatorAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction",mdxType:"Link"},"SwitchAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/TagAction",mdxType:"Link"},"TagAction")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/VerificationAction",mdxType:"Link"},"VerificationAction"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingPlan",mdxType:"Link"},"SwitchingPlan")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingAction"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingPlan"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingEvent",mdxType:"Link"},"SwitchingEvent")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingAction"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingEvent"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Common/Operator",mdxType:"Link"},"Operator")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingSteps"),(0,a.yg)("td",{parentName:"tr",align:null},"All switching steps this operator is responsible for."),(0,a.yg)("td",{parentName:"tr",align:null},"Operator"),(0,a.yg)("td",{parentName:"tr",align:null},"Operator responsible for this switching step.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Common/Crew",mdxType:"Link"},"Crew")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingAction"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Crew"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStep",mdxType:"Link"},"SwitchingStep")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingAction"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingStep"),(0,a.yg)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);