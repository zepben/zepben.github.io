(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),b=n,d=m["".concat(c,".").concat(b)]||m[b]||s[b]||i;return a?r.a.createElement(d,o({ref:t},u,{components:a})):r.a.createElement(d,o({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2174),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),u=a(2177),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,s,m=e.isNavLink,b=e.to,d=e.href,O=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],f=e.autoAddBaseUrl,C=void 0===f||f,h=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(u.b)().withBaseUrl,v=Object(n.useContext)(l),y=b||d,E=Object(c.a)(y),I=null==y?void 0:y.replace("pathname://",""),T=void 0!==I?(a=I,C&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,q=Object(n.useRef)(!1),w=m?i.e:i.c,k=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&E&&window.docusaurus.prefetch(T),function(){k&&s&&s.disconnect()}}),[T,k,E]);var x=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,B=!T||!E||x;return T&&E&&!x&&!g&&v.collectLink(T),B?r.a.createElement("a",Object.assign({href:T},y&&!E&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(w,Object.assign({},h,{onMouseEnter:function(){q.current||(window.docusaurus.preload(T),q.current=!0)},innerRef:function(e){var t,a;k&&e&&E&&(t=e,a=function(){window.docusaurus.prefetch(T)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),a())}))}))).observe(t))},to:T||""},m&&{isActive:j,activeClassName:O}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2174);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,u=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+p:p}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(2175)),c=a(2176),o={title:"ConductingEquipment"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",id:"cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",isDocsHomePage:!1,title:"ConductingEquipment",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Core\\ConductingEquipment.md",slug:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",version:"current",sidebar:"docs",previous:{title:"Curve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/Curve"},next:{title:"BasicIntervalSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/BasicIntervalSchedule"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:u};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The parts of the AC power system that are designed to carry current or that are conductively connected through terminals.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/DC/ACDCConverter",mdxType:"Link"},"ACDCConverter")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Clamp",mdxType:"Link"},"Clamp")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Conductor",mdxType:"Link"},"Conductor")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Connector",mdxType:"Link"},"Connector")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/EarthFaultCompensator",mdxType:"Link"},"EarthFaultCompensator")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/EnergyConnection",mdxType:"Link"},"EnergyConnection")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Equivalents/EquivalentEquipment",mdxType:"Link"},"EquivalentEquipment")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Ground",mdxType:"Link"},"Ground")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/MktConductingEquipment",mdxType:"Link"},"MktConductingEquipment")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformer",mdxType:"Link"},"PowerTransformer")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SeriesCompensator",mdxType:"Link"},"SeriesCompensator")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Terminals"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conducting equipment have terminals that may be connected to other conducting equipment terminals via connectivity nodes or topological nodes."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The conducting equipment of the terminal.  Conducting equipment have  terminals that may be connected to other conducting equipment terminals via connectivity nodes or topological nodes.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base voltage of this conducting equipment.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All conducting equipment with this base voltage.  Use only when there is no voltage level container used and only one base voltage applies.  For example, not used for transformers.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/ProtectiveActionAdjustment",mdxType:"Link"},"ProtectiveActionAdjustment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment whose operating condition is changed when this protective action adjustment gets activated."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectiveActionAdjustment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The operating condition to the Conducting Equipment is changed when protective action adjustment is activated. For ShuntCompensator or other conducting equipment that operates on discrete values (integer), the values given in float will be rounded.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Protection/ProtectionEquipment",mdxType:"Link"},"ProtectionEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProtectionEquipments"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Protection equipment  used to protect specific conducting equipment."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipments"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Protection equipment may be used to protect specific conducting equipment.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvStatus",mdxType:"Link"},"SvStatus")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SvStatus"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The status state variable associated with this conducting equipment."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConductingEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The conducting equipment associated with the status state variable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Operations/Outage",mdxType:"Link"},"Outage")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Outage"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OutageIsolationEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Operations/GroundAction",mdxType:"Link"},"GroundAction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GroundingAction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Action involving grounding operation on this conducting equipment."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GroundedEquipment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Equipment being grounded with this operation. In case of placing a ground anywhere along a line segment, you must use the clamp (to get the distance from one terminal), so use the explicit relation with line segment. In all other cases (including placing the ground at a line segment terminal), reference to one or more conducting equipment is sufficient.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Operations/JumperAction",mdxType:"Link"},"JumperAction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"JumpingAction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Jumper action involving jumping operation on this conducting equipment."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"JumpedEquipments"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Conducting equipment is affected when the jumper action connects one or both ends of a jumper to the conducting equipment. If the jumper action involves placing one or both ends of a jumper anywhere along a line segment, you must use the clamp (to get the distance from one terminal), using the explicit relation with clamp. In the case of placing one or both ends of the jumper at a line segment terminal, reference to one or more line segments is sufficient.")))))}s.isMDXComponent=!0}}]);