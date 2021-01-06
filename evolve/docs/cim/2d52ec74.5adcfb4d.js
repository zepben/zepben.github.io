(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),m=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=m(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},C=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),O=m(a),C=r,p=O["".concat(c,".").concat(C)]||O[C]||s[C]||i;return a?n.a.createElement(p,l({ref:t},o,{components:a})):n.a.createElement(p,l({ref:t},o))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=C;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}C.displayName="MDXCreateElement"},411:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var r=a(2),n=a(6),i=(a(0),a(2147)),c={title:"BilateralExchangeActor"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor",id:"cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor",isDocsHomePage:!1,title:"BilateralExchangeActor",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\ICCPConfiguration\\BilateralExchangeActor.md",slug:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor",version:"current",sidebar:"docs",previous:{title:"ApplicationSecurityKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ApplicationSecurityKind"},next:{title:"BilateralExchangeAgreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeAgreement"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:b};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"BilateralExchangeActor describes an actor that provides ICCP data, consumes ICCP data or both. The ICCP data provider lists the data it makes available to an ICCP data consumer.  This data is described by ProvidedBilateralPoints. The relation between an ICCP data provider and a consumer is established by a BilateralExchangeAgreement.  It is up to the ICCP data consumer to select what ProvidedBilateralPoints to use.  The selection made is not described in this information model.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"None  "),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeAgreement"}),"BilateralExchangeAgreement"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink"}),"CommunicationLink"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPVCC"}),"ICCPVCC"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPVirtualControlCentre"}),"ICCPVirtualControlCentre"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ProvidedBilateralPoint"}),"ProvidedBilateralPoint"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/SCADA/CommunicationLink"}),"CommunicationLink")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..n"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor"}),"BilateralExchangeActor")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CommunicationLink"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Communication addressing for a Bilateral Table used by a ICCP data provider or consumer."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BilateralExchangeActor"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ICCP data provider or consumer using communication addressing for a Bilateral table.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ProvidedBilateralPoint"}),"ProvidedBilateralPoint")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor"}),"BilateralExchangeActor")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProvidedBilateralIOPoint"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ICCP information in a Bilateral table that will be exposed to a remote peer."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BilateralExchangeActor"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remote peer that will receive ICCP information in a Bilateral table.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor"}),"BilateralExchangeActor")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeAgreement"}),"BilateralExchangeAgreement")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Provider"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Provider of information to a remote peer."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ProviderBilateralExchange"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Agreement to information provider.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeAgreement"}),"BilateralExchangeAgreement")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/BilateralExchangeActor"}),"BilateralExchangeActor")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConsumerBilateralExchange"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Agreement to information subscriber."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Consumer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Subscriber of information from a remote peer.")))))}m.isMDXComponent=!0}}]);