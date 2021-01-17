(window.webpackJsonp=window.webpackJsonp||[]).push([[1883],{1954:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),c=a(7),r=(a(0),a(2161)),i=a(2162),l={title:"ExcANS"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcANS",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcANS",isDocsHomePage:!1,title:"ExcANS",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcANS.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcANS",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcANS",version:"current",sidebar:"docs",previous:{title:"ExcAC8B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC8B"},next:{title:"ExcAVR1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAVR1"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function O(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Italian excitation system. It represents static field voltage or excitation current feedback excitation system.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"blint"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Governor control flag (",Object(r.a)("i",null,"BLINT"),").  0 = lead-lag regulator 1 = proportional integral regulator. Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ifmn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum exciter current (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"FMN")),").  Typical value = -5,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ifmx"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum exciter current (",Object(r.a)("i",null,"I"),Object(r.a)("i",null,Object(r.a)("sub",null,"FMX")),").  Typical value = 6,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),").  Typical value = 20.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AVR gain (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"3")),").  Typical value = 1000.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kce"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ceiling factor (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"CE")),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"krvecc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Feedback enabling (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"RVECC")),").  0 = open loop control 1 = closed loop control. Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kvfif"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rate feedback signal flag (",Object(r.a)("i",null,"K"),Object(r.a)("i",null,Object(r.a)("sub",null,"VFIF")),").  0 = output voltage of the exciter 1 = exciter field current. Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),") (",">","= 0).  Typical value = 20.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"3")),") (",">","= 0).  Typical value = 1,6.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant (",Object(r.a)("i",null,"T"),Object(r.a)("i",null,Object(r.a)("sub",null,"B")),") (",">","= 0).  Typical value = 0,04.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmn"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum AVR output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMN")),").  Typical value = -5,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmx"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum AVR output (",Object(r.a)("i",null,"V"),Object(r.a)("i",null,Object(r.a)("sub",null,"RMX")),").  Typical value = 6,5.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}O.isMDXComponent=!0},2160:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),j=s(a),u=n,m=j["".concat(i,".").concat(u)]||j[u]||O[u]||r;return a?c.a.createElement(m,l({ref:t},b,{components:a})):c.a.createElement(m,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<r;b++)i[b]=a[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2160),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var b=a(2163),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,{isNavLink:a,to:O,href:j,activeClassName:u,isActive:m,"data-noBrokenLinkCheck":p,autoAddBaseUrl:d=!0}=e,f=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(b.b)(),g=Object(n.useContext)(o),N=O||j,C=Object(i.a)(N),v=null==N?void 0:N.replace("pathname://",""),T=void 0!==v?(I=v,d&&(e=>e.startsWith("/"))(I)?y(I):I):void 0;var I;const x=Object(n.useRef)(!1),E=a?r.e:r.c,h=l.a.canUseIntersectionObserver;let D;Object(n.useEffect)((()=>(!h&&C&&window.docusaurus.prefetch(T),()=>{h&&D&&D.disconnect()})),[T,h,C]);const M=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,k=!T||!C||M;return T&&C&&!M&&!p&&g.collectLink(T),k?c.a.createElement("a",Object.assign({href:T},N&&!C&&{target:"_blank",rel:"noopener noreferrer"},f)):c.a.createElement(E,Object.assign({},f,{onMouseEnter:()=>{x.current||(window.docusaurus.preload(T),x.current=!0)},innerRef:e=>{var t,a;h&&e&&C&&(t=e,a=()=>{window.docusaurus.prefetch(T)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:T||""},a&&{isActive:m,activeClassName:u}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(23),c=a(2160);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}}}]);