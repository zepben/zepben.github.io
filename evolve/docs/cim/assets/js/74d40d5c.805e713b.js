"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[43734],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,y=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"SwitchingStep",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61968/Operations/SwitchingStep",id:"cim100/TC57CIM/IEC61968/Operations/SwitchingStep",title:"SwitchingStep",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/SwitchingStep.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/SwitchingStep",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingStep",draft:!1,tags:[],version:"current",frontMatter:{title:"SwitchingStep",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"SwitchingPlanRequest",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingPlanRequest"},next:{title:"SwitchingStepGroup",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingStepGroup"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Atomic switching step; can be part of a switching step group, or part of a switching plan."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"isFreeSequence"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"For a step, if isFreeSequence is set to false or is not specified, all of the steps in the group must be executed in the order defined by the sequenceNumber attribute. The sequenceNumber for a step has a different meaning when there are two or more sequential steps that have the isFreeSequence attribute set to true. Execution must still be performed in sequenceNumber order until a set of two or more steps that have isFreeSequence set to true is encountered. In this case, these steps can be executed in any sequence, until a step is encountered that has isFreeSequence set to false. All of the steps preceding this step must be executed before the step can be executed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sequenceNumber"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Order of this activity in the sequence of activities within the switching plan.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"subStepSequenceNumber"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Supports compound switching steps that are made up of several sub steps.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("p",null,"No ancestor classes"),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingStep",mdxType:"Link"},"SwitchingStep")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingAction",mdxType:"Link"},"SwitchingAction")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingStep"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingAction"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingStep",mdxType:"Link"},"SwitchingStep")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingStepGroup",mdxType:"Link"},"SwitchingStepGroup")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingStep"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingStepGroup"),(0,a.yg)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);