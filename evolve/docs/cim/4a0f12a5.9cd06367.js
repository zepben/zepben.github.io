(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{2195:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2196:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?n.a.createElement(f,o({ref:t},l,{components:a})):n.a.createElement(f,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2197:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2195),o=a(8),s=Object(r.createContext)({collectLink:function(){}}),l=a(2198),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,u,p=e.isNavLink,d=e.to,f=e.href,O=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,C=void 0===h||h,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,y=Object(r.useContext)(s),N=d||f,w=Object(c.a)(N),I=null==N?void 0:N.replace("pathname://",""),E=void 0!==I?(a=I,C&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,T=Object(r.useRef)(!1),P=p?i.e:i.c,M=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!M&&w&&window.docusaurus.prefetch(E),function(){M&&u&&u.disconnect()}}),[E,M,w]);var k=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!w||k;return E&&w&&!k&&!m&&y.collectLink(E),x?n.a.createElement("a",Object.assign({href:E},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(P,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(E),T.current=!0)},innerRef:function(e){var t,a;M&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(E)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:E||""},p&&{isActive:j,activeClassName:O}))}},2198:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2195);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},686:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(2196)),c=a(2197),o={title:"Cashier",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/Cashier",id:"cim100/TC57CIM/IEC61968/PaymentMetering/Cashier",isDocsHomePage:!1,title:"Cashier",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\Cashier.mdx",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/Cashier",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Cashier",version:"current",sidebar:"docs",previous:{title:"Card",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Card"},next:{title:"CashierShift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/CashierShift"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The operator of the point of sale for the duration of CashierShift. Cashier is under the exclusive management control of Vendor.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"electronicAddress"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/ElectronicAddress",mdxType:"Link"},"ElectronicAddress")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Electronic address.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Cashier",mdxType:"Link"},"Cashier")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/CashierShift",mdxType:"Link"},"CashierShift")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cashier"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cashier operating this shift."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CashierShifts"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All shifts operated by this cashier.")))))}u.isMDXComponent=!0}}]);