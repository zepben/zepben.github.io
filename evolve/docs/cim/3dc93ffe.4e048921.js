(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{2199:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,j=p["".concat(s,".").concat(u)]||p[u]||O[u]||c;return a?n.a.createElement(j,i({ref:t},o,{components:a})):n.a.createElement(j,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<c;o++)s[o]=a[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),s=a(2199),i=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var o=a(2202),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:p,activeClassName:u,isActive:j,"data-noBrokenLinkCheck":m,autoAddBaseUrl:d=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(o.b)(),C=Object(r.useContext)(l),N=O||p,y=Object(s.a)(N),k=null==N?void 0:N.replace("pathname://",""),M=void 0!==k?(h=k,d&&(e=>e.startsWith("/"))(h)?g(h):h):void 0;var h;const v=Object(r.useRef)(!1),R=a?c.e:c.c,I=i.a.canUseIntersectionObserver;let L;Object(r.useEffect)((()=>(!I&&y&&window.docusaurus.prefetch(M),()=>{I&&L&&L.disconnect()})),[M,I,y]);const T=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,w=!M||!y||T;return M&&y&&!T&&!m&&C.collectLink(M),w?n.a.createElement("a",Object.assign({href:M},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(R,Object.assign({},f,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(M),v.current=!0)},innerRef:e=>{var t,a;I&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(M)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),a())}))})),L.observe(t))},to:M||""},a&&{isActive:j,activeClassName:u}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var r=a(23),n=a(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const s=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+s:s}(t,e,a,r)}}function s(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},599:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return O}));var r=a(3),n=a(7),c=(a(0),a(2200)),s=a(2201),i={title:"LossClearingResults",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",isDocsHomePage:!1,title:"LossClearingResults",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\MarketSystem\\MarketResults\\LossClearingResults.mdx",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",version:"current",sidebar:"docs",previous:{title:"MPMClearing",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMClearing"},next:{title:"TransactionBidResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/TransactionBidResults"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:o};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Provides the MW loss for RUC Zones, subcontrol areas, and the total loss."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lossMW"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",mdxType:"Link"},"LossClearingResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/SubControlArea",mdxType:"Link"},"SubControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LossClearingResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SubControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearing",mdxType:"Link"},"LossClearing")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",mdxType:"Link"},"LossClearingResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LossClearing"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LossClearingResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/RUCZone",mdxType:"Link"},"RUCZone")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",mdxType:"Link"},"LossClearingResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RUCZone"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LossClearingResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/HostControlArea",mdxType:"Link"},"HostControlArea")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(s.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearingResults",mdxType:"Link"},"LossClearingResults")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"HostControlArea"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LossClearingResults"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);