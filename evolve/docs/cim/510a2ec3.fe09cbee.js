(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{2207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),O=a,f=b["".concat(i,".").concat(O)]||b[O]||p[O]||c;return n?r.a.createElement(f,o({ref:t},s,{components:n})):r.a.createElement(f,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(10),i=n(2207),o=n(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=n(2210),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:O,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:d=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(s.b)(),I=Object(a.useContext)(l),g=p||b,C=Object(i.a)(g),v=null==g?void 0:g.replace("pathname://",""),y=void 0!==v?(E=v,d&&(e=>e.startsWith("/"))(E)?h(E):E):void 0;var E;const N=Object(a.useRef)(!1),P=n?c.e:c.c,w=o.a.canUseIntersectionObserver;let S;Object(a.useEffect)((()=>(!w&&C&&window.docusaurus.prefetch(y),()=>{w&&S&&S.disconnect()})),[y,w,C]);const T=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,k=!y||!C||T;return y&&C&&!T&&!m&&I.collectLink(y),k?r.a.createElement("a",Object.assign({href:y},g&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(P,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(y),N.current=!0)},innerRef:e=>{var t,n;w&&e&&C&&(t=e,n=()=>{window.docusaurus.prefetch(y)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:y||""},n&&{isActive:f,activeClassName:O}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},754:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(2208)),i=n(2209),o={title:"PinEquipment",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",isDocsHomePage:!1,title:"PinEquipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfSIPS\\PinEquipment.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",version:"current",sidebar:"docs",previous:{title:"PinBranchGroupKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinBranchGroupKind"},next:{title:"PinEquipmentKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipmentKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Value associated with Equipment is used as compare.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"kind"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipmentKind",mdxType:"Link"},"PinEquipmentKind")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The compare operation done on the equipment.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",mdxType:"Link"},"GateInputPin"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",mdxType:"Link"},"PinEquipment")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PinEquipment"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Equipment"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The Equipment that should be used in compare.")))))}p.isMDXComponent=!0}}]);