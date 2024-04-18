"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[50620],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,u=d["".concat(s,".").concat(p)]||d[p]||y[p]||r;return n?i.createElement(u,o(o({ref:t},m),{},{components:n})):i.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const o={title:"ExcSCRX",hide_table_of_contents:!0},c=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX",title:"ExcSCRX",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSCRX",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcSCRX",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcRQB",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcRQB"},next:{title:"ExcSEXS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS"}},l={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:m},y="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Simple excitation system with generic characteristics typical of many excitation systems; intended for use where negative field current could be a problem."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cswitch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Power source switch (","<","i",">","Cswitch","<","/i",">",").")))),(0,a.yg)("p",null,"true = fixed voltage of 1.0 PU\nfalse = generator terminal voltage. |\n| emax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum field voltage output (","<","i",">","Emax","<","/i",">",") (",">"," ExcSCRX.emin).  Typical value = 5. |\n| emin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum field voltage output (","<","i",">","Emin","<","/i",">",") (","<"," ExcSCRX.emax).  Typical value = 0. |\n| k | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Gain (","<","i",">","K","<","/i",">",") (",">"," 0).  Typical value = 200. |\n| rcrfd | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Ratio of field discharge resistance to field winding resistance (","[<","i",">","rc / rfd]","<","/i",">",").  Typical value = 0. |\n| tatb | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Gain reduction ratio of lag-lead element (","[<","i",">","Ta","<","/i",">"," / ","<","i",">","Tb","<","/i",">]","). The parameter ","<","i",">","Ta","<","/i",">"," is not defined explicitly.  Typical value = 0.1. |\n| tb | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Denominator time constant of lag-lead block (","<","i",">","Tb","<","/i",">",") (",">","= 0).  Typical value = 10. |\n| te | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Time constant of gain block (","<","i",">","Te","<","/i",">",") (",">"," 0).  Typical value = 0,02. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);