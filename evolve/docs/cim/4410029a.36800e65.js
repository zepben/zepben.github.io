(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=m(a),p=n,d=O["".concat(c,".").concat(p)]||O[p]||j[p]||b;return a?r.a.createElement(d,i({ref:t},o,{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},626:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),b=(a(0),a(2147)),c={title:"MarketInvoiceLineItem"},i={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",isDocsHomePage:!1,title:"MarketInvoiceLineItem",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketOpCommon\\MarketInvoiceLineItem.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",version:"current",sidebar:"docs",previous:{title:"MarketInvoice",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice"},next:{title:"MarketLedger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketLedger"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"An individual line item on an invoice.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"glAccount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"General Ledger account code, shall be a valid combination.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"glDateTime"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time line item will be posted to the General Ledger.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kind"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MktInvoiceLineItemKind"}),"MktInvoiceLineItemKind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of line item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lineAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Amount due for this line item.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lineNumber"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Line item number on invoice statement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lineVersion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Version number of the bill run.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"netAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Net line item charge amount.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"previousAmount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Previous line item charge amount.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"billPeriod"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval"}),"DateTimeInterval")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Bill period for the line item.")))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"None")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}),"MarketInvoiceLineItem"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}),"MarketInvoiceLineItem")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice"}),"MarketInvoice")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoiceLineItems"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoice"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}),"MarketInvoiceLineItem")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}),"MarketInvoiceLineItem")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ComponentMarketInvoiceLineItems"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContainerMarketInvoiceLineItem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}),"MarketInvoiceLineItem")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/Settlement"}),"Settlement")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoiceLineItem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Settlement"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}m.isMDXComponent=!0}}]);