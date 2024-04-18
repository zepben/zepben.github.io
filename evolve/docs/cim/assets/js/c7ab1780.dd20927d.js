"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[87284],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=y(e,["components","mdxType","originalType","parentName"]),g=s(a),p=i,c=g["".concat(o,".").concat(p)]||g[p]||d[p]||l;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=p;var y={};for(var o in t)hasOwnProperty.call(t,o)&&(y[o]=t[o]);y.originalType=e,y[g]="string"==typeof e?e:i,r[1]=y;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>y,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(58168),i=(a(96540),a(15680)),l=a(75489);const r={title:"PssIEEE2B",hide_table_of_contents:!0},y=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B",title:"PssIEEE2B",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE2B",draft:!1,tags:[],version:"current",frontMatter:{title:"PssIEEE2B",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PssIEEE1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE1A"},next:{title:"PssIEEE3B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B"}},s={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"IEEE 421.5-2005 type PSS2B power system stabilizer model. This stabilizer model is designed to represent a variety of dual-input stabilizers, which normally use combinations of power and speed or frequency to derive the stabilizing signal.\nReference: IEEE 2B 421.5-2005, 8.2."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inputSignal1Type"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind",mdxType:"Link"},"InputSignalKind")),(0,i.yg)("td",{parentName:"tr",align:null},"Type of input signal #1 (rotorAngularFrequencyDeviation, busFrequencyDeviation).  Typical value = rotorAngularFrequencyDeviation.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inputSignal2Type"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind",mdxType:"Link"},"InputSignalKind")),(0,i.yg)("td",{parentName:"tr",align:null},"Type of input signal #2 (generatorElectricalPower).  Typical value = generatorElectricalPower.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ks1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Stabilizer gain (","<","i",">","Ks1","<","/i",">",").  Typical value = 12.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ks2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Gain on signal #2 (","<","i",">","Ks2","<","/i",">",").  Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ks3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Gain on signal #2 input before ramp-tracking filter (","<","i",">","Ks3","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"m"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,i.yg)("td",{parentName:"tr",align:null},"Denominator order of ramp tracking filter (","<","i",">","M","<","/i",">",").  Typical value = 5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"n"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,i.yg)("td",{parentName:"tr",align:null},"Order of ramp tracking filter (","<","i",">","N","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T1","<","/i",">",") (",">","= 0).  Typical value = 0,12.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t10"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T10","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t11"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T11","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T2","<","/i",">",") (",">","= 0).  Typical value = 0,02.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T3","<","/i",">",") (",">","= 0).  Typical value = 0,3.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t4"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead/lag time constant (","<","i",">","T4","<","/i",">",") (",">","= 0).  Typical value = 0,02.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t6"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Time constant on signal #1 (","<","i",">","T6","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t7"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Time constant on signal #2 (","<","i",">","T7","<","/i",">",") (",">","= 0).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t8"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead of ramp tracking filter (","<","i",">","T8","<","/i",">",") (",">","= 0).  Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"t9"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lag of ramp tracking filter (","<","i",">","T9","<","/i",">",") (",">","= 0).  Typical value = 0,1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tw1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"First washout on signal #1 (","<","i",">","Tw1","<","/i",">",") (",">","= 0).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tw2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Second washout on signal #1 (","<","i",">","Tw2","<","/i",">",") (",">","= 0).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tw3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"First washout on signal #2 (","<","i",">","Tw3","<","/i",">",") (",">","= 0).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tw4"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Second washout on signal #2 (","<","i",">","Tw4","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vsi1max"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Input signal #1 maximum limit (","<","i",">","Vsi1max","<","/i",">",") (",">"," PssIEEE2B.vsi1min).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vsi1min"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Input signal #1 minimum limit (","<","i",">","Vsi1min","<","/i",">",") (","<"," PssIEEE2B.vsi1max).  Typical value = -2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vsi2max"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Input signal #2 maximum limit (","<","i",">","Vsi2max","<","/i",">",") (",">"," PssIEEE2B.vsi2min).  Typical value = 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vsi2min"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Input signal #2 minimum limit (","<","i",">","Vsi2min","<","/i",">",") (","<"," PssIEEE2B.vsi2max).  Typical value = -2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vstmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Stabilizer output maximum limit (","<","i",">","Vstmax","<","/i",">",") (",">"," PssIEEE2B.vstmin).  Typical value = 0,1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vstmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Stabilizer output minimum limit (","<","i",">","Vstmin","<","/i",">",") (","<"," PssIEEE2B.vstmax).  Typical value = -0,1.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics",mdxType:"Link"},"PowerSystemStabilizerDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);