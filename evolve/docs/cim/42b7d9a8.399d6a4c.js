(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{2174:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2175:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||i;return n?r.a.createElement(d,o({ref:t},l,{components:n})):r.a.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2176:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),c=n(2174),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2177),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,f=e.to,d=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,C=Object(a.useContext)(s),w=f||d,N=Object(c.a)(w),I=null==w?void 0:w.replace("pathname://",""),T=void 0!==I?(n=I,y&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,E=Object(a.useRef)(!1),D=p?i.e:i.c,k=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&N&&window.docusaurus.prefetch(T),function(){k&&b&&b.disconnect()}}),[T,k,N]);var B=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,P=!T||!N||B;return T&&N&&!B&&!j&&C.collectLink(T),P?r.a.createElement("a",Object.assign({href:T},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(D,Object.assign({},h,{onMouseEnter:function(){E.current||(window.docusaurus.preload(T),E.current=!0)},innerRef:function(e){var t,n;k&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(T)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:T||""},p&&{isActive:O,activeClassName:m}))}},2177:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2174);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},632:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(2175)),c=n(2176),o={title:"TimeInterval"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Domain/TimeInterval",id:"cim100/TC57CIM/IEC61970/Base/Domain/TimeInterval",isDocsHomePage:!1,title:"TimeInterval",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Domain\\TimeInterval.md",slug:"/cim100/TC57CIM/IEC61970/Base/Domain/TimeInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/TimeInterval",version:"current",sidebar:"docs",previous:{title:"Currency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/Currency"},next:{title:"Volume",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/Volume"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Interval between two times."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"end"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Time",mdxType:"Link"},"Time")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"End time of this interval.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"start"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Time",mdxType:"Link"},"Time")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Start time of this interval.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}b.isMDXComponent=!0}}]);