"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[95899],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>p});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,p=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return t?r.createElement(p,i(i({ref:n},y),{},{components:t})):r.createElement(p,i({ref:n},y))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var r=t(58168),a=(t(96540),t(15680)),l=t(75489);const i={title:"TurbLCFB1",hide_table_of_contents:!0,slug:"TurbLCFB1",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",title:"TurbLCFB1",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbLCFB1",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"TurbLCFB1",hide_table_of_contents:!0,slug:"TurbLCFB1",sidebar_position:0},sidebar:"docs",previous:{title:"TurbineGovernorDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics"},next:{title:"TurbineLoadControllerDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics"}},d={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:y},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Turbine load controller model developed by WECC.  This model represents a supervisory turbine load controller that acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference. This model is intended to represent slow reset 'outer loop' controllers managing the action of the turbine governor."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"db"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Controller deadband (","<","i",">","db","<","/i",">",").  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"emax"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Maximum control error (","<","i",">","Emax","<","/i",">",") (see parameter detail 4).  Typical value = 0,02.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fb"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Frequency bias gain (","<","i",">","Fb","<","/i",">",").  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fbf"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Frequency bias flag (","<","i",">","Fbf","<","/i",">",").",(0,a.yg)("br",null),"true = enable frequency bias",(0,a.yg)("br",null),"false = disable frequency bias.",(0,a.yg)("br",null),"Typical value = false.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"irmax"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Maximum turbine speed/load reference bias (","<","i",">","Irmax","<","/i",">",") (see parameter detail 3).  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ki"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Integral gain (","<","i",">","Ki","<","/i",">",").  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kp"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Proportional gain (","<","i",">","Kp","<","/i",">",").  Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mwbase"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Base for power values (","<","i",">","MWbase","<","/i",">",") (",">"," 0).  Unit = MW.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pbf"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Power controller flag (","<","i",">","Pbf","<","/i",">",").",(0,a.yg)("br",null),"true = enable load controller",(0,a.yg)("br",null),"false = disable load controller.",(0,a.yg)("br",null),"Typical value = false.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pmwset"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Power controller setpoint (","<","i",">","Pmwset","<","/i",">",") (see parameter detail 1).  Unit = MW. Typical value = 0.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"speedReferenceGovernor"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Type of turbine governor reference (","<","i",">","Type","<","/i",">",").",(0,a.yg)("br",null),"true = speed reference governor",(0,a.yg)("br",null),"false = load reference governor.",(0,a.yg)("br",null),"Typical value = true.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tpelec"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,a.yg)("td",{parentName:"tr",align:null},"Power transducer time constant (","<","i",">","Tpelec","<","/i",">",") (",">","= 0).  Typical value = 0.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineLoadControllerDynamics/TurbineLoadControllerDynamics",mdxType:"Link"},"TurbineLoadControllerDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);