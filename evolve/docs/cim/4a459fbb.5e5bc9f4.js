(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=r,O=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return a?n.a.createElement(O,o({ref:t},s,{components:a})):n.a.createElement(O,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2207),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2210),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:b,activeClassName:m,isActive:O,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(s.b)(),h=Object(r.useContext)(l),v=p||b,C=Object(c.a)(v),g=null==v?void 0:v.replace("pathname://",""),E=void 0!==g?(x=g,f&&(e=>e.startsWith("/"))(x)?y(x):x):void 0;var x;const N=Object(r.useRef)(!1),T=a?i.e:i.c,I=o.a.canUseIntersectionObserver;let A;Object(r.useEffect)((()=>(!I&&C&&window.docusaurus.prefetch(E),()=>{I&&A&&A.disconnect()})),[E,I,C]);const w=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,q=!E||!C||w;return E&&C&&!w&&!d&&h.collectLink(E),q?n.a.createElement("a",Object.assign({href:E},v&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(T,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(E),N.current=!0)},innerRef:e=>{var t,a;I&&e&&C&&(t=e,a=()=>{window.docusaurus.prefetch(E)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),a())}))})),A.observe(t))},to:E||""},a&&{isActive:O,activeClassName:m}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},694:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(2208)),c=a(2209),o={title:"AuxiliaryEquipment",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",id:"cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",isDocsHomePage:!1,title:"AuxiliaryEquipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\AuxiliaryEquipment\\AuxiliaryEquipment.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",version:"current",sidebar:"docs",previous:{title:"PotentialTransformer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/PotentialTransformer"},next:{title:"FaultIndicator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"AuxiliaryEquipment describe equipment that is not performing any primary functions but support for the equipment performing the primary function."),Object(i.a)("p",null,"AuxiliaryEquipment is attached to primary equipment via an association with Terminal.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/FaultIndicator",mdxType:"Link"},"FaultIndicator")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/Sensor",mdxType:"Link"},"Sensor")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/SurgeArrester",mdxType:"Link"},"SurgeArrester")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/WaveTrap",mdxType:"Link"},"WaveTrap"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/AuxiliaryEquipment/AuxiliaryEquipment",mdxType:"Link"},"AuxiliaryEquipment")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AuxiliaryEquipment"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The auxiliary equipment connected to the terminal."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Terminal at the equipment where the AuxiliaryEquipment is attached.")))))}p.isMDXComponent=!0}}]);