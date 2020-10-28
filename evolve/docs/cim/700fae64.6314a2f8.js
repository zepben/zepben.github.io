(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),m=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=m(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=m(a),p=r,O=s["".concat(i,".").concat(p)]||s[p]||d[p]||c;return a?n.a.createElement(O,b({ref:t},o,{components:a})):n.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},958:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(2),n=a(6),c=(a(0),a(2146)),i={title:"AuxiliaryAgreement"},b={unversionedId:"Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",id:"Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",isDocsHomePage:!1,title:"AuxiliaryAgreement",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61968\\PaymentMetering\\AuxiliaryAgreement.md",slug:"/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",version:"current",sidebar:"docs",previous:{title:"AuxiliaryAccount",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount"},next:{title:"Card",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/Card"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"An ad-hoc auxiliary account agreement associated with a customer agreement, not part of the customer's account, but typically subject to formal agreement between customer and supplier (utility). Typically this is used to collect revenue owed by the customer for other services or arrears accrued with the utility for other services. It is typically linked to a prepaid token purchase transaction, thus forcing the customer to make a payment towards settlement of the auxiliary account balance whenever the customer needs to purchase a prepaid token for electricity."),Object(c.b)("p",null,"The present status of the auxiliary agreement can be defined in the context of the utility's business rules, for example: enabled, disabled, pending, over recovered, under recovered, written off, etc.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"arrearsInterest"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PerCent"}),"PerCent")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The interest per annum to be charged prorata on 'AuxiliaryAccount.dueArrears' at the end of each 'payCycle'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"auxCycle"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The frequency for automatically recurring auxiliary charges, where 'AuxiliaryAccount.initialCharge' is recursively added to 'AuxiliaryAccount.dueCurrent' at the start of each 'auxCycle'. For example: on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"auxPriorityCode"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The coded priority indicating the priority that this auxiliary agreement has above other auxiliary agreements (associated with the same customer agreement) when it comes to competing for settlement from a payment transaction or token purchase.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fixedAmount"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The fixed amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement. Note that there may be multiple tokens vended per vending transaction, but this is not relevant.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minAmount"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The minimum amount that has to be paid at any transaction towards settling this auxiliary agreement or reducing the balance.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"payCycle"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The contractually expected payment frequency (by the customer). Examples are: ad-hoc; on specified date; hourly, daily, weekly, monthly. etc.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"subType"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Sub-classification of the inherited 'type' for this AuxiliaryAgreement.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vendPortion"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PerCent"}),"PerCent")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are not in arrears. Note that there may be multiple tokens vended per vending transaction, but this is not relevant.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vendPortionArrear"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PerCent"}),"PerCent")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The percentage of the transaction amount that has to be collected from each vending transaction towards settlement of this auxiliary agreement when payments are in arrears. Note that there may be multiple tokens vended per vending transaction, but this is not relevant.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Common/Agreement"}),"Agreement"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement"}),"AuxiliaryAgreement")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CustomerAgreement"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Customer agreement this (non-service related) auxiliary agreement refers to."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAgreements"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All (non-service related) auxiliary agreements that refer to this customer agreement.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement"}),"AuxiliaryAgreement")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount"}),"AuxiliaryAccount")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAgreement"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Auxiliary agreement regulating this account."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAccounts"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All auxiliary accounts regulated by this agreement.")))))}m.isMDXComponent=!0}}]);