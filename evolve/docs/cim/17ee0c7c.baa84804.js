(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),O=n,d=p["".concat(i,".").concat(O)]||p[O]||b[O]||c;return a?r.a.createElement(d,o({ref:t},s,{components:a})):r.a.createElement(d,o({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2174),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2177),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,p=e.isNavLink,O=e.to,d=e.href,f=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,C=Object(n.useContext)(l),N=O||d,T=Object(i.a)(N),w=null==N?void 0:N.replace("pathname://",""),I=void 0!==w?(a=w,v&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,A=Object(n.useRef)(!1),M=p?c.e:c.c,E=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(I),function(){E&&b&&b.disconnect()}}),[I,E,T]);var k=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,B=!I||!T||k;return I&&T&&!k&&!m&&C.collectLink(I),B?r.a.createElement("a",Object.assign({href:I},N&&!T&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(M,Object.assign({},h,{onMouseEnter:function(){A.current||(window.docusaurus.preload(I),A.current=!0)},innerRef:function(e){var t,a;E&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(I)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:I||""},p&&{isActive:j,activeClassName:f}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2174);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},242:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2175)),i=a(2176),o={title:"ValueToAlias"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias",id:"cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias",isDocsHomePage:!1,title:"ValueToAlias",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\ValueToAlias.md",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias",version:"current",sidebar:"docs",previous:{title:"AnalogLimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AnalogLimitSet"},next:{title:"StringMeasurementValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/StringMeasurementValue"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,'Describes the translation of one particular value into a name, e.g. 1 as "Open".  '),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The value that is mapped.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",mdxType:"Link"},"ValueAliasSet")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias",mdxType:"Link"},"ValueToAlias")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ValueAliasSet"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The ValueAliasSet having the ValueToAlias mappings."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Values"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The ValueToAlias mappings included in the set.")))))}b.isMDXComponent=!0}}]);