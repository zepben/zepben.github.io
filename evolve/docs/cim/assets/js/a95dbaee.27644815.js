"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[99363],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));n(75489);const l={title:"WindLookupTableFunctionKind",hide_table_of_contents:!0},i=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindLookupTableFunctionKind",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindLookupTableFunctionKind",title:"WindLookupTableFunctionKind",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindLookupTableFunctionKind.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindLookupTableFunctionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindLookupTableFunctionKind",draft:!1,tags:[],version:"current",frontMatter:{title:"WindLookupTableFunctionKind",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"WindGenType4IEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenType4IEC"},next:{title:"WindMechIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindMechIEC"}},u={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Function of the lookup table."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ipmax"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for voltage dependency of active current limits (i","<","sub",">","pmax","<","/sub",">","(u","<","sub",">","WT","<","/sub",">",")). It is used for the current limitation model, IEC 61400-27-1:2015, 5.6.5.8.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iqmax"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for voltage dependency of reactive current limits (i","<","sub",">","qmax","<","/sub",">","(u","<","sub",">","WT","<","/sub",">",")). It is used for the current limitation model, IEC 61400-27-1:2015, 5.6.5.8.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"omegap"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power vs. speed lookup table (omega(p)). It is used for the P control model type 3, IEC 61400-27-1:2015, 5.6.5.4.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prr"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power versus speed change (negative slip) lookup table (p","<","sub",">","rr","<","/sub",">","(deltaomega)). It is used for the rotor resistance control model, IEC 61400-27-1:2015, 5.6.5.3.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pwp"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power vs. frequency lookup table (p","<","sub",">","WPbias","<","/sub",">","(f)). It is used for the wind power plant frequency and active power control model, IEC 61400-27-1:2015, Annex D.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qmaxp"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for active power dependency of reactive power maximum limit (q","<","sub",">","maxp","<","/sub",">","(p)). It is used for the QP and QU limitation model, IEC 61400-27-1:2015, 5.6.5.10.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qmaxu"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for voltage dependency of reactive power maximum limit (q","<","sub",">","maxu","<","/sub",">","(p)). It is used for the QP and QU limitation model, IEC 61400-27-1:2015, 5.6.5.10.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qminp"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for active power dependency of reactive power minimum limit (q","<","sub",">","minp","<","/sub",">","(p)). It is used for the QP and QU limitation model, IEC 61400-27-1:2015, 5.6.5.10.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qminu"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table for voltage dependency of reactive power minimum limit (q","<","sub",">","minu","<","/sub",">","(p)). It is used for the QP and QU limitation model, IEC 61400-27-1:2015, 5.6.5.10.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qwp"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Look up table for the UQ static mode (q","<","sub",">","WP","<","/sub",">","(u","<","sub",">","err","<","/sub",">",")). It is used for the voltage and reactive power control model, IEC 61400-27-1:2015, Annex D.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tcwdu"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Crowbar duration versus voltage variation look-up table (T","<","sub",">","CW","<","/sub",">","(du)). It is a case-dependent parameter. It is used for the type 3B generator set model, IEC 61400-27-1:2015, 5.6.3.3.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tduwt"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Lookup table to determine the duration of the power reduction after a voltage dip, depending on the size of the voltage dip (T","<","sub",">","d","<","/sub",">","(u","<","sub",">","WT","<","/sub",">",")). It is a type-dependent parameter. It is used for the pitch control power model, IEC 61400-27-1:2015, 5.6.5.1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tfover"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Disconnection time versus over-frequency lookup table (T","<","sub",">","fover","<","/sub",">","(f","<","sub",">","WT","<","/sub",">",")). It is used for the grid protection model, IEC 61400-27-1:2015, 5.6.6.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tfunder"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Disconnection time versus under-frequency lookup table (T","<","sub",">","funder","<","/sub",">","(f","<","sub",">","WT","<","/sub",">",")). It is used for the grid protection model, IEC 61400-27-1:2015, 5.6.6.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tuover"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Disconnection time versus over-voltage lookup table (T","<","sub",">","uover","<","/sub",">","(u","<","sub",">","WT","<","/sub",">",")). It is used for the grid protection model, IEC 61400-27-1:2015, 5.6.6.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tuunder"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Disconnection time versus under-voltage lookup table (T","<","sub",">","uunder","<","/sub",">","(u","<","sub",">","WT","<","/sub",">",")). It is used for the grid protection model, IEC 61400-27-1:2015, 5.6.6.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}m.isMDXComponent=!0}}]);