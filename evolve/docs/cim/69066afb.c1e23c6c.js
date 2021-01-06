(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,j=m["".concat(b,".").concat(p)]||m[p]||O[p]||c;return a?n.a.createElement(j,i({ref:t},o,{components:a})):n.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},926:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),c=(a(0),a(2147)),b={title:"Tender"},i={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/Tender",id:"cim100/TC57CIM/IEC61968/PaymentMetering/Tender",isDocsHomePage:!1,title:"Tender",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\Tender.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/Tender",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Tender",version:"current",sidebar:"docs",previous:{title:"TariffProfile",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile"},next:{title:"TimeTariffInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Tender is what is \"offered\" by the customer towards making a payment and is often more than the required payment (hence the need for 'change'). The payment is thus that part of the Tender that goes towards settlement of a particular transaction."),Object(c.b)("p",null,"Tender is modelled as an aggregation of Cheque and Card. Both these tender types can exist in a single tender bid thus 'accountHolderName' has to exist separately in each of Cheque and Card as each could have a different account holder name.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"amount"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Amount tendered by customer.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"change"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Difference between amount tendered by customer and the amount charged by point of sale.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/TenderKind"}),"TenderKind")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Kind of tender from customer.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Card"}),"Card"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Cheque"}),"Cheque"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Card"}),"Card")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"}),"Tender")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Card"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Card used to tender payment."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tender"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Payment tender this card is being used for.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Cheque"}),"Cheque")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"}),"Tender")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cheque"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cheque used to tender payment."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tender"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Payment tender the cheque is being used for.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"}),"Tender")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/Receipt"}),"Receipt")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tenders"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All payments received in the form of tenders recorded by this receipt."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Receipt"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Receipt that recorded this receiving of a payment in the form of tenders.")))))}d.isMDXComponent=!0}}]);