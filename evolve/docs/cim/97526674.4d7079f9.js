(window.webpackJsonp=window.webpackJsonp||[]).push([[1255],{1313:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(2147)),c={title:"EnergyConsumer"},i={unversionedId:"evolve/IEC61970/Base/Wires/EnergyConsumer",id:"evolve/IEC61970/Base/Wires/EnergyConsumer",isDocsHomePage:!1,title:"EnergyConsumer",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Wires\\EnergyConsumer.md",slug:"/evolve/IEC61970/Base/Wires/EnergyConsumer",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/EnergyConsumer",version:"current",sidebar:"docs",previous:{title:"EnergyConnection",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/EnergyConnection"},next:{title:"EnergyConsumerPhase",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/EnergyConsumerPhase"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"Generic user of energy - a  point of consumption on the power system model."),Object(o.b)("p",null,"EnergyConsumer.pfixed, .qfixed, .pfixedPct and .qfixedPct have meaning only if there is no LoadResponseCharacteristic associated with EnergyConsumer or if LoadResponseCharacteristic.exponentModel is set to False.  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"customerCount"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/Integer"}),"Integer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of individual customers represented by this demand.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"grounded"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used for Yn and Zn connections. True if the neutral is solidly grounded.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Active power of the load. Load sign convention is used, i.e. positive sign means flow out from a node. For voltage dependent loads the value is at rated voltage. Starting value for a steady state solution.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pfixed"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Active power of the load that is a fixed quantity and does not vary as load group value varies. Load sign convention is used, i.e. positive sign means flow out from a node.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phaseConnection"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Wires/PhaseShuntConnectionKind"}),"PhaseShuntConnectionKind")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of phase connection, such as wye or delta.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/ReactivePower"}),"ReactivePower")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power of the load. Load sign convention is used, i.e. positive sign means flow out from a node. For voltage dependent loads the value is at rated voltage. Starting value for a steady state solution.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qfixed"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Domain/ReactivePower"}),"ReactivePower")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power of the load that is a fixed quantity and does not vary as load group value varies. Load sign convention is used, i.e. positive sign means flow out from a node.")))),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/Evolve/IEC61970/Base/Wires/EnergyConnection"}),"EnergyConnection"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Wires/EnergyConsumer"}),"EnergyConsumer")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Wires/EnergyConsumerPhase"}),"EnergyConsumerPhase")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergyConsumer"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The energy consumer to which this phase belongs."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnergyConsumerPhase"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The individual phase models for this energy consumer.")))))}s.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||d[O]||o;return a?r.a.createElement(j,i({ref:t},l,{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);