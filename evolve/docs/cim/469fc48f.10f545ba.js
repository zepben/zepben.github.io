(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{2160:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}))},2161:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(0),i=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=i.a.createContext({}),b=function(t){var e=i.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),O=b(a),m=n,p=O["".concat(c,".").concat(m)]||O[m]||d[m]||r;return a?i.a.createElement(p,o({ref:e},s,{components:a})):i.a.createElement(p,o({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,c=new Array(r);c[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2162:function(t,e,a){"use strict";var n=a(0),i=a.n(n),r=a(10),c=a(2160),o=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2163),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(a[n[i]]=t[n[i]])}return a};e.a=function(t){var e,{isNavLink:a,to:d,href:O,activeClassName:m,isActive:p,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=t,u=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(s.b)(),h=Object(n.useContext)(l),g=d||O,v=Object(c.a)(g),N=null==g?void 0:g.replace("pathname://",""),y=void 0!==N?(E=N,j&&(t=>t.startsWith("/"))(E)?C(E):E):void 0;var E;const I=Object(n.useRef)(!1),T=a?r.e:r.c,w=o.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!w&&v&&window.docusaurus.prefetch(y),()=>{w&&k&&k.disconnect()})),[y,w,v]);const M=null!==(e=null==y?void 0:y.startsWith("#"))&&void 0!==e&&e,x=!y||!v||M;return y&&v&&!M&&!f&&h.collectLink(y),x?i.a.createElement("a",Object.assign({href:y},g&&!v&&{target:"_blank",rel:"noopener noreferrer"},u)):i.a.createElement(T,Object.assign({},u,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(y),I.current=!0)},innerRef:t=>{var e,a;w&&t&&v&&(e=t,a=()=>{window.docusaurus.prefetch(y)},k=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(k.unobserve(e),k.disconnect(),a())}))})),k.observe(e))},to:y||""},a&&{isActive:p,activeClassName:m}))}},2163:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return c}));var n=a(23),i=a(2160);function r(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(n)return e+a;const c=a.startsWith(e)?a:e+a.replace(/^\//,"");return r?t+c:c}(e,t,a,n)}}function c(t,e={}){const{withBaseUrl:a}=r();return a(t,e)}},660:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(2161)),c=a(2162),o={title:"ClassificationCondition"},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",id:"cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",isDocsHomePage:!1,title:"ClassificationCondition",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\ClassificationCondition.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",version:"current",sidebar:"docs",previous:{title:"CloudCondition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/CloudCondition"},next:{title:"AtmosphericPhenomenon",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/AtmosphericPhenomenon"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function d(t){var e=t.components,a=Object(i.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"A classification condition used to define preconditions that must be met by a phenomena classification.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"duration"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The duration of the of the condition in seconds")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"test"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/TestKind",mdxType:"Link"},"TestKind")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The test applied to the value.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",mdxType:"Link"},"ClassificationCondition")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/PhenomenonClassification",mdxType:"Link"},"PhenomenonClassification")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClassificationCondition"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Condition contributing to the classification of this phenomenon."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PhenomenonClassification"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phenomenon classification to which this condition relates.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalStringMeasurement",mdxType:"Link"},"EnvironmentalStringMeasurement")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",mdxType:"Link"},"ClassificationCondition")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalStringMeasurement"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String measurement which contributes to the definition of this classification condition."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClassificationCondition"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Classification condition which this string measurement helps define.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",mdxType:"Link"},"ClassificationCondition")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Analog which contributes to the definition of this classification condition."),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClassificationCondition"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Classification condition which this analog helps define.")))))}d.isMDXComponent=!0}}]);