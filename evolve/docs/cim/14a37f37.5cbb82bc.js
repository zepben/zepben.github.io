(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(2147)),b={title:"ErpInvoice"},i={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice",isDocsHomePage:!1,title:"ErpInvoice",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfERPSupport\\ErpInvoice.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice",version:"current",sidebar:"docs",previous:{title:"ErpInventoryCount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInventoryCount"},next:{title:"ErpInvoiceKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoiceKind"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"A roll up of invoice line items. The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products."),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Total amount due on this invoice based on line items and applicable adjustments.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"billMediaKind"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/BillMediaKind"}),"BillMediaKind")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of media by which the CustomerBillingInfo was delivered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dueDate"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Date"}),"Date")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculated date upon which the Invoice amount is due.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoiceKind"}),"ErpInvoiceKind")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of invoice (default is 'sales').")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mailedDate"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Date"}),"Date")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date on which the customer billing statement/invoice was printed/mailed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"proForma"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated. EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"referenceNumber"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of an invoice to be reference by this invoice.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"transactionDateTime"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time when the invoice is issued.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"transferType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of invoice transfer.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpDocument"}),"ErpDocument"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoiceLineItem"}),"ErpInvoiceLineItem"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice"}),"ErpInvoice")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CustomerAccount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpInvoicees"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoiceLineItem"}),"ErpInvoiceLineItem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpInvoice"}),"ErpInvoice")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpInvoiceLineItems"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpInvoice"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(b,".").concat(d)]||O[d]||j[d]||c;return a?r.a.createElement(m,i({ref:t},l,{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);