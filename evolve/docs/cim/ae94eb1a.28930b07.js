(window.webpackJsonp=window.webpackJsonp||[]).push([[1449],{1507:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),r=(a(0),a(2147)),c={title:"AccumulationKind"},o={unversionedId:"cim100/TC57CIM/IEC61968/Metering/AccumulationKind",id:"cim100/TC57CIM/IEC61968/Metering/AccumulationKind",isDocsHomePage:!1,title:"AccumulationKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\AccumulationKind.md",slug:"/cim100/TC57CIM/IEC61968/Metering/AccumulationKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/AccumulationKind",version:"current",sidebar:"docs",previous:{title:"TroubleTicket",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/TroubleTicket"},next:{title:"AggregateKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/AggregateKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"Kind of accumulation behaviour for read / measured values from individual end points.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Not applicable, or implied by the unit of measure.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bulkQuantity"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A value from a register which represents the bulk quantity of a commodity. This quantity is computed as the integral of the commodity usage rate. This value is typically used as the basis for the dial reading at the meter, and as a result, will roll over upon reaching a maximum dial value.  Note 1: With the metering system, the roll-over behaviour typically implies a roll-under behavior so that the value presented is always a positive value (e.g. unsigned integer or positive decimal.) However, when communicating data between enterprise applications a negative value might occur in a case such as net metering. Note 2: A 'bulkQuantity' refers primarily to the dial reading and not the consumption over a specific period of time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"continuousCumulative"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The sum of the previous billing period values and the present period value. Note: 'continuousCumulative' is commonly used in conjunction with 'demand', and it  would represent the cumulative sum of the previous billing period maximum demand values (as occurring with each demand reset) summed with the present period maximum demand value (which has yet to be reset.)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cumulative"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The sum of the previous billing period values. Note: 'cumulative' is commonly used in conjunction with \ufffddemand.\ufffd Each demand reset causes the maximum demand value for the present billing period (since the last demand reset) to accumulate as an accumulative total of all maximum demands. So instead of 'zeroing' the demand register, a demand reset has the effect of adding the present maximum demand to this accumulating total.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deltaData"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The difference between the value at the end of the prescribed interval and the beginning of the interval. This is used for incremental interval data.  Note: One common application would be for load profile data, another use might be to report the number of events within an interval (such as the number of equipment energisations within the specified period of time.)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"indicating"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"As if a needle is swung out on the meter face to a value to indicate the current value. Note: An 'indicating' value is typically measured over hundreds of milliseconds or greater, or may imply a \ufffdpusher\ufffd mechanism to capture a value. Compare this to 'instantaneous' which is measured over a shorter period of time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"summation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A form of accumulation which is selective with respect to time.  Note : 'summation' could be considered a specialisation of 'bulkQuantity' as it selectively accumulates pulses over a timing pattern (while 'bulkQuantity' accumulates pulses all of the time).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timeDelay"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A form of computation which introduces a time delay characteristic to the data value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"instantaneous"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Typically measured over the fastest period of time allowed by the definition of the metric (usually milliseconds or tens of milliseconds.) Note: 'instantaneous' was moved to attribute #3 in Ed.2 of IEC 61968-9, from attribute #1 in Ed.1 of IEC 61968-9.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"latchingQuantity"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When this description is applied to a metered value, it implies that the value is a time-independent cumulative quantity much like a 'bulkQuantity', except that it latches upon the maximum value upon reaching that value. Any additional accumulation (positive or negative) is discarded until a reset occurs.  Note: A 'latchingQuantity' may also occur in the downward direction \ufffd upon reaching a minimum value. The terms 'maximum' or 'minimum' (for 'aggregate') will usually be included when this type of accumulation behaviour is present.  When this description is applied to an encoded value (UOM= 'Code'), it implies that the value has one or more bits which are latching. The condition that caused the bit to be set may have long since evaporated. In either case, the timestamp that accompanies the value may not coincide with the moment the value was initially set. In both cases a system will need to perform an operation to clear the latched value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boundedQuantity"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A time-independent cumulative quantity much like a 'bulkQuantity' or a 'latchingQuantity', except that the accumulation stops at the maximum or minimum values. When the maximum is reached, any additional positive accumulation is discarded, but negative accumulation may be accepted (thus lowering the counter.) Likewise, when the negative bound is reached, any additional negative accumulation is discarded, but positive accumulation is accepted (thus increasing the counter.)")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"None")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}u.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,p=b["".concat(c,".").concat(d)]||b[d]||m[d]||r;return a?i.a.createElement(p,o({ref:t},s,{components:a})):i.a.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);