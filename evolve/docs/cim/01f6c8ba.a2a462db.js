(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),O=r,d=u["".concat(i,".").concat(O)]||u[O]||b[O]||c;return a?n.a.createElement(d,o({ref:t},l,{components:a})):n.a.createElement(d,o({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2160),o=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(2163),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:u,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0}=e,j=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),v=Object(r.useContext)(s),g=b||u,y=Object(i.a)(g),C=null==g?void 0:g.replace("pathname://",""),N=void 0!==C?(S=C,f&&(e=>e.startsWith("/"))(S)?h(S):S):void 0;var S;const T=Object(r.useRef)(!1),w=a?c.e:c.c,I=o.a.canUseIntersectionObserver;let E;Object(r.useEffect)((()=>(!I&&y&&window.docusaurus.prefetch(N),()=>{I&&E&&E.disconnect()})),[N,I,y]);const k=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,x=!N||!y||k;return N&&y&&!k&&!m&&v.collectLink(N),x?n.a.createElement("a",Object.assign({href:N},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(w,Object.assign({},j,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(N),T.current=!0)},innerRef:e=>{var t,a;I&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(N)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:N||""},a&&{isActive:d,activeClassName:O}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2161)),i=a(2162),o={title:"SvTapStep"},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",id:"cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",isDocsHomePage:!1,title:"SvTapStep",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\StateVariables\\SvTapStep.md",slug:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",version:"current",sidebar:"docs",previous:{title:"SvShuntCompensatorSections",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/StateVariables/SvShuntCompensatorSections"},next:{title:"SvSwitch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/StateVariables/SvSwitch"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"State variable for transformer tap step.   "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"position"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The floating point tap position.   This is not the tap ratio, but rather the tap step position as defined by the related tap changer model and normally is constrained to be within the range of minimum and maximum tap positions.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/StateVariable",mdxType:"Link"},"StateVariable"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",mdxType:"Link"},"SvTapStep")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SvTapStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap step state associated with the tap changer."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChanger"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap changer associated with the tap step state.")))))}b.isMDXComponent=!0}}]);