(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{2160:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=u(n),p=a,f=O["".concat(s,".").concat(p)]||O[p]||b[p]||c;return n?r.a.createElement(f,i({ref:t},l,{components:n})):r.a.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),s=n(2160),i=n(8);const o=Object(a.createContext)({collectLink:()=>{}});var l=n(2163),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:b,href:O,activeClassName:p,isActive:f,"data-noBrokenLinkCheck":d,autoAddBaseUrl:j=!0}=e,m=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),v=Object(a.useContext)(o),g=b||O,w=Object(s.a)(g),y=null==g?void 0:g.replace("pathname://",""),C=void 0!==y?(N=y,j&&(e=>e.startsWith("/"))(N)?h(N):N):void 0;var N;const A=Object(a.useRef)(!1),I=n?c.e:c.c,E=i.a.canUseIntersectionObserver;let T;Object(a.useEffect)((()=>(!E&&w&&window.docusaurus.prefetch(C),()=>{E&&T&&T.disconnect()})),[C,E,w]);const k=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!w||k;return C&&w&&!k&&!d&&v.collectLink(C),x?r.a.createElement("a",Object.assign({href:C},g&&!w&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(I,Object.assign({},m,{onMouseEnter:()=>{A.current||(window.docusaurus.preload(C),A.current=!0)},innerRef:e=>{var t,n;E&&e&&w&&(t=e,n=()=>{window.docusaurus.prefetch(C)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:C||""},n&&{isActive:f,activeClassName:p}))}},2163:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(23),r=n(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(t,e,n,a)}}function s(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},459:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(2161)),s=n(2162),i={title:"AssetOwner"},o={unversionedId:"cim100/TC57CIM/IEC61968/Assets/AssetOwner",id:"cim100/TC57CIM/IEC61968/Assets/AssetOwner",isDocsHomePage:!1,title:"AssetOwner",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\AssetOwner.md",slug:"/cim100/TC57CIM/IEC61968/Assets/AssetOwner",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetOwner",version:"current",sidebar:"docs",previous:{title:"AssetOrganisationRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole"},next:{title:"RiskScore",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/RiskScore"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Owner of the asset."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",mdxType:"Link"},"AssetOrganisationRole"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC61968/Common/Ownership",mdxType:"Link"},"Ownership")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetOwner",mdxType:"Link"},"AssetOwner")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ownerships"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All ownerships of this owner."),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"AssetOwner"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Asset owner that is subject in this ownership.")))))}b.isMDXComponent=!0}}]);