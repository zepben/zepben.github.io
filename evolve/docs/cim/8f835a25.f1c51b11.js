(window.webpackJsonp=window.webpackJsonp||[]).push([[1190],{1248:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),i=(a(0),a(2147)),b={title:"FlowDirectionKind"},c={unversionedId:"cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind",id:"cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind",isDocsHomePage:!1,title:"FlowDirectionKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\FlowDirectionKind.md",slug:"/cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind",version:"current",sidebar:"docs",previous:{title:"EndDeviceFunctionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceFunctionKind"},next:{title:"MacroPeriodKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/MacroPeriodKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"Kind of flow direction for reading/measured  values proper to some commodities such as, for example, energy, power, demand.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"none"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Not Applicable (N/A)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"forward"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'"Delivered," or "Imported" as defined 61968-2. Forward Active Energy is a positive kWh value as one would naturally expect to find as energy is supplied by the utility and consumed at the service. Forward Reactive Energy is a positive VArh value as one would naturally expect to find in the presence of inductive loading. In polyphase metering, the forward energy register is incremented when the sum of the phase energies is greater than zero: ',Object(i.b)("img",{src:"HTS_1.PNG",width:"209",height:"16",border:"0",alt:"graphic"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lagging"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Typically used to describe that a power factor is lagging the reference value.  Note 1: When used to describe VA, \u201clagging\u201d describes a form of measurement where reactive power is considered in all four quadrants, but real power is considered only in quadrants I and IV. Note 2: When used to describe power factor, the term \u201cLagging\u201d implies that the PF is negative. The term \u201clagging\u201d in this case takes the place of the negative sign. If a signed PF value is to be passed by the data producer, then the direction of flow enumeration zero (none) should be used in order to avoid the possibility of creating an expression that employs a double negative. The data consumer should be able to tell from the sign of the data if the PF is leading or lagging. This principle is analogous to the concept that \u201cReverse\u201d energy is an implied negative value, and to publish a negative reverse value would be ambiguous. Note 3: Lagging power factors typically indicate inductive loading.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"leading"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Typically used to describe that a power factor is leading the reference value. Note: Leading power factors typically indicate capacitive loading.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"net"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q1plusQ2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reactive positive quadrants. (The term \u201clagging\u201d is preferred.)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q1plusQ3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Quadrants 1 and 3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q1plusQ4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Quadrants 1 and 4 usually represent forward active energy")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q1minusQ4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q1 minus Q4")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q2plusQ3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Quadrants 2 and 3 usually represent reverse active energy")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q2plusQ4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Quadrants 2 and 4")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q2minusQ3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q2 minus Q3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q3plusQ4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reactive negative quadrants. (The term \u201cleading\u201d is preferred.)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"q3minusQ2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q3 minus Q2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"quadrant1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q1 only")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"quadrant2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q2 only")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"quadrant3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q3 only")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"quadrant4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Q4 only")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reverse"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Reverse Active Energy is equivalent to "Received," or "Exported" as defined in 61968-2. Reverse Active Energy is a positive kWh value as one would expect to find when energy is backfed by the service onto the utility network. Reverse Reactive Energy is a positive VArh value as one would expect to find in the presence of capacitive loading and a leading Power Factor. In polyphase metering, the reverse energy register is incremented when the sum of the phase energies is less than zero: ',Object(i.b)("img",{src:"HTS_1.PNG",width:"209",height:"16",border:"0",alt:"graphic"})," Note: The value passed as a reverse value is always a positive value. It is understood by the label \u201creverse\u201d that it represents negative flow.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"total"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"totalByPhase"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"In polyphase metering, the total by phase energy register is incremented when the sum of the absolute values of the phase energies is greater than zero: ",Object(i.b)("img",{src:"HTS_1.PNG",width:"234",height:"16",border:"0",alt:"graphic"})," In single phase metering, the formulas for \u201cTotal\u201d and \u201cTotal by phase\u201d collapse to the same expression. For communication purposes however, the \u201cTotal\u201d enumeration should be used with single phase meter data.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("p",null,"None"))}s.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=s(a),O=r,j=d["".concat(b,".").concat(O)]||d[O]||p[O]||i;return a?n.a.createElement(j,c({ref:t},o,{components:a})):n.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);