(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=n.a.createContext({}),o=function(e){var t=n.a.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=o(e.components);return n.a.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=b(e,["components","mdxType","originalType","parentName"]),s=o(a),O=r,m=s["".concat(c,".").concat(O)]||s[O]||p[O]||i;return a?n.a.createElement(m,l({ref:t},f,{components:a})):n.a.createElement(m,l({ref:t},f))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var f=2;f<i;f++)c[f]=a[f];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},410:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),i=(a(0),a(2147)),c={title:"TariffProfile"},l={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",id:"cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",isDocsHomePage:!1,title:"TariffProfile",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\TariffProfile.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",version:"current",sidebar:"docs",previous:{title:"Shift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Shift"},next:{title:"Tender",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={rightToc:b};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"A schedule of charges; structure associated with Tariff that allows the definition of complex tarif structures such as step and time of use when used in conjunction with TimeTariffInterval and Charge. Inherited 'status.value' is defined in the context of the utility's business rules, for example: active, inactive, etc.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tariffCycle"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The frequency at which the tariff charge schedule is repeated. Examples are: once off on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc. At the end of each cycle, the business rules are reset to start from the beginning again.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Common/Document"}),"Document"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/Tariff"}),"Tariff"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/Tariff"}),"Tariff")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TariffProfile"}),"TariffProfile")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tariffs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariffs defined by this tariff profile."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles using this tariff.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TariffProfile"}),"TariffProfile")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"}),"ConsumptionTariffInterval")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this consumption tariff interval."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All consumption tariff intervals used to define this tariff profile.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TariffProfile"}),"TariffProfile")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval"}),"TimeTariffInterval")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this time tariff interval."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TimeTariffIntervals"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All time tariff intervals used to define this tariff profile.")))))}o.isMDXComponent=!0}}]);