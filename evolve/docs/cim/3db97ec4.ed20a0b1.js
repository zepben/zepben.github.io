(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{2170:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2171:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(a),u=r,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||c;return a?n.a.createElement(f,o({ref:t},l,{components:a})):n.a.createElement(f,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2172:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2170),o=a(8),s=Object(r.createContext)({collectLink:function(){}}),l=a(2173),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,d,m=e.isNavLink,u=e.to,f=e.href,p=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,N=Object(r.useContext)(s),y=u||f,T=Object(i.a)(y),I=null==y?void 0:y.replace("pathname://",""),w=void 0!==I?(a=I,C&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,E=Object(r.useRef)(!1),k=m?c.e:c.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&T&&window.docusaurus.prefetch(w),function(){A&&d&&d.disconnect()}}),[w,A,T]);var M=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,B=!w||!T||M;return w&&T&&!M&&!j&&N.collectLink(w),B?n.a.createElement("a",Object.assign({href:w},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){E.current||(window.docusaurus.preload(w),E.current=!0)},innerRef:function(e){var t,a;A&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(w)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:w||""},m&&{isActive:O,activeClassName:p}))}},2173:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2170);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+b:b}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},587:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(2171)),i=a(2172),o={title:"TransformerCoreAdmittance"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",id:"cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",isDocsHomePage:!1,title:"TransformerCoreAdmittance",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\TransformerCoreAdmittance.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",version:"current",sidebar:"docs",previous:{title:"TapSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TapSchedule"},next:{title:"SVCControlMode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SVCControlMode"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The transformer core admittance.  Used to specify the core admittance of a transformer in a manner that can be shared among power transformers."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"b"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Magnetizing branch susceptance (B mag).  The value can be positive or negative.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"b0"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Zero sequence magnetizing branch susceptance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"g"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Magnetizing branch conductance (G mag).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"g0"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Zero sequence magnetizing branch conductance.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",mdxType:"Link"},"TransformerCoreAdmittance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CoreAdmittance"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Core admittance of this transformer end, representing magnetising current and core losses. The full values of the transformer should be supplied for one transformer end only."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEnd"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All transformer ends having this core admittance.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerCoreAdmittance",mdxType:"Link"},"TransformerCoreAdmittance")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransformerEndInfo"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Transformer end datasheet used to calculate this core admittance."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CoreAdmittance"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Core admittance calculated from this transformer end datasheet, representing magnetising current and core losses. The full values of the transformer should be supplied for one transformer end info only.")))))}d.isMDXComponent=!0}}]);