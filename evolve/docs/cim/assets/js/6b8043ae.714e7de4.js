"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[56266],{15680:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>c});var a=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var y=a.createContext({}),m=function(e){var n=a.useContext(y),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=m(e.components);return a.createElement(y.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,y=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(i),s=t,c=d["".concat(y,".").concat(s)]||d[s]||g[s]||r;return i?a.createElement(c,o(o({ref:n},p),{},{components:i})):a.createElement(c,o({ref:n},p))}));function c(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=s;var l={};for(var y in n)hasOwnProperty.call(n,y)&&(l[y]=n[y]);l.originalType=e,l[d]="string"==typeof e?e:t,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},83886:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>y,toc:()=>p});var a=i(58168),t=(i(96540),i(15680)),r=i(75489);const o={title:"GovHydroDD",hide_table_of_contents:!0,slug:"GovHydroDD",sidebar_position:0},l=void 0,y={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroDD",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroDD",title:"GovHydroDD",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroDD.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroDD",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroDD",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GovHydroDD",hide_table_of_contents:!0,slug:"GovHydroDD",sidebar_position:0},sidebar:"docs",previous:{title:"GovHydro4ModelKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydro4ModelKind"},next:{title:"GovHydroFrancis",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroFrancis"}},m={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},g="wrapper";function s(e){let{components:n,...i}=e;return(0,t.yg)(g,(0,a.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"class-description"},"Class Description"),(0,t.yg)("p",null,"Double derivative hydro governor and turbine."),(0,t.yg)("h2",{id:"attributes"},"Attributes"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Name"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"aturb"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Turbine numerator multiplier (","<","i",">","Aturb","<","/i",">",") (see parameter detail 3).  Typical value = -1.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"bturb"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Turbine denominator multiplier (","<","i",">","Bturb","<","/i",">",") (see parameter detail 3).  Typical value = 0,5.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"db1"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,t.yg)("td",{parentName:"tr",align:null},"Intentional dead-band width (","<","i",">","db1","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"db2"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,t.yg)("td",{parentName:"tr",align:null},"Unintentional dead-band (","<","i",">","db2","<","/i",">",").  Unit = MW.  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"eps"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,t.yg)("td",{parentName:"tr",align:null},"Intentional db hysteresis (","<","i",">","eps","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gmax"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Maximum gate opening (","<","i",">","Gmax","<","/i",">",") (",">"," GovHydroDD.gmin).  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gmin"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Minimum gate opening (","<","i",">","Gmin","<","/i",">",") (","<"," GovHydroDD.gmax).  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv1"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 1, PU gv (","<","i",">","Gv1","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv2"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 2, PU gv (","<","i",">","Gv2","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv3"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 3, PU gv (","<","i",">","Gv3","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv4"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 4, PU gv (","<","i",">","Gv4","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv5"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 5, PU gv (","<","i",">","Gv5","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"gv6"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 6, PU gv (","<","i",">","Gv6","<","/i",">",").  Typical value = 0.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"inputSignal"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,t.yg)("td",{parentName:"tr",align:null},"Input signal switch (","<","i",">","Flag","<","/i",">",").")))),(0,t.yg)("p",null,"true = ","<","i",">","Pe","<","/i",">"," input is used\nfalse = feedback is received from ","<","i",">","CV","<","/i",">",".\n","<","i",">","Flag","<","/i",">"," is normally dependent on ","<","i",">","Tt","<","/i",">",".  If ","<","i",">","Tt","<","/i",">"," is zero, ","<","i",">","Flag","<","/i",">"," is set to false. If ","<","i",">","Tt","<","/i",">"," is not zero, ","<","i",">","Flag","<","/i",">"," is set to true.",(0,t.yg)("br",{parentName:"p"}),"\n","Typical value = true. |\n| k1 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Single derivative gain (","<","i",">","K1","<","/i",">",").  Typical value = 3,6. |\n| k2 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Double derivative gain (","<","i",">","K2","<","/i",">",").  Typical value = 0,2. |\n| kg | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Gate servo gain (","<","i",">","Kg","<","/i",">",").  Typical value = 3. |\n| ki | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Integral gain (","<","i",">","Ki","<","/i",">",").  Typical value = 1. |\n| mwbase | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")," | Base for power values (","<","i",">","MWbase","<","/i",">",") (",">","0).  Unit = MW. |\n| pgv1 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 1, PU power (","<","i",">","Pgv1","<","/i",">",").  Typical value = 0. |\n| pgv2 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 2, PU power (","<","i",">","Pgv2","<","/i",">",").  Typical value = 0. |\n| pgv3 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 3, PU power (","<","i",">","Pgv3","<","/i",">",").  Typical value = 0. |\n| pgv4 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 4, PU power (","<","i",">","Pgv4","<","/i",">",").  Typical value = 0. |\n| pgv5 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 5, PU power (","<","i",">","Pgv5","<","/i",">",").  Typical value = 0. |\n| pgv6 | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Nonlinear gain point 6, PU power (","<","i",">","Pgv6","<","/i",">",").  Typical value = 0. |\n| pmax | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum gate opening, PU of ","<","i",">","MWbase","<","/i",">"," (","<","i",">","Pmax","<","/i",">",") (",">"," GovHydroDD.pmin).  Typical value = 1. |\n| pmin | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum gate opening, PU of ","<","i",">","MWbase","<","/i",">"," (","<","i",">","Pmin","<","/i",">",") (",">"," GovHydroDD.pmax).  Typical value = 0. |\n| r | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Steady state droop (","<","i",">","R","<","/i",">",").  Typical value = 0,05. |\n| td | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Input filter time constant (","<","i",">","Td","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0. |\n| tf | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Washout time constant (","<","i",">","Tf","<","/i",">",") (",">","= 0).  Typical value = 0,1. |\n| tp | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Gate servo time constant (","<","i",">","Tp","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,35. |\n| tt | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Power feedback time constant (","<","i",">","Tt","<","/i",">",") (",">","= 0).  If = 0, block is bypassed.  Typical value = 0,02. |\n| tturb | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Turbine time constant (","<","i",">","Tturb","<","/i",">",")  (",">","= 0).  See parameter detail 3.  Typical value = 0,8. |\n| velcl | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Maximum gate closing velocity (","<","i",">","Velcl","<","/i",">",").  Unit = PU / s.  Typical value = -0,14. |\n| velop | ",(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Maximum gate opening velocity (","<","i",">","Velop","<","/i",">",").  Unit = PU / s.  Typical value = 0,09. |"),(0,t.yg)("h2",{id:"relationships"},"Relationships"),(0,t.yg)("h3",{id:"ancestors"},"Ancestors"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),(0,t.yg)("h3",{id:"descendents"},"Descendents"),(0,t.yg)("p",null,"No descendent classes"),(0,t.yg)("h2",{id:"associations"},"Associations"),(0,t.yg)("p",null,"None"))}s.isMDXComponent=!0}}]);