(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),O=r,d=p["".concat(i,".").concat(O)]||p[O]||u[O]||c;return a?n.a.createElement(d,o({ref:t},l,{components:a})):n.a.createElement(d,o({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2160),o=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(2163),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:p,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,m=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),h=Object(r.useContext)(s),y=u||p,v=Object(i.a)(y),C=null==y?void 0:y.replace("pathname://",""),A=void 0!==C?(N=C,j&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const w=Object(r.useRef)(!1),I=a?c.e:c.c,S=o.a.canUseIntersectionObserver;let T;Object(r.useEffect)((()=>(!S&&v&&window.docusaurus.prefetch(A),()=>{S&&T&&T.disconnect()})),[A,S,v]);const E=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!v||E;return A&&v&&!E&&!f&&h.collectLink(A),k?n.a.createElement("a",Object.assign({href:A},y&&!v&&{target:"_blank",rel:"noopener noreferrer"},m)):n.a.createElement(I,Object.assign({},m,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(A),w.current=!0)},innerRef:e=>{var t,a;S&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(A)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),a())}))})),T.observe(t))},to:A||""},a&&{isActive:d,activeClassName:O}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},450:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),c=(a(0),a(2161)),i=a(2162),o={title:"AggregateScore"},s={unversionedId:"cim100/TC57CIM/IEC61968/Assets/AggregateScore",id:"cim100/TC57CIM/IEC61968/Assets/AggregateScore",isDocsHomePage:!1,title:"AggregateScore",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\AggregateScore.md",slug:"/cim100/TC57CIM/IEC61968/Assets/AggregateScore",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AggregateScore",version:"current",sidebar:"docs",previous:{title:"Asset",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/Asset"},next:{title:"AssetContainer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetContainer"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"An aggregated indicative scoring by an analytic, which is based on other analytic scores, that can be used to characterize the health of or the risk associated with one or more assets.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AnalyticScore",mdxType:"Link"},"AnalyticScore"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/HealthScore",mdxType:"Link"},"HealthScore")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/RiskScore",mdxType:"Link"},"RiskScore"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AggregateScore",mdxType:"Link"},"AggregateScore")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AnalyticScore",mdxType:"Link"},"AnalyticScore")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AssetAggregateScore"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Aggregate score to which this analytic score contributed."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AnalyticScore"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Analytic score contributing to this aggregate score.")))))}u.isMDXComponent=!0}}]);