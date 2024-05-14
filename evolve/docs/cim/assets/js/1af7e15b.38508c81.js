"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[36075],{15680:(t,e,a)=>{a.d(e,{xA:()=>c,yg:()=>y});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),p=r,y=m["".concat(d,".").concat(p)]||m[p]||g[p]||i;return a?n.createElement(y,o(o({ref:e},c),{},{components:a})):n.createElement(y,o({ref:e},c))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17220:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),i=a(75489);const o={title:"LoadMotor",hide_table_of_contents:!0,slug:"LoadMotor",sidebar_position:0},l=void 0,d={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",title:"LoadMotor",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LoadMotor",hide_table_of_contents:!0,slug:"LoadMotor",sidebar_position:0},sidebar:"docs",previous:{title:"LoadGenericNonLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear"},next:{title:"LoadStatic",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadStatic"}},s={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:c},g="wrapper";function p(t){let{components:e,...a}=t;return(0,r.yg)(g,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,'Aggregate induction motor load. This model is used to represent a fraction of an ordinary load as "induction motor load".  It allows a load that is treated as an ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation. This model is intended for representation of aggregations of many motors dispersed through a load represented at a high voltage bus but where there is no information on the characteristics of individual motors.\nEither a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.\nThis model treats a fraction of the constant power part of a load as a motor. During initialisation, the initial power drawn by the motor is set equal to ',"<","i",">","Pfrac","<","/i",">"," times the constant ","<","i",">","P","<","/i",">"," part of the static load.  The remainder of the load is left as a static load.\nThe reactive power demand of the motor is calculated during initialisation as a function of voltage at the load bus. This reactive power demand can be less than or greater than the constant ","<","i",">","Q","<","/i",">"," component of the load.  If the motor's reactive demand is greater than the constant ","<","i",">","Q","<","/i",">"," component of the load, the model inserts a shunt capacitor at the terminal of the motor to bring its reactive demand down to equal the constant ","<","i",">","Q","<","/i",">"," reactive load.",(0,r.yg)("br",{parentName:"p"}),"\n","If an induction motor load model and a static load model are both present for a load, the motor ","<","i",">","Pfrac","<","/i",">"," is assumed to be subtracted from the power flow constant ","<","i",">","P","<","/i",">"," load before the static load model is applied.  The remainder of the load, if any, is then represented by the static load model."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Damping factor (","<","i",">","D","<","/i",">",").  Unit = delta ","<","i",">","P","<","/i",">","/delta speed.  Typical value = 2.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"h"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Inertia constant (","<","i",">","H","<","/i",">",") (",">","= 0).  Typical value = 0,4.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lfac"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Loading factor (","<","i",">","Lfac","<","/i",">","). The ratio of initial ","<","i",">","P","<","/i",">"," to motor MVA base.  Typical value = 0,8.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Transient reactance (","<","i",">","Lp","<","/i",">",").  Typical value = 0,15.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lpp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Subtransient reactance (","<","i",">","Lpp","<","/i",">",").  Typical value = 0,15.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ls"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous reactance (","<","i",">","Ls","<","/i",">",").  Typical value = 3,2.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pfrac"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Fraction of constant-power load to be represented by this motor model (","<","i",">","Pfrac","<","/i",">",") (",">","= 0,0 and ","<","= 1,0).  Typical value = 0,3.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ra"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Stator resistance (","<","i",">","Ra","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tbkr"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Circuit breaker operating time (","<","i",">","Tbkr","<","/i",">",") (",">","= 0).  Typical value = 0,08.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tpo"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Transient rotor time constant (","<","i",">","Tpo","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tppo"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Subtransient rotor time constant (","<","i",">","Tppo","<","/i",">",") (",">","= 0).  Typical value = 0,02.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tv"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage trip pickup time (","<","i",">","Tv","<","/i",">",") (",">","= 0).  Typical value = 0,1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"vt"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage threshold for tripping (","<","i",">","Vt","<","/i",">",").  Typical value = 0,7.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor",mdxType:"Link"},"LoadMotor")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadAggregate",mdxType:"Link"},"LoadAggregate")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadMotor"),(0,r.yg)("td",{parentName:"tr",align:null},"Aggregate motor (dynamic) load associated with this aggregate load."),(0,r.yg)("td",{parentName:"tr",align:null},"LoadAggregate"),(0,r.yg)("td",{parentName:"tr",align:null},"Aggregate load to which this aggregate motor (dynamic) load belongs.")))))}p.isMDXComponent=!0}}]);