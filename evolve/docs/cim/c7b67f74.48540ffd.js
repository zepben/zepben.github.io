(window.webpackJsonp=window.webpackJsonp||[]).push([[1648],{1717:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(2198)),i=a(2199),c={title:"ShuntCompensatorPhase",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",isDocsHomePage:!1,title:"ShuntCompensatorPhase",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\ShuntCompensatorPhase.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",version:"current",sidebar:"docs",previous:{title:"PerLengthPhaseImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PerLengthPhaseImpedance"},next:{title:"RatioTapChanger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Single phase of a multi-phase shunt compensator when its attributes might be different per phase.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maximumSections"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of sections that may be switched in for this phase.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normalSections"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"For the capacitor phase, the normal number of sections switched in. The value shall be between zero and ShuntCompensatorPhase.maximumSections.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phase"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase of this shunt compensator component.   If the shunt compensator is wye connected, the connection is from the indicated phase to the central ground or neutral point.  If the shunt compensator is delta connected, the phase indicates a shunt compensator connected from the indicated phase to the next logical non-neutral phase.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sections"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator sections in use. Starting value for steady state solution. The attribute shall be a positive value or zero. Non integer values are allowed to support continuous variables. The reasons for continuous value are to support study cases where no discrete shunt compensators has yet been designed, a solutions where a narrow voltage band force the sections to oscillate or accommodate for a continuous solution as input. For LinearShuntConpensator the value shall be between zero and ShuntCompensatorPhase.maximumSections. At value zero the shunt compensator conductance and admittance is zero. Linear interpolation of conductance and admittance between the previous and next integer section is applied in case of non-integer values. For NonlinearShuntCompensator-s shall only be set to one of the NonlinearShuntCompenstorPhasePoint.sectionNumber. There is no interpolation between NonlinearShuntCompenstorPhasePoint-s.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",mdxType:"Link"},"LinearShuntCompensatorPhase")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",mdxType:"Link"},"NonlinearShuntCompensatorPhase"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator",mdxType:"Link"},"ShuntCompensator")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",mdxType:"Link"},"ShuntCompensatorPhase")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensator"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shunt compensator of this shunt compensator phase."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ShuntCompensatorPhase"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The individual phases models for the shunt compensator.")))))}p.isMDXComponent=!0},2197:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(d,c({ref:t},l,{components:a})):r.a.createElement(d,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),i=a(2197),c=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2200),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,b=e.isNavLink,m=e.to,d=e.href,h=e.activeClassName,O=e.isActive,f=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,C=void 0===j||j,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,y=Object(n.useContext)(s),N=m||d,w=Object(i.a)(N),I=null==N?void 0:N.replace("pathname://",""),P=void 0!==I?(a=I,C&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,T=Object(n.useRef)(!1),S=b?o.e:o.c,E=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(P),function(){E&&p&&p.disconnect()}}),[P,E,w]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,k=!P||!w||x;return P&&w&&!x&&!f&&y.collectLink(P),k?r.a.createElement("a",Object.assign({href:P},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(S,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(P),T.current=!0)},innerRef:function(e){var t,a;E&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(P)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:P||""},b&&{isActive:O,activeClassName:h}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2197);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}}}]);