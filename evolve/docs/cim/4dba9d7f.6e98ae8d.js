(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{2147:function(t,e,a){"use strict";a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return o}));var b=a(0),n=a.n(b);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,b,n=function(t,e){if(null==t)return{};var a,b,n={},c=Object.keys(t);for(b=0;b<c.length;b++)a=c[b],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)a=c[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var O=n.a.createContext({}),j=function(t){var e=n.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):r({},e,{},t)),a},m=function(t){var e=j(t.components);return n.a.createElement(O.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},p=Object(b.forwardRef)((function(t,e){var a=t.components,b=t.mdxType,c=t.originalType,l=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),m=j(a),p=b,o=m["".concat(l,".").concat(p)]||m[p]||d[p]||c;return a?n.a.createElement(o,r({ref:e},O,{components:a})):n.a.createElement(o,r({ref:e},O))}));function o(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=a.length,l=new Array(c);l[0]=p;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r.mdxType="string"==typeof t?t:b,l[1]=r;for(var O=2;O<c;O++)l[O]=a[O];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},694:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return r})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return j}));var b=a(2),n=a(6),c=(a(0),a(2147)),l={title:"PssIEEE4B"},r={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",isDocsHomePage:!1,title:"PssIEEE4B",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\PssIEEE4B.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",version:"current",sidebar:"docs",previous:{title:"PssIEEE3B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B"},next:{title:"Pss1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss1"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"IEEE 421.5-2005 type PSS4B power system stabilizer. The PSS4B model represents a structure based on multiple working frequency bands. Three separate bands, respectively dedicated to the low-, intermediate- and high-frequency modes of oscillations, are used in this delta omega (speed input) PSS."),Object(c.b)("p",null,"There is an error in the in IEEE 421.5-2005 PSS4B model: the ",Object(c.b)("i",null,"Pe")," input should read \u2013",Object(c.b)("i",null,"Pe"),". This implies that the input ",Object(c.b)("i",null,"Pe")," needs to be multiplied by -1."),Object(c.b)("p",null,"Reference: IEEE 4B 421.5-2005, 8.4. "),Object(c.b)("p",null,"Parameter details:"),Object(c.b)("p",null,"This model has 2 input signals. They have the following fixed types (expressed in terms of InputSignalKind values): the first one is of rotorAngleFrequencyDeviation type and the second one is of generatorElectricalPower type."),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwh1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (high-frequency band): three dB bandwidth (",Object(c.b)("i",null,"B"),Object(c.b)("i",null,Object(c.b)("sub",null,"wi")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwh2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (high-frequency band): three dB bandwidth (",Object(c.b)("i",null,"B"),Object(c.b)("i",null,Object(c.b)("sub",null,"wi")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwl1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (low-frequency band): three dB bandwidth (",Object(c.b)("i",null,"B"),Object(c.b)("i",null,Object(c.b)("sub",null,"wi")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwl2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (low-frequency band): three dB bandwidth (",Object(c.b)("i",null,"B"),Object(c.b)("i",null,Object(c.b)("sub",null,"wi")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"H")),").  Typical value = 120.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"H1")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"H11")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh17"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"H17")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"H2")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"I")),").  Typical value = 30.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"I1")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"I11")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki17"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"I17")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"I2")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"L")),").  Typical value = 7.5.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"L1")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"L11")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl17"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band first lead-lag blocks coefficient (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"L17")),").  Typical value = 1.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band differential filter gain (",Object(c.b)("i",null,"K"),Object(c.b)("i",null,Object(c.b)("sub",null,"L2")),").  Typical value = 66.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganh1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (high-frequency band): filter frequency (",Object(c.b)("i",null,"omega"),Object(c.b)("i",null,Object(c.b)("sub",null,"ni")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganh2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (high-frequency band): filter frequency (",Object(c.b)("i",null,"omega"),Object(c.b)("i",null,Object(c.b)("sub",null,"ni")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganl1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (low-frequency band): filter frequency (",Object(c.b)("i",null,"omega"),Object(c.b)("i",null,Object(c.b)("sub",null,"ni")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganl2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (low-frequency band): filter frequency (",Object(c.b)("i",null,"omega"),Object(c.b)("i",null,Object(c.b)("sub",null,"ni")),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H1")),") (",">","= 0).  Typical value = 0,01513.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th10"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H10")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H11")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th12"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H12")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H2")),") (",">","= 0).  Typical value = 0,01816.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H3")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H4")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H5")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H6")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th7"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H7")),") (",">","= 0).  Typical value = 0,01816.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th8"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H8")),") (",">","= 0).  Typical value = 0,02179.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th9"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"H9")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I1")),") (",">","= 0).  Typical value = 0,173.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti10"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I10")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I11")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti12"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I12")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I2")),") (",">","= 0).  Typical value = 0,2075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I3")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I4")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I5")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I6")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti7"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I7")),") (",">","= 0).  Typical value = 0,2075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti8"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I8")),") (",">","= 0).  Typical value = 0,2491.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti9"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"I9")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L1")),") (",">","= 0).  Typical value = 1,73.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl10"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L10")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl11"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L11")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl12"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L12")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl2"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L2")),") (",">","= 0).  Typical value = 2,075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl3"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L3")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L4")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L5")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L6")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl7"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L7")),") (",">","= 0).  Typical value = 2,075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl8"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L8")),") (",">","= 0).  Typical value = 2,491.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl9"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(c.b)("i",null,"T"),Object(c.b)("i",null,Object(c.b)("sub",null,"L9")),") (",">","= 0).  Typical value = 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vhmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band output maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Hmax")),") (",">"," PssIEEE4B.vhmin).  Typical value = 0,6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vhmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band output minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Hmin")),") (","<"," PssIEEE4V.vhmax).  Typical value = -0,6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vimax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band output maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Imax")),") (",">"," PssIEEE4B.vimin).  Typical value = 0,6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vimin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band output minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Imin")),") (","<"," PssIEEE4B.vimax).  Typical value = -0,6.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vlmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band output maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Lmax")),") (",">"," PssIEEE4B.vlmin).  Typical value = 0,075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vlmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band output minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"Lmin")),") (","<"," PssIEEE4B.vlmax).  Typical value = -0,075.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmax"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PSS output maximum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"STmax")),") (",">"," PssIEEE4B.vstmin).  Typical value = 0,15.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmin"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PSS output minimum limit (",Object(c.b)("i",null,"V"),Object(c.b)("i",null,Object(c.b)("sub",null,"STmin")),") (","<"," PssIEEE4B.vstmax).  Typical value = -0,15.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}j.isMDXComponent=!0}}]);