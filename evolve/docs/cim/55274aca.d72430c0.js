(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,f=d["".concat(i,".").concat(b)]||d[b]||O[b]||o;return a?r.a.createElement(f,c({ref:t},s,{components:a})):r.a.createElement(f,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),i=a(2207),c=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2210),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:d,activeClassName:b,isActive:f,"data-noBrokenLinkCheck":u,autoAddBaseUrl:j=!0}=e,m=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),h=Object(n.useContext)(l),I=O||d,y=Object(i.a)(I),C=null==I?void 0:I.replace("pathname://",""),v=void 0!==C?(N=C,j&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const M=Object(n.useRef)(!1),E=a?o.e:o.c,T=c.a.canUseIntersectionObserver;let w;Object(n.useEffect)((()=>(!T&&y&&window.docusaurus.prefetch(v),()=>{T&&w&&w.disconnect()})),[v,T,y]);const D=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,P=!v||!y||D;return v&&y&&!D&&!u&&h.collectLink(v),P?r.a.createElement("a",Object.assign({href:v},I&&!y&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(E,Object.assign({},m,{onMouseEnter:()=>{M.current||(window.docusaurus.preload(v),M.current=!0)},innerRef:e=>{var t,a;T&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(v)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),a())}))})),w.observe(t))},to:v||""},a&&{isActive:f,activeClassName:b}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},797:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),o=(a(0),a(2208)),i=a(2209),c={title:"ModelOperationDescription",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",isDocsHomePage:!1,title:"ModelOperationDescription",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\ModelOperations\\ModelOperationDescription.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",version:"current",sidebar:"docs",previous:{title:"ModelOperationArgDescription",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArgDescription"},next:{title:"AnalogToDigitalLogicKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/AnalogToDigitalLogicKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"The type of model operation.   This class is referenced by model operations and defines the kind of operation.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",mdxType:"Link"},"ModelOperation")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",mdxType:"Link"},"ModelOperationDescription")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ModelOperation"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The instances of operations that conform to this operation type."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ModelOperationDescription"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of the model operation.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArgDescription",mdxType:"Link"},"ModelOperationArgDescription")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",mdxType:"Link"},"ModelOperationDescription")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperationDatasetArgDescription"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of dataset roles that can be used for a type of general model operation."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ModelOperationDefinition"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of operation for this type of dataset role.   Operations referencing the dataset role type should only belong to operations that reference the operation type.")))))}O.isMDXComponent=!0}}]);