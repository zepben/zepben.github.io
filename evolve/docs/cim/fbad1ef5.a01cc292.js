(window.webpackJsonp=window.webpackJsonp||[]).push([[2079],{2149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(2190)),c=a(2191),i={title:"BaseVoltage"},l={unversionedId:"evolve/IEC61970/Base/Core/BaseVoltage",id:"evolve/IEC61970/Base/Core/BaseVoltage",isDocsHomePage:!1,title:"BaseVoltage",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\BaseVoltage.md",slug:"/evolve/IEC61970/Base/Core/BaseVoltage",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/BaseVoltage",version:"current",sidebar:"docs",previous:{title:"ConductingEquipment",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/ConductingEquipment"},next:{title:"Equipment",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Equipment"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Defines a system base voltage which is referenced.   "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"nominalVoltage"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The power system resource's base voltage.  Shall be a positive value and not zero.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"True"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base voltage of this conducting equipment.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All conducting equipment with this base voltage.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/evolve/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerEnds"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer ends at the base voltage.  This is essential for PU calculation."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base voltage of the transformer end.  This is essential for PU calculation.")))))}u.isMDXComponent=!0},2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,O=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(O,i({ref:t},s,{components:a})):r.a.createElement(O,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2189),i=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2192),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,p=e.isNavLink,d=e.to,O=e.href,f=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,g=void 0===v||v,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),C=d||O,w=Object(c.a)(C),E=null==C?void 0:C.replace("pathname://",""),B=void 0!==E?(a=E,g&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,T=Object(n.useRef)(!1),k=p?o.e:o.c,I=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!I&&w&&window.docusaurus.prefetch(B),function(){I&&u&&u.disconnect()}}),[B,I,w]);var x=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,P=!B||!w||x;return B&&w&&!x&&!m&&N.collectLink(B),P?r.a.createElement("a",Object.assign({href:B},C&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){T.current||(window.docusaurus.preload(B),T.current=!0)},innerRef:function(e){var t,a;I&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(B)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:B||""},p&&{isActive:j,activeClassName:f}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2189);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(o,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}}}]);