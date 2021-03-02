(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(2180)),i=a(2181),o={title:"EndDevice"},l={unversionedId:"cim100/TC57CIM/IEC61968/Metering/EndDevice",id:"cim100/TC57CIM/IEC61968/Metering/EndDevice",isDocsHomePage:!1,title:"EndDevice",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\EndDevice.md",slug:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDevice",version:"current",sidebar:"docs",previous:{title:"DemandResponseProgram",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/DemandResponseProgram"},next:{title:"EndDeviceAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceAction"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Asset container that performs one or more end device functions. One type of end device is a meter which can perform metering, load management, connect/disconnect, accounting functions, etc. Some end devices, such as ones monitoring and controlling air conditioners, refrigerators, pool pumps may be connected to a meter. All end devices may have communication capability defined by the associated communication function(s). An end device may be owned by a consumer, a service provider, utility or otherwise."),Object(c.a)("p",null,"There may be a related end device function that identifies a sensor or control point within a metering application or communications systems (e.g., water, gas, electricity)."),Object(c.a)("p",null,"Some devices may use an optical port that conforms to the ANSI C12.18 standard for communications.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amrSystem"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Automated meter reading (AMR) or other communication system responsible for communications to this end device.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"installCode"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Installation code.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isPan"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, this is a premises area network (PAN) device.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isSmartInverter"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isVirtual"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, there is no physical device. As an example, a virtual meter can be defined to aggregate the consumption for two or more physical meters. Otherwise, this is a physical hardware device.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timeZoneOffset"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Minutes",mdxType:"Link"},"Minutes")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time zone offset relative to GMT for the location of this end device.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetContainer",mdxType:"Link"},"AssetContainer"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/Meter",mdxType:"Link"},"Meter"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Customers/Customer",mdxType:"Link"},"Customer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Customer"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Customer owning this end device."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices of this customer.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Customers/ServiceLocation",mdxType:"Link"},"ServiceLocation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ServiceLocation"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Service location whose service delivery is measured by this end device."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices that measure the service delivered to this service location.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/DER/DispatchablePowerCapability",mdxType:"Link"},"DispatchablePowerCapability")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevice"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The generic class to support all field end devices such as meters or smart inverters"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DispatchablePowerCapability"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceFunction",mdxType:"Link"},"EndDeviceFunction")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevice"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End device that performs this function."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceFunctions"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device functions this end device performs.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceInfo",mdxType:"Link"},"EndDeviceInfo")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices described with this data."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceInfo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End device data.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this end device."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices receiving commands from this end device control.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceEvent",mdxType:"Link"},"EndDeviceEvent")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceEvents"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All events reported by this end device."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevice"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End device that reported this end device event.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceGroup",mdxType:"Link"},"EndDeviceGroup")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceGroups"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device groups referring to this end device."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices this end device group refers to.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UsagePoint"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Usage point to which this end device belongs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices at this usage point.")))))}s.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),O=d(a),m=n,j=O["".concat(i,".").concat(m)]||O[m]||s[m]||c;return a?r.a.createElement(j,o({ref:t},b,{components:a})):r.a.createElement(j,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2179),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2182),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,s,O=e.isNavLink,m=e.to,j=e.href,p=e.activeClassName,f=e.isActive,u=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,N=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,y=Object(n.useContext)(l),h=m||j,E=Object(i.a)(h),I=null==h?void 0:h.replace("pathname://",""),D=void 0!==I?(a=I,v&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,T=Object(n.useRef)(!1),M=O?c.e:c.c,w=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&E&&window.docusaurus.prefetch(D),function(){w&&s&&s.disconnect()}}),[D,w,E]);var k=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,x=!D||!E||k;return D&&E&&!k&&!u&&y.collectLink(D),x?r.a.createElement("a",Object.assign({href:D},h&&!E&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(M,Object.assign({},N,{onMouseEnter:function(){T.current||(window.docusaurus.preload(D),T.current=!0)},innerRef:function(e){var t,a;w&&e&&E&&(t=e,a=function(){window.docusaurus.prefetch(D)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:D||""},O&&{isActive:f,activeClassName:p}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2179);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+d:d}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);