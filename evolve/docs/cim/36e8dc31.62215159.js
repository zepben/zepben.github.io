(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{2170:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,o({ref:t},l,{components:a})):r.a.createElement(m,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2170),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2173),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,b=e.isNavLink,d=e.to,m=e.href,h=e.activeClassName,f=e.isActive,O=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,g=void 0===j||j,v=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(l.b)().withBaseUrl,y=Object(n.useContext)(s),T=d||m,w=Object(c.a)(T),N=null==T?void 0:T.replace("pathname://",""),P=void 0!==N?(a=N,g&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,I=Object(n.useRef)(!1),E=b?i.e:i.c,x=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(P),function(){x&&u&&u.disconnect()}}),[P,x,w]);var L=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,k=!P||!w||L;return P&&w&&!L&&!O&&y.collectLink(P),k?r.a.createElement("a",Object.assign({href:P},T&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(E,Object.assign({},v,{onMouseEnter:function(){I.current||(window.docusaurus.preload(P),I.current=!0)},innerRef:function(e){var t,a;x&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(P)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:P||""},b&&{isActive:f,activeClassName:h}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2170);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+p:p}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},522:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2171)),c=a(2172),o={title:"PhaseTapChangerNonLinear"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear",isDocsHomePage:!1,title:"PhaseTapChangerNonLinear",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\PhaseTapChangerNonLinear.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear",version:"current",sidebar:"docs",previous:{title:"RegulatingCondEq",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingCondEq"},next:{title:"SeriesCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SeriesCompensator"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The non-linear phase tap changer describes the non-linear behaviour of a phase tap changer. This is a base class for the symmetrical and asymmetrical phase tap changer models. The details of these models can be found in IEC 61970-301.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"voltageStepIncrement"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The voltage step increment on the out of phase winding (the PowerTransformerEnd where the TapChanger is located) specified in percent of rated voltage of the PowerTransformerEnd. A positive value means a positive voltage variation from the Terminal at the PowerTransformerEnd, where the TapChanger is located, into the transformer. When the increment is negative, the voltage decreases when the tap step increases.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xMax"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The reactance depends on the tap position according to a "u" shaped curve. The maximum reactance (xMax) appears at the low and high tap positions. Depending on the \u201cu\u201d curve the attribute can be either higher or lower than PowerTransformerEnd.x.')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xMin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The reactance depend on the tap position according to a "u" shaped curve. The minimum reactance (xMin) appear at the mid tap position.   PowerTransformerEnd.x shall be consistent with PhaseTapChangerLinear.xMin and PhaseTapChangerNonLinear.xMin. In case of inconsistency, PowerTransformerEnd.x shall be used.')))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",mdxType:"Link"},"PhaseTapChanger"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerAsymmetrical",mdxType:"Link"},"PhaseTapChangerAsymmetrical")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerSymmetrical",mdxType:"Link"},"PhaseTapChangerSymmetrical"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);