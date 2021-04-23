(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(2190)),c=a(2191),o={title:"EndDeviceControl"},l={unversionedId:"cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",id:"cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",isDocsHomePage:!1,title:"EndDeviceControl",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\EndDeviceControl.md",slug:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",version:"current",sidebar:"docs",previous:{title:"EndDeviceAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceAction"},next:{title:"EndDeviceControlType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceControlType"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:d};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Instructs an end device (or an end device group) to perform a specified action."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drProgramLevel"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Level of a demand response program request, where 0=emergency. Note: Attribute is not defined on DemandResponseProgram as it is not its inherent property (it serves to control it).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drProgramMandatory"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Whether a demand response program request is mandatory. Note: Attribute is not defined on DemandResponseProgram as it is not its inherent property (it serves to control it).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"issuerID"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unique identifier of the business entity originating an end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"issuerTrackingID"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identifier assigned by the initiator (e.g. retail electric provider) of an end device control action to uniquely identify the demand response event, text message, or other subject of the control action. Can be used when cancelling an event or text message request or to identify the originating event or text message in a consequential end device event.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"priceSignal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/FloatQuantity",mdxType:"Link"},"FloatQuantity")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(if applicable) Price signal used as parameter for this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"primaryDeviceTiming"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceTiming",mdxType:"Link"},"EndDeviceTiming")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Timing for the control actions performed on the device identified in the end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reason"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reason for the control action that allows to determine how to continue processing. For example, disconnect meter command may require different processing by the receiving system if it has been issued for a network-related reason (protection) or for a payment-related reason.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scheduledInterval"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(if control has scheduled duration) Date and time interval the control has been scheduled to execute within.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"secondaryDeviceTiming"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceTiming",mdxType:"Link"},"EndDeviceTiming")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Timing for the control actions performed by devices that are responding to event related information sent to the primary device indicated in the end device control.  For example, load control actions performed by a PAN device in response to demand response event information sent to a PAN gateway server.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDevice",mdxType:"Link"},"EndDevice")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this end device."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDevices"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end devices receiving commands from this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceAction",mdxType:"Link"},"EndDeviceAction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End device control issuing this end device action."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceAction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"End device action issued by this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControlType",mdxType:"Link"},"EndDeviceControlType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls of this type."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControlType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this usage point."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UsagePoints"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All usage points receiving commands from this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePointGroup",mdxType:"Link"},"UsagePointGroup")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this usage point group."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UsagePointGroups"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All usage point groups receiving commands from this end device control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceGroup",mdxType:"Link"},"EndDeviceGroup")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceControl",mdxType:"Link"},"EndDeviceControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceGroups"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device groups receiving commands from this end device control."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EndDeviceControls"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All end device controls sending commands to this end device group.")))))}s.isMDXComponent=!0},2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),O=b(a),m=n,p=O["".concat(c,".").concat(m)]||O[m]||s[m]||i;return a?r.a.createElement(p,o({ref:t},d,{components:a})):r.a.createElement(p,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2189),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),d=a(2192),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,s,O=e.isNavLink,m=e.to,p=e.href,j=e.activeClassName,f=e.isActive,g=e["data-noBrokenLinkCheck"],u=e.autoAddBaseUrl,v=void 0===u||u,C=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(d.b)().withBaseUrl,y=Object(n.useContext)(l),h=m||p,E=Object(c.a)(h),T=null==h?void 0:h.replace("pathname://",""),I=void 0!==T?(a=T,v&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,D=Object(n.useRef)(!1),M=O?i.e:i.c,w=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&E&&window.docusaurus.prefetch(I),function(){w&&s&&s.disconnect()}}),[I,w,E]);var k=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,x=!I||!E||k;return I&&E&&!k&&!g&&y.collectLink(I),x?r.a.createElement("a",Object.assign({href:I},h&&!E&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(M,Object.assign({},C,{onMouseEnter:function(){D.current||(window.docusaurus.preload(I),D.current=!0)},innerRef:function(e){var t,a;w&&e&&E&&(t=e,a=function(){window.docusaurus.prefetch(I)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:I||""},O&&{isActive:f,activeClassName:j}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2189);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,d=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return d?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);