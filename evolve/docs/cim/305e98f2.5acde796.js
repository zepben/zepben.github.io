(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{2160:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,j=p["".concat(o,".").concat(O)]||p[O]||m[O]||i;return a?r.a.createElement(j,c({ref:t},s,{components:a})):r.a.createElement(j,c({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(2160),c=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2163),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:m,href:p,activeClassName:O,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:u=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),v=Object(n.useContext)(l),C=m||p,h=Object(o.a)(C),E=null==C?void 0:C.replace("pathname://",""),y=void 0!==E?(N=E,u&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const I=Object(n.useRef)(!1),A=a?i.e:i.c,T=c.a.canUseIntersectionObserver;let w;Object(n.useEffect)((()=>(!T&&h&&window.docusaurus.prefetch(y),()=>{T&&w&&w.disconnect()})),[y,T,h]);const k=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,M=!y||!h||k;return y&&h&&!k&&!d&&v.collectLink(y),M?r.a.createElement("a",Object.assign({href:y},C&&!h&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(A,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(y),I.current=!0)},innerRef:e=>{var t,a;T&&e&&h&&(t=e,a=()=>{window.docusaurus.prefetch(y)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),a())}))})),w.observe(t))},to:y||""},a&&{isActive:j,activeClassName:O}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},451:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(2161)),o=a(2162),c={title:"EnvironmentalAnalog"},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",isDocsHomePage:!1,title:"EnvironmentalAnalog",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvironmentalAnalog.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",version:"current",sidebar:"docs",previous:{title:"EnvironmentalAlert",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert"},next:{title:"Earthquake",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/Earthquake"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Analog (float) measurement of relevance in the environmental domain.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Analog",mdxType:"Link"},"Analog"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/AtmosphericAnalog",mdxType:"Link"},"AtmosphericAnalog")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/GeosphericAnalog",mdxType:"Link"},"GeosphericAnalog")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/HydrosphericAnalog",mdxType:"Link"},"HydrosphericAnalog")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/SpaceAnalog",mdxType:"Link"},"SpaceAnalog"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketCommon/EnvironmentalMonitoringStation",mdxType:"Link"},"EnvironmentalMonitoringStation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental analog measurement provided by this monitoring station."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalMonitoringStation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Monitoring station which provides this environmental analog measurement.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ReportingCapability",mdxType:"Link"},"ReportingCapability")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"One of the environmental value sets expressing one of the reporting capabilities."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReportingCapability"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The reporting capability this environmental value set helps define.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/ClassificationCondition",mdxType:"Link"},"ClassificationCondition")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Analog which contributes to the definition of this classification condition."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClassificationCondition"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Classification condition which this analog helps define.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog",mdxType:"Link"},"EnvironmentalAnalog")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation",mdxType:"Link"},"EnvironmentalInformation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAnalog"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental analog associated with this observation or forecast."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalInformation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Observation or forecast with which this environmental analog measurement is associated.")))))}m.isMDXComponent=!0}}]);