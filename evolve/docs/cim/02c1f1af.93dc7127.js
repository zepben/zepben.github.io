(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2195:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},2196:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=n.a.createContext({}),u=function(t){var e=n.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},p=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(a),O=r,d=p["".concat(i,".").concat(O)]||p[O]||b[O]||c;return a?n.a.createElement(d,o({ref:e},l,{components:a})):n.a.createElement(d,o({ref:e},l))}));function O(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2197:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2195),o=a(8),s=Object(r.createContext)({collectLink:function(){}}),l=a(2198),u=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a};e.a=function(t){var e,a,b,p=t.isNavLink,O=t.to,d=t.href,j=t.activeClassName,f=t.isActive,m=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,h=void 0===g||g,N=u(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(l.b)().withBaseUrl,y=Object(r.useContext)(s),v=O||d,I=Object(i.a)(v),S=null==v?void 0:v.replace("pathname://",""),T=void 0!==S?(a=S,h&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,w=Object(r.useRef)(!1),E=p?c.e:c.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&I&&window.docusaurus.prefetch(T),function(){A&&b&&b.disconnect()}}),[T,A,I]);var k=null!==(e=null==T?void 0:T.startsWith("#"))&&void 0!==e&&e,L=!T||!I||k;return T&&I&&!k&&!m&&y.collectLink(T),L?n.a.createElement("a",Object.assign({href:T},v&&!I&&{target:"_blank",rel:"noopener noreferrer"},N)):n.a.createElement(E,Object.assign({},N,{onMouseEnter:function(){w.current||(window.docusaurus.preload(T),w.current=!0)},innerRef:function(t){var e,a;A&&t&&I&&(e=t,a=function(){window.docusaurus.prefetch(T)},(b=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),a())}))}))).observe(e))},to:T||""},p&&{isActive:f,activeClassName:j}))}},2198:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var r=a(23),n=a(2195);function c(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return e+a;var u=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+u:u}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},88:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2196)),i=a(2197),o={title:"StructureSupport",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/Assets/StructureSupport",id:"cim100/TC57CIM/IEC61968/Assets/StructureSupport",isDocsHomePage:!1,title:"StructureSupport",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\StructureSupport.mdx",slug:"/cim100/TC57CIM/IEC61968/Assets/StructureSupport",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/StructureSupport",version:"current",sidebar:"docs",previous:{title:"TAPPIStandard",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/TAPPIStandard"},next:{title:"UKMinistryOfDefenceStandard",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/UKMinistryOfDefenceStandard"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Support for structure assets."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"anchorKind"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/AnchorKind",mdxType:"Link"},"AnchorKind")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(if anchor) Kind of anchor.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"anchorRodCount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(if anchor) Number of rods used.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"anchorRodLength"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"(if anchor) Length of rod used.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"direction"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Direction of this support structure.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssets/StructureSupportKind",mdxType:"Link"},"StructureSupportKind")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Kind of structure support.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"length"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Length of this support structure.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Size of this support structure.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Asset",mdxType:"Link"},"Asset"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Structure",mdxType:"Link"},"Structure")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/StructureSupport",mdxType:"Link"},"StructureSupport")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SecuredStructure"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The secured structure supported by this structure support."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"StructureSupports"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Structure support for this structure.")))))}b.isMDXComponent=!0}}]);