(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{2160:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var O=n.a.createContext({}),j=function(t){var e=n.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):b({},e,{},t)),a},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,O=l(t,["components","mdxType","originalType","parentName"]),m=j(a),s=r,p=m["".concat(i,".").concat(s)]||m[s]||o[s]||c;return a?n.a.createElement(p,b({ref:e},O,{components:a})):n.a.createElement(p,b({ref:e},O))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=m;var b={};for(var l in e)hasOwnProperty.call(e,l)&&(b[l]=e[l]);b.originalType=t,b.mdxType="string"==typeof t?t:r,i[1]=b;for(var O=2;O<c;O++)i[O]=a[O];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},601:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return j}));var r=a(3),n=a(7),c=(a(0),a(2160)),i={title:"Transaction"},b={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/Transaction",id:"cim100/TC57CIM/IEC61968/PaymentMetering/Transaction",isDocsHomePage:!1,title:"Transaction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\Transaction.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction",version:"current",sidebar:"docs",previous:{title:"TimeTariffInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval"},next:{title:"Transactor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Transactor"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:l};function j(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The record of details of payment for service or token sale.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"diverseReference"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Formal reference for use with diverse payment (traffic fine for example).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"donorReference"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reference to the entity that is the source of 'amount' (for example: customer for token purchase; or supplier for free issue token).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/TransactionKind"}),"TransactionKind")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Kind of transaction.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"line"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/LineDetail"}),"LineDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transaction amount, rounding, date and note for this transaction line.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"receiverReference"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reference to the entity that is the recipient of 'amount' (for example, supplier for service charge payment; or tax receiver for VAT).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reversedId"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(if 'kind' is transactionReversal) Reference to the original transaction that is being reversed by this transaction.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"serviceUnitsEnergy"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/RealEnergy"}),"RealEnergy")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Actual amount of service units that is being paid for.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"serviceUnitsError"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/RealEnergy"}),"RealEnergy")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Number of service units not reflected in 'serviceUnitsEnergy' due to process rounding or truncating errors.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/UserAttribute"}),"UserAttribute")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UserAttributes"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All snapshots of meter parameters recorded at the time of this transaction. Use 'name' and 'value.value' attributes to specify name and value of a parameter from meter."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transaction"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transaction for which this snapshot has been recorded.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAccount"}),"CustomerAccount")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAccount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer account for this payment transaction."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PaymentTransactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All payment transactions for this customer account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Customers/PricingStructure"}),"PricingStructure")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PricingStructure"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Pricing structure applicable for this transaction."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transactions applying this pricing structure.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount"}),"AuxiliaryAccount")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAccount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Auxiliary account for this payment transaction."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PaymentTransactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All payments against this account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/CashierShift"}),"CashierShift")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CashierShift"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cashier shift during which this transaction was recorded."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transactions recorded during this cashier shift.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Receipt"}),"Receipt")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Receipt"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The receipted payment for which this transaction has been recorded."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transactions recorded for this receipted payment.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/Meter"}),"Meter")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VendingTransactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All vending transactions on this meter."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Meter"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Meter for this vending transaction.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift"}),"VendorShift")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VendorShift"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Vendor shift during which this transaction was recorded."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transactions"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transactions recorded during this vendor shift.")))))}j.isMDXComponent=!0}}]);