(window.webpackJsonp=window.webpackJsonp||[]).push([[1464],{1533:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(2182)),c=(a(2183),{title:"AccumulationKind"}),o={unversionedId:"cim100/TC57CIM/IEC61968/Metering/AccumulationKind",id:"cim100/TC57CIM/IEC61968/Metering/AccumulationKind",isDocsHomePage:!1,title:"AccumulationKind",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\AccumulationKind.md",slug:"/cim100/TC57CIM/IEC61968/Metering/AccumulationKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/AccumulationKind",version:"current",sidebar:"docs",previous:{title:"TroubleTicket",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/TroubleTicket"},next:{title:"AggregateKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/AggregateKind"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Kind of accumulation behaviour for read / measured values from individual end points.  "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"none"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Not applicable, or implied by the unit of measure.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bulkQuantity"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A value from a register which represents the bulk quantity of a commodity. This quantity is computed as the integral of the commodity usage rate. This value is typically used as the basis for the dial reading at the meter, and as a result, will roll over upon reaching a maximum dial value.  Note 1: With the metering system, the roll-over behaviour typically implies a roll-under behavior so that the value presented is always a positive value (e.g. unsigned integer or positive decimal.) However, when communicating data between enterprise applications a negative value might occur in a case such as net metering. Note 2: A 'bulkQuantity' refers primarily to the dial reading and not the consumption over a specific period of time.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"continuousCumulative"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The sum of the previous billing period values and the present period value. Note: 'continuousCumulative' is commonly used in conjunction with 'demand', and it  would represent the cumulative sum of the previous billing period maximum demand values (as occurring with each demand reset) summed with the present period maximum demand value (which has yet to be reset.)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cumulative"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The sum of the previous billing period values. Note: 'cumulative' is commonly used in conjunction with \u201cdemand.\u201d Each demand reset causes the maximum demand value for the present billing period (since the last demand reset) to accumulate as an accumulative total of all maximum demands. So instead of 'zeroing' the demand register, a demand reset has the effect of adding the present maximum demand to this accumulating total.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deltaData"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The difference between the value at the end of the prescribed interval and the beginning of the interval. This is used for incremental interval data.  Note: One common application would be for load profile data, another use might be to report the number of events within an interval (such as the number of equipment energisations within the specified period of time.)")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"indicating"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"As if a needle is swung out on the meter face to a value to indicate the current value. Note: An 'indicating' value is typically measured over hundreds of milliseconds or greater, or may imply a \u201cpusher\u201d mechanism to capture a value. Compare this to 'instantaneous' which is measured over a shorter period of time.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"summation"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A form of accumulation which is selective with respect to time.  Note : 'summation' could be considered a specialisation of 'bulkQuantity' as it selectively accumulates pulses over a timing pattern (while 'bulkQuantity' accumulates pulses all of the time).")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timeDelay"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A form of computation which introduces a time delay characteristic to the data value.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"instantaneous"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Typically measured over the fastest period of time allowed by the definition of the metric (usually milliseconds or tens of milliseconds.) Note: 'instantaneous' was moved to attribute #3 in Ed.2 of IEC 61968-9, from attribute #1 in Ed.1 of IEC 61968-9.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"latchingQuantity"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When this description is applied to a metered value, it implies that the value is a time-independent cumulative quantity much like a 'bulkQuantity', except that it latches upon the maximum value upon reaching that value. Any additional accumulation (positive or negative) is discarded until a reset occurs.  Note: A 'latchingQuantity' may also occur in the downward direction \u2013 upon reaching a minimum value. The terms 'maximum' or 'minimum' (for 'aggregate') will usually be included when this type of accumulation behaviour is present.  When this description is applied to an encoded value (UOM= 'Code'), it implies that the value has one or more bits which are latching. The condition that caused the bit to be set may have long since evaporated. In either case, the timestamp that accompanies the value may not coincide with the moment the value was initially set. In both cases a system will need to perform an operation to clear the latched value.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boundedQuantity"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A time-independent cumulative quantity much like a 'bulkQuantity' or a 'latchingQuantity', except that the accumulation stops at the maximum or minimum values. When the maximum is reached, any additional positive accumulation is discarded, but negative accumulation may be accepted (thus lowering the counter.) Likewise, when the negative bound is reached, any additional negative accumulation is discarded, but positive accumulation is accepted (thus increasing the counter.)")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"None")),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}u.isMDXComponent=!0},2181:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},2182:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return a?i.a.createElement(b,o({ref:t},s,{components:a})):i.a.createElement(b,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(10),c=a(2181),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2184),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,d,m=e.isNavLink,p=e.to,b=e.href,h=e.activeClassName,f=e.isActive,O=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,v=void 0===j||j,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(n.useContext)(l),w=p||b,C=Object(c.a)(w),k=null==w?void 0:w.replace("pathname://",""),T=void 0!==k?(a=k,v&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,A=Object(n.useRef)(!1),E=m?r.e:r.c,I=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!I&&C&&window.docusaurus.prefetch(T),function(){I&&d&&d.disconnect()}}),[T,I,C]);var x=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,M=!T||!C||x;return T&&C&&!x&&!O&&N.collectLink(T),M?i.a.createElement("a",Object.assign({href:T},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},g)):i.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){A.current||(window.docusaurus.preload(T),A.current=!0)},innerRef:function(e){var t,a;I&&e&&C&&(t=e,a=function(){window.docusaurus.prefetch(T)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:T||""},m&&{isActive:f,activeClassName:h}))}},2184:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(23),i=a(2181);function r(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,c=r.forcePrependBaseUrl,o=void 0!==c&&c,l=r.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(o)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+u:u}(r,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}}}]);