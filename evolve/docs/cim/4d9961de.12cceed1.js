(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,m=p["".concat(i,".").concat(j)]||p[j]||O[j]||c;return a?r.a.createElement(m,l({ref:t},b,{components:a})):r.a.createElement(m,l({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2179),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2182),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,O,p=e.isNavLink,j=e.to,m=e.href,s=e.activeClassName,f=e.isActive,u=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,N=void 0===g||g,h=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(b.b)().withBaseUrl,y=Object(n.useContext)(o),w=j||m,C=Object(i.a)(w),E=null==w?void 0:w.replace("pathname://",""),k=void 0!==E?(a=E,N&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,A=Object(n.useRef)(!1),D=p?c.e:c.c,I=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!I&&C&&window.docusaurus.prefetch(k),function(){I&&O&&O.disconnect()}}),[k,I,C]);var T=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,x=!k||!C||T;return k&&C&&!T&&!u&&y.collectLink(k),x?r.a.createElement("a",Object.assign({href:k},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(D,Object.assign({},h,{onMouseEnter:function(){A.current||(window.docusaurus.preload(k),A.current=!0)},innerRef:function(e){var t,a;I&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(k)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),a())}))}))).observe(t))},to:k||""},p&&{isActive:f,activeClassName:s}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2179);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+d:d}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},712:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(2180)),i=(a(2181),{title:"AtmosphericAnalogKind"}),l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvDomain/AtmosphericAnalogKind",id:"cim100/TC57CIM/IEC62325/Environmental/EnvDomain/AtmosphericAnalogKind",isDocsHomePage:!1,title:"AtmosphericAnalogKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvDomain\\AtmosphericAnalogKind.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/AtmosphericAnalogKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/AtmosphericAnalogKind",version:"current",sidebar:"docs",previous:{title:"RelativeDisplacement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/RelativeDisplacement"},next:{title:"CloudKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/CloudKind"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Kinds of analogs (floats)  measuring an atmospheric condition.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"albedo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ambientTemperature"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The temperature measured b",Object(c.a)("font",{color:"#0f0f0f"},"y a thermometer exposed to the air in a place sheltered from direct solar radiation. "),'Also known as "dry bulb" because',Object(c.a)("font",{color:"#0f0f0f"}," the air temperature is indicated by a thermometer not affecte"),"d by the moisture of the air.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"atmosphericPressure"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ceiling"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dewPoint"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The temperature to which air must be cooled at constant pressure and constant water-vapor content in order for saturation to occur. In other words, it is the temperature at which water vapor starts to condense out of the air.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heatIndex"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The temperature of how hot it "feels like" for a given combination of warm air temperature and relative humidity.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"horizontalVisibility"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"humidity"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ice"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"illuminanceDiffuseHorizontal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"illuminanceDirectNormal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"illuminanceGlobalHorizontal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"irradianceDiffuseHorizonal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"irradianceDirectNormal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"irradianceExtraTerrestrialHorizontal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"irradianceExtraTerrestrialVertical"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"irradianceGlobalHorizontal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"luminanceZenith"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"precipitation"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rain"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"skyCoverageOpaque"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"skyCoverageTotal"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"snow"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Snow amount over a specified period of time.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windChill"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'The temperature of how cold it "feels like" based on the rate of heat loss from exposed skin caused by the effects of wind and cold temperatures.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windSpeedGust"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum instantaneous wind speed in the 10 minute period preceding a moment in time so long as more than 10 knots of difference has been exhibited between peaks and lulls during that 10 minute time period.  0 value means no gusts during preceding 10 minute period.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windSpeedInstantaneous"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind speed at a moment in time.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windSpeedPeak"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Peak instantaneous wind speed in the 60 minutes preceding a moment in time as long as peak speed greater than 25 knots.   0 value means speed did not exceed 25 knots during preceding 60 minutes.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windSpeedSustained"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Average instantaneous wind speed over the 2-minute time period preceding a moment in time.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"verticalVisibility"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}d.isMDXComponent=!0}}]);