(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{2146:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(r),O=a,d=p["".concat(o,".").concat(O)]||p[O]||u[O]||c;return r?n.a.createElement(d,i({ref:t},l,{components:r})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},831:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),c=(r(0),r(2146)),o={title:"Due"},i={unversionedId:"Model/TC57CIM/IEC61968/PaymentMetering/Due",id:"Model/TC57CIM/IEC61968/PaymentMetering/Due",isDocsHomePage:!1,title:"Due",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61968\\PaymentMetering\\Due.md",slug:"/Model/TC57CIM/IEC61968/PaymentMetering/Due",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/Due",version:"current",sidebar:"docs",previous:{title:"BankAccountDetail",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/BankAccountDetail"},next:{title:"LineDetail",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61968/PaymentMetering/LineDetail"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"Details on amounts due for an account.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"arrears"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of 'current' that constitutes the arrears portion.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"charges"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of 'current' that constitutes the charge portion: 'charges' = 'Charge.fixedPortion' + 'Charge.variablePortion'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"current"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Current total amount now due: current = principle + arrears + interest + charges. Typically the rule for settlement priority is: interest dues, then arrears dues, then current dues, then charge dues.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"interest"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of 'current' that constitutes the interest portion.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"principle"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Money"}),"Money")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of 'current' that constitutes the portion of the principle amount currently due.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"None")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("p",null,"None"))}s.isMDXComponent=!0}}]);