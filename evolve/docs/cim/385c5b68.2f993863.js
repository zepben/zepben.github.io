(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{2194:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2195:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(0),c=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var b=c.a.createContext({}),s=function(t){var e=c.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,j=d["".concat(i,".").concat(m)]||d[m]||O[m]||r;return a?c.a.createElement(j,l({ref:e},b,{components:a})):c.a.createElement(j,l({ref:e},b))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var b=2;b<r;b++)i[b]=a[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2196:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2194),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2197),s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,O,d=t.isNavLink,m=t.to,j=t.href,u=t.activeClassName,p=t.isActive,f=t["data-noBrokenLinkCheck"],y=t.autoAddBaseUrl,g=void 0===y||y,C=s(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,v=Object(n.useContext)(o),E=m||j,T=Object(i.a)(E),x=null==E?void 0:E.replace("pathname://",""),h=void 0!==x?(a=x,g&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,I=Object(n.useRef)(!1),D=d?r.e:r.c,w=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&T&&window.docusaurus.prefetch(h),function(){w&&O&&O.disconnect()}}),[h,w,T]);var M=null!==(e=null==h?void 0:h.startsWith("#"))&&void 0!==e&&e,k=!h||!T||M;return h&&T&&!M&&!f&&v.collectLink(h),k?c.a.createElement("a",Object.assign({href:h},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},C)):c.a.createElement(D,Object.assign({},C,{onMouseEnter:function(){I.current||(window.docusaurus.preload(h),I.current=!0)},innerRef:function(t){var e,a;w&&t&&T&&(e=t,a=function(){window.docusaurus.prefetch(h)},(O=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.unobserve(e),O.disconnect(),a())}))}))).observe(e))},to:h||""},d&&{isActive:p,activeClassName:u}))}},2197:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var n=a(23),c=a(2194);function r(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,l=void 0!==i&&i,o=r.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return e+a;var s=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+s:s}(r,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},542:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return O}));var n=a(3),c=a(7),r=(a(0),a(2195)),i=a(2196),l={title:"ExcAC5A",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC5A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC5A",isDocsHomePage:!1,title:"ExcAC5A",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\ExcitationSystemDynamics\\ExcAC5A.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC5A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC5A",version:"current",sidebar:"docs",previous:{title:"ExcAC4A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC4A"},next:{title:"ExcAC6A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcAC6A"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function O(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Modified IEEE AC5A alternator-supplied rectifier excitation system with different minimum controller output.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"a"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coefficient to allow different usage of the model (",Object(r.a)("i",null,"a"),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efd1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter voltage at which exciter saturation is defined (",Object(r.a)("i",null,"Efd1"),") (",">"," 0).  Typical value = 5,6.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"efd2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter voltage at which exciter saturation is defined (",Object(r.a)("i",null,"Efd2"),") (",">"," 0).  Typical value = 4,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator gain (",Object(r.a)("i",null,"Ka"),") (",">"," 0).  Typical value = 400.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ke"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter constant related to self-excited field (",Object(r.a)("i",null,"Ke"),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kf"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer gains (",Object(r.a)("i",null,"Kf"),") (",">","= 0).  Typical value = 0,03.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ks"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Coefficient to allow different usage of the model-speed coefficient (",Object(r.a)("i",null,"Ks"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seefd1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Efd"),Object(r.a)("i",null,Object(r.a)("sub",null,"1"))," (",Object(r.a)("i",null,"Se","[Efd"),Object(r.a)("i",null,Object(r.a)("sub",null,"1")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,86.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"seefd2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter saturation function value at the corresponding exciter voltage, ",Object(r.a)("i",null,"Efd"),Object(r.a)("i",null,Object(r.a)("sub",null,"2"))," (",Object(r.a)("i",null,"Se","[Efd"),Object(r.a)("i",null,Object(r.a)("sub",null,"2")),Object(r.a)("i",null,"]"),") (",">","= 0).  Typical value = 0,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Ta"),") (",">"," 0).  Typical value = 0,02.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Tb"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage regulator time constant (",Object(r.a)("i",null,"Tc"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"te"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exciter time constant, integration rate associated with exciter control (",Object(r.a)("i",null,"Te"),") (",">"," 0).  Typical value = 0,8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"Tf1"),") (",">"," 0).  Typical value  = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"Tf2"),") (",">","= 0).  Typical value = 0,8.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tf3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Excitation control system stabilizer time constant (",Object(r.a)("i",null,"Tf3"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum voltage regulator output (",Object(r.a)("i",null,"Vrmax"),") (",">"," 0).  Typical value = 7,3.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vrmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum voltage regulator output (",Object(r.a)("i",null,"Vrmin"),") (","<"," 0).  Typical value =-7,3.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}O.isMDXComponent=!0}}]);