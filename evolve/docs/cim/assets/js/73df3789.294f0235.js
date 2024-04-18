"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[73244],{15680:(e,t,i)=>{i.d(t,{xA:()=>u,yg:()=>p});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=a,p=m["".concat(s,".").concat(d)]||m[d]||y[d]||r;return i?n.createElement(p,o(o({ref:t},u),{},{components:i})):n.createElement(p,o({ref:t},u))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},60225:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=i(58168),a=(i(96540),i(15680)),r=i(75489);const o={title:"ExcIEEEST1A",hide_table_of_contents:!0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",title:"ExcIEEEST1A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcIEEEST1A",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcIEEEDC4B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEDC4B"},next:{title:"ExcIEEEST1AUELselectorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1AUELselectorKind"}},c={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:u},y="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(y,(0,n.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"IEEE 421.5-2005 type ST1A model. This model represents systems in which excitation power is supplied through a transformer from the generator terminals (or the unit\u2019s auxiliary bus) and is regulated by a controlled rectifier.  The maximum exciter voltage available from such systems is directly related to the generator terminal voltage.\nReference: IEEE 421.5-2005, 7.1."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ilr"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Exciter output current limit reference (","<","i",">","I","<","/i",">","<","i",">","<","sub",">","LR","<","/sub",">","<","/i",">","<","i",">",")","<","/i",">",".  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ka"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Voltage regulator gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 190.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kc"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Rectifier loading factor proportional to commutating reactance (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0). Typical value = 0,08.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kf"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gains (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"klr"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Exciter output current limiter gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","LR","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pssin"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Selector of the Power System Stabilizer (PSS) input (","<","i",">","PSSin","<","/i",">",").")))),(0,a.yg)("p",null,"true = PSS input (","<","i",">","Vs","<","/i",">",") added to error signal\nfalse = PSS input (","<","i",">","Vs","<","/i",">",") added to voltage regulator output.\nTypical value = true. |\n| ta | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0. |\n| tb | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","B","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 10. |\n| tb1 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","B1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0. |\n| tc | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1. |\n| tc1 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","C1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0. |\n| tf | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1. |\n| uelin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1AUELselectorKind",mdxType:"Link"},"ExcIEEEST1AUELselectorKind")," | Selector of the connection of the UEL input (","<","i",">","UELin","<","/i",">",").  Typical value = ignoreUELsignal. |\n| vamax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 14,5. |\n| vamin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -14,5. |\n| vimax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 999. |\n| vimin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -999. |\n| vrmax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator outputs (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 7,8. |\n| vrmin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator outputs (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -6,7. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);