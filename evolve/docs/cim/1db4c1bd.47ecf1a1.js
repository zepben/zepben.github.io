(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{2195:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2196:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),f=r,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||o;return a?n.a.createElement(d,c({ref:t},l,{components:a})):n.a.createElement(d,c({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2197:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),i=a(2195),c=a(8),s=Object(r.createContext)({collectLink:function(){}}),l=a(2198),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,u,b=e.isNavLink,f=e.to,d=e.href,O=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,h=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(l.b)().withBaseUrl,y=Object(r.useContext)(s),I=f||d,N=Object(i.a)(I),D=null==I?void 0:I.replace("pathname://",""),w=void 0!==D?(a=D,v&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,E=Object(r.useRef)(!1),P=b?o.e:o.c,A=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&N&&window.docusaurus.prefetch(w),function(){A&&u&&u.disconnect()}}),[w,A,N]);var M=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,T=!w||!N||M;return w&&N&&!M&&!m&&y.collectLink(w),T?n.a.createElement("a",Object.assign({href:w},I&&!N&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(P,Object.assign({},h,{onMouseEnter:function(){E.current||(window.docusaurus.preload(w),E.current=!0)},innerRef:function(e){var t,a;A&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(w)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:w||""},b&&{isActive:j,activeClassName:O}))}},2198:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2195);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+p:p}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},341:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(2196)),i=a(2197),c={title:"DatasetArgDescription",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArgDescription",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArgDescription",isDocsHomePage:!1,title:"DatasetArgDescription",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\ModelOperations\\DatasetArgDescription.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArgDescription",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArgDescription",version:"current",sidebar:"docs",previous:{title:"NetworkModelProjectState",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectState"},next:{title:"DatasetArg",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArg"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArgDescription",mdxType:"Link"},"ModelOperationArgDescription"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArg",mdxType:"Link"},"DatasetArg")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArgDescription",mdxType:"Link"},"DatasetArgDescription")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OperationDatasetArg"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The operation dataset roles conforming to this role type."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OperationDatasetArgDescription"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The type of role for this dataset role.   Should only reference role types that belong to the operation type of the associated operation.")))))}u.isMDXComponent=!0}}]);