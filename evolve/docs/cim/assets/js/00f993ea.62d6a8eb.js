"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[90110],{15680:(t,e,a)=>{a.d(e,{xA:()=>s,yg:()=>c});var n=a(96540);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var y=n.createContext({}),m=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(y.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,y=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),g=m(a),d=i,c=g["".concat(y,".").concat(d)]||g[d]||u[d]||l;return a?n.createElement(c,r(r({ref:e},s),{},{components:a})):n.createElement(c,r({ref:e},s))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var y in e)hasOwnProperty.call(e,y)&&(o[y]=e[y]);o.originalType=t,o[g]="string"==typeof t?t:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82640:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>y,toc:()=>s});var n=a(58168),i=(a(96540),a(15680)),l=a(75489);const r={title:"ExcPIC",hide_table_of_contents:!0},o=void 0,y={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",title:"ExcPIC",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcPIC",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcPIC",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcOEX3T",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcOEX3T"},next:{title:"ExcREXS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcREXS"}},m={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,i.yg)(u,(0,n.A)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Proportional/integral regulator excitation system.  This model can be used to represent excitation systems with a proportional-integral (PI) voltage regulator controller."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"e1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Field voltage value 1 (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"e2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Field voltage value 2 (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efdmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter maximum limit (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","fdmax","<","/sub",">","<","/i",">",") (",">"," ExcPIC.efdmin).  Typical value = 8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efdmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter minimum limit (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","fdmin","<","/sub",">","<","/i",">",") (","<"," ExcPIC.efdmax).  Typical value = -0,87.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ka"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","a","<","/sub",">","<","/i",">",").  Typical value = 3,15.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter regulation factor (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","c","<","/sub",">","<","/i",">",").  Typical value = 0,08.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ke"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter constant (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","e","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rate feedback gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","f","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ki"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Current source gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","i","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential source gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","p","<","/sub",">","<","/i",">",").  Typical value = 6,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"se1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Saturation factor at ","<","i",">","E","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">"," (","<","i",">","Se","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"se2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Saturation factor at ","<","i",">","E","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">"," (","<","i",">","Se","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"PI controller time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","a1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","a2","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0,01.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lead time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","a3","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta4"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Lag time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","a4","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"te"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","e","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Rate feedback time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","f1","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Rate feedback lag time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","f2","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vr1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI maximum limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","r1","<","/sub",">","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vr2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"PI minimum limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","r2","<","/sub",">","<","/i",">",").  Typical value = -0,87.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator maximum limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","rmax","<","/sub",">","<","/i",">",") (",">"," ExcPIC.vrmin).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator minimum limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","rmin","<","/sub",">","<","/i",">",") (","<"," ExcPIC.vrmax).  Typical value = -0,87.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(l.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);