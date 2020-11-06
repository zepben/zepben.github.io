(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{2147:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=n.a.createContext({}),o=function(t){var e=n.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):b({},e,{},t)),a},p=function(t){var e=o(t.components);return n.a.createElement(s.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=o(a),m=r,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||i;return a?n.a.createElement(j,b({ref:e},s,{components:a})):n.a.createElement(j,b({ref:e},s))}));function j(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,c=new Array(i);c[0]=m;var b={};for(var l in e)hasOwnProperty.call(e,l)&&(b[l]=e[l]);b.originalType=t,b.mdxType="string"==typeof t?t:r,c[1]=b;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},925:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return b})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return o}));var r=a(2),n=a(6),i=(a(0),a(2147)),c={title:"TransmissionCapacity"},b={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",isDocsHomePage:!1,title:"TransmissionCapacity",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\ExternalInputs\\TransmissionCapacity.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity",version:"current",sidebar:"docs",previous:{title:"TransferInterfaceSolution",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransferInterfaceSolution"},next:{title:"TransmissionInterfaceRightEntitlement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionInterfaceRightEntitlement"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function o(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"This class models the transmission (either a transmission interface or a POR/POD pair) capacity including Total Transfer Capacity (TTC), Operating Transfer Capacity (OTC), and Capacity Benefit Margin (CBM)."),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"capacityBenefitMargin"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Capacity Benefit Margin (CBM) is used by Markets to calculate the transmission interface limits. This number could be manually or procedurally determined. The CBM is defined per transmission interface (branch group).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"operationalTransmissionCapacity"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) is the transmission capacity under the operating condition during a specific time period, incorporating the effects of derates and current settings of operation controls. The OTCs for all transmission interface (branch group) are always provided regardless of outage or switching conditions.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OTC15min_emergency"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) 15 minute Emergency Limit")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OTCemergency"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Operational Transmission Capacity (OTC) Emergency Limit.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POD"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"point of delivery")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POR"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"point of receipt")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"startOperatingDate"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Operating date ","&"," hour when the entitlement applies")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"totalTransmissionCapacity"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Total Transmission Capacity")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Flowgate"}),"Flowgate"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/GenericConstraints"}),"GenericConstraints"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/GenericConstraints"}),"GenericConstraints")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity"}),"TransmissionCapacity")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GenericConstraints"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionCapacity"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Flowgate"}),"Flowgate")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionCapacity"}),"TransmissionCapacity")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Flowgate"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionCapacity"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}o.isMDXComponent=!0}}]);