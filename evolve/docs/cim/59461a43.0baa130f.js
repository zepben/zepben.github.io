(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,m=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=o(a),j=r,p=s["".concat(m,".").concat(j)]||s[j]||O[j]||c;return a?n.a.createElement(p,i({ref:t},b,{components:a})):n.a.createElement(p,i({ref:t},b))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,m=new Array(c);m[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var b=2;b<c;b++)m[b]=a[b];return n.a.createElement.apply(null,m)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},812:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),c=(a(0),a(2160)),m={title:"CustomerAgreement"},i={unversionedId:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",id:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",isDocsHomePage:!1,title:"CustomerAgreement",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Customers\\CustomerAgreement.md",slug:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",version:"current",sidebar:"docs",previous:{title:"CustomerAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAccount"},next:{title:"CustomerKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Agreement between the customer and the service supplier to pay for service at a specific service location. It records certain billing information about the type of service provided at the service location and is used during charge creation to determine the type of service.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isPrePay"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, the customer is a pre-pay customer for the specified service.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"loadMgmt"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Load management code.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"shutOffDateTime"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Final date and time the service will be billed to the previous customer.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Common/Agreement"}),"Agreement"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/Customer"}),"Customer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer for this agreement."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All agreements of this customer.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAccount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer account owning this agreement."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All agreements for this customer account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/PricingStructure"}),"PricingStructure")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements with this pricing structure."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PricingStructures"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All pricing structures applicable to this customer agreement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/ServiceCategory"}),"ServiceCategory")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements with this service category."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceCategory"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service category for this agreement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/ServiceLocation"}),"ServiceLocation")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements regulating this service location."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceLocations"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service locations regulated by this customer agreement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement regulating this service delivery point."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service delivery points regulated by this customer agreement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement"}),"AuxiliaryAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement this (non-service related) auxiliary agreement refers to."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All (non-service related) auxiliary agreements that refer to this customer agreement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCustomers/StandardIndustryCode"}),"StandardIndustryCode")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StandardIndustryCode"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/DemandResponseProgram"}),"DemandResponseProgram")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DemandResponsePrograms"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All demand response programs the customer is enrolled in through this customer agreement."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements through which the customer is enrolled in this demand response program.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/MeterReading"}),"MeterReading")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MeterReadings"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(could be deprecated in the future) All meter readings for this customer agreement."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(could be deprecated in the future) Customer agreement for this meter reading.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier"}),"ServiceSupplier")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceSupplier"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service supplier for this customer agreement."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements of this service supplier.")))))}o.isMDXComponent=!0}}]);