(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{2189:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2190:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(2189),l=a(8),c=Object(n.createContext)({collectLink:function(){}}),s=a(2192),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,d=e.isNavLink,p=e.to,m=e.href,O=e.activeClassName,g=e.isActive,j=e["data-noBrokenLinkCheck"],f=e.autoAddBaseUrl,h=void 0===f||f,C=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(s.b)().withBaseUrl,v=Object(n.useContext)(c),y=p||m,T=Object(o.a)(y),w=null==y?void 0:y.replace("pathname://",""),I=void 0!==w?(a=w,h&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,R=Object(n.useRef)(!1),E=d?i.e:i.c,k=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&T&&window.docusaurus.prefetch(I),function(){k&&u&&u.disconnect()}}),[I,k,T]);var x=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,M=!I||!T||x;return I&&T&&!x&&!j&&v.collectLink(I),M?r.a.createElement("a",Object.assign({href:I},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(E,Object.assign({},C,{onMouseEnter:function(){R.current||(window.docusaurus.preload(I),R.current=!0)},innerRef:function(e){var t,a;k&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(I)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:I||""},d&&{isActive:g,activeClassName:O}))}},2192:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2189);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},294:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2190)),o=a(2191),l={title:"RegulatingControl"},c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",id:"cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",isDocsHomePage:!1,title:"RegulatingControl",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\RegulatingControl.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",version:"current",sidebar:"docs",previous:{title:"RotatingMachine",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RotatingMachine"},next:{title:"PhaseImpedanceData",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseImpedanceData"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Specifies a set of equipment that works together to control a power system quantity such as voltage or flow. "),Object(i.a)("p",null,"Remote bus voltage control is possible by specifying the controlled terminal located at some place remote from the controlling equipment."),Object(i.a)("p",null,"The specified terminal shall be associated with the connectivity node of the controlled point.  The most specific subtype of RegulatingControl shall be used in case such equipment participate in the control, e.g. TapChangerControl for tap changers."),Object(i.a)("p",null,"For flow control, load sign convention is used, i.e. positive sign means flow out from a TopologicalNode (bus) into the conducting equipment."),Object(i.a)("p",null,"The attribute minAllowedTargetValue and maxAllowedTargetValue are required in the following cases:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"For a power generating module operated in power factor control mode to specify maximum and minimum power factor values;")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"Whenever it is necessary to have an off center target voltage for the tap changer regulator. For instance, due to long cables to off shore wind farms and the need to have a simpler setup at the off shore transformer platform, the voltage is controlled from the land at the connection point for the off shore wind farm. Since there usually is a voltage rise along the cable, there is typical and overvoltage of up 3-4 kV compared to the on shore station. Thus in normal operation the tap changer on the on shore station is operated with a target set point, which is in the lower parts of the dead band."))),Object(i.a)("p",null,"The attributes minAllowedTargetValue and maxAllowedTargetValue are not related to the attribute targetDeadband and thus they are not treated as an alternative of the targetDeadband. They are needed due to limitations in the local substation controller. The attribute targetDeadband is used to prevent the power flow from move the tap position in circles (hunting) that is to be used regardless of the attributes minAllowedTargetValue and maxAllowedTargetValue.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"discrete"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The regulation is performed in a discrete mode. This applies to equipment with discrete controls, e.g. tap changers and shunt compensators.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControlModeKind",mdxType:"Link"},"RegulatingControlModeKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The regulating control mode presently available.  This specification allows for determining the kind of regulation without need for obtaining the units from a schedule.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"monitoredPhase"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase voltage controlling this regulator, measured at regulator location.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"targetDeadband"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'This is a deadband used with discrete control to avoid excessive update of controls like tap changers and shunt compensator banks while regulating.  The units of those appropriate for the mode. The attribute shall be a positive value or zero. If RegulatingControl.discrete is set to "false", the RegulatingControl.targetDeadband is to be ignored. Note that for instance, if the targetValue is 100 kV and the targetDeadband is 2 kV the range is from 99 to 101 kV.')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"targetValue"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The target value specified for case input.   This value can be used for the target value without the use of schedules. The value has the units appropriate to the mode attribute.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"targetValueUnitMultiplier"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier",mdxType:"Link"},"UnitMultiplier")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specify the multiplier for used for the targetValue.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"enabled"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The flag tells if regulation is enabled.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"maxAllowedTargetValue"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum allowed target value (RegulatingControl.targetValue).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minAllowedTargetValue"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum allowed target value (RegulatingControl.targetValue).")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWiresExt/ShuntCompensatorControl",mdxType:"Link"},"ShuntCompensatorControl")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",mdxType:"Link"},"TapChangerControl"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",mdxType:"Link"},"RegulatingControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The terminal associated with this regulating control.  The terminal is associated instead of a node, since the terminal could connect into either a topological node or a connectivity node.  Sometimes it is useful to model regulation at a terminal of a bus bar object."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The controls regulating this terminal.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulationSchedule",mdxType:"Link"},"RegulationSchedule")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",mdxType:"Link"},"RegulatingControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulationSchedule"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Schedule for this regulating control."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regulating controls that have this schedule.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingCondEq",mdxType:"Link"},"RegulatingCondEq")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",mdxType:"Link"},"RegulatingControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingCondEq"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The equipment that participates in this regulating control scheme."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The regulating control scheme in which this equipment participates.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionRegulation",mdxType:"Link"},"ProtectiveActionRegulation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RegulatingControl",mdxType:"Link"},"RegulatingControl")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionRegulation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enable/disable a regulating control or set new target value."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RegulatingControl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);