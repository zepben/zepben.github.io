(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{2175:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},2176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,f=d["".concat(c,".").concat(b)]||d[b]||m[b]||a;return n?r.a.createElement(f,o({ref:t},l,{components:n})):r.a.createElement(f,o({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2177:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(10),c=n(2175),o=n(8),s=Object(i.createContext)({collectLink:function(){}}),l=n(2178),u=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};t.a=function(e){var t,n,m,d=e.isNavLink,b=e.to,f=e.href,p=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,C=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),x=Object(l.b)().withBaseUrl,D=Object(i.useContext)(s),h=b||f,g=Object(c.a)(h),w=null==h?void 0:h.replace("pathname://",""),I=void 0!==w?(n=w,v&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0,L=Object(i.useRef)(!1),U=d?a.e:a.c,M=o.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!M&&g&&window.docusaurus.prefetch(I),function(){M&&m&&m.disconnect()}}),[I,M,g]);var T=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,E=!I||!g||T;return I&&g&&!T&&!j&&D.collectLink(I),E?r.a.createElement("a",Object.assign({href:I},h&&!g&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(U,Object.assign({},C,{onMouseEnter:function(){L.current||(window.docusaurus.preload(I),L.current=!0)},innerRef:function(e){var t,n;M&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(I)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())}))}))).observe(t))},to:I||""},d&&{isActive:O,activeClassName:p}))}},2178:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var i=n(23),r=n(2175);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,c=a.forcePrependBaseUrl,o=void 0!==c&&c,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},395:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n(3),r=n(7),a=(n(0),n(2176)),c=n(2177),o={title:"UnderexcLimX2"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",isDocsHomePage:!1,title:"UnderexcLimX2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\UnderexcitationLimiterDynamics\\UnderexcLimX2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX2",version:"current",sidebar:"docs",previous:{title:"UnderexcLimX1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimX1"},next:{title:"PowerSystemStabilizerDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.a)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("font",{color:"#0f0f0f"},"Westinghouse minimum excitation limiter."),"### Attributes | Name   | Type                                                                   | Description                                                                     | |:-------|:-----------------------------------------------------------------------|:--------------------------------------------------------------------------------| | kf2    | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),"           | Differential gain (",Object(a.a)("i",null,"K"),Object(a.a)("i",null,Object(a.a)("sub",null,"F2")),").                               | | km     | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),"           | Minimum excitation limit gain (",Object(a.a)("i",null,"K"),Object(a.a)("i",null,Object(a.a)("sub",null,"M")),").                    | | melmax | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),"           | Minimum excitation limit value (",Object(a.a)("i",null,"MELMAX"),").                                 | | qo     | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),"           | Excitation centre setting (",Object(a.a)("i",null,"Q"),Object(a.a)("i",null,Object(a.a)("sub",null,"O")),").                        | | r      | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU"),"           | Excitation radius (",Object(a.a)("i",null,"R"),").                                                   | | tf2    | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Differential time constant (",Object(a.a)("i",null,"T"),Object(a.a)("i",null,Object(a.a)("sub",null,"F2")),") (>= 0).            | | tm     | ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Minimum excitation limit time constant (",Object(a.a)("i",null,"T"),Object(a.a)("i",null,Object(a.a)("sub",null,"M")),") (>= 0). | ### Relationships __Inherits from__ - ",Object(a.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics",mdxType:"Link"},"UnderexcitationLimiterDynamics"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(i.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}m.isMDXComponent=!0}}]);