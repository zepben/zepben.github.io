(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{2170:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),b=r,d=f["".concat(o,".").concat(b)]||f[b]||u[b]||c;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2172:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(10),o=n(2170),i=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2173),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,u,f=e.isNavLink,b=e.to,d=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,v=void 0===C||C,y=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(l.b)().withBaseUrl,E=Object(r.useContext)(s),I=b||d,g=Object(o.a)(I),N=null==I?void 0:I.replace("pathname://",""),w=void 0!==N?(n=N,v&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,P=Object(r.useRef)(!1),T=f?c.e:c.c,k=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!k&&g&&window.docusaurus.prefetch(w),function(){k&&u&&u.disconnect()}}),[w,k,g]);var R=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!g||R;return w&&g&&!R&&!j&&E.collectLink(w),S?a.a.createElement("a",Object.assign({href:w},I&&!g&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(T,Object.assign({},y,{onMouseEnter:function(){P.current||(window.docusaurus.preload(w),P.current=!0)},innerRef:function(e){var t,n;k&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(w)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:w||""},f&&{isActive:m,activeClassName:O}))}},2173:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(2170);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,o=c.forcePrependBaseUrl,i=void 0!==o&&o,s=c.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(2171)),o=n(2172),i={title:"ErpCompetency"},s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpCompetency",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpCompetency",isDocsHomePage:!1,title:"ErpCompetency",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfERPSupport\\ErpCompetency.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpCompetency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpCompetency",version:"current",sidebar:"docs",previous:{title:"ErpChartOfAccounts",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpChartOfAccounts"},next:{title:"ErpDocument",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpDocument"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Information that describes aptitudes of a utility employee. Unlike Skills that an ErpPerson must be certified to perform before undertaking certain type of assignments (to be able to perfrom a Craft), ErpCompetency has more to do with typical Human Resource (HR) matters such as schooling, training, etc.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpIdentifiedObject",mdxType:"Link"},"ErpIdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OldPerson",mdxType:"Link"},"OldPerson")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpCompetency",mdxType:"Link"},"ErpCompetency")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpPersons"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpCompetency"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);