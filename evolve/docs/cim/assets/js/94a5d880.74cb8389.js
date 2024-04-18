"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[4754],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),g=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,p=d["".concat(m,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(p,i(i({ref:t},s),{},{components:n})):a.createElement(p,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));n(75489);const l={title:"UnitSymbol",hide_table_of_contents:!0},i=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",id:"cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",title:"UnitSymbol",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Domain",slug:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",draft:!1,tags:[],version:"current",frontMatter:{title:"UnitSymbol",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"UnitMultiplier",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier"},next:{title:"Voltage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/Voltage"}},m={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:g},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,'The derived units defined for usage in the CIM. In some cases, the derived unit is equal to an SI unit. Whenever possible, the standard derived symbol is used instead of the formula for the derived unit. For example, the unit symbol Farad is defined as "F" instead of "CPerV". In cases where a standard symbol does not exist for a derived unit, the formula for the unit is used as the unit symbol. For example, density does not have a standard symbol and so it is represented as "kgPerm3". With the exception of the "kg", which is an SI unit, the unit symbols do not contain multipliers and therefore represent the base derived unit to which a multiplier can be applied as a whole.\nEvery unit symbol is treated as an unparseable text as if it were a single-letter symbol. The meaning of each unit symbol is defined by the accompanying descriptive text and not by the text contents of the unit symbol.\nTo allow the widest possible range of serializations without requiring special character handling, several substitutions are made which deviate from the format described in IEC 80000-1. The division symbol "/" is replaced by the letters "Per". Exponents are written in plain text after the unit as "m3" instead of being formatted as "m" with a superscript of 3  or introducing a symbol as in "m^3". The degree symbol "\xb0" is replaced with the letters "deg". Any clarification of the meaning for a substitution is included in the description for the unit symbol.\nNon-SI units are included in list of unit symbols to allow sources of data to be correctly labelled with their non-SI units (for example, a GPS sensor that is reporting numbers that represent feet instead of meters). This allows software to use the unit symbol information correctly convert and scale the raw data of those sources into SI-based units.\nThe integer values are used for harmonization with IEC 61850.'),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"A"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Current in amperes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"A2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Amperes squared (A\xb2).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"A2h"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Ampere-squared hour, ampere-squared hour.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"A2s"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Ampere squared time in square amperes (A\xb2s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"APerA"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Current, ratio of amperages.   Note: Users may need to supply a prefix such as \u2018m\u2019 to show rates such as \u2018mA/A\u2019.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"APerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"A/m, magnetic field strength, amperes per metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ah"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Ampere-hours, ampere-hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"As"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Ampere seconds (A\xb7s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bq"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Radioactivity in becquerels (1/s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Btu"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Energy, British Thermal Units.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"C"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric charge in coulombs (A\xb7s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPerkg"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Exposure (x rays), coulombs per kilogram.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPerm2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Surface charge density, coulombs per square metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPerm3"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric charge density, coulombs per cubic metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"F"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric capacitance in farads (C/V).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FPerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Permittivity, farads per metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"G"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic flux density, gausses (1 G = 10-4 T).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gy"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Absorbed dose in grays (J/kg).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GyPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Absorbed dose rate, grays per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric inductance in henrys (Wb/A).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HPerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Permeability, henrys per metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hz"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Frequency in hertz (1/s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HzPerHz"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Frequency, rate of frequency change.   Note: Users may need to supply a prefix such as \u2018m\u2019 to show rates such as \u2018mHz/Hz\u2019.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HzPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Rate of change of frequency in hertz per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"J"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Energy in joules (N\xb7m = C\xb7V = W\xb7s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPerK"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Heat capacity in joules/kelvin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPerkg"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specific energy, Joules / kg.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPerkgK"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specific heat capacity, specific entropy, joules per kilogram Kelvin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPerm2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Insulation energy density, joules per square metre or watt second per square metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPerm3"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Energy density, joules per cubic metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPermol"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Molar energy, joules per mole.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPermolK"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Molar entropy, molar heat capacity, joules per mole kelvin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Energy rate in joules per second (J/s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"K"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Temperature in kelvins.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"KPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Temperature change rate in kelvins per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Length, nautical miles (1 M = 1852 m).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mx"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic flux, maxwells (1 Mx = 10-8 Wb).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Force in newtons (kg\xb7m/s\xb2).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NPerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Surface tension, newton per metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Moment of force, newton metres.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Oe"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic field in oersteds, (1 Oe = (103/4p) A/m).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pa"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Pressure in pascals (N/m\xb2). Note: the absolute or relative measurement of pressure is implied with this entry. See below for more explicit forms.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PaPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Pressure change rate in pascals per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pas"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Dynamic viscosity, pascal seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Quantity power, Q.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Qh"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Quantity energy, Qh.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"S"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Conductance in siemens.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Conductance per length (F/m).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sv"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Dose equivalent in sieverts (J/kg).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"T"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic flux density in teslas (Wb/m2).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"V"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric potential in volts (W/A).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"V2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Volt squared (W\xb2/A\xb2).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"V2h"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Volt-squared hour, volt-squared-hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VA"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Apparent power in volt amperes. See also real power and reactive power.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VAh"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Apparent energy in volt ampere hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VAr"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Reactive power in volt amperes reactive. The \u201creactive\u201d or \u201cimaginary\u201d component of electrical power (VIsin(phi)). (See also real power and apparent power).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Note: Different meter designs use different methods to arrive at their results. Some meters may compute reactive power as an arithmetic value, while others compute the value vectorially. The data consumer should determine the method in use and the suitability of the measurement for the intended purpose."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VArh"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Reactive energy in volt ampere reactive hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VPerHz"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic flux in volt per hertz.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VPerV"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage, ratio of voltages.  Note: Users may need to supply a prefix such as \u2018m\u2019 to show rates such as \u2018mV/V\u2019.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VPerVA"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power factor, PF, the ratio of the active power to the apparent power.  Note: The sign convention used for power factor will differ between IEC meters and EEI (ANSI) meters. It is assumed that the data consumers understand the type of meter being used and agree on the sign convention in use at any given utility.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VPerVAr"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power factor, PF, the ratio of the active power to the apparent power. Note: The sign convention used for power factor will differ between IEC meters and EEI (ANSI) meters. It is assumed that the data consumers understand the type of meter being used and agree on the sign convention in use at any given utility.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VPerm"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Electric field strength, volts per metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Vh"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Volt-hour, Volt hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Vs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Volt seconds (Ws/A).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"W"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Real power in watts (J/s). Electrical power may have real and reactive components. The real portion of electrical power (I","\xb2","R or VIcos(phi)), is expressed in Watts. See also apparent power and reactive power.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPerA"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Active power per current flow, watts per Ampere.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPerW"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Signal Strength, ratio of power.   Note: Users may need to supply a prefix such as \u2018m\u2019 to show rates such as \u2018mW/W\u2019.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPerm2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Heat flux density, irradiance, watts per square metre.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPerm2sr"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Radiance, watts per square metre steradian.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPermK"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Thermal conductivity in watt/metres kelvin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Ramp rate in watts per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"WPersr"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Radiant intensity, watts per steradian.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Wb"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic flux in webers (V\xb7s).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Wh"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Real energy in watt hours.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"anglemin"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Plane angle, minutes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"anglesec"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Plane angle, seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bar"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Pressure in bars, (1 bar = 100 kPa).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cd"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Luminous intensity in candelas.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"charPers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Data rate (baud) in characters per second.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"character"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Number of characters.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cosPhi"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Power factor, dimensionless.")))),(0,r.yg)("p",null,"Note 1: This definition of power factor only holds for balanced systems. See the alternative definition under code 153.\nNote 2\xa0: Beware of differing sign conventions in use between the IEC and EEI. It is assumed that the data consumer understands the type of meter in use and the sign convention in use by the utility. |\n| count |  | Amount of substance, Counter value. |\n| d |  | Time in days, day = 24 h = 86400 s. |\n| dB |  | Sound pressure level in decibels. Note:  multiplier \u201cd\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| dBm |  | Power level (logarithmic ratio of signal strength , Bel-mW), normalized to 1mW. Note:  multiplier \u201cd\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| deg |  | Plane angle in degrees. |\n| degC |  | Relative temperature in degrees Celsius.\nIn the SI unit system the symbol is \xb0C. Electric charge is measured in coulomb that has the unit symbol C. To distinguish degree Celsius from coulomb the symbol used in the UML is degC. The reason for not using \xb0C is that the special character \xb0 is difficult to manage in software. |\n| ft3 |  | Volume, cubic feet. |\n| gPerg |  | Concentration, The ratio of the mass of a solute divided by the mass of  the solution. Note: Users may need use a prefix such a \u2018\xb5\u2019 to express a quantity such as \u2018\xb5g/g\u2019. |\n| gal |  | Volume in gallons, US gallon (1 gal = 231 in3 = 128 fl ounce). |\n| h |  | Time in hours, hour = 60 min = 3600 s. |\n| ha |  | Area, hectares. |\n| kat |  | Catalytic activity, katal = mol / s. |\n| katPerm3 |  | Catalytic activity concentration, katals per cubic metre. |\n| kg |  | Mass in kilograms.  Note: multiplier \u201ck\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| kgPerJ |  | Weight per energy in kilograms per joule (kg/J). Note: multiplier \u201ck\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| kgPerm3 |  | Density in kilogram/cubic metres (kg/m\xb3). Note: multiplier \u201ck\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| kgm |  | Moment of mass in kilogram metres (kg\xb7m) (first moment of mass). Note: multiplier \u201ck\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| kgm2 |  | Moment of mass in kilogram square metres (kg\xb7m\xb2) (Second moment of mass, commonly called the moment of inertia). Note: multiplier \u201ck\u201d is included in this unit symbol for compatibility with IEC 61850-7-3. |\n| kn |  | Speed, knots (1 kn = 1852/3600) m/s. |\n| l |  | Volume in litres, litre = dm3 = m3/1000. |\n| lPerh |  | Volumetric flow rate, litres per hour. |\n| lPerl |  | Concentration, The ratio of the volume of a solute divided by the volume of  the solution. Note: Users may need use a prefix such a \u2018\xb5\u2019 to express a quantity such as \u2018\xb5L/L\u2019. |\n| lPers |  | Volumetric flow rate in litres per second. |\n| lm |  | Luminous flux in lumens (cd\xb7sr). |\n| lx |  | Illuminance in lux (lm/m\xb2). |\n| m |  | Length in metres. |\n| m2 |  | Area in square metres (m\xb2). |\n| m2Pers |  | Viscosity in square metres / second (m\xb2/s). |\n| m3 |  | Volume in cubic metres (m\xb3). |\n| m3Compensated |  | Volume, cubic metres, with the value compensated for weather effects. |\n| m3Perh |  | Volumetric flow rate, cubic metres per hour. |\n| m3Perkg |  | Specific volume, cubic metres per kilogram, v. |\n| m3Pers |  | Volumetric flow rate in cubic metres per second (m\xb3/s). |\n| m3Uncompensated |  | Volume, cubic metres, with the value uncompensated for weather effects. |\n| mPerm3 |  | Fuel efficiency in metres per cubic metres (m/m\xb3). |\n| mPers |  | Velocity in metres per second (m/s). |\n| mPers2 |  | Acceleration in metres per second squared (m/s\xb2). |\n| min |  | Time in minutes, minute  = 60 s. |\n| mmHg |  | Pressure, millimetres of mercury (1 mmHg is approximately 133.3 Pa). |\n| mol |  | Amount of substance in moles. |\n| molPerkg |  | Concentration, Molality, the amount of solute in moles and the amount of solvent in kilograms. |\n| molPerm3 |  | Concentration, The amount of substance concentration, (c), the amount of solvent in moles divided by the volume of solution in m\xb3. |\n| molPermol |  | Concentration, Molar fraction, the ratio of the molar amount of a solute divided by the molar amount of the solution. |\n| none |  | Dimension less quantity, e.g. count, per unit, etc. |\n| ohm |  | Electric resistance in ohms (V/A). |\n| ohmPerm |  | Electric resistance per length in ohms per metre ((V/A)/m). |\n| ohmm |  | Resistivity, ohm metres, (rho). |\n| onePerHz |  | Reciprocal of frequency (1/Hz). |\n| onePerm |  | Wavenumber, reciprocal metres,  (1/m). |\n| ppm |  | Concentration in parts per million. |\n| rad |  | Plane angle in radians (m/m). |\n| radPers |  | Angular velocity in radians per second (rad/s). |\n| radPers2 |  | Angular acceleration, radians per second squared. |\n| rev |  | Amount of rotation, revolutions. |\n| rotPers |  | Rotations per second (1/s). See also Hz (1/s). |\n| s |  | Time in seconds. |\n| sPers |  | Time, Ratio of time.  Note: Users may need to supply a prefix such as \u2018","\xb5","\u2019 to show rates such as \u2018","\xb5","s/s\u2019. |\n| sr |  | Solid angle in steradians (m2/m2). |\n| therm |  | Energy, therms. |\n| tonne |  | Mass in tons, \u201ctonne\u201d or \u201cmetric  ton\u201d (1000 kg = 1 Mg). |"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);