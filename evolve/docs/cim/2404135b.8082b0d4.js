(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{2198:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2199:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),b=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=b(a),p=n,O=m["".concat(i,".").concat(p)]||m[p]||u[p]||c;return a?r.a.createElement(O,o({ref:e},s,{components:a})):r.a.createElement(O,o({ref:e},s))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2200:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2198),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2201),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,u,m=t.isNavLink,p=t.to,O=t.href,d=t.activeClassName,j=t.isActive,f=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,g=void 0===h||h,y=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),C=p||O,M=Object(i.a)(C),T=null==C?void 0:C.replace("pathname://",""),I=void 0!==T?(a=T,g&&function(t){return t.startsWith("/")}(a)?v(a):a):void 0,w=Object(n.useRef)(!1),A=m?c.e:c.c,k=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&M&&window.docusaurus.prefetch(I),function(){k&&u&&u.disconnect()}}),[I,k,M]);var E=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,P=!I||!M||E;return I&&M&&!E&&!f&&N.collectLink(I),P?r.a.createElement("a",Object.assign({href:I},C&&!M&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(A,Object.assign({},y,{onMouseEnter:function(){w.current||(window.docusaurus.preload(I),w.current=!0)},innerRef:function(t){var e,a;k&&t&&M&&(e=t,a=function(){window.docusaurus.prefetch(I)},(u=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),a())}))}))).observe(e))},to:I||""},m&&{isActive:j,activeClassName:d}))}},2201:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2198);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+b:b}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},397:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(2199)),i=a(2200),o={title:"MerchantAccount",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",id:"cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",isDocsHomePage:!1,title:"MerchantAccount",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\MerchantAccount.mdx",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",version:"current",sidebar:"docs",previous:{title:"ConsumptionTariffInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval"},next:{title:"MerchantAgreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAgreement"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The operating account controlled by merchant agreement, against which the vendor may vend tokens or receipt payments. Transactions via vendor shift debit the account and bank deposits via bank statement credit the account.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"currentBalance"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The current operating balance of this account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"provisionalBalance"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The balance of this account after taking into account any pending debits from VendorShift.merchantDebitAmount and pending credits from BankStatement.merchantCreditAmount or credits (see also BankStatement attributes and VendorShift attributes).")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",mdxType:"Link"},"MerchantAccount")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Transactor",mdxType:"Link"},"Transactor")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MerchantAccounts"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All merchant accounts registered with this transactor."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transactors"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All transactors this merchant account is registered with.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",mdxType:"Link"},"MerchantAccount")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/VendorShift",mdxType:"Link"},"VendorShift")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MerchantAccount"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Merchant account this vendor shift periodically debits (based on aggregated transactions)."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"VendorShifts"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All vendor shifts that operate on this merchant account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAgreement",mdxType:"Link"},"MerchantAgreement")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAccount",mdxType:"Link"},"MerchantAccount")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MerchantAgreement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Merchant agreement that instantiated this merchant account."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MerchantAccounts"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All merchant accounts instantiated as a result of this merchant agreement.")))))}u.isMDXComponent=!0}}]);