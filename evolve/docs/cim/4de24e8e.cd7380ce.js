(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),p=r,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||c;return a?n.a.createElement(m,i({ref:t},l,{components:a})):n.a.createElement(m,i({ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),o=a(2207),i=a(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=a(2210),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:b,activeClassName:p,isActive:m,"data-noBrokenLinkCheck":j,autoAddBaseUrl:O=!0}=e,f=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),g=Object(r.useContext)(s),h=u||b,v=Object(o.a)(h),C=null==h?void 0:h.replace("pathname://",""),D=void 0!==C?(A=C,O&&(e=>e.startsWith("/"))(A)?y(A):A):void 0;var A;const E=Object(r.useRef)(!1),N=a?c.e:c.c,w=i.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!w&&v&&window.docusaurus.prefetch(D),()=>{w&&I&&I.disconnect()})),[D,w,v]);const V=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,T=!D||!v||V;return D&&v&&!V&&!j&&g.collectLink(D),T?n.a.createElement("a",Object.assign({href:D},h&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(N,Object.assign({},f,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(D),E.current=!0)},innerRef:e=>{var t,a;w&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(D)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:D||""},a&&{isActive:m,activeClassName:p}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var r=a(23),n=a(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+o:o}(t,e,a,r)}}function o(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},726:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),c=(a(0),a(2208)),o=a(2209),i={title:"VoltageAdjusterDynamics",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",isDocsHomePage:!1,title:"VoltageAdjusterDynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\VoltageAdjusterDynamics\\VoltageAdjusterDynamics.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",version:"current",sidebar:"docs",previous:{title:"PFVArType1IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArType1IEEEVArController"},next:{title:"VAdjIEEE",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VAdjIEEE"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Voltage adjuster function block whose behaviour is described by reference to a standard model ",Object(c.a)("font",{color:"#0f0f0f"},"or by definition of a user-defined model."),"  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",mdxType:"Link"},"DynamicsFunctionBlock"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VAdjIEEE",mdxType:"Link"},"VAdjIEEE")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/VoltageAdjusterUserDefined",mdxType:"Link"},"VoltageAdjusterUserDefined"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageAdjusterDynamics/VoltageAdjusterDynamics",mdxType:"Link"},"VoltageAdjusterDynamics")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType1Dynamics/PFVArControllerType1Dynamics",mdxType:"Link"},"PFVArControllerType1Dynamics")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VoltageAdjusterDynamics"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Voltage adjuster model associated with this power factor or VAr controller type 1 model."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PFVArControllerType1Dynamics"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Power factor or VAr controller type 1 model with which this voltage adjuster is associated.")))))}u.isMDXComponent=!0}}]);