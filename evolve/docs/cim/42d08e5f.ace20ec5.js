(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{2181:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2182:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),O=r,f=p["".concat(i,".").concat(O)]||p[O]||b[O]||o;return a?n.a.createElement(f,c({ref:t},l,{components:a})):n.a.createElement(f,c({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2183:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),i=a(2181),c=a(8),s=Object(r.createContext)({collectLink:function(){}}),l=a(2184),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,b,p=e.isNavLink,O=e.to,f=e.href,d=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,k=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,M=Object(r.useContext)(s),h=O||f,C=Object(i.a)(h),N=null==h?void 0:h.replace("pathname://",""),E=void 0!==N?(a=N,v&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,R=Object(r.useRef)(!1),w=p?o.e:o.c,x=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&C&&window.docusaurus.prefetch(E),function(){x&&b&&b.disconnect()}}),[E,x,C]);var P=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,I=!E||!C||P;return E&&C&&!P&&!j&&M.collectLink(E),I?n.a.createElement("a",Object.assign({href:E},h&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):n.a.createElement(w,Object.assign({},k,{onMouseEnter:function(){R.current||(window.docusaurus.preload(E),R.current=!0)},innerRef:function(e){var t,a;x&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(E)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:E||""},p&&{isActive:m,activeClassName:d}))}},2184:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2181);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},637:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(2182)),i=a(2183),c={title:"ExPostMarketRegion"},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",isDocsHomePage:!1,title:"ExPostMarketRegion",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\ExPostMarketRegion.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",version:"current",sidebar:"docs",previous:{title:"ExPostMarketRegionResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegionResults"},next:{title:"ExPostLossResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostLossResults"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Model of ex-post calculation of cleared MW on a regional basis."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",mdxType:"Link"},"MarketFactors"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegionResults",mdxType:"Link"},"ExPostMarketRegionResults")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",mdxType:"Link"},"ExPostMarketRegion")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ExPostMarketRegionResults"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ExPostMarketRegion"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}b.isMDXComponent=!0}}]);