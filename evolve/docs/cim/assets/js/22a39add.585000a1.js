"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[31381],{15680:(n,e,t)=>{t.d(e,{xA:()=>d,yg:()=>u});var a=t(96540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=a.createContext({}),c=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},d=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},y="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),y=c(t),p=i,u=y["".concat(o,".").concat(p)]||y[p]||m[p]||r;return t?a.createElement(u,l(l({ref:e},d),{},{components:t})):a.createElement(u,l({ref:e},d))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[y]="string"==typeof n?n:i,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17918:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(58168),i=(t(96540),t(15680)),r=t(75489);const l={title:"WindPlantDynamics",hide_table_of_contents:!0,slug:"WindPlantDynamics",sidebar_position:0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",title:"WindPlantDynamics",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"WindPlantDynamics",hide_table_of_contents:!0,slug:"WindPlantDynamics",sidebar_position:0},sidebar:"docs",previous:{title:"WindPitchContPowerIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC"},next:{title:"WindPlantFreqPcontrolIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC"}},c={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:d},m="wrapper";function p(n){let{components:e,...t}=n;return(0,i.yg)(m,(0,a.A)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Parent class supporting relationships to wind turbines type 3 and type 4 and wind plant IEC and user-defined wind plants including their control models."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("p",null,"None"),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",mdxType:"Link"},"DynamicsFunctionBlock"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantIEC",mdxType:"Link"},"WindPlantIEC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/WindPlantUserDefined",mdxType:"Link"},"WindPlantUserDefined"))),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Target"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",mdxType:"Link"},"WindPlantDynamics")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3or4Dynamics",mdxType:"Link"},"WindTurbineType3or4Dynamics")),(0,i.yg)("td",{parentName:"tr",align:null},"1..*"),(0,i.yg)("td",{parentName:"tr",align:null},"WindPlantDynamics"),(0,i.yg)("td",{parentName:"tr",align:null},"The wind plant with which the wind turbines type 3 or type 4 are associated."),(0,i.yg)("td",{parentName:"tr",align:null},"WindTurbineType3or4Dynamics"),(0,i.yg)("td",{parentName:"tr",align:null},"The wind turbine type 3 or type 4 associated with this wind plant.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics",mdxType:"Link"},"WindPlantDynamics")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardInterconnections/RemoteInputSignal",mdxType:"Link"},"RemoteInputSignal")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},"WindPlantDynamics"),(0,i.yg)("td",{parentName:"tr",align:null},"The wind plant using the remote signal."),(0,i.yg)("td",{parentName:"tr",align:null},"RemoteInputSignal"),(0,i.yg)("td",{parentName:"tr",align:null},"The remote signal with which this power plant is associated.")))))}p.isMDXComponent=!0}}]);