"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[25208],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},y=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=c(a),s=i,g=p["".concat(m,".").concat(s)]||p[s]||d[s]||l;return a?n.createElement(g,r(r({ref:t},y),{},{components:a})):n.createElement(g,r({ref:t},y))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},64448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>y});var n=a(58168),i=(a(96540),a(15680)),l=a(75489);const r={title:"ExcSK",hide_table_of_contents:!0,slug:"ExcSK",sidebar_position:0},o=void 0,m={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK",title:"ExcSK",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ExcSK",hide_table_of_contents:!0,slug:"ExcSK",sidebar_position:0},sidebar:"docs",previous:{title:"ExcSEXS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSEXS"},next:{title:"ExcST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A"}},c={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:y},d="wrapper";function s(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Slovakian excitation system.  UEL and secondary voltage control are included in this model. When this model is used, there cannot be a separate underexcitation limiter or VAr controller model."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efdmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Field voltage clipping upper level limit (","<","i",">","Efdmax","<","/i",">",") (",">"," ExcSK.efdmin).")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efdmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Field voltage clipping lower level limit (","<","i",">","Efdmin","<","/i",">",") (","<"," ExcSK.efdmax).")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"emax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum field voltage output (","<","i",">","Emax","<","/i",">",") (",">"," ExcSK.emin).  Typical value = 20.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"emin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum field voltage output (","<","i",">","Emin","<","/i",">",") (","<"," ExcSK.emax).  Typical value = -20.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"k"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Gain (","<","i",">","K","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"k1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Parameter of underexcitation limit (","<","i",">","K1","<","/i",">",").  Typical value = 0,1364.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"k2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Parameter of underexcitation limit (","<","i",">","K2","<","/i",">",").  Typical value = -0,3861.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller gain (","<","i",">","Kc","<","/i",">",").  Typical value = 70.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kce"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rectifier regulation factor (","<","i",">","Kce","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kd"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter internal reactance (","<","i",">","Kd","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kgob"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"P controller gain (","<","i",">","Kgob","<","/i",">",").  Typical value = 10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller gain (","<","i",">","Kp","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kqi"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller gain of integral component (","<","i",">","Kqi","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kqob"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rate of rise of the reactive power (","<","i",">","Kqob","<","/i",">",").")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kqp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller gain (","<","i",">","Kqp","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"nq"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Deadband of reactive power (","<","i",">","nq","<","/i",">",").  Determines the range of sensitivity.  Typical value = 0,001.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"qconoff"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"Secondary voltage control state (","<","i",">","Qc_on_off","<","/i",">",").")))),(0,i.yg)("p",null,"true = secondary voltage control is on\nfalse = secondary voltage control is off.\nTypical value = false. |\n| qz | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Desired value (setpoint) of reactive power, manual setting (","<","i",">","Qz","<","/i",">","). |\n| remote | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")," | Selector to apply automatic calculation in secondary controller model (","<","i",">","remote","<","/i",">",").\ntrue = automatic calculation is activated\nfalse = manual set is active; the use of desired value of reactive power (","<","i",">","Qz","<","/i",">",") is required.\nTypical value = true. |\n| sbase | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")," | Apparent power of the unit (","<","i",">","Sbase","<","/i",">",") (",">"," 0).  Unit = MVA.  Typical value = 259. |\n| tc | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | PI controller phase lead time constant (","<","i",">","Tc","<","/i",">",") (",">","= 0).  Typical value = 8. |\n| te | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Time constant of gain block (","<","i",">","Te","<","/i",">",") (",">","= 0).  Typical value = 0,1. |\n| ti | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | PI controller phase lead time constant (","<","i",">","Ti","<","/i",">",") (",">","= 0).  Typical value = 2. |\n| tp | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Time constant (","<","i",">","Tp","<","/i",">",") (",">","= 0).  Typical value = 0,1. |\n| tr | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage transducer time constant (","<","i",">","Tr","<","/i",">",") (",">","= 0).  Typical value = 0,01. |\n| uimax | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum error (","<","i",">","UImax","<","/i",">",") (",">"," ExcSK.uimin).  Typical value = 10. |\n| uimin | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum error (","<","i",">","UImin","<","/i",">",") (","<"," ExcSK.uimax).  Typical value = -10. |\n| urmax | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum controller output (","<","i",">","URmax","<","/i",">",") (",">"," ExcSK.urmin).  Typical value = 10. |\n| urmin | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum controller output (","<","i",">","URmin","<","/i",">",") (","<"," ExcSK.urmax).  Typical value = -10. |\n| vtmax | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum terminal voltage input (","<","i",">","Vtmax","<","/i",">",") (",">"," ExcSK.vtmin).  Determines the range of voltage deadband.  Typical value = 1,05. |\n| vtmin | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum terminal voltage input (","<","i",">","Vtmin","<","/i",">",") (","<"," ExcSK.vtmax).  Determines the range of voltage deadband.  Typical value = 0,95. |\n| yp | ",(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum output (","<","i",">","Yp","<","/i",">",").  Typical value = 1. |"),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}s.isMDXComponent=!0}}]);