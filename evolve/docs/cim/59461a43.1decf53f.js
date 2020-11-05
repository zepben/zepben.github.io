(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),O=o(a),j=r,p=O["".concat(c,".").concat(j)]||O[j]||s[j]||b;return a?n.a.createElement(p,l({ref:t},i,{components:a})):n.a.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},800:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),b=(a(0),a(2147)),c={title:"CustomerAgreement"},l={unversionedId:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",id:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",isDocsHomePage:!1,title:"CustomerAgreement",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Customers\\CustomerAgreement.md",slug:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",version:"current",sidebar:"docs",previous:{title:"CustomerAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAccount"},next:{title:"CustomerKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerKind"}},m=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:m};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Agreement between the customer and the service supplier to pay for service at a specific service location. It records certain billing information about the type of service provided at the service location and is used during charge creation to determine the type of service.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isPrePay"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, the customer is a pre-pay customer for the specified service.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"loadMgmt"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Load management code.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"shutOffDateTime"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Final date and time the service will be billed to the previous customer.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Common/Agreement"}),"Agreement"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/Customer"}),"Customer"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/DemandResponseProgram"}),"DemandResponseProgram"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterReading"}),"MeterReading"),"  "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier"}),"ServiceSupplier"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/Customer"}),"Customer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer for this agreement."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All agreements of this customer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAccount"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer account owning this agreement."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All agreements for this customer account.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/PricingStructure"}),"PricingStructure")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements with this pricing structure."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PricingStructures"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All pricing structures applicable to this customer agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/ServiceCategory"}),"ServiceCategory")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements with this service category."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceCategory"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service category for this agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/ServiceLocation"}),"ServiceLocation")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements regulating this service location."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceLocations"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service locations regulated by this customer agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/UsagePoint"}),"UsagePoint")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement regulating this service delivery point."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All service delivery points regulated by this customer agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement"}),"AuxiliaryAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement this (non-service related) auxiliary agreement refers to."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All (non-service related) auxiliary agreements that refer to this customer agreement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfCustomers/StandardIndustryCode"}),"StandardIndustryCode")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StandardIndustryCode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/DemandResponseProgram"}),"DemandResponseProgram")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DemandResponsePrograms"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All demand response programs the customer is enrolled in through this customer agreement."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements through which the customer is enrolled in this demand response program.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Metering/MeterReading"}),"MeterReading")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MeterReadings"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(could be deprecated in the future) All meter readings for this customer agreement."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(could be deprecated in the future) Customer agreement for this meter reading.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier"}),"ServiceSupplier")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ServiceSupplier"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Service supplier for this customer agreement."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreements"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All customer agreements of this service supplier.")))))}o.isMDXComponent=!0}}]);