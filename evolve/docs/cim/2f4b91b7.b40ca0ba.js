(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(a),s=n,O=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return a?r.a.createElement(O,o({ref:t},d,{components:a})):r.a.createElement(O,o({ref:t},d))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2207),o=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var d=a(2210),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:m,href:p,activeClassName:s,isActive:O,"data-noBrokenLinkCheck":j,autoAddBaseUrl:u=!0}=e,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:f}=Object(d.b)(),h=Object(n.useContext)(l),y=m||p,N=Object(c.a)(y),C=null==y?void 0:y.replace("pathname://",""),T=void 0!==C?(v=C,u&&(e=>e.startsWith("/"))(v)?f(v):v):void 0;var v;const I=Object(n.useRef)(!1),w=a?i.e:i.c,M=o.a.canUseIntersectionObserver;let k;Object(n.useEffect)((()=>(!M&&N&&window.docusaurus.prefetch(T),()=>{M&&k&&k.disconnect()})),[T,M,N]);const E=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,R=!T||!N||E;return T&&N&&!E&&!j&&h.collectLink(T),R?r.a.createElement("a",Object.assign({href:T},y&&!N&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(w,Object.assign({},g,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(T),I.current=!0)},innerRef:e=>{var t,a;M&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(T)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),a())}))})),k.observe(t))},to:T||""},a&&{isActive:O,activeClassName:s}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},481:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(2208)),c=a(2209),o={title:"ReadingType",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Metering/ReadingType",id:"cim100/TC57CIM/IEC61968/Metering/ReadingType",isDocsHomePage:!1,title:"ReadingType",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\ReadingType.mdx",slug:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ReadingType",version:"current",sidebar:"docs",previous:{title:"ReadingQualityType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/ReadingQualityType"},next:{title:"Register",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/Register"}},d=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Detailed description for a type of a reading value. Values in attributes allow for the creation of recommended codes to be used for identifying reading value types as follows: ",Object(i.a)("inlineCode",{parentName:"p"},"<macroPeriod>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<aggregate>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<measuringPeriod>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<accumulation>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<flowDirection>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<commodity>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<measurementKind>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<interharmonic.numerator>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<interharmonic.denominator>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<argument.numerator>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<argument.denominator>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<tou>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<cpp>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<consumptionTier>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<phases>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<multiplier>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<unit>"),".",Object(i.a)("inlineCode",{parentName:"p"},"<currency>"),".  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"accumulation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/AccumulationKind",mdxType:"Link"},"AccumulationKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Accumulation behaviour of a reading over time, usually 'measuringPeriod', to be used with individual endpoints (as opposed to 'macroPeriod' and 'aggregate' that are used to describe aggregations of data from individual endpoints).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"aggregate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/AggregateKind",mdxType:"Link"},"AggregateKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Salient attribute of the reading data aggregated from individual endpoints. This is mainly used to define a mathematical operation carried out over 'macroPeriod', but may also be used to describe an attribute of the data when the 'macroPeriod' is not defined.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"argument"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/RationalNumber",mdxType:"Link"},"RationalNumber")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Argument used to introduce numbers into the unit of measure description where they are needed (e.g., 4 where the measure needs an argument such as CEMI(n=4)). Most arguments used in practice however will be integers (i.e., 'denominator'=1). Value 0 in 'numerator' and 'denominator' means not applicable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"commodity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/CommodityKind",mdxType:"Link"},"CommodityKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Commodity being measured.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"consumptionTier"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"In case of common flat-rate pricing for power, in which all purchases are at a given rate, 'consumptionTier'=0. Otherwise, the value indicates the consumption tier, which can be used in conjunction with TOU or CPP pricing. Consumption tier pricing refers to the method of billing in which a certain \"block\" of energy is purchased/sold at one price, after which the next block of energy is purchased at another price, and so on, all throughout a defined period. At the start of the defined period, consumption is initially zero, and any usage is measured against the first consumption tier ('consumptionTier'=1). If this block of energy is consumed before the end of the period, energy consumption moves to be reconed against the second consumption tier ('consumptionTier'=2), and so on. At the end of the defined period, the consumption accumulator is reset, and usage within the 'consumptionTier'=1 restarts.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cpp"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Critical peak period (CPP) bucket the reading value is attributed to. Value 0 means not applicable. Even though CPP is usually considered a specialised form of time of use 'tou', this attribute is defined explicitly for flexibility.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"currency"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Currency",mdxType:"Link"},"Currency")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific currency.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"flowDirection"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/FlowDirectionKind",mdxType:"Link"},"FlowDirectionKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow direction for a reading where the direction of flow of the commodity is important (for electricity measurements this includes current, energy, power, and demand).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"interharmonic"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingInterharmonic",mdxType:"Link"},"ReadingInterharmonic")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indication of a \"harmonic\" or \"interharmonic\" basis for the measurement. Value 0 in 'numerator' and 'denominator' means not applicable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"macroPeriod"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/MacroPeriodKind",mdxType:"Link"},"MacroPeriodKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time period of interest that reflects how the reading is viewed or captured over a long period of time.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"measurementKind"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/MeasurementKind",mdxType:"Link"},"MeasurementKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identifies \"what\" is being measured, as refinement of 'commodity'. When combined with 'unit', it provides detail to the unit of measure. For example, 'energy' with a unit of measure of 'kWh' indicates to the user that active energy is being measured, while with 'kVAh' or 'kVArh', it indicates apparent energy and reactive energy, respectively. 'power' can be combined in a similar way with various power units of measure: Distortion power ('distortionVoltAmperes') with 'kVA' is different from 'power' with 'kVA'.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"measuringPeriod"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/MeasuringPeriodKind",mdxType:"Link"},"MeasuringPeriodKind")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time attribute inherent or fundamental to the reading value (as opposed to 'macroPeriod' that supplies an \"adjective\" to describe aspects of a time period with regard to the measurement). It refers to the way the value was originally measured and not to the frequency at which it is reported or presented. For example, an hourly interval of consumption data would have value 'hourly' as an attribute. However in the case of an hourly sampled voltage value, the meterReadings schema would carry the 'hourly' interval size information. It is common for meters to report demand in a form that is measured over the course of a portion of an hour, while enterprise applications however commonly assume the demand (in kW or kVAr) normalised to 1 hour. The system that receives readings directly from the meter therefore shall perform this transformation before publishing readings for use by the other enterprise systems. The scalar used is chosen based on the block size (not any sub-interval size).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"multiplier"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier",mdxType:"Link"},"UnitMultiplier")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific multiplier.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phases"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific phase code.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tou"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time of use (TOU) bucket the reading value is attributed to. Value 0 means not applicable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",mdxType:"Link"},"UnitSymbol")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Metering-specific unit.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All blocks containing interval reading values with this type information."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type information for interval reading values contained in this block.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/MetrologyRequirement",mdxType:"Link"},"MetrologyRequirement")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MetrologyRequirements"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All metrology requirements that require this reading type to be collected."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingTypes"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All reading types required to be collected by this metrology requirement.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/PendingCalculation",mdxType:"Link"},"PendingCalculation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PendingCalculation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pending calculation that produced this reading type."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type resulting from this pending conversion.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/Reading",mdxType:"Link"},"Reading")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Readings"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All reading values with this type information."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type information for this reading value.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/Channel",mdxType:"Link"},"Channel")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type for register values reported/collected by this channel."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Channel"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Channel reporting/collecting register values with this type information.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All tariff intervals with consumption described by this reading type."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reading type for 'startValue'.")))))}m.isMDXComponent=!0}}]);