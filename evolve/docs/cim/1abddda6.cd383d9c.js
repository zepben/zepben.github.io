(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),O=n,u=d["".concat(c,".").concat(O)]||d[O]||p[O]||i;return a?r.a.createElement(u,o({ref:t},l,{components:a})):r.a.createElement(u,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2189),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2192),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,d=e.isNavLink,O=e.to,u=e.href,f=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,C=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(l.b)().withBaseUrl,v=Object(n.useContext)(s),y=O||u,T=Object(c.a)(y),I=null==y?void 0:y.replace("pathname://",""),w=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,E=Object(n.useRef)(!1),k=d?i.e:i.c,A=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&T&&window.docusaurus.prefetch(w),function(){A&&p&&p.disconnect()}}),[w,A,T]);var x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,D=!w||!T||x;return w&&T&&!x&&!j&&v.collectLink(w),D?r.a.createElement("a",Object.assign({href:w},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(k,Object.assign({},C,{onMouseEnter:function(){E.current||(window.docusaurus.preload(w),E.current=!0)},innerRef:function(e){var t,a;A&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:w||""},d&&{isActive:m,activeClassName:f}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2189);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},261:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2190)),c=a(2191),o={title:"OpenCircuitTest"},s={unversionedId:"cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",id:"cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",isDocsHomePage:!1,title:"OpenCircuitTest",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\AssetInfo\\OpenCircuitTest.md",slug:"/cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",version:"current",sidebar:"docs",previous:{title:"NoLoadTest",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/NoLoadTest"},next:{title:"OverheadWireInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/OverheadWireInfo"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Open-circuit test results verify winding turn ratios and phase shifts. They include induced voltage and phase shift measurements on open-circuit windings, with voltage applied to the energised end. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energisedEndStep"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tap step number for the energised end of the test pair.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energisedEndVoltage"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage applied to the winding (end) during test.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"openEndStep"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tap step number for the open end of the test pair.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"openEndVoltage"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage measured at the open-circuited end, with the energised end set to rated voltage and all other ends open.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phaseShift"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase shift measured at the open end with the energised end set to rated voltage and all other ends open.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTest",mdxType:"Link"},"TransformerTest"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",mdxType:"Link"},"OpenCircuitTest")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OpenEndOpenCircuitTests"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All open-circuit test measurements in which this transformer end was not excited."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OpenEnd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer end measured for induced voltage and angle in this open-circuit test.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/OpenCircuitTest",mdxType:"Link"},"OpenCircuitTest")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergisedEndOpenCircuitTests"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All open-circuit test measurements in which this transformer end was excited."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergisedEnd"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer end that current is applied to in this open-circuit test.")))))}p.isMDXComponent=!0}}]);