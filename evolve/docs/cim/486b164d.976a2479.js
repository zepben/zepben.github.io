(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{2207:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2208:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),b=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=b(a),O=n,m=u["".concat(i,".").concat(O)]||u[O]||p[O]||c;return a?r.a.createElement(m,o({ref:e},l,{components:a})):r.a.createElement(m,o({ref:e},l))}));function O(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2209:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2207),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2210),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,{isNavLink:a,to:p,href:u,activeClassName:O,isActive:m,"data-noBrokenLinkCheck":d,autoAddBaseUrl:j=!0}=t,f=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(l.b)(),y=Object(n.useContext)(s),g=p||u,h=Object(i.a)(g),v=null==g?void 0:g.replace("pathname://",""),N=void 0!==v?(T=v,j&&(t=>t.startsWith("/"))(T)?C(T):T):void 0;var T;const I=Object(n.useRef)(!1),k=a?c.e:c.c,E=o.a.canUseIntersectionObserver;let M;Object(n.useEffect)((()=>(!E&&h&&window.docusaurus.prefetch(N),()=>{E&&M&&M.disconnect()})),[N,E,h]);const w=null!==(e=null==N?void 0:N.startsWith("#"))&&void 0!==e&&e,x=!N||!h||w;return N&&h&&!w&&!d&&y.collectLink(N),x?r.a.createElement("a",Object.assign({href:N},g&&!h&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(k,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(N),I.current=!0)},innerRef:t=>{var e,a;E&&t&&h&&(e=t,a=()=>{window.docusaurus.prefetch(N)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),a())}))})),M.observe(e))},to:N||""},a&&{isActive:m,activeClassName:O}))}},2210:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2207);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},680:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return l})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(2208)),i=a(2209),o={title:"ConstraintTerm",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ConstraintTerm",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ConstraintTerm",isDocsHomePage:!1,title:"ConstraintTerm",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\ExternalInputs\\ConstraintTerm.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ConstraintTerm",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ConstraintTerm",version:"current",sidebar:"docs",previous:{title:"ContingencyConstraintLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ContingencyConstraintLimit"},next:{title:"BranchEndFlow",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/BranchEndFlow"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A constraint term is one element of a linear constraint."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"factor"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The function is an enumerated value that can be 'active', 'reactive', or 'VA' to indicate the type of flow.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/NodeConstraintTerm",mdxType:"Link"},"NodeConstraintTerm")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TerminalConstraintTerm",mdxType:"Link"},"TerminalConstraintTerm"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/SecurityConstraintSum",mdxType:"Link"},"SecurityConstraintSum")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/ConstraintTerm",mdxType:"Link"},"ConstraintTerm")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SecurityConstraintSum"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConstraintTerms"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);