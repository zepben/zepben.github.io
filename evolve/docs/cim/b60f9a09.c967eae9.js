(window.webpackJsonp=window.webpackJsonp||[]).push([[1525],{1594:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2180)),c=a(2181),o={title:"MarketInvoice"},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",isDocsHomePage:!1,title:"MarketInvoice",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketOpCommon\\MarketInvoice.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",version:"current",sidebar:"docs",previous:{title:"CRRSegment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CRRSegment"},next:{title:"MarketInvoiceLineItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A roll up of invoice line items. The whole invoice has a due date and amount to be paid, with information such as customer, banks etc. being obtained through associations. The invoice roll up is based on individual line items that each contain amounts and descriptions for specific services or products."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amount"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Total amount due on this invoice based on line items and applicable adjustments.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"billMediaKind"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MktBillMediaKind",mdxType:"Link"},"MktBillMediaKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of media by which the CustomerBillingInfo was delivered.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dueDate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculated date upon which the Invoice amount is due.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kind"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/MktAccountKind",mdxType:"Link"},"MktAccountKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kind of invoice (default is 'sales').")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mailedDate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date on which the customer billing statement/invoice was printed/mailed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"proForma"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if payment is to be paid by a Customer to accept a particular ErpQuote (with associated Design) and have work initiated, at which time an associated ErpInvoice should automatically be generated. EprPayment.subjectStatus satisfies terms specificed in the ErpQuote.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"referenceNumber"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of an invoice to be reference by this invoice.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"transactionDateTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time when the invoice is issued.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"transferType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of invoice transfer.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",mdxType:"Link"},"MarketInvoice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/MajorChargeGroup",mdxType:"Link"},"MajorChargeGroup")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoice"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MajorChargeGroup"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoiceLineItem",mdxType:"Link"},"MarketInvoiceLineItem")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MarketInvoice",mdxType:"Link"},"MarketInvoice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoiceLineItems"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MarketInvoice"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),O=s(a),m=n,d=O["".concat(c,".").concat(m)]||O[m]||p[m]||i;return a?r.a.createElement(d,o({ref:t},b,{components:a})):r.a.createElement(d,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2182),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,O=e.isNavLink,m=e.to,d=e.href,j=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,C=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,h=Object(n.useContext)(l),y=m||d,k=Object(c.a)(y),M=null==y?void 0:y.replace("pathname://",""),I=void 0!==M?(a=M,v&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,T=Object(n.useRef)(!1),w=O?i.e:i.c,E=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&k&&window.docusaurus.prefetch(I),function(){E&&p&&p.disconnect()}}),[I,E,k]);var D=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,L=!I||!k||D;return I&&k&&!D&&!f&&h.collectLink(I),L?r.a.createElement("a",Object.assign({href:I},y&&!k&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(w,Object.assign({},C,{onMouseEnter:function(){T.current||(window.docusaurus.preload(I),T.current=!0)},innerRef:function(e){var t,a;E&&e&&k&&(t=e,a=function(){window.docusaurus.prefetch(I)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:I||""},O&&{isActive:u,activeClassName:j}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);