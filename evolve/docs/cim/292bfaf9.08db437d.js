(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{2170:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,f=p["".concat(i,".").concat(m)]||p[m]||O[m]||c;return a?r.a.createElement(f,o({ref:t},b,{components:a})):r.a.createElement(f,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2170),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2173),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,O,p=e.isNavLink,m=e.to,f=e.href,j=e.activeClassName,d=e.isActive,u=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,C=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(b.b)().withBaseUrl,N=Object(n.useContext)(l),v=m||f,T=Object(i.a)(v),I=null==v?void 0:v.replace("pathname://",""),M=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,w=Object(n.useRef)(!1),P=p?c.e:c.c,x=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&T&&window.docusaurus.prefetch(M),function(){x&&O&&O.disconnect()}}),[M,x,T]);var E=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,k=!M||!T||E;return M&&T&&!E&&!u&&N.collectLink(M),k?r.a.createElement("a",Object.assign({href:M},v&&!T&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(P,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(M),w.current=!0)},innerRef:function(e){var t,a;x&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(M)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),a())}))}))).observe(t))},to:M||""},p&&{isActive:d,activeClassName:j}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2170);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},376:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(2171)),i=a(2172),o={title:"Charge"},l={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/Charge",id:"cim100/TC57CIM/IEC61968/PaymentMetering/Charge",isDocsHomePage:!1,title:"Charge",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\Charge.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",version:"current",sidebar:"docs",previous:{title:"CashierShift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/CashierShift"},next:{title:"Cheque",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Cheque"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A charge element associated with other entities such as tariff structures, auxiliary agreements or other charge elements. The total charge amount applicable to this instance of charge is the sum of fixed and variable portion.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fixedPortion"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",mdxType:"Link"},"AccountingUnit")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The fixed portion of this charge element.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ChargeKind",mdxType:"Link"},"ChargeKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The kind of charge to be applied.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variablePortion"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The variable portion of this charge element, calculated as a percentage of the total amount of a parent charge.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount",mdxType:"Link"},"AuxiliaryAccount")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AuxiliaryAccounts"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All auxiliary accounts to which this charge has to be levied."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Charges"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All charges levied on this account.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ParentCharge"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Parent of this charge sub-component."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ChildCharges"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All sub-components of this complex charge.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tariff intervals to which this consumption-based charge has to be levied."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Charges"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All charges used to define this consumption tariff interval.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TimeTariffIntervals"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tariff intervals to which this time-based charge has to be levied."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Charges"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All charges used to define this time tariff interval.")))))}O.isMDXComponent=!0}}]);