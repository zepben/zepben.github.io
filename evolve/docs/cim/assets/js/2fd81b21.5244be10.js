"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[49737],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),g=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(n),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"SwitchingOrder",hide_table_of_contents:!0},o=void 0,c={unversionedId:"cim100/TC57CIM/IEC61968/Operations/SwitchingOrder",id:"cim100/TC57CIM/IEC61968/Operations/SwitchingOrder",title:"SwitchingOrder",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/SwitchingOrder.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/SwitchingOrder",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingOrder",draft:!1,tags:[],version:"current",frontMatter:{title:"SwitchingOrder",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"SwitchingEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingEvent"},next:{title:"SwitchingPlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/SwitchingPlan"}},g={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Transmits a switching plan to a crew in order for the plan to be executed."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"comment"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"Free-form comment associated with the switching order.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plannedExecutionInterval"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"The planned start and end time for the switching order.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingOrder",mdxType:"Link"},"SwitchingOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingPlan",mdxType:"Link"},"SwitchingPlan")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingPlan"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/SwitchingOrder",mdxType:"Link"},"SwitchingOrder")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Common/Location",mdxType:"Link"},"Location")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"SwitchingOrder"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Location"),(0,a.yg)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);