(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{2197:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2198:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),s=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},f=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),f=s(a),p=n,j=f["".concat(o,".").concat(p)]||f[p]||O[p]||c;return a?r.a.createElement(j,i({ref:e},b,{components:a})):r.a.createElement(j,i({ref:e},b))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,o=new Array(c);o[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2199:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(2197),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2200),s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,O,f=t.isNavLink,p=t.to,j=t.href,d=t.activeClassName,m=t.isActive,u=t["data-noBrokenLinkCheck"],C=t.autoAddBaseUrl,I=void 0===C||C,g=s(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,y=Object(n.useContext)(l),v=p||j,h=Object(o.a)(v),k=null==v?void 0:v.replace("pathname://",""),E=void 0!==k?(a=k,I&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,T=Object(n.useRef)(!1),w=f?c.e:c.c,M=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!M&&h&&window.docusaurus.prefetch(E),function(){M&&O&&O.disconnect()}}),[E,M,h]);var x=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,W=!E||!h||x;return E&&h&&!x&&!u&&y.collectLink(E),W?r.a.createElement("a",Object.assign({href:E},v&&!h&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(w,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(E),T.current=!0)},innerRef:function(t){var e,a;M&&t&&h&&(e=t,a=function(){window.docusaurus.prefetch(E)},(O=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.unobserve(e),O.disconnect(),a())}))}))).observe(e))},to:E||""},f&&{isActive:m,activeClassName:d}))}},2200:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o}));var n=a(23),r=a(2197);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return e+a;var s=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+s:s}(c,a,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},836:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(2198)),o=a(2199),i={title:"ContractorItem",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",isDocsHomePage:!1,title:"ContractorItem",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfWork\\ContractorItem.mdx",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",version:"current",sidebar:"docs",previous:{title:"ConditionFactorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ConditionFactorKind"},next:{title:"CostType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function O(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Contractor information for work task.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"activityCode"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Activity code identifies a specific and distinguishable unit of work.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bidAmount"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The amount that a given contractor will charge for performing this unit of work.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cost"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The total amount charged.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"status"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/Status",mdxType:"Link"},"Status")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkIdentifiedObject",mdxType:"Link"},"WorkIdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",mdxType:"Link"},"ContractorItem")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpPayable",mdxType:"Link"},"ErpPayable")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContractorItems"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ErpPayables"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/OldWorkTask",mdxType:"Link"},"OldWorkTask")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",mdxType:"Link"},"ContractorItem")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WorkTask"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContractorItems"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",mdxType:"Link"},"ContractorItem")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WorkCostDetail"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ContractorItems"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);