"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[2187],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,u=d["".concat(s,".").concat(p)]||d[p]||y[p]||r;return n?i.createElement(u,l(l({ref:t},m),{},{components:n})):i.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const l={title:"OverexcLimIEEE",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",title:"OverexcLimIEEE",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimIEEE",draft:!1,tags:[],version:"current",frontMatter:{title:"OverexcLimIEEE",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"OverexcLim2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLim2"},next:{title:"OverexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcLimX1"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:m},y="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"The over excitation limiter model is intended to represent the significant features of OELs necessary for some large-scale system studies. It is the result of a pragmatic approach to obtain a model that can be widely applied with attainable data from generator owners. An attempt to include all variations in the functionality of OELs and duplicate how they interact with the rest of the excitation systems would likely result in a level of application insufficient for the studies for which they are intended.\nReference: IEEE OEL 421.5-2005, 9."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hyst"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL pickup/drop-out hysteresis (","<","i",">","HYST","<","/i",">",").  Typical value = 0,03.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ifdlim"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL timed field current limit (","<","i",">","I","<","/i",">","<","i",">","<","sub",">","FDLIM","<","/sub",">","<","/i",">",").  Typical value = 1,05.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ifdmax"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL instantaneous field current limit (","<","i",">","I","<","/i",">","<","i",">","<","sub",">","FDMAX","<","/sub",">","<","/i",">",").  Typical value = 1,5.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"itfpu"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL timed field current limiter pickup level (","<","i",">","I","<","/i",">","<","i",">","<","sub",">","TFPU","<","/sub",">","<","/i",">",").  Typical value = 1,05.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kcd"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL cooldown gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","CD","<","/sub",">","<","/i",">",").  Typical value = 1.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kramp"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,a.yg)("td",{parentName:"tr",align:null},"OEL ramped limit rate (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","RAMP","<","/sub",">","<","/i",">",").  Unit = PU / s.  Typical value = 10.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/OverexcitationLimiterDynamics/OverexcitationLimiterDynamics",mdxType:"Link"},"OverexcitationLimiterDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);