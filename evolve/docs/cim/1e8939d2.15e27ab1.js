(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{2170:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,u=p["".concat(c,".").concat(O)]||p[O]||f[O]||i;return a?r.a.createElement(u,o({ref:t},l,{components:a})):r.a.createElement(u,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2170),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2173),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,f,p=e.isNavLink,O=e.to,u=e.href,j=e.activeClassName,m=e.isActive,d=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,g=void 0===h||h,I=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(l.b)().withBaseUrl,y=Object(n.useContext)(s),v=O||u,C=Object(c.a)(v),w=null==v?void 0:v.replace("pathname://",""),P=void 0!==w?(a=w,g&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,W=Object(n.useRef)(!1),T=p?i.e:i.c,A=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&C&&window.docusaurus.prefetch(P),function(){A&&f&&f.disconnect()}}),[P,A,C]);var E=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,k=!P||!C||E;return P&&C&&!E&&!d&&y.collectLink(P),k?r.a.createElement("a",Object.assign({href:P},v&&!C&&{target:"_blank",rel:"noopener noreferrer"},I)):r.a.createElement(T,Object.assign({},I,{onMouseEnter:function(){W.current||(window.docusaurus.preload(P),W.current=!0)},innerRef:function(e){var t,a;A&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(P)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),a())}))}))).observe(t))},to:P||""},p&&{isActive:m,activeClassName:j}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2170);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},294:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),i=(a(0),a(2171)),c=a(2172),o={title:"WirePhaseInfo"},s={unversionedId:"cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",id:"cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",isDocsHomePage:!1,title:"WirePhaseInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\AssetInfo\\WirePhaseInfo.md",slug:"/cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",version:"current",sidebar:"docs",previous:{title:"WireAssemblyInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/WireAssemblyInfo"},next:{title:"BusbarSectionInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/BusbarSectionInfo"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Information on a wire carrying a single phase.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phaseInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase information.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",mdxType:"Link"},"WirePhaseInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WireAssemblyInfo",mdxType:"Link"},"WireAssemblyInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WirePhaseInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire phase information associated with this wire assembly."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WireAssemblyInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire assembly information using this wire phase information.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WireInfo",mdxType:"Link"},"WireInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",mdxType:"Link"},"WirePhaseInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WireInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire information contributing to this wire phase information."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WirePhaseInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire phase information associated with this wire information.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WirePosition",mdxType:"Link"},"WirePosition")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WirePhaseInfo",mdxType:"Link"},"WirePhaseInfo")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WirePosition"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire position with this wire phase information."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WirePhaseInfo"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wire phase information for this wire position.")))))}f.isMDXComponent=!0}}]);