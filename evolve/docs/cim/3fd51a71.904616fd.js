(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{2171:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2172:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),O=p(a),m=r,j=O["".concat(i,".").concat(m)]||O[m]||s[m]||c;return a?n.a.createElement(j,o({ref:t},b,{components:a})):n.a.createElement(j,o({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2173:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2171),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),b=a(2174),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,s,O=e.isNavLink,m=e.to,j=e.href,u=e.activeClassName,d=e.isActive,f=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,g=void 0===v||v,h=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,C=Object(r.useContext)(l),w=m||j,y=Object(i.a)(w),D=null==w?void 0:w.replace("pathname://",""),E=void 0!==D?(a=D,g&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,P=Object(r.useRef)(!1),T=O?c.e:c.c,I=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!I&&y&&window.docusaurus.prefetch(E),function(){I&&s&&s.disconnect()}}),[E,I,y]);var R=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!y||R;return E&&y&&!R&&!f&&C.collectLink(E),x?n.a.createElement("a",Object.assign({href:E},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(T,Object.assign({},h,{onMouseEnter:function(){P.current||(window.docusaurus.preload(E),P.current=!0)},innerRef:function(e){var t,a;I&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(E)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:E||""},O&&{isActive:d,activeClassName:u}))}},2174:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2171);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+p:p}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},601:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),c=(a(0),a(2172)),i=a(2173),o={title:"DispatchablePowerCapability"},l={unversionedId:"cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",id:"cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",isDocsHomePage:!1,title:"DispatchablePowerCapability",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\DER\\DispatchablePowerCapability.md",slug:"/cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",version:"current",sidebar:"docs",previous:{title:"DERParameterKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/DER/DERParameterKind"},next:{title:"DispatchSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/DER/DispatchSchedule"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"currentActivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The current level of active power for a DER group")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"currentApparentPower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The current level of apparent power for a DER group")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"currentReactivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The current level of reactive power for a DER group")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxActivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum level of active power to which a DER group can be set")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxApparentPower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum level of apparent power to which a DER group can be set")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxReactivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum level of reactive power to which a DER group can be set")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minActivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The minimum level of active power to which a DER group can be set")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minApparentPower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The minimum level of apparent power to which a DER group can be set")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minReactivePower"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The minimum level of reactive power to which a DER group can be set")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",mdxType:"Link"},"DispatchablePowerCapability")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDevice"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The generic class to support all field end devices such as meters or smart inverters"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DispatchablePowerCapability"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceGroup",mdxType:"Link"},"EndDeviceGroup")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",mdxType:"Link"},"DispatchablePowerCapability")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDeviceGroup"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EndDeviceGroup is used in metering to group end devices, this same class is used to group DER"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DispatchablePowerCapability"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}s.isMDXComponent=!0}}]);