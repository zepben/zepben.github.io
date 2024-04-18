"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[32213],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return t?a.createElement(d,o(o({ref:n},y),{},{components:t})):a.createElement(d,o({ref:n},y))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var a=t(58168),r=(t(96540),t(15680)),i=t(75489);const o={title:"SynchronousMachine",hide_table_of_contents:!0},l=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",id:"cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",title:"SynchronousMachine",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachine.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",draft:!1,tags:[],version:"current",frontMatter:{title:"SynchronousMachine",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"SwitchSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SwitchSchedule"},next:{title:"SynchronousMachineKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SynchronousMachineKind"}},s={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:y},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"An electromechanical device that operates with shaft rotating synchronously with the network. It is a single machine operating either as a generator or synchronous condenser or pump."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aVRToManualLag"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Time delay required when switching from Automatic Voltage Regulation (AVR) to Manual for a lagging MVAr violation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aVRToManualLead"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Time delay required when switching from Automatic Voltage Regulation (AVR) to Manual for a leading MVAr violation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"baseQ"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Default base reactive power value. This value represents the initial reactive power that can be used by any application function.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"condenserP"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Active power consumed when in condenser mode operation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"coolantCondition"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Temperature or pressure of coolant medium.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"coolantType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/CoolantType",mdxType:"Link"},"CoolantType")),(0,r.yg)("td",{parentName:"tr",align:null},"Method of cooling the machine.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"earthing"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates whether or not the generator is earthed. Used for short circuit data exchange according to IEC 60909.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"earthingStarPointR"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,r.yg)("td",{parentName:"tr",align:null},"Generator star point earthing resistance (Re). Used for short circuit data exchange according to IEC 60909.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"earthingStarPointX"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},"Generator star point earthing reactance (Xe). Used for short circuit data exchange according to IEC 60909.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ikk"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,r.yg)("td",{parentName:"tr",align:null},"Steady-state short-circuit current (in A for the profile) of generator with compound excitation during 3-phase short circuit.")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ikk=0: Generator with no compound excitation."),(0,r.yg)("li",{parentName:"ul"},"Ikk","<",">","0: Generator with compound excitation.\nIkk is used to calculate the minimum steady-state short-circuit current for generators with compound excitation.\n(4.6.1.2 in IEC 60909-0:2001).\nUsed only for single fed short circuit on a generator. (4.3.4.2. in IEC 60909-0:2001). |\n| manualToAVR | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Time delay required when switching from Manual to Automatic Voltage Regulation. This value is used in the accelerating power reference frame for powerflow solutions. |\n| maxQ | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")," | Maximum reactive power limit. This is the maximum (nameplate) limit for the unit. |\n| maxU | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")," | Maximum voltage limit for the unit. |\n| minQ | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")," | Minimum reactive power limit for the unit. |\n| minU | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")," | Minimum voltage  limit for the unit. |\n| mu | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Factor to calculate the breaking current (Section 4.5.2.1 in IEC 60909-0).\nUsed only for single fed short circuit on a generator (Section 4.3.4.2. in IEC 60909-0). |\n| operatingMode | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachineOperatingMode",mdxType:"Link"},"SynchronousMachineOperatingMode")," | Current mode of operation. |\n| qPercent | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")," | Part of the coordinated reactive control that comes from this machine. The attribute is used as a participation factor not necessarily summing up to 100% for the participating devices in the control. |\n| r | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")," | Equivalent resistance (RG) of generator. RG is considered for the calculation of all currents, except for the calculation of the peak current ip. Used for short circuit data exchange according to IEC 60909. |\n| r0 | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")," | Zero sequence resistance of the synchronous machine. |\n| r2 | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")," | Negative sequence resistance. |\n| referencePriority | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Priority of unit for use as powerflow voltage phase angle reference bus selection. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on. |\n| satDirectSubtransX | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),' | Direct-axis subtransient reactance saturated, also known as Xd"sat. |\n| satDirectSyncX | ',(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Direct-axes saturated synchronous reactance (xdsat); reciprocal of short-circuit ration. Used for short circuit data exchange, only for single fed short circuit on a generator. (4.3.4.2. in IEC 60909-0:2001). |\n| satDirectTransX | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Saturated Direct-axis transient reactance. The attribute is primarily used for short circuit calculations according to ANSI. |\n| shortCircuitRotorType | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/ShortCircuitRotorKind",mdxType:"Link"},"ShortCircuitRotorKind")," | Type of rotor, used by short circuit applications, only for single fed short circuit according to IEC 60909. |\n| type | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachineKind",mdxType:"Link"},"SynchronousMachineKind")," | Modes that this synchronous machine can operate in. |\n| voltageRegulationRange | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")," | Range of generator voltage regulation (PG in IEC 60909-0) used for calculation of the impedance correction factor KG defined in IEC 60909-0.\nThis attribute is used to describe the operating voltage of the generating unit. |\n| x0 | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")," | Zero sequence reactance of the synchronous machine. |\n| x2 | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")," | Negative sequence reactance. |")),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/RotatingMachine",mdxType:"Link"},"RotatingMachine"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",mdxType:"Link"},"SynchronousMachine")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/PrimeMover",mdxType:"Link"},"PrimeMover")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"SynchronousMachines"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous machines this Prime mover drives."),(0,r.yg)("td",{parentName:"tr",align:null},"PrimeMovers"),(0,r.yg)("td",{parentName:"tr",align:null},"Prime movers that drive this SynchronousMachine.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",mdxType:"Link"},"SynchronousMachine")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/ReactiveCapabilityCurve",mdxType:"Link"},"ReactiveCapabilityCurve")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"InitiallyUsedBySynchronousMachines"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous machines using this curve as default."),(0,r.yg)("td",{parentName:"tr",align:null},"InitialReactiveCapabilityCurve"),(0,r.yg)("td",{parentName:"tr",align:null},"The default reactive capability curve for use by a synchronous machine.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",mdxType:"Link"},"SynchronousMachine")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/ReactiveCapabilityCurve",mdxType:"Link"},"ReactiveCapabilityCurve")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"SynchronousMachines"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous machines using this curve."),(0,r.yg)("td",{parentName:"tr",align:null},"ReactiveCapabilityCurves"),(0,r.yg)("td",{parentName:"tr",align:null},"All available reactive capability curves for this synchronous machine.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/SynchronousMachine",mdxType:"Link"},"SynchronousMachine")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics",mdxType:"Link"},"SynchronousMachineDynamics")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"SynchronousMachine"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous machine to which synchronous machine dynamics model applies."),(0,r.yg)("td",{parentName:"tr",align:null},"SynchronousMachineDynamics"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous machine dynamics model used to describe dynamic behaviour of this synchronous machine.")))))}m.isMDXComponent=!0}}]);