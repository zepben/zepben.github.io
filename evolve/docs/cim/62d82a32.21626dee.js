(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{2207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),O=a,j=p["".concat(i,".").concat(O)]||p[O]||m[O]||o;return n?r.a.createElement(j,c({ref:t},s,{components:n})):r.a.createElement(j,c({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=n(2207),c=n(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(2210),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:m,href:p,activeClassName:O,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:u=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(s.b)(),h=Object(a.useContext)(l),y=m||p,g=Object(i.a)(y),N=null==y?void 0:y.replace("pathname://",""),E=void 0!==N?(C=N,u&&(e=>e.startsWith("/"))(C)?v(C):C):void 0;var C;const T=Object(a.useRef)(!1),w=n?o.e:o.c,L=c.a.canUseIntersectionObserver;let I;Object(a.useEffect)((()=>(!L&&g&&window.docusaurus.prefetch(E),()=>{L&&I&&I.disconnect()})),[E,L,g]);const k=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!g||k;return E&&g&&!k&&!d&&h.collectLink(E),x?r.a.createElement("a",Object.assign({href:E},y&&!g&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(E),T.current=!0)},innerRef:e=>{var t,n;L&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(E)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:E||""},n&&{isActive:j,activeClassName:O}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},902:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(2208)),i=n(2209),c={title:"EnvironmentalLocationType",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",isDocsHomePage:!1,title:"EnvironmentalLocationType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvironmentalLocationType.mdx",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",version:"current",sidebar:"docs",previous:{title:"EnvironmentalPhenomenon",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalPhenomenon"},next:{title:"EnvironmentalInformation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Type of environmental location. Used when an environmental alert or phenomenon has multiple locations associated with it.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"kind"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/LocationKind",mdxType:"Link"},"LocationKind")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The kind of location. Typical values might be center, extent, primary, secondary, etc.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"None")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalPhenomenon",mdxType:"Link"},"EnvironmentalPhenomenon")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",mdxType:"Link"},"EnvironmentalLocationType")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalPhenomenon"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Environmental phenomenon for which this location is of relevance."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalLocationKind"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Location of relevance to this environmental phenomenon.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",mdxType:"Link"},"EnvironmentalLocationType")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/Location",mdxType:"Link"},"Location")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalLocationKind"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Kind of environmental location which this location is."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Location"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Location of this instance of ths kind of environmental location.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",mdxType:"Link"},"EnvironmentalLocationType")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Environmental alert applying to location of this type."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnvironmentalLocationKind"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Type of location to which this environmental alert applies.")))))}m.isMDXComponent=!0}}]);