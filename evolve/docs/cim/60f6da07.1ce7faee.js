(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{2197:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=n(2197),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2200),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,m=e.isNavLink,p=e.to,f=e.href,d=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,h=void 0===j||j,E=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,g=Object(a.useContext)(l),C=p||f,N=Object(i.a)(C),w=null==C?void 0:C.replace("pathname://",""),I=void 0!==w?(n=w,h&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,T=Object(a.useRef)(!1),k=m?o.e:o.c,x=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!x&&N&&window.docusaurus.prefetch(I),function(){x&&b&&b.disconnect()}}),[I,x,N]);var P=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,D=!I||!N||P;return I&&N&&!P&&!v&&g.collectLink(I),D?r.a.createElement("a",Object.assign({href:I},C&&!N&&{target:"_blank",rel:"noopener noreferrer"},E)):r.a.createElement(k,Object.assign({},E,{onMouseEnter:function(){T.current||(window.docusaurus.preload(I),T.current=!0)},innerRef:function(e){var t,n;x&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(I)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:I||""},m&&{isActive:O,activeClassName:d}))}},2200:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2197);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},882:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(2198)),i=n(2199),c={title:"EnvironmentalEvent",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",isDocsHomePage:!1,title:"EnvironmentalEvent",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvironmentalEvent.mdx",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",version:"current",sidebar:"docs",previous:{title:"EnvironmentalInformation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation"},next:{title:"EnvironmentalDiscrete",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalDiscrete"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"An environmental event to which one or more forecasts or observations may be tied and which may relate to or affect one or more assets."),Object(o.a)("p",null,"This class is intended to be used as a means of grouping forecasts and/or observations and could be used for a variety of purposes, including:"),Object(o.a)("ul",null,Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"<li>to define a 'named' event like Hurricane Katrina and allow the historic (or forecast) values for phenomena and measurements (precipitation, temperature) across time to be  associated with it</li>\n\n<li>to identify assets that were (or are forecast to be) affected by a phenomenon or set of measurements</li>\n"))),"### Attributes",Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",mdxType:"Link"},"EnvironmentalEvent")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation",mdxType:"Link"},"EnvironmentalInformation")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalEvent"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Environmental event to which this forecast or observation relates."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalInformation"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Forecast or observation related to this environmental event.")))))}b.isMDXComponent=!0}}]);