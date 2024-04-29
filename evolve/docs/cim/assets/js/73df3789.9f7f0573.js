"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[73244],{15680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>d});var n=a(96540);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},y=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,y=o(t,["components","mdxType","originalType","parentName"]),c=m(a),g=i,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(d,l(l({ref:e},y),{},{components:a})):n.createElement(d,l({ref:e},y))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},60225:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var n=a(58168),i=(a(96540),a(15680)),r=a(75489);const l={title:"ExcIEEEST1A",hide_table_of_contents:!0,slug:"ExcIEEEST1A",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",title:"ExcIEEEST1A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1A",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ExcIEEEST1A",hide_table_of_contents:!0,slug:"ExcIEEEST1A",sidebar_position:0},sidebar:"docs",previous:{title:"ExcIEEEDC4B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEDC4B"},next:{title:"ExcIEEEST1AUELselectorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1AUELselectorKind"}},m={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:y},u="wrapper";function g(t){let{components:e,...a}=t;return(0,i.yg)(u,(0,n.A)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"IEEE 421.5-2005 type ST1A model. This model represents systems in which excitation power is supplied through a transformer from the generator terminals (or the unit\u2019s auxiliary bus) and is regulated by a controlled rectifier.  The maximum exciter voltage available from such systems is directly related to the generator terminal voltage.\nReference: IEEE 421.5-2005, 7.1."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ilr"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter output current limit reference (","<","i",">","I","<","/i",">","<","i",">","<","sub",">","LR","<","/sub",">","<","/i",">","<","i",">",")","<","/i",">",".  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ka"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 190.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rectifier loading factor proportional to commutating reactance (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0). Typical value = 0,08.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gains (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"klr"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter output current limiter gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","LR","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"pssin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"Selector of the Power System Stabilizer (PSS) input (","<","i",">","PSSin","<","/i",">",").",(0,i.yg)("br",null),"true = PSS input (","<","i",">","Vs","<","/i",">",") added to error signal",(0,i.yg)("br",null),"false = PSS input (","<","i",">","Vs","<","/i",">",") added to voltage regulator output.",(0,i.yg)("br",null),"Typical value = true.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tb"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","B","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tb1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","B1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tc1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","C1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"uelin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST1AUELselectorKind",mdxType:"Link"},"ExcIEEEST1AUELselectorKind")),(0,i.yg)("td",{parentName:"tr",align:null},"Selector of the connection of the UEL input (","<","i",">","UELin","<","/i",">",").  Typical value = ignoreUELsignal.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vamax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 14,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vamin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -14,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vimax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 999.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vimin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -999.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator outputs (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 7,8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator outputs (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -6,7.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}g.isMDXComponent=!0}}]);