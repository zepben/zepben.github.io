(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{2181:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2182:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),p=r,u=b["".concat(i,".").concat(p)]||b[p]||f[p]||c;return a?n.a.createElement(u,o({ref:t},s,{components:a})):n.a.createElement(u,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2183:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2181),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2184),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,f,b=e.isNavLink,p=e.to,u=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],I=e.autoAddBaseUrl,N=void 0===I||I,C=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,h=Object(r.useContext)(l),y=p||u,v=Object(i.a)(y),M=null==y?void 0:y.replace("pathname://",""),w=void 0!==M?(a=M,N&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,P=Object(r.useRef)(!1),k=b?c.e:c.c,E=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&v&&window.docusaurus.prefetch(w),function(){E&&f&&f.disconnect()}}),[w,E,v]);var T=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!v||T;return w&&v&&!T&&!j&&h.collectLink(w),S?n.a.createElement("a",Object.assign({href:w},y&&!v&&{target:"_blank",rel:"noopener noreferrer"},C)):n.a.createElement(k,Object.assign({},C,{onMouseEnter:function(){P.current||(window.docusaurus.preload(w),P.current=!0)},innerRef:function(e){var t,a;E&&e&&v&&(t=e,a=function(){window.docusaurus.prefetch(w)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),a())}))}))).observe(t))},to:w||""},b&&{isActive:O,activeClassName:m}))}},2184:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2181);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+d:d}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},594:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return f}));var r=a(3),n=a(7),c=(a(0),a(2182)),i=a(2183),o={title:"ModelPartSpecification"},l={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",isDocsHomePage:!1,title:"ModelPartSpecification",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\NetworkModelFrames\\ModelPartSpecification.md",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",version:"current",sidebar:"docs",previous:{title:"NetworkBoundary",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/NetworkBoundary"},next:{title:"FrameworkPart",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/FrameworkPart"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:s};function f(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"The type of model.  For example,  state estimator, planning, planning dynamics, short circuit, or real-time dynamics etc.     The model must conform to a profile.   "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/AssemblyDescription",mdxType:"Link"},"AssemblyDescription")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",mdxType:"Link"},"ModelPartSpecification")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AssemblyDescription"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The assembly description into which model parts should be included."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelSpecification"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The models that are part of the assembly descrption.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",mdxType:"Link"},"ModelPartSpecification")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelAuthoritySet",mdxType:"Link"},"ModelAuthoritySet")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelSpecification"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Models of the model frame."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"FrameworkPart"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Model frame of the model part.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartVersion",mdxType:"Link"},"ModelPartVersion")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelFrames/ModelPartSpecification",mdxType:"Link"},"ModelPartSpecification")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Model"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Modle parts conforming to the model part specification."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelSpecification"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Model specification of the modelt.")))))}f.isMDXComponent=!0}}]);