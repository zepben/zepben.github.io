(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{2160:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},2161:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=n.a.createContext({}),b=function(t){var e=n.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},u=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=b(a),O=r,j=u["".concat(i,".").concat(O)]||u[O]||p[O]||c;return a?n.a.createElement(j,o({ref:e},s,{components:a})):n.a.createElement(j,o({ref:e},s))}));function O(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2162:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2160),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2163),b=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a};e.a=function(t){var e,{isNavLink:a,to:p,href:u,activeClassName:O,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0}=t,m=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),y=Object(r.useContext)(l),h=p||u,N=Object(i.a)(h),v=null==h?void 0:h.replace("pathname://",""),C=void 0!==v?(I=v,f&&(t=>t.startsWith("/"))(I)?g(I):I):void 0;var I;const k=Object(r.useRef)(!1),w=a?c.e:c.c,P=o.a.canUseIntersectionObserver;let M;Object(r.useEffect)((()=>(!P&&N&&window.docusaurus.prefetch(C),()=>{P&&M&&M.disconnect()})),[C,P,N]);const T=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,A=!C||!N||T;return C&&N&&!T&&!d&&y.collectLink(C),A?n.a.createElement("a",Object.assign({href:C},h&&!N&&{target:"_blank",rel:"noopener noreferrer"},m)):n.a.createElement(w,Object.assign({},m,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(C),k.current=!0)},innerRef:t=>{var e,a;P&&t&&N&&(e=t,a=()=>{window.docusaurus.prefetch(C)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),a())}))})),M.observe(e))},to:C||""},a&&{isActive:j,activeClassName:O}))}},2163:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+i:i}(e,t,a,r)}}function i(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},570:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(2161)),i=a(2162),o={title:"AttributeProperty"},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty",isDocsHomePage:!1,title:"AttributeProperty",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\ParticipantInterfaces\\AttributeProperty.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty",version:"current",sidebar:"docs",previous:{title:"Bid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Bid"},next:{title:"AreaLoadBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Property for a particular attribute that contains name and value."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"propertyName"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"propertyValue"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"sequence"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty",mdxType:"Link"},"AttributeProperty")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MktUserAttribute",mdxType:"Link"},"MktUserAttribute")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AttributeProperty"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MktUserAttribute"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}p.isMDXComponent=!0}}]);