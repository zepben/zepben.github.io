(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{2194:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2195:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||c;return a?n.a.createElement(f,o({ref:t},s,{components:a})):n.a.createElement(f,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2196:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2194),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2197),u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,b,d=e.isNavLink,p=e.to,f=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,I=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(s.b)().withBaseUrl,v=Object(r.useContext)(l),y=p||f,N=Object(i.a)(y),w=null==y?void 0:y.replace("pathname://",""),E=void 0!==w?(a=w,h&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,T=Object(r.useRef)(!1),k=d?c.e:c.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&N&&window.docusaurus.prefetch(E),function(){A&&b&&b.disconnect()}}),[E,A,N]);var D=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!N||D;return E&&N&&!D&&!j&&v.collectLink(E),x?n.a.createElement("a",Object.assign({href:E},y&&!N&&{target:"_blank",rel:"noopener noreferrer"},I)):n.a.createElement(k,Object.assign({},I,{onMouseEnter:function(){T.current||(window.docusaurus.preload(E),T.current=!0)},innerRef:function(e){var t,a;A&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(E)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:E||""},d&&{isActive:O,activeClassName:m}))}},2197:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2194);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2195)),i=a(2196),o={title:"SurgeArresterInfo",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo",isDocsHomePage:!1,title:"SurgeArresterInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfAssetInfo\\SurgeArresterInfo.mdx",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo",version:"current",sidebar:"docs",previous:{title:"ShuntImpedanceLocalControlKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ShuntImpedanceLocalControlKind"},next:{title:"OldSwitchInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldSwitchInfo"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Properties of surge arrester.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"continuousOperatingVoltage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum continuous power frequency voltage allowed on the surge arrester.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isPolymer"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If true, the arrester has a polymer housing, porcelain otherwise.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lightningImpulseDischargeVoltage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Residual voltage during an 8x20 microsecond current impulse at the nominal discharge current level.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lineDischargeClass"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Determines the arrester energy discharge capability.  Choices are limited to 0 (none) through 5 (highest) by IEC 60099. Classes 1..3 require a 10-kA nominal discharge current. Classes 4..5 require a 20-kA nominal discharge current. Lower nominal discharge currents must use class 0.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"nominalDischargeCurrent"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The lightning discharge current used to classify the arrester. Choices are limited to 1.5, 2.5, 5, 10, and 20 kA by IEC 60099.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pressureReliefClass"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Fault current level at which all parts of the failed arrester lie within a circle prescribed by IEC 60099.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedVoltage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The temporary overvoltage (TOV) level at power frequency that the surge arrester withstands for 10 seconds.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"steepFrontDischargeVoltage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Residual voltage during a current impulse with front time of 1 microsecond, and magnitude equal to the nominal discharge current level.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"switchingImpulseDischargeVoltage"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Residual voltage during a current impulse with front time of at least 30 microseconds, and magnitude specified in IEC 60099 for the line discharge class. Does not apply to line discharge class 0.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}b.isMDXComponent=!0}}]);