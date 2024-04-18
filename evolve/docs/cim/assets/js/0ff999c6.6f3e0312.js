"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[13895],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(a),m=r,d=y["".concat(g,".").concat(m)]||y[m]||c[m]||l;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>g,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const o={title:"VsConverter",hide_table_of_contents:!0},i=void 0,g={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/VsConverter",id:"cim100/TC57CIM/IEC61970/Base/DC/VsConverter",title:"VsConverter",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/DC/VsConverter.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/DC",slug:"/cim100/TC57CIM/IEC61970/Base/DC/VsConverter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsConverter",draft:!1,tags:[],version:"current",frontMatter:{title:"VsConverter",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"VsCapabilityCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsCapabilityCurve"},next:{title:"VsPpccControlKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind"}},s={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"DC side of the voltage source converter (VSC)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"delta"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,r.yg)("td",{parentName:"tr",align:null},"Angle between VsConverter.uv and ACDCConverter.uc. It is converter\u2019s state variable used in power flow. The attribute shall be a positive value or zero.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"droop"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Droop constant. The pu value is obtained as D ","[kV/MW]"," x Sb / Ubdc. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"droopCompensation"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Compensation constant. Used to compensate for voltage drop when controlling voltage at a distant bus. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxModulationIndex"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum quotient between the AC converter voltage (Uc) and DC voltage (Ud). A factor typically less than 1. It is converter\u2019s configuration data used in power flow.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxValveCurrent"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum current through a valve. It is converter\u2019s configuration data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pPccControl"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/VsPpccControlKind",mdxType:"Link"},"VsPpccControlKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Kind of control of real power and/or DC voltage.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qPccControl"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/VsQpccControlKind",mdxType:"Link"},"VsQpccControlKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Kind of reactive power control.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qShare"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,r.yg)("td",{parentName:"tr",align:null},"Reactive power sharing factor among parallel converters on Uac control. The attribute shall be a positive value or zero.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetPWMfactor"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Magnitude of pulse-modulation factor. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetPhasePcc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,r.yg)("td",{parentName:"tr",align:null},"Phase target at AC side, at point of common coupling. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetPowerFactorPcc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power factor target at the AC side, at point of common coupling. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetQpcc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Reactive power injection target in AC grid, at point of common coupling.  Load sign convention is used, i.e. positive sign means flow out from a node.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetUpcc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage target in AC grid, at point of common coupling. The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uv"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,r.yg)("td",{parentName:"tr",align:null},"Line-to-line voltage on the valve side of the converter transformer. It is converter\u2019s state variable, result from power flow. The attribute shall be a positive value.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/ACDCConverter",mdxType:"Link"},"ACDCConverter"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/VsConverter",mdxType:"Link"},"VsConverter")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/VsCapabilityCurve",mdxType:"Link"},"VsCapabilityCurve")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"VsConverterDCSides"),(0,r.yg)("td",{parentName:"tr",align:null},"All converters with this capability curve."),(0,r.yg)("td",{parentName:"tr",align:null},"CapabilityCurve"),(0,r.yg)("td",{parentName:"tr",align:null},"Capability curve of this converter.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/DC/VsConverter",mdxType:"Link"},"VsConverter")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/HVDCDynamics/VSCDynamics",mdxType:"Link"},"VSCDynamics")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"VsConverter"),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage source converter to which voltage source converter dynamics model applies."),(0,r.yg)("td",{parentName:"tr",align:null},"VSCDynamics"),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage source converter dynamics model used to describe dynamic behaviour of this converter.")))))}m.isMDXComponent=!0}}]);