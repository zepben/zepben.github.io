(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return a?r.a.createElement(u,o({ref:t},s,{components:a})):r.a.createElement(u,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2182),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,m,p=e.isNavLink,d=e.to,u=e.href,O=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,g=void 0===h||h,N=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,v=Object(n.useContext)(l),y=d||u,I=Object(i.a)(y),P=null==y?void 0:y.replace("pathname://",""),w=void 0!==P?(a=P,g&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,T=Object(n.useRef)(!1),L=p?c.e:c.c,x=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&I&&window.docusaurus.prefetch(w),function(){x&&m&&m.disconnect()}}),[w,x,I]);var E=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,D=!w||!I||E;return w&&I&&!E&&!f&&v.collectLink(w),D?r.a.createElement("a",Object.assign({href:w},y&&!I&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(L,Object.assign({},N,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,a;x&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(w)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),a())}))}))).observe(t))},to:w||""},p&&{isActive:j,activeClassName:O}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2179);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},874:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(2180)),i=a(2181),o={title:"PhaseImpedanceData"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",isDocsHomePage:!1,title:"PhaseImpedanceData",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\PhaseImpedanceData.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",version:"current",sidebar:"docs",previous:{title:"RegulatingControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl"},next:{title:"ShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Impedance and conductance matrix element values. "),Object(c.a)("p",null,"The diagonal elements are described by the elements having the same toPhase and fromPhase value and the off diagonal elements have different toPhase and fromPhase values.  The matrix can also be stored in symmetric lower triangular format using the row and column attributes, which map to ACLineSegmentPhase.sequenceNumber.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"b"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/SusceptancePerLength",mdxType:"Link"},"SusceptancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Susceptance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ResistancePerLength",mdxType:"Link"},"ResistancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resistance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactancePerLength",mdxType:"Link"},"ReactancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"g"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ConductancePerLength",mdxType:"Link"},"ConductancePerLength")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conductance matrix element value, per length of unit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fromPhase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Refer to the class description.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toPhase"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Refer to the class description.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"row"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The matrix element\u2019s row number, in the range 1 to PerLengthPhaseImpedance.conductorCount. Only the lower triangle needs to be stored. This row number matches ACLineSegmentPhase.sequenceNumber.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"column"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The matrix element's column number, in the range 1 to row. Only the lower triangle needs to be stored. This column number matches ACLineSegmentPhase.sequenceNumber.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PerLengthPhaseImpedance",mdxType:"Link"},"PerLengthPhaseImpedance")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData",mdxType:"Link"},"PhaseImpedanceData")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PhaseImpedance"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conductor phase impedance to which this data belongs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PhaseImpedanceData"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All data that belong to this conductor phase impedance.")))))}m.isMDXComponent=!0}}]);