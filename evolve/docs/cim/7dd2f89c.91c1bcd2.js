(window.webpackJsonp=window.webpackJsonp||[]).push([[1037],{1095:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(2147)),b={title:"VendorShift"},i={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift",id:"cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift",isDocsHomePage:!1,title:"VendorShift",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\VendorShift.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift",version:"current",sidebar:"docs",previous:{title:"Vendor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Vendor"},next:{title:"SVC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWiresExt/SVC"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"The operating shift for a vendor during which the vendor may transact against the merchant's account. It aggregates transactions and receipts during the shift and periodically debits a merchant account. The totals in vendor shift should always be the sum of totals aggregated in all cashier shifts that were open under the particular vendor shift.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"merchantDebitAmount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The amount that is to be debited from the merchant account for this vendor shift. This amount reflects the sum(PaymentTransaction.transactionAmount).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"posted"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, merchantDebitAmount has been debited from MerchantAccount; typically happens at the end of VendorShift when it closes.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Shift"}),"Shift"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount"}),"MerchantAccount"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Vendor"}),"Vendor"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount"}),"MerchantAccount")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift"}),"VendorShift")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MerchantAccount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Merchant account this vendor shift periodically debits (based on aggregated transactions)."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"VendorShifts"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All vendor shifts that operate on this merchant account.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Vendor"}),"Vendor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift"}),"VendorShift")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Vendor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Vendor that opens and owns this vendor shift."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"VendorShifts"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All vendor shifts opened and owned by this vendor.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift"}),"VendorShift")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Receipt"}),"Receipt")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"VendorShift"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Vendor shift during which this receipt was recorded."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Receipts"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All receipts recorded during this vendor shift.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift"}),"VendorShift")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}),"Transaction")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"VendorShift"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Vendor shift during which this transaction was recorded."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transactions"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All transactions recorded during this vendor shift.")))))}d.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=d(a),m=n,j=O["".concat(b,".").concat(m)]||O[m]||s[m]||c;return a?r.a.createElement(j,i({ref:t},l,{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);