(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{2181:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2182:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),m=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,i=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),O=m(a),j=n,p=O["".concat(i,".").concat(j)]||O[j]||s[j]||c;return a?r.a.createElement(p,l({ref:e},b,{components:a})):r.a.createElement(p,l({ref:e},b))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,i=new Array(c);i[0]=O;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2183:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2181),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2184),m=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,s,O=t.isNavLink,j=t.to,p=t.href,d=t.activeClassName,u=t.isActive,f=t["data-noBrokenLinkCheck"],y=t.autoAddBaseUrl,g=void 0===y||y,v=m(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,C=Object(n.useContext)(o),T=j||p,x=Object(i.a)(T),E=null==T?void 0:T.replace("pathname://",""),I=void 0!==E?(a=E,g&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,h=Object(n.useRef)(!1),D=O?c.e:c.c,S=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!S&&x&&window.docusaurus.prefetch(I),function(){S&&s&&s.disconnect()}}),[I,S,x]);var M=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,k=!I||!x||M;return I&&x&&!M&&!f&&C.collectLink(I),k?r.a.createElement("a",Object.assign({href:I},T&&!x&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(D,Object.assign({},v,{onMouseEnter:function(){h.current||(window.docusaurus.preload(I),h.current=!0)},innerRef:function(t){var e,a;S&&t&&x&&(e=t,a=function(){window.docusaurus.prefetch(I)},(s=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(s.unobserve(e),s.disconnect(),a())}))}))).observe(e))},to:I||""},O&&{isActive:u,activeClassName:d}))}},2184:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2181);function c(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return e+a;var m=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+m:m}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}},263:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(2182)),i=a(2183),l={title:"ExcST1A"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A",isDocsHomePage:!1,title:"ExcST1A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcST1A.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A",version:"current",sidebar:"docs",previous:{title:"ExcSK",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcSK"},next:{title:"ExcST2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:b};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},m,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Modification of an old IEEE ST1A static excitation system without overexcitation limiter (OEL) and underexcitation limiter (UEL).  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ilr"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter output current limit reference (",Object(c.a)("i",null,"Ilr"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(c.a)("i",null,"Ka"),") (",">"," 0).  Typical value = 190.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kc"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Rectifier loading factor proportional to commutating reactance (",Object(c.a)("i",null,"Kc"),") (",">","= 0). Typical value = 0,05.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(c.a)("i",null,"Kf"),") (",">","= 0).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"klr"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter output current limiter gain (",Object(c.a)("i",null,"Klr"),").  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Ta"),") (",">","= 0).  Typical value = 0,02.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tb"),") (",">","= 0).  Typical value = 10.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tb1"),") (",">","= 0).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tc"),") (",">","= 0).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(c.a)("i",null,"Tc1"),") (",">","= 0).  Typical value = 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(c.a)("i",null,"Tf"),") (",">","= 0).  Typical value = 1.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(c.a)("i",null,"Vamax"),") (",">"," 0).  Typical value = 999.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vamin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(c.a)("i",null,"Vamin"),") (","<"," 0).  Typical value = -999.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator input limit (",Object(c.a)("i",null,"Vimax"),") (",">"," 0).  Typical value = 999.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vimin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator input limit (",Object(c.a)("i",null,"Vimin"),") (","<"," 0).  Typical value = -999.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator outputs (",Object(c.a)("i",null,"Vrmax"),") (",">"," 0) .  Typical value = 7,8.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator outputs (",Object(c.a)("i",null,"Vrmin"),") (","<"," 0).  Typical value = -6,7.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xe"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation xfmr effective reactance (",Object(c.a)("i",null,"Xe"),").  Typical value = 0,04.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}s.isMDXComponent=!0}}]);