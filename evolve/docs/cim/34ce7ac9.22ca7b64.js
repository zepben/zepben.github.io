(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{2195:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,p=m["".concat(o,".").concat(u)]||m[u]||f[u]||i;return n?r.a.createElement(p,c({ref:t},s,{components:n})):r.a.createElement(p,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2195),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2198),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,f,m=e.isNavLink,u=e.to,p=e.href,O=e.activeClassName,d=e.isActive,j=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,v=void 0===h||h,C=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),N=u||p,E=Object(o.a)(N),I=null==N?void 0:N.replace("pathname://",""),P=void 0!==I?(n=I,v&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,w=Object(a.useRef)(!1),T=m?i.e:i.c,k=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&E&&window.docusaurus.prefetch(P),function(){k&&f&&f.disconnect()}}),[P,k,E]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,M=!P||!E||x;return P&&E&&!x&&!j&&y.collectLink(P),M?r.a.createElement("a",Object.assign({href:P},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(T,Object.assign({},C,{onMouseEnter:function(){w.current||(window.docusaurus.preload(P),w.current=!0)},innerRef:function(e){var t,n;k&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(P)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:P||""},m&&{isActive:d,activeClassName:O}))}},2198:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2195);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},520:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(7),i=(n(0),n(2196)),o=n(2197),c={title:"PhenomenonClassification",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",id:"cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",isDocsHomePage:!1,title:"PhenomenonClassification",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\PhenomenonClassification.mdx",slug:"/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",version:"current",sidebar:"docs",previous:{title:"ReportingCapability",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability"},next:{title:"Whirlpool",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/Whirlpool"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A pre-defined phenomenon classification as defined by a particular authority.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",mdxType:"Link"},"PhenomenonClassification")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalDataAuthority",mdxType:"Link"},"EnvironmentalDataAuthority")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PhenomenonClassification"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Phenomenon classification defined by this environmental data authority."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalDataAuthority"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Authority defining this environmental phenomenon.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",mdxType:"Link"},"ClassificationCondition")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",mdxType:"Link"},"PhenomenonClassification")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ClassificationCondition"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Condition contributing to the classification of this phenomenon."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PhenomenonClassification"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Phenomenon classification to which this condition relates.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalPhenomenon",mdxType:"Link"},"EnvironmentalPhenomenon")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",mdxType:"Link"},"PhenomenonClassification")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalPhenomenon"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PhenomenonClassification"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The classification of this phenomenon.")))))}f.isMDXComponent=!0}}]);