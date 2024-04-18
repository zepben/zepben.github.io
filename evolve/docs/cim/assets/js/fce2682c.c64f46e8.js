"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[46020],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,s=m["".concat(o,".").concat(c)]||m[c]||y[c]||i;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:a,l[1]=g;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"StageTrigger",hide_table_of_contents:!0,slug:"StageTrigger",sidebar_position:0},g=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",title:"StageTrigger",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"StageTrigger",hide_table_of_contents:!0,slug:"StageTrigger",sidebar_position:0},sidebar:"docs",previous:{title:"Stage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Stage"},next:{title:"TriggerCondition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/TriggerCondition"}},d={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:p},y="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Condition that is triggered either by TriggerCondition of by gate condition within a stage and has remedial action-s."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"armed"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"The status of the class set by operation or by signal. Optional field that will override other status fields.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"normalArmed"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"The default/normal value used when other active signal/values are missing.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"priority"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Priority of trigger. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on. A trigger with the highest priority will trigger first.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",mdxType:"Link"},"StageTrigger")),(0,a.yg)("td",{parentName:"tr",align:null},"1..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Stage",mdxType:"Link"},"Stage")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"StageTrigger"),(0,a.yg)("td",{parentName:"tr",align:null},"A Stage consist of one or more StageTrigger."),(0,a.yg)("td",{parentName:"tr",align:null},"Stage"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",mdxType:"Link"},"StageTrigger")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Gate",mdxType:"Link"},"Gate")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"StageTriggerArmed"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"GateArmed"),(0,a.yg)("td",{parentName:"tr",align:null},"Association to a Gate that through a gate logic and input pin defines arming of the StageTrigger.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",mdxType:"Link"},"StageTrigger")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Gate",mdxType:"Link"},"Gate")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"StageTriggerCom"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"GateComCondition"),(0,a.yg)("td",{parentName:"tr",align:null},"For the StageTrigger to active the set of protective actions the condition for communication needs to be met (true).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",mdxType:"Link"},"StageTrigger")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Gate",mdxType:"Link"},"Gate")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"StageTrigger"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"GateTrigger"),(0,a.yg)("td",{parentName:"tr",align:null},"The Gate result that trigger the StageTrigger and thereby executing the a set of protective actions.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/StageTrigger",mdxType:"Link"},"StageTrigger")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionCollection",mdxType:"Link"},"ProtectiveActionCollection")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"StageTrigger"),(0,a.yg)("td",{parentName:"tr",align:null},"When condition to the StageTrigger is met, the actions in the ProtectiveActionCollection are activated/triggered."),(0,a.yg)("td",{parentName:"tr",align:null},"ProtectiveActionCollection"),(0,a.yg)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);