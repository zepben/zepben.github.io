"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[86535],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var y=a.createContext({}),g=function(e){var n=a.useContext(y),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(y.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,y=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(t),u=r,s=m["".concat(y,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(s,l(l({ref:n},p),{},{components:t})):a.createElement(s,l({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var y in n)hasOwnProperty.call(n,y)&&(o[y]=n[y]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),i=t(75489);const l={title:"GovHydroIEEE2",hide_table_of_contents:!0},o=void 0,y={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2",title:"GovHydroIEEE2",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE2",draft:!1,tags:[],version:"current",frontMatter:{title:"GovHydroIEEE2",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"GovHydroIEEE0",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroIEEE0"},next:{title:"GovHydroPID",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroPID"}},g={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.\nRef","<",'font color="#0f0f0f"',">","erence: IEEE Transactions on Power Apparatus and Systems, November/December 1973, Volume PAS-92, Number 6, ","<","i",">","<","u",">","Dynamic Models for Steam and Hydro Turbines in Power System Studies","<","/u",">","<","/i",">",", page 1904.","<","/font",">"),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aturb"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Turbine numerator multiplier (","<","i",">","Aturb","<","/i",">",").  Typical value = -1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bturb"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Turbine denominator multiplier (","<","i",">","Bturb","<","/i",">",") (",">"," 0).  Typical value = 0,5.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 1, PU gv (","<","i",">","Gv1","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 2, PU gv (","<","i",">","Gv2","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 3, PU gv (","<","i",">","Gv3","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 4, PU gv (","<","i",">","Gv4","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv5"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 5, PU gv (","<","i",">","Gv5","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gv6"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 6, PU gv (","<","i",">","Gv6","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kturb"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Turbine gain (","<","i",">","Kturb","<","/i",">",").  Typical value = 1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mwbase"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Base for power values (","<","i",">","MWbase","<","/i",">",") (",">"," 0).  Unit = MW.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 1, PU power (","<","i",">","Pgv1","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 2, PU power (","<","i",">","Pgv2","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 3, PU power (","<","i",">","Pgv3","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 4, PU power (","<","i",">","Pgv4","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv5"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 5, PU power (","<","i",">","Pgv5","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pgv6"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Nonlinear gain point 6, PU power (","<","i",">","Pgv6","<","/i",">",").  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pmax"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum gate opening (","<","i",">","Pmax","<","/i",">",") (",">"," GovHydroIEEE2.pmin).  Typical value = 1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pmin"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum gate opening (","<","i",">","Pmin","<","/i",">",") (","<","GovHydroIEEE2.pmax).  Typical value = 0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rperm"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Permanent droop (","<","i",">","Rperm","<","/i",">",").  Typical value = 0,05.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rtemp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Temporary droop (","<","i",">","Rtemp","<","/i",">",").  Typical value = 0,5.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tg"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Gate servo time constant (","<","i",">","Tg","<","/i",">",") (",">","= 0).  Typical value = 0,5.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Pilot servo valve time constant (","<","i",">","Tp","<","/i",">",") (",">","= 0).  Typical value = 0,03.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tr"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Dashpot time constant (","<","i",">","Tr","<","/i",">",") (",">","= 0).  Typical value = 12.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tw"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Water inertia time constant (","<","i",">","Tw","<","/i",">",") (",">","= 0).  Typical value = 2.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum gate closing velocity (","<","i",">","Uc","<","/i",">",") (","<","0).  Typical value = -0,1.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uo"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum gate opening velocity (","<","i",">","Uo","<","/i",">",").  Unit = PU / s.  Typical value = 0,1.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);