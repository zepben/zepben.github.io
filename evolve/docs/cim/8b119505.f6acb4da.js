(window.webpackJsonp=window.webpackJsonp||[]).push([[1154],{1225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2208)),i=a(2209),o={title:"RatioTapChanger",hide_table_of_contents:!0},s={unversionedId:"evolve/IEC61970/Base/Wires/RatioTapChanger",id:"evolve/IEC61970/Base/Wires/RatioTapChanger",isDocsHomePage:!1,title:"RatioTapChanger",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Wires\\RatioTapChanger.mdx",slug:"/evolve/IEC61970/Base/Wires/RatioTapChanger",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/RatioTapChanger",version:"current",sidebar:"docs",previous:{title:"WindingConnection",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/WindingConnection"},next:{title:"TapChanger",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/TapChanger"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A tap changer that changes the voltage ratio impacting the voltage magnitude but not the phase angle across the transformer."),Object(c.a)("p",null,"Angle sign convention (general): Positive value indicates a positive phase shift from the winding where the tap is located to the other winding (for a two-winding transformer).  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stepVoltageIncrement"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tap step increment, in per cent of rated voltage of the power transformer end, per step position. When the increment is negative, the voltage decreases when the tap step increases.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"True"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TransformerEnd"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transformer end to which this ratio tap changer belongs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RatioTapChanger"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ratio tap changer associated with this transformer end.")))))}b.isMDXComponent=!0},2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,d=u["".concat(i,".").concat(O)]||u[O]||b[O]||c;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2207),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2210),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:u,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:j=!0}=e,m=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),g=Object(n.useContext)(s),v=b||u,y=Object(i.a)(v),N=null==v?void 0:v.replace("pathname://",""),C=void 0!==N?(w=N,j&&(e=>e.startsWith("/"))(w)?h(w):w):void 0;var w;const T=Object(n.useRef)(!1),E=a?c.e:c.c,k=o.a.canUseIntersectionObserver;let I;Object(n.useEffect)((()=>(!k&&y&&window.docusaurus.prefetch(C),()=>{k&&I&&I.disconnect()})),[C,k,y]);const P=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,R=!C||!y||P;return C&&y&&!P&&!f&&g.collectLink(C),R?r.a.createElement("a",Object.assign({href:C},v&&!y&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(E,Object.assign({},m,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(C),T.current=!0)},innerRef:e=>{var t,a;k&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(C)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:C||""},a&&{isActive:d,activeClassName:O}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}}}]);