(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{2198:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2199:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(a),p=n,d=u["".concat(c,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(d,i({ref:t},l,{components:a})):r.a.createElement(d,i({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2198),i=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2201),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,u=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],I=e.autoAddBaseUrl,T=void 0===I||I,v=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(l.b)().withBaseUrl,g=Object(n.useContext)(s),y=p||d,C=Object(c.a)(y),N=null==y?void 0:y.replace("pathname://",""),k=void 0!==N?(a=N,T&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,w=Object(n.useRef)(!1),E=u?o.e:o.c,A=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&C&&window.docusaurus.prefetch(k),function(){A&&b&&b.disconnect()}}),[k,A,C]);var x=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,P=!k||!C||x;return k&&C&&!x&&!j&&g.collectLink(k),P?r.a.createElement("a",Object.assign({href:k},y&&!C&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(E,Object.assign({},v,{onMouseEnter:function(){w.current||(window.docusaurus.preload(k),w.current=!0)},innerRef:function(e){var t,a;A&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(k)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:k||""},u&&{isActive:O,activeClassName:m}))}},2201:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2198);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var f=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+f:f}(o,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},379:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(2199)),c=a(2200),i={title:"TransformerTankInfo",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",id:"cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",isDocsHomePage:!1,title:"TransformerTankInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\AssetInfo\\TransformerTankInfo.mdx",slug:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",version:"current",sidebar:"docs",previous:{title:"TransformerEndInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo"},next:{title:"TransformerTest",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTest"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Set of transformer tank data, from an equipment library."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldTransformerTankInfo",mdxType:"Link"},"OldTransformerTankInfo"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",mdxType:"Link"},"TransformerTankInfo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/PowerTransformerInfo",mdxType:"Link"},"PowerTransformerInfo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerTankInfos"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Data for all the tanks described by this power transformer data."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PowerTransformerInfo"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Power transformer data that this tank description is part of.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",mdxType:"Link"},"TransformerTankInfo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerTankInfo"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer tank data that this end description is part of."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerEndInfos"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Data for all the ends described by this transformer tank data.")))))}b.isMDXComponent=!0}}]);