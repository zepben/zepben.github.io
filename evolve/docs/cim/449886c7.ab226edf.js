(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{2170:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,O=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(O,i({ref:t},s,{components:a})):r.a.createElement(O,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(2170),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2173),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,p=e.isNavLink,d=e.to,O=e.href,m=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,C=void 0===y||y,v=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,E=Object(n.useContext)(l),h=d||O,P=Object(o.a)(h),T=null==h?void 0:h.replace("pathname://",""),N=void 0!==T?(a=T,C&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,I=Object(n.useRef)(!1),w=p?c.e:c.c,D=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&P&&window.docusaurus.prefetch(N),function(){D&&u&&u.disconnect()}}),[N,D,P]);var F=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,A=!N||!P||F;return N&&P&&!F&&!f&&E.collectLink(N),A?r.a.createElement("a",Object.assign({href:N},h&&!P&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(w,Object.assign({},v,{onMouseEnter:function(){I.current||(window.docusaurus.preload(N),I.current=!0)},innerRef:function(e){var t,a;D&&e&&P&&(t=e,a=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:N||""},p&&{isActive:j,activeClassName:m}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2170);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(c,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},652:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(2171)),o=a(2172),i={title:"PFVArType2IEEEPFController"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",isDocsHomePage:!1,title:"PFVArType2IEEEPFController",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType2Dynamics\\PFVArType2IEEEPFController.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",version:"current",sidebar:"docs",previous:{title:"PFVArControllerType2Dynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"},next:{title:"PFVArType2IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"IEEE PF controller type 2 which is a summing point type controller making up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller. The voltage regulator forms the inner loop and is implemented as a fast controller."),Object(c.a)("p",null,"Reference: IEEE 421.5-2005, 11.4.   "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"exlon"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Overexcitation or under excitation flag (",Object(c.a)("i",null,"EXLON"),") true = 1 (not in the overexcitation or underexcitation state, integral action is active) false = 0 (in the overexcitation or underexcitation state, so integral action is disabled to allow the limiter to play its role).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Integral gain of the pf controller (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"I")),").  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Proportional gain of the pf controller (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"P")),").  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pfref"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Power factor reference (",Object(c.a)("i",null,"P"),Object(c.a)("i",null,Object(c.a)("sub",null,"FREF")),").")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vclmt"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum output of the pf controller (",Object(c.a)("i",null,"V"),Object(c.a)("i",null,Object(c.a)("sub",null,"CLMT")),").  Typical value = 0,1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vref"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator reference (",Object(c.a)("i",null,"V"),Object(c.a)("i",null,Object(c.a)("sub",null,"REF")),").")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vs"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Generator sensing voltage (",Object(c.a)("i",null,"V"),Object(c.a)("i",null,Object(c.a)("sub",null,"S")),").")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics",mdxType:"Link"},"PFVArControllerType2Dynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}u.isMDXComponent=!0}}]);