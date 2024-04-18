"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[11906],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,y=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const o={title:"EmissionAccount",hide_table_of_contents:!0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",title:"EmissionAccount",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Generation/Production",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",draft:!1,tags:[],version:"current",frontMatter:{title:"EmissionAccount",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CombinedCyclePlant",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/CombinedCyclePlant"},next:{title:"EmissionCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/EmissionCurve"}},c={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Accounts for tracking emissions usage and credits for thermal generating units. A unit may have zero or more emission accounts, and will typically have one for tracking usage and one for tracking credits."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"emissionType"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/EmissionType",mdxType:"Link"},"EmissionType")),(0,a.yg)("td",{parentName:"tr",align:null},"The type of emission, for example sulfur dioxide (SO2). The y1AxisUnits of the curve contains the unit of measure (e.g. kg) and the emissionType is the type of emission (e.g. sulfur dioxide).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"emissionValueSource"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/EmissionValueSource",mdxType:"Link"},"EmissionValueSource")),(0,a.yg)("td",{parentName:"tr",align:null},"The source of the emission value.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Core/Curve",mdxType:"Link"},"Curve"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/EmissionAccount",mdxType:"Link"},"EmissionAccount")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Generation/Production/ThermalGeneratingUnit",mdxType:"Link"},"ThermalGeneratingUnit")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"EmmissionAccounts"),(0,a.yg)("td",{parentName:"tr",align:null},"A thermal generating unit may have one or more emission allowance accounts."),(0,a.yg)("td",{parentName:"tr",align:null},"ThermalGeneratingUnit"),(0,a.yg)("td",{parentName:"tr",align:null},"A thermal generating unit may have one or more emission allowance accounts.")))))}g.isMDXComponent=!0}}]);