(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{2171:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(f,o({ref:t},l,{components:n})):a.a.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2173:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),c=n(2171),o=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2174),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,p=e.to,f=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,h=void 0===v||v,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,C=Object(r.useContext)(s),w=p||f,N=Object(c.a)(w),E=null==w?void 0:w.replace("pathname://",""),D=void 0!==E?(n=E,h&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,I=Object(r.useRef)(!1),A=b?i.e:i.c,P=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&N&&window.docusaurus.prefetch(D),function(){P&&d&&d.disconnect()}}),[D,P,N]);var k=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,S=!D||!N||k;return D&&N&&!k&&!j&&C.collectLink(D),S?a.a.createElement("a",Object.assign({href:D},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(A,Object.assign({},y,{onMouseEnter:function(){I.current||(window.docusaurus.preload(D),I.current=!0)},innerRef:function(e){var t,n;P&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:D||""},b&&{isActive:m,activeClassName:O}))}},2174:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(2171);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},931:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(2172)),c=(n(2173),{title:"DobleStandardKind"}),o={unversionedId:"cim100/TC57CIM/IEC61968/Assets/DobleStandardKind",id:"cim100/TC57CIM/IEC61968/Assets/DobleStandardKind",isDocsHomePage:!1,title:"DobleStandardKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\DobleStandardKind.md",slug:"/cim100/TC57CIM/IEC61968/Assets/DobleStandardKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/DobleStandardKind",version:"current",sidebar:"docs",previous:{title:"DobleStandardEditionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/DobleStandardEditionKind"},next:{title:"EPAStandardEditionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/EPAStandardEditionKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"List of Doble standards.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"methanol"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Doble test for methanol.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);