"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[78018],{15680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>p});var n=a(96540);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},y=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,m=t.parentName,y=o(t,["components","mdxType","originalType","parentName"]),g=s(a),u=i,p=g["".concat(m,".").concat(u)]||g[u]||c[u]||r;return a?n.createElement(p,l(l({ref:e},y),{},{components:a})):n.createElement(p,l({ref:e},y))}));function p(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[g]="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var n=a(58168),i=(a(96540),a(15680)),r=a(75489);const l={title:"ExcIEEEAC7B",hide_table_of_contents:!0,slug:"ExcIEEEAC7B",sidebar_position:0},o=void 0,m={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B",title:"ExcIEEEAC7B",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC7B",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ExcIEEEAC7B",hide_table_of_contents:!0,slug:"ExcIEEEAC7B",sidebar_position:0},sidebar:"docs",previous:{title:"ExcIEEEAC6A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A"},next:{title:"ExcIEEEAC8B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC8B"}},s={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:y},c="wrapper";function u(t){let{components:e,...a}=t;return(0,i.yg)(c,(0,n.A)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"IEEE 421.5-2005 type AC7B model. The model represents excitation systems which consist of an AC alternator with either stationary or rotating rectifiers to produce the DC field requirements. It is an upgrade to earlier AC excitation systems, which replace only the controls but retain the AC alternator and diode rectifier bridge.\nReference: IEEE 421.5-2005, 6.7. Note, however, that in IEEE 421.5-2005, the ","[1 / ","<","i",">","sT","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">]"," block is shown as ","[1 / (1 + ","<","i",">","sT","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">",")]",", which is incorrect."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rectifier loading factor proportional to commutating reactance (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0). Typical value = 0,18.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kd"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Demagnetizing factor, a function of exciter alternator reactances (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","D","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0,02.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kdr"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator derivative gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","DR","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ke"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter constant related to self-excited field (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0,212.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F2","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F3","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kia"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator integral gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","IA","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 59,69.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kir"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator integral gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","IR","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 4,24.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kl"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter field voltage lower limit parameter (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","L","<","/sub",">","<","/i",">",").  Typical value = 10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit gain coefficient (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","P","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 4,96.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kpa"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator proportional gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","PA","<","/sub",">","<","/i",">",") (",">"," 0 if ExcIEEEAC7B.kia = 0).  Typical value = 65,36.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kpr"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator proportional gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","PR","<","/sub",">","<","/i",">",") (",">"," 0 if ExcIEEEAC7B.kir = 0).  Typical value = 4,24.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"seve1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","V","<","/i",">","<","i",">","<","sub",">","E1","<","/sub",">","<","/i",">",", back of commutating reactance (","<","i",">","S","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">","<","i",">","[V","<","/i",">","<","i",">","<","sub",">","E1","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,44.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"seve2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","V","<","/i",">","<","i",">","<","sub",">","E2","<","/sub",">","<","/i",">",", back of commutating reactance (","<","i",">","S","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">","<","i",">","[V","<","/i",">","<","i",">","<","sub",">","E2","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,075.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tdr"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lag time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","DR","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"te"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter time constant, integration rate associated with exciter control (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 1,1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vamax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vamin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","AMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -0,95.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ve1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter alternator output voltages back of commutating reactance at which saturation is defined (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","E1","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 6,3.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ve2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter alternator output voltages back of commutating reactance at which saturation is defined (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","E2","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 3,02.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vemin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum exciter voltage output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","EMIN","<","/sub",">","<","/i",">",") (","<","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vfemax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter field current limit reference (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","FEMAX","<","/sub",">","<","/i",">",").  Typical value = 6,9.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 5,79.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -5,79.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);