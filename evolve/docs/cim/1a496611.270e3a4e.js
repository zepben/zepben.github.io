(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{2207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,i({ref:t},l,{components:n})):r.a.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n(2207),i=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(2210),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":f,autoAddBaseUrl:O=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(l.b)(),C=Object(a.useContext)(s),v=p||b,y=Object(c.a)(v),g=null==v?void 0:v.replace("pathname://",""),w=void 0!==g?(E=g,O&&(e=>e.startsWith("/"))(E)?h(E):E):void 0;var E;const I=Object(a.useRef)(!1),N=n?o.e:o.c,T=i.a.canUseIntersectionObserver;let k;Object(a.useEffect)((()=>(!T&&y&&window.docusaurus.prefetch(w),()=>{T&&k&&k.disconnect()})),[w,T,y]);const x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,B=!w||!y||x;return w&&y&&!x&&!f&&C.collectLink(w),B?r.a.createElement("a",Object.assign({href:w},v&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(N,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:e=>{var t,n;T&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(w)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:w||""},n&&{isActive:m,activeClassName:d}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,a)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(2208)),c=n(2209),i={title:"EarthFaultCompensator",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/EarthFaultCompensator",id:"cim100/TC57CIM/IEC61970/Base/Wires/EarthFaultCompensator",isDocsHomePage:!1,title:"EarthFaultCompensator",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\EarthFaultCompensator.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/EarthFaultCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/EarthFaultCompensator",version:"current",sidebar:"docs",previous:{title:"ShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensator"},next:{title:"MutualCoupling",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/MutualCoupling"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A conducting equipment used to represent a connection to ground which is typically used to compensate earth faults.   An earth fault compensator device modelled with a single terminal implies a second terminal solidly connected to ground.  If two terminals are modelled, the ground is not assumed and normal connection rules apply.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"r"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Nominal resistance of device.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/GroundingImpedance",mdxType:"Link"},"GroundingImpedance")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PetersenCoil",mdxType:"Link"},"PetersenCoil"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);