(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{2181:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2182:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=n.a.createContext({}),s=function(e){var t=n.a.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,O=u["".concat(c,".").concat(p)]||u[p]||b[p]||i;return a?n.a.createElement(O,o({ref:t},f,{components:a})):n.a.createElement(O,o({ref:t},f))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var f=2;f<i;f++)c[f]=a[f];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2183:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2181),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),f=a(2184),s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,b,u=e.isNavLink,p=e.to,O=e.href,d=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,y=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(f.b)().withBaseUrl,C=Object(r.useContext)(l),N=p||O,T=Object(c.a)(N),I=null==N?void 0:N.replace("pathname://",""),P=void 0!==I?(a=I,h&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,w=Object(r.useRef)(!1),M=u?i.e:i.c,E=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(P),function(){E&&b&&b.disconnect()}}),[P,E,T]);var k=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,x=!P||!T||k;return P&&T&&!k&&!j&&C.collectLink(P),x?n.a.createElement("a",Object.assign({href:P},N&&!T&&{target:"_blank",rel:"noopener noreferrer"},y)):n.a.createElement(M,Object.assign({},y,{onMouseEnter:function(){w.current||(window.docusaurus.preload(P),w.current=!0)},innerRef:function(e){var t,a;E&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(P)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:P||""},u&&{isActive:m,activeClassName:d}))}},2184:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2181);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,f=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return f?e+s:s}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},427:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return f})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(2182)),c=a(2183),o={title:"TariffProfile"},l={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",id:"cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",isDocsHomePage:!1,title:"TariffProfile",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\TariffProfile.md",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",version:"current",sidebar:"docs",previous:{title:"Shift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Shift"},next:{title:"Tender",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"}},f=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:f};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A schedule of charges; structure associated with Tariff that allows the definition of complex tarif structures such as step and time of use when used in conjunction with TimeTariffInterval and Charge. Inherited 'status.value' is defined in the context of the utility's business rules, for example: active, inactive, etc.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"tariffCycle"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The frequency at which the tariff charge schedule is repeated. Examples are: once off on a specified date and time; hourly; daily; weekly; monthly; 3-monthly; 6-monthly; 12-monthly; etc. At the end of each cycle, the business rules are reset to start from the beginning again.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Customers/Tariff",mdxType:"Link"},"Tariff")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",mdxType:"Link"},"TariffProfile")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tariffs"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariffs defined by this tariff profile."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles using this tariff.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",mdxType:"Link"},"TariffProfile")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this consumption tariff interval."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All consumption tariff intervals used to define this tariff profile.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",mdxType:"Link"},"TariffProfile")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this time tariff interval."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TimeTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All time tariff intervals used to define this tariff profile.")))))}b.isMDXComponent=!0}}]);