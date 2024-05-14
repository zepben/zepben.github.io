"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[46111],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=g(n),y=i,m=c["".concat(p,".").concat(y)]||c[y]||u[y]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<a;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},38950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(58168),i=(n(96540),n(15680)),a=n(75489);const l={title:"SwitchingStepGroup",hide_table_of_contents:!0,slug:"SwitchingStepGroup",sidebar_position:0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",id:"cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",title:"SwitchingStepGroup",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SwitchingStepGroup",hide_table_of_contents:!0,slug:"SwitchingStepGroup",sidebar_position:0},sidebar:"docs",previous:{title:"SwitchingStep",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingStep"},next:{title:"TagAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/TagAction"}},g={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:s},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts)."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"description"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"Descriptive information concerning the switching step group.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"isFreeSequence"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"If true, the sequence number serves for presentation purposes only, and the activity itself may be executed at any time.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"purpose"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"Describes the overall purpose of the steps in this switching step group.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sequenceNumber"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,i.yg)("td",{parentName:"tr",align:null},"Order of this activity in the sequence of activities within the switching plan.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("p",null,"No ancestor classes"),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Target"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",mdxType:"Link"},"SwitchingStepGroup")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingPlan",mdxType:"Link"},"SwitchingPlan")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},"SwitchingStepGroups"),(0,i.yg)("td",{parentName:"tr",align:null},"All groups of switching steps within this switching plan."),(0,i.yg)("td",{parentName:"tr",align:null},"SwitchingPlan"),(0,i.yg)("td",{parentName:"tr",align:null},"Switching plan to which this group belongs.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup",mdxType:"Link"},"SwitchingStepGroup")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStep",mdxType:"Link"},"SwitchingStep")),(0,i.yg)("td",{parentName:"tr",align:null},"0..*"),(0,i.yg)("td",{parentName:"tr",align:null},"SwitchingStepGroup"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"SwitchingStep"),(0,i.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);