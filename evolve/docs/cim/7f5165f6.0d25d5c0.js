(window.webpackJsonp=window.webpackJsonp||[]).push([[1057],{1126:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return O}));var n=a(3),c=a(7),i=(a(0),a(2195)),r=a(2196),l={title:"Switch",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/Switch",id:"cim100/TC57CIM/IEC61970/Base/Wires/Switch",isDocsHomePage:!1,title:"Switch",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\Switch.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/Switch",version:"current",sidebar:"docs",previous:{title:"ReactiveCapabilityCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ReactiveCapabilityCurve"},next:{title:"StaticVarCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/StaticVarCompensator"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function O(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A generic device designed to close, or open, or both, one or more electric circuits.  All switches are two terminal devices including grounding switches. The ACDCTerminal.connected at the two sides of the switch shall not be considered for assessing switch connectivity, i.e. only Switch.open, .normalOpen and .locked are relevant.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"normalOpen"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The attribute is used in cases when no Measurement for the status value is present. If the Switch has a status measurement the Discrete.normalValue is expected to match with the Switch.normalOpen.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum continuous current carrying capacity in amps governed by the device material and construction. The attribute shall be a positive value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"retained"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Branch is retained in the topological solution.  The flow through retained switches will normally be calculated in power flow.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"switchOnCount"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch on count since the switch was last reset or initialized.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"switchOnDate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The date and time when the switch was last switched on.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"open"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The attribute tells if the switch is considered open when used as input to topology processing.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"locked"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, the switch is locked. The resulting switch state is a combination of locked and Switch.open attributes as follows: ",Object(i.a)("ul",null," \t",Object(i.a)("li",null,"locked=true and Switch.open=true. The resulting state is open and locked;")," \t",Object(i.a)("li",null,"locked=false and Switch.open=true. The resulting state is open;")," \t",Object(i.a)("li",null,"locked=false and Switch.open=false. The resulting state is closed.")," "))))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Cut",mdxType:"Link"},"Cut")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Disconnector",mdxType:"Link"},"Disconnector")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Fuse",mdxType:"Link"},"Fuse")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/GroundDisconnector",mdxType:"Link"},"GroundDisconnector")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Jumper",mdxType:"Link"},"Jumper")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/MktSwitch",mdxType:"Link"},"MktSwitch")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ProtectedSwitch",mdxType:"Link"},"ProtectedSwitch")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Sectionaliser",mdxType:"Link"},"Sectionaliser"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/CompositeSwitch",mdxType:"Link"},"CompositeSwitch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CompositeSwitch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Composite switch to which this Switch belongs."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switches contained in this Composite switch.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchSchedule",mdxType:"Link"},"SwitchSchedule")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A SwitchSchedule is associated with a Switch."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchSchedules"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A Switch can be associated with SwitchSchedules.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",mdxType:"Link"},"SwitchPhase")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch of the switch phase."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchPhase"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The individual switch phases for the switch.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/UnavailabilitySwitchAction",mdxType:"Link"},"UnavailabilitySwitchAction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvSwitch",mdxType:"Link"},"SvSwitch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SvSwitch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch state associated with the switch."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The switch associated with the switch state.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61968/Operations/SwitchAction",mdxType:"Link"},"SwitchAction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SwitchAction"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Action changing status of this switch."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OperatedSwitch"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switch that is the object of this switch action.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",mdxType:"Link"},"ConnectDisconnectFunction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConnectDisconnectFunctions"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0},2194:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function c(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return c}))},2195:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),c=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var s=c.a.createContext({}),b=function(t){var e=c.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},j=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,r=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),j=b(a),p=n,d=j["".concat(r,".").concat(p)]||j[p]||O[p]||i;return a?c.a.createElement(d,l({ref:e},s,{components:a})):c.a.createElement(d,l({ref:e},s))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=j;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2196:function(t,e,a){"use strict";var n=a(0),c=a.n(n),i=a(10),r=a(2194),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),s=a(2197),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};e.a=function(t){var e,a,O,j=t.isNavLink,p=t.to,d=t.href,m=t.activeClassName,u=t.isActive,h=t["data-noBrokenLinkCheck"],f=t.autoAddBaseUrl,C=void 0===f||f,g=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(s.b)().withBaseUrl,N=Object(n.useContext)(o),y=p||d,T=Object(r.a)(y),I=null==y?void 0:y.replace("pathname://",""),v=void 0!==I?(a=I,C&&function(t){return t.startsWith("/")}(a)?w(a):a):void 0,S=Object(n.useRef)(!1),k=j?i.e:i.c,E=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(v),function(){E&&O&&O.disconnect()}}),[v,E,T]);var B=null!==(e=null==v?void 0:v.startsWith("#"))&&void 0!==e&&e,x=!v||!T||B;return v&&T&&!B&&!h&&N.collectLink(v),x?c.a.createElement("a",Object.assign({href:v},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},g)):c.a.createElement(k,Object.assign({},g,{onMouseEnter:function(){S.current||(window.docusaurus.preload(v),S.current=!0)},innerRef:function(t){var e,a;E&&t&&T&&(e=t,a=function(){window.docusaurus.prefetch(v)},(O=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.unobserve(e),O.disconnect(),a())}))}))).observe(e))},to:v||""},j&&{isActive:u,activeClassName:m}))}},2197:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r}));var n=a(23),c=a(2194);function i(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var i=void 0===n?{}:n,r=i.forcePrependBaseUrl,l=void 0!==r&&r,o=i.absolute,s=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return e+a;var b=a.startsWith(e)?a:e+a.replace(/^\//,"");return s?t+b:b}(i,a,t,e)}}}function r(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}}}]);