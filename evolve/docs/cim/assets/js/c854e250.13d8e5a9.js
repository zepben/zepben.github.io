"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[26091],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,u=d["".concat(g,".").concat(y)]||d[y]||m[y]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},20853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>g,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const o={title:"PowerElectronicsConnection",hide_table_of_contents:!0,slug:"PowerElectronicsConnection",sidebar_position:0},l=void 0,g={unversionedId:"ewb/IEC61970/Base/Wires/PowerElectronicsConnection",id:"ewb/IEC61970/Base/Wires/PowerElectronicsConnection",title:"PowerElectronicsConnection",description:"Class Description",source:"@site/docs/ewb/IEC61970/Base/Wires/PowerElectronicsConnection.mdx",sourceDirName:"ewb/IEC61970/Base/Wires",slug:"/ewb/IEC61970/Base/Wires/PowerElectronicsConnection",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PowerElectronicsConnection",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"PowerElectronicsConnection",hide_table_of_contents:!0,slug:"PowerElectronicsConnection",sidebar_position:0},sidebar:"docs",previous:{title:"PhaseShuntConnectionKind",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PhaseShuntConnectionKind"},next:{title:"PowerElectronicsConnectionPhase",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PowerElectronicsConnectionPhase"}},s={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A connection to the AC network for energy production or consumption that uses power electronics rather than rotating machines."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invFixReactivePower"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Static Reactive Power, specified in a percentage output of the system. Permitted range is between -1.0 and 1.0 (inclusive), with a negative sign referring to \u201csink\u201d.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invReactivePowerMode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"If true, enables Static Reactive Power mode on the inverter.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespQAtV1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 1 as a percentage of rated output for inverter Volt-VAr response mode. Permitted range is between -0.6 and 0 (inclusive) with a negative number referring to a sink.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespQAtV2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 2 as a percentage of rated output for inverter Volt-VAr response mode. Permitted range is between -0.6 and 0 (inclusive) with a negative number referring to a sink.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespQAtV3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 3 as a percentage of rated output for inverter Volt-VAr response mode. Permitted range is between -0.6 and 0 (inclusive) with a negative number referring to a sink.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespQAtV4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 4 as a percentage of rated output for inverter Volt-VAr response mode. Permitted range is between -0.6 and 0 (inclusive) with a negative number referring to a sink.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespV1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 1 in volts for inverter Volt-VAr response mode. Permitted range is between 200 and 300 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespV2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 2 in volts for inverter Volt-VAr response mode. Permitted range is between 200 and 300 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespV3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 3 in volts for inverter Volt-VAr response mode. Permitted range is between 200 and 300 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVarRespV4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 4 in volts for inverter Volt-VAr response mode. Permitted range is between 200 and 300 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVoltVarRespMode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Volt-VAr response mode allows an inverter to consume (sink) or produce (source) reactive power depending on the measured voltage. This mode is further described in AS4777.2:2015, section 6.3.2.3. True implies the mode is enabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invVoltWattRespMode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Volt-Watt response mode allows an inverter to reduce is real power output depending on the measured voltage. This mode is further described in AS4777.2:2015, section 6.3.2.2. True implies the mode is enabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespPAtV1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 1 as a percentage of rated output for inverter Volt-Watt response mode. Permitted range is between 0 and 0.2 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespPAtV2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 2 as a percentage of rated output for inverter Volt-Watt response mode. Permitted range is between 0 and 0.2 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespPAtV3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 3 as a percentage of rated output for inverter Volt-Watt response mode. Permitted range is between 0 and 0.2 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespPAtV4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Power output set point 4 as a percentage of rated output for inverter Volt-Watt response mode. Permitted range is between 0 and 0.2 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespV1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 1 in volts for inverter Volt-Watt response mode. Permitted range is between 244 and 265 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespV2"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 2 in volts for inverter Volt-Watt response mode. Permitted range is between 244 and 265 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespV3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 3 in volts for inverter Volt-Watt response mode. Permitted range is between 244 and 265 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"invWattRespV4"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Set point 4 in volts for inverter Volt-Watt response mode. Permitted range is between 244 and 265 (inclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inverterStandard"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The standard this inverter follows, such as AS4777.2:2020")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxIFault"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum fault current this device will contribute, in per-unit of rated current, before the converter protection will trip or bypass.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxQ"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum reactive power limit. This is the maximum (nameplate) limit for the unit.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"minQ"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum reactive power limit for the unit. This is the minimum (nameplate) limit for the unit.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"p"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Active power injection. Load sign convention is used, i.e. positive sign means flow out from a node.",(0,r.yg)("br",null),"Starting value for a steady state solution.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,r.yg)("td",{parentName:"tr",align:null},"Reactive power injection. Load sign convention is used, i.e. positive sign means flow out from a node.",(0,r.yg)("br",null),"Starting value for a steady state solution.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ratedS"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),(0,r.yg)("td",{parentName:"tr",align:null},"Nameplate apparent power rating for the unit.",(0,r.yg)("br",null),"The attribute shall have a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ratedU"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,r.yg)("td",{parentName:"tr",align:null},"Rated voltage (nameplate data, Ur in IEC 60909-0). It is primarily used for short circuit data exchange according to IEC 60909.",(0,r.yg)("br",null),"The attribute shall be a positive value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stopAtOverFreq"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Over frequency (stop) in Hz. Permitted range is between 51 and 52 (inclusive)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stopAtUnderFreq"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Under frequency (stop) in Hz Permitted range is between 47 and 49 (inclusive)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sustainOpOvervoltLimit"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates the sustained operation overvoltage limit in volts, when the average voltage for a 10-minute period exceeds the V\xacnom-max.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Wires/RegulatingCondEq",mdxType:"Link"},"RegulatingCondEq"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Wires/PowerElectronicsConnection",mdxType:"Link"},"PowerElectronicsConnection")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Wires/PowerElectronicsConnectionPhase",mdxType:"Link"},"PowerElectronicsConnectionPhase")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"PowerElectronicsConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"Power electronics connection of this power electronics connection phase."),(0,r.yg)("td",{parentName:"tr",align:null},"Phases"),(0,r.yg)("td",{parentName:"tr",align:null},"The individual phases models for the power electronics connection.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Wires/PowerElectronicsConnection",mdxType:"Link"},"PowerElectronicsConnection")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Generation/Production/PowerElectronicsUnit",mdxType:"Link"},"PowerElectronicsUnit")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"PowerElectronicsConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"A power electronics unit has a connection to the AC network."),(0,r.yg)("td",{parentName:"tr",align:null},"Units"),(0,r.yg)("td",{parentName:"tr",align:null},"An AC network connection may have several power electronics units connecting through it.")))))}y.isMDXComponent=!0}}]);