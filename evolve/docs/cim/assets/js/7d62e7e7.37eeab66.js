"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[58426],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(n),m=r,p=g["".concat(c,".").concat(m)]||g[m]||d[m]||i;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"EquivalentBranch",hide_table_of_contents:!0,slug:"EquivalentBranch",sidebar_position:0},s=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentBranch",id:"cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentBranch",title:"EquivalentBranch",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentBranch.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Equivalents",slug:"/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentBranch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentBranch",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EquivalentBranch",hide_table_of_contents:!0,slug:"EquivalentBranch",sidebar_position:0},sidebar:"docs",previous:{title:"WaterLevel",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/WaterLevel"},next:{title:"EquivalentEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentEquipment"}},o={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"The class represents equivalent branches. In cases where a transformer phase shift is modelled and the EquivalentBranch is spanning the same nodes, the impedance quantities for the EquivalentBranch shall consider the needed phase shift."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"negativeR12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Negative sequence series resistance from terminal sequence  1 to terminal sequence 2. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"negativeR21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Negative sequence series resistance from terminal sequence 2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"negativeX12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Negative sequence series reactance from terminal sequence  1 to terminal sequence 2. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"negativeX21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Negative sequence series reactance from terminal sequence 2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage: EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"positiveR12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series resistance from terminal sequence  1 to terminal sequence 2 . Used for short circuit data exchange according to IEC 60909. ",(0,r.yg)("br",null),"EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"positiveR21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series resistance from terminal sequence 2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"positiveX12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series reactance from terminal sequence  1 to terminal sequence 2. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"positiveX21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series reactance from terminal sequence 2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"r"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series resistance of the reduced branch.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"r21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Resistance from terminal sequence 2 to terminal sequence 1 .Used for steady state power flow. This attribute is optional and represent unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.r is given, then EquivalentBranch.r21 is assumed equal to EquivalentBranch.r.",(0,r.yg)("br",null),"Usage rule : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Positive sequence series reactance of the reduced branch.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Reactance from terminal sequence 2 to terminal sequence 1. Used for steady state power flow. This attribute is optional and represents an unbalanced network such as off-nominal phase shifter. If only EquivalentBranch.x is given, then EquivalentBranch.x21 is assumed equal to EquivalentBranch.x.",(0,r.yg)("br",null),"Usage rule: EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zeroR12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Zero sequence series resistance from terminal sequence  1 to terminal sequence 2. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zeroR21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Zero sequence series resistance from terminal sequence  2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zeroX12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Zero sequence series reactance from terminal sequence  1 to terminal sequence 2. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zeroX21"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Zero sequence series reactance from terminal sequence 2 to terminal sequence 1. Used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"Usage : EquivalentBranch is a result of network reduction prior to the data exchange.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentEquipment",mdxType:"Link"},"EquivalentEquipment"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}m.isMDXComponent=!0}}]);