(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{2174:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=r,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.a.createElement(u,o({ref:t},s,{components:a})):n.a.createElement(u,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2174),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),s=a(2177),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,m=e.to,u=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,N=Object(r.useContext)(l),y=m||u,w=Object(c.a)(y),T=null==y?void 0:y.replace("pathname://",""),I=void 0!==T?(a=T,C&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,D=Object(r.useRef)(!1),x=p?i.e:i.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&w&&window.docusaurus.prefetch(I),function(){A&&d&&d.disconnect()}}),[I,A,w]);var E=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,k=!I||!w||E;return I&&w&&!E&&!j&&N.collectLink(I),k?n.a.createElement("a",Object.assign({href:I},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){D.current||(window.docusaurus.preload(I),D.current=!0)},innerRef:function(e){var t,a;A&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(I)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:I||""},p&&{isActive:f,activeClassName:O}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2174);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},987:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),i=(a(0),a(2175)),c=a(2176),o={title:"CsConverter"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/CsConverter",id:"cim100/TC57CIM/IEC61970/Base/DC/CsConverter",isDocsHomePage:!1,title:"CsConverter",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DC\\CsConverter.md",slug:"/cim100/TC57CIM/IEC61970/Base/DC/CsConverter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/CsConverter",version:"current",sidebar:"docs",previous:{title:"ACDCConverter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/ACDCConverter"},next:{title:"VsPpccControlKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/VsPpccControlKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"DC side of the current source converter (CSC)."),Object(i.a)("p",null,"The firing angle controls the dc voltage at the converter, both for rectifier and inverter. The difference between the dc voltages of the rectifier and inverter determines the dc current. The extinction angle is used to limit the dc voltage at the inverter, if needed, and is not used in active power control. The firing angle, transformer tap position and number of connected filters are the primary means to control a current source dc line. Higher level controls are built on top, e.g. dc voltage, dc current and active power. From a steady state perspective it is sufficient to specify the wanted active power transfer (ACDCConverter.targetPpcc) and the control functions will set the dc voltage, dc current, firing angle, transformer tap position and number of connected filters to meet this. Therefore attributes targetAlpha and targetGamma are not applicable in this case."),Object(i.a)("p",null,"The reactive power consumed by the converter is a function of the firing angle, transformer tap position and number of connected filter, which can be approximated with half of the active power. The losses is a function of the dc voltage and dc current."),Object(i.a)("p",null,"The attributes minAlpha and maxAlpha define the range of firing angles for rectifier operation between which no discrete tap changer action takes place. The range is typically 10-18 degrees."),Object(i.a)("p",null,"The attributes minGamma and maxGamma define the range of extinction angles for inverter operation between which no discrete tap changer action takes place. The range is typically 17-20 degrees.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxIdc"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum direct current (Id) on the DC side at which the converter should operate. It is converter\u2019s configuration data use in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedIdc"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Rated converter DC current, also called IdN. The attribute shall be a positive value. It is converter\u2019s configuration data used in power flow.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pPccControl"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/CsPpccControlKind",mdxType:"Link"},"CsPpccControlKind")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Kind of active power control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"alpha"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Firing angle that determines the dc voltage at the converter dc terminal. Typical value between 10 degrees and 18 degrees for a rectifier. It is converter\u2019s state variable, result from power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"gamma"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Extinction angle. It is used to limit the dc voltage at the inverter if needed. Typical value between 17 degrees and 20 degrees for an inverter. It is converter\u2019s state variable, result from power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxAlpha"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum firing angle. It is converter\u2019s configuration data used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"maxGamma"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum extinction angle. It is converter\u2019s configuration data used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minAlpha"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum firing angle. It is converter\u2019s configuration data used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minGamma"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Minimum extinction angle. It is converter\u2019s configuration data used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"targetAlpha"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Target firing angle. It is converter\u2019s control variable used in power flow. It is only applicable for rectifier if continuous tap changer control is used. Allowed values are within the range minAlpha","<","=targetAlpha","<","=maxAlpha. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"targetGamma"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Target extinction angle. It is converter\u2019s control variable used in power flow. It is only applicable for inverter if continuous tap changer control is used. Allowed values are within the range minGamma","<","=targetGamma","<","=maxGamma. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"targetIdc"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DC current target value. It is converter\u2019s control variable used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"minIdc"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The minimum direct current (Id) on the DC side at which the converter should operate. It is converter\u2019s configuration data used in power flow. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"operatingMode"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/CsOperatingModeKind",mdxType:"Link"},"CsOperatingModeKind")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Indicates whether the DC pole is operating as an inverter or as a rectifier. It is converter\u2019s control variable used in power flow.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/ACDCConverter",mdxType:"Link"},"ACDCConverter"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/HVDCDynamics/CSCDynamics",mdxType:"Link"},"CSCDynamics")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/CsConverter",mdxType:"Link"},"CsConverter")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CSCDynamics"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Current source converter dynamics model used to describe dynamic behaviour of this converter."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CSConverter"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Current source converter to which current source converter dynamics model applies.")))))}d.isMDXComponent=!0}}]);