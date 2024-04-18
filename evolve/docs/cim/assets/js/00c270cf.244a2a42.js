"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[80970],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>s});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var y=n.createContext({}),g=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(y.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=g(a),u=l,s=p["".concat(y,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>y,toc:()=>m});var n=a(58168),l=(a(96540),a(15680)),r=a(75489);const i={title:"GovCT2",hide_table_of_contents:!0},o=void 0,y={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",title:"GovCT2",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",draft:!1,tags:[],version:"current",frontMatter:{title:"GovCT2",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"GovCT1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT1"},next:{title:"GovGAST",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovGAST"}},g={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"class-description"},"Class Description"),(0,l.yg)("p",null,"General governor with frequency-dependent fuel flow limit.  This model is a modification of the GovCT1","<","b",">"," ","<","/b",">","model in order to represent the frequency-dependent fuel flow limit of a specific gas turbine manufacturer."),(0,l.yg)("h2",{id:"attributes"},"Attributes"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"aset"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,l.yg)("td",{parentName:"tr",align:null},"Acceleration limiter setpoint (","<","i",">","Aset","<","/i",">",").  Unit = PU / s.  Typical value = 10.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"db"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Speed governor deadband in PU speed (","<","i",">","db","<","/i",">",").  In the majority of applications, it is recommended that this value be set to zero.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dm"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Speed sensitivity coefficient (","<","i",">","Dm","<","/i",">",").  ","<","i",">","Dm","<","/i",">"," can represent either the variation of the engine power with the shaft speed or the variation of maximum power capability with shaft speed.  If it is positive it describes the falling slope of the engine speed verses power characteristic as speed increases. A slightly falling characteristic is typical for reciprocating engines and some aero-derivative turbines.  If it is negative the engine power is assumed to be unaffected by the shaft speed, but the maximum permissible fuel flow is taken to fall with falling shaft speed. This is characteristic of single-shaft industrial turbines due to exhaust temperature limits.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 1 (","<","i",">","Flim1","<","/i",">",").  Unit = Hz.  Typical value = 59.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim10"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 10 (","<","i",">","Flim10","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim2"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 2 (","<","i",">","Flim2","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim3"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 3 (","<","i",">","Flim3","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim4"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 4 (","<","i",">","Flim4","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim5"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 5 (","<","i",">","Flim5","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim6"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 6 (","<","i",">","Flim6","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim7"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 7 (","<","i",">","Flim7","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim8"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 8 (","<","i",">","Flim8","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"flim9"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),(0,l.yg)("td",{parentName:"tr",align:null},"Frequency threshold 9 (","<","i",">","Flim9","<","/i",">",").  Unit = Hz.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ka"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Acceleration limiter gain (","<","i",">","Ka","<","/i",">",").  Typical value = 10.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kdgov"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Governor derivative gain (","<","i",">","Kdgov","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kigov"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Governor integral gain (","<","i",">","Kigov","<","/i",">",").  Typical value = 0,45.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kiload"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Load limiter integral gain for PI controller (","<","i",">","Kiload","<","/i",">",").  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kimw"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power controller (reset) gain (","<","i",">","Kimw","<","/i",">",").  The default value of 0,01 corresponds to a reset time of 100 seconds.  A value of 0,001 corresponds to a relatively slow-acting load controller.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kpgov"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Governor proportional gain (","<","i",">","Kpgov","<","/i",">",").  Typical value = 4.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kpload"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Load limiter proportional gain for PI controller (","<","i",">","Kpload","<","/i",">",").  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kturb"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Turbine gain (","<","i",">","Kturb","<","/i",">",").  Typical value = 1,9168.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ldref"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Load limiter reference value (","<","i",">","Ldref","<","/i",">",").  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"maxerr"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum value for speed error signal (","<","i",">","Maxerr","<","/i",">",") (",">"," GovCT2.minerr).  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"minerr"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Minimum value for speed error signal (","<","i",">","Minerr","<","/i",">",") (","<"," GovCT2.maxerr).  Typical value = -1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mwbase"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,l.yg)("td",{parentName:"tr",align:null},"Base for power values (","<","i",">","MWbase","<","/i",">",") (",">"," 0).  Unit = MW.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 1 (","<","i",">","Plim1","<","/i",">",").  Typical value = 0,8325.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim10"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 10 (","<","i",">","Plim10","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim2"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 2 (Plim2).  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim3"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 3 (","<","i",">","Plim3","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim4"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 4 (","<","i",">","Plim4","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim5"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 5 (","<","i",">","Plim5","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim6"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 6 (","<","i",">","Plim6","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim7"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 7 (","<","i",">","Plim7","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim8"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power limit 8 (","<","i",">","Plim8","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"plim9"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Power Limit 9 (","<","i",">","Plim9","<","/i",">",").  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"prate"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Ramp rate for frequency-dependent power limit (","<","i",">","Prate","<","/i",">",").  Typical value = 0,017.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"r"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Permanent droop (","<","i",">","R","<","/i",">",").  Typical value = 0,05.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rclose"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,l.yg)("td",{parentName:"tr",align:null},"Minimum valve closing rate (","<","i",">","Rclose","<","/i",">",").  Unit = PU / s.  Typical value = -99.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rdown"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum rate of load limit decrease (","<","i",">","Rdown","<","/i",">",").  Typical value = -99.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ropen"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum valve opening rate (","<","i",">","Ropen","<","/i",">",").  Unit = PU / s.  Typical value = 99.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rselect"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/DroopSignalFeedbackKind",mdxType:"Link"},"DroopSignalFeedbackKind")),(0,l.yg)("td",{parentName:"tr",align:null},"Feedback signal for droop (","<","i",">","Rselect","<","/i",">",").  Typical value = electricalPower.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rup"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum rate of load limit increase (","<","i",">","Rup","<","/i",">",").  Typical value = 99.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ta"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Acceleration limiter time constant (","<","i",">","Ta","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tact"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Actuator time constant (","<","i",">","Tact","<","/i",">",") (",">","= 0).  Typical value = 0,4.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tb"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Turbine lag time constant (","<","i",">","Tb","<","/i",">",") (",">","= 0).  Typical value = 0,1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tc"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Turbine lead time constant (","<","i",">","Tc","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tdgov"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Governor derivative controller time constant (","<","i",">","Tdgov","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"teng"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Transport time delay for diesel engine used in representing diesel engines where there is a small but measurable transport delay between a change in fuel flow setting and the development of torque (","<","i",">","Teng","<","/i",">",") (",">","= 0).  ","<","i",">","Teng","<","/i",">"," should be zero in all but special cases where this transport delay is of particular concern.  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tfload"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Load limiter time constant (","<","i",">","Tfload","<","/i",">",") (",">","= 0).  Typical value = 3.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tpelec"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Electrical power transducer time constant (","<","i",">","Tpelec","<","/i",">",") (",">","= 0).  Typical value = 2,5.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tsa"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Temperature detection lead time constant (","<","i",">","Tsa","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tsb"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,l.yg)("td",{parentName:"tr",align:null},"Temperature detection lag time constant (","<","i",">","Tsb","<","/i",">",") (",">","= 0).  Typical value = 50.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"vmax"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum valve position limit (","<","i",">","Vmax","<","/i",">",") (",">"," GovCT2.vmin).  Typical value = 1.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"vmin"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"Minimum valve position limit (","<","i",">","Vmin","<","/i",">",") (","<"," GovCT2.vmax).  Typical value = 0,175.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"wfnl"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,l.yg)("td",{parentName:"tr",align:null},"No load fuel flow (","<","i",">","Wfnl","<","/i",">",").  Typical value = 0,187.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"wfspd"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"Switch for fuel source characteristic to recognize that fuel flow, for a given fuel valve stroke, can be proportional to engine speed (","<","i",">","Wfspd","<","/i",">",").")))),(0,l.yg)("p",null,"true = fuel flow proportional to speed (for some gas turbines and diesel engines with positive displacement fuel injectors)\nfalse = fuel control system keeps fuel flow independent of engine speed.\nTypical value = false. |"),(0,l.yg)("h2",{id:"relationships"},"Relationships"),(0,l.yg)("h3",{id:"ancestors"},"Ancestors"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),(0,l.yg)("h3",{id:"descendents"},"Descendents"),(0,l.yg)("p",null,"No descendent classes"),(0,l.yg)("h2",{id:"associations"},"Associations"),(0,l.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);