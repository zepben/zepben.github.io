(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),O=r,d=p["".concat(o,".").concat(O)]||p[O]||b[O]||c;return a?n.a.createElement(d,i({ref:t},l,{components:a})):n.a.createElement(d,i({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),o=a(2160),i=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(2163),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:p,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":f,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),h=Object(r.useContext)(s),g=b||p,y=Object(o.a)(g),N=null==g?void 0:g.replace("pathname://",""),w=void 0!==N?(C=N,m&&(e=>e.startsWith("/"))(C)?v(C):C):void 0;var C;const A=Object(r.useRef)(!1),E=a?c.e:c.c,k=i.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!k&&y&&window.docusaurus.prefetch(w),()=>{k&&I&&I.disconnect()})),[w,k,y]);const M=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,B=!w||!y||M;return w&&y&&!M&&!f&&h.collectLink(w),B?n.a.createElement("a",Object.assign({href:w},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(E,Object.assign({},j,{onMouseEnter:()=>{A.current||(window.docusaurus.preload(w),A.current=!0)},innerRef:e=>{var t,a;k&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(w)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:w||""},a&&{isActive:d,activeClassName:O}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+o:o}(t,e,a,r)}}function o(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},456:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2161)),o=a(2162),i={title:"Accumulator"},s={unversionedId:"evolve/IEC61970/Base/Meas/Accumulator",id:"evolve/IEC61970/Base/Meas/Accumulator",isDocsHomePage:!1,title:"Accumulator",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Meas\\Accumulator.md",slug:"/evolve/IEC61970/Base/Meas/Accumulator",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Meas/Accumulator",version:"current",sidebar:"docs",previous:{title:"Discrete",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Meas/Discrete"},next:{title:"DiscreteValue",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Meas/DiscreteValue"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Accumulator represents an accumulated (counted) Measurement, e.g. an energy value.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"True"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Meas/Accumulator",mdxType:"Link"},"Accumulator")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/evolve/IEC61970/Base/Meas/AccumulatorValue",mdxType:"Link"},"AccumulatorValue")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Accumulator"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Measurement to which this value is connected."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AccumulatorValues"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The values connected to this measurement.")))))}b.isMDXComponent=!0}}]);