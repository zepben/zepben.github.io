(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),O=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},j=function(e){var t=O(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),j=O(a),d=r,m=j["".concat(c,".").concat(d)]||j[d]||o[d]||b;return a?n.a.createElement(m,i({ref:t},l,{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},726:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return O}));var r=a(2),n=a(6),b=(a(0),a(2147)),c={title:"ErpLedgerEntry"},i={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry",isDocsHomePage:!1,title:"ErpLedgerEntry",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfERPSupport\\ErpLedgerEntry.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry",version:"current",sidebar:"docs",previous:{title:"ErpLedgerBudget",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerBudget"},next:{title:"ErpPOLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpPOLineItem"}},p=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:p};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"class-description"},"Class Description"),Object(b.b)("p",null,"Details of an individual entry in a ledger, which was posted from a journal on the posted date.  "),Object(b.b)("h3",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"transactionDateTime"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Date and time journal entry was recorded.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"accountID"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Account identifier for this entry.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"accountKind"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpAccountKind"}),"ErpAccountKind")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Kind of account for this entry.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"amount"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The amount of the debit or credit for this account.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"postedDateTime"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Date and time this entry was posted to the ledger.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"status"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/Status"}),"Status")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"relationships"},"Relationships"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpIdentifiedObject"}),"ErpIdentifiedObject"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedger"}),"ErpLedger"),"  ")),Object(b.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(b.b)("h3",{id:"associations"},"Associations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedger"}),"ErpLedger")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry"}),"ErpLedgerEntry")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedger"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedgerEntries"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry"}),"ErpLedgerEntry")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/UserAttribute"}),"UserAttribute")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedgerEntries"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"UserAttributes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry"}),"ErpLedgerEntry")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpJournalEntry"}),"ErpJournalEntry")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedgerEntry"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpJounalEntry"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedgerEntry"}),"ErpLedgerEntry")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpLedBudLineItem"}),"ErpLedBudLineItem")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedBudLineItem"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpLedgerEntry"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);