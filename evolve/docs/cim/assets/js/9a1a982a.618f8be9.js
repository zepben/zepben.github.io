"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[31055],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>c});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var y=t.createContext({}),p=function(e){var n=t.useContext(y),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(y.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,y=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,c=d["".concat(y,".").concat(m)]||d[m]||g[m]||r;return a?t.createElement(c,o(o({ref:n},s),{},{components:a})):t.createElement(c,o({ref:n},s))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var y in n)hasOwnProperty.call(n,y)&&(l[y]=n[y]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48151:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>y,toc:()=>s});var t=a(58168),i=(a(96540),a(15680)),r=a(75489);const o={title:"GovHydroPID",hide_table_of_contents:!0},l=void 0,y={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",title:"GovHydroPID",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID",draft:!1,tags:[],version:"current",frontMatter:{title:"GovHydroPID",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"GovHydroIEEE2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2"},next:{title:"GovHydroPID2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID2"}},p={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:s},g="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"PID governor and turbine."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"aturb"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Turbine numerator multiplier (","<","i",">","Aturb","<","/i",">",") (see parameter detail 3).  Typical value -1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"bturb"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Turbine denominator multiplier (","<","i",">","Bturb","<","/i",">",") (see parameter detail 3).  Typical value = 0,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"db1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,i.yg)("td",{parentName:"tr",align:null},"Intentional dead-band width (","<","i",">","db1","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"db2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,i.yg)("td",{parentName:"tr",align:null},"Unintentional dead-band (","<","i",">","db2","<","/i",">",").  Unit = MW.  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"eps"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,i.yg)("td",{parentName:"tr",align:null},"Intentional db hysteresis (","<","i",">","eps","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 1, PU gv (","<","i",">","Gv1","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 2, PU gv (","<","i",">","Gv2","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 3, PU gv (","<","i",">","Gv3","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv4"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 4, PU gv (","<","i",">","Gv4","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv5"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 5, PU gv (","<","i",">","Gv5","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"gv6"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 6, PU gv (","<","i",">","Gv6","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"inputSignal"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"Input signal switch (","<","i",">","Flag","<","/i",">",").")))),(0,i.yg)("p",null,"true = ","<","i",">","Pe","<","/i",">"," input is used\nfalse = feedback is received from ","<","i",">","CV","<","/i",">",".\n","<","i",">","Flag","<","/i",">"," is normally dependent on ","<","i",">","Tt","<","/i",">",".  If ","<","i",">","Tt ","<","/i",">","is zero, ","<","i",">","Flag","<","/i",">"," is set to false. If ","<","i",">","Tt","<","/i",">"," is not zero, ","<","i",">","Flag","<","/i",">"," is set to true.",(0,i.yg)("br",{parentName:"p"}),"\n","Typical value = true. |\n| kd | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Derivative gain (","<","i",">","Kd","<","/i",">",").  Typical value = 1,11. |\n| kg | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Gate servo gain (","<","i",">","Kg","<","/i",">",").  Typical value = 2,5. |\n| ki | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Integral gain (","<","i",">","Ki","<","/i",">",").  Typical value = 0,36. |\n| kp | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Proportional gain (","<","i",">","Kp","<","/i",">",").  Typical value = 0,1. |\n| mwbase | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")," | Base for power values (","<","i",">","MWbase","<","/i",">",") (",">"," 0).  Unit = MW. |\n| pgv1 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 1, PU power (","<","i",">","Pgv1","<","/i",">",").  Typical value = 0. |\n| pgv2 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 2, PU power (","<","i",">","Pgv2","<","/i",">",").  Typical value = 0. |\n| pgv3 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 3, PU power (","<","i",">","Pgv3","<","/i",">",").  Typical value = 0. |\n| pgv4 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 4, PU power (","<","i",">","Pgv4","<","/i",">",").  Typical value = 0. |\n| pgv5 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 5, PU power (","<","i",">","Pgv5","<","/i",">",").  Typical value = 0. |\n| pgv6 | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 6, PU power (","<","i",">","Pgv6","<","/i",">",").  Typical value = 0. |\n| pmax | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum gate opening, PU of MWbase (","<","i",">","Pmax","<","/i",">",") (",">"," GovHydroPID.pmin).  Typical value = 1. |\n| pmin | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum gate opening, PU of MWbase (","<","i",">","Pmin","<","/i",">",") (","<"," GovHydroPID.pmax).  Typical value = 0. |\n| r | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Steady state droop (","<","i",">","R","<","/i",">",").  Typical value = 0,05. |\n| td | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Input filter time constant (","<","i",">","Td","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0. |\n| tf | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Washout time constant (","<","i",">","Tf","<","/i",">",") (",">","= 0).  Typical value = 0,1. |\n| tp | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Gate servo time constant (","<","i",">","Tp","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,35. |\n| tt | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Power feedback time constant (","<","i",">","Tt","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,02. |\n| tturb | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Turbine time constant (","<","i",">","Tturb","<","/i",">",") (",">","= 0). See Parameter detail 3.  Typical value = 0,8. |\n| velcl | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Maximum gate closing velocity (","<","i",">","Velcl","<","/i",">",").  Unit = PU / s.  Typical value = -0,14. |\n| velop | ",(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Maximum gate opening velocity (","<","i",">","Velop","<","/i",">",").  Unit = PU / s.  Typical value = 0,09. |"),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}m.isMDXComponent=!0}}]);