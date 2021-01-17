(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(2161)),c=a(2162),l={title:"IntervalBlock"},o={unversionedId:"cim100/TC57CIM/IEC61968/Metering/IntervalBlock",id:"cim100/TC57CIM/IEC61968/Metering/IntervalBlock",isDocsHomePage:!1,title:"IntervalBlock",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\IntervalBlock.md",slug:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",version:"current",sidebar:"docs",previous:{title:"EndDeviceInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/EndDeviceInfo"},next:{title:"IntervalReading",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/IntervalReading"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Time sequence of readings of the same reading type. Contained interval readings may need conversion through the application of an offset and a scalar defined in associated pending."),Object(i.a)("p",null,"Table 548 shows all association ends of IntervalBlock with other classes."),Object(i.a)("p",null,"Table 548 \u2013 Association ends of Metering::IntervalBlock with other classes"),Object(i.a)("p",null,"Associations"),Object(i.a)("p",null,"name"),Object(i.a)("p",null,"mult to"),Object(i.a)("p",null,"type"),Object(i.a)("p",null,"description"),Object(i.a)("p",null,"0..*"),Object(i.a)("p",null,"PendingCalculation"),Object(i.a)("p",null,"0..1"),Object(i.a)("p",null,"PendingCalculation"),Object(i.a)("p",null,"Pending calculation to apply to interval reading values contained by this block (after which the resulting reading type is different than the original because it reflects the conversion result)."),Object(i.a)("p",null,"0..*"),Object(i.a)("p",null,"IntervalReadings"),Object(i.a)("p",null,"0..*"),Object(i.a)("p",null,"IntervalReading"),Object(i.a)("p",null,"Interval reading contained in this block."),Object(i.a)("p",null,"0..*"),Object(i.a)("p",null,"ReadingType"),Object(i.a)("p",null,"0..1"),Object(i.a)("p",null,"ReadingType"),Object(i.a)("p",null,"Type information for interval reading values contained in this block."),Object(i.a)("p",null,"0..*"),Object(i.a)("p",null,"MeterReading"),Object(i.a)("p",null,"0..1"),Object(i.a)("p",null,"MeterReading"),Object(i.a)("p",null,"Meter reading containing this interval block."),Object(i.a)("p",null,"IntervalReading"),Object(i.a)("p",null,"Data captured at regular intervals of time. Interval data could be captured as incremental data, absolute data, or relative data. The source for the data is usually a tariff quantity or an engineering quantity. Data is typically captured in time-tagged, uniform, fixed-length intervals of 5 min, 10 min, 15 min, 30 min, or 60 min."),Object(i.a)("p",null,'Note: Interval Data is sometimes also called "Interval Data Readings" (IDR).  '),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalReading",mdxType:"Link"},"IntervalReading")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All blocks containing this interval reading."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalReadings"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Interval reading contained in this block.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All interval blocks contained in this meter reading."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MeterReading"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Meter reading containing this interval block.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/PendingCalculation",mdxType:"Link"},"PendingCalculation")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All blocks of interval reading values to which this pending conversion applies."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PendingCalculation"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pending calculation to apply to interval reading values contained by this block (after which the resulting reading type is different than the original because it reflects the conversion result).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Metering/ReadingType",mdxType:"Link"},"ReadingType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IntervalBlocks"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All blocks containing interval reading values with this type information."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReadingType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type information for interval reading values contained in this block.")))))}p.isMDXComponent=!0},2160:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(O,l({ref:t},s,{components:a})):r.a.createElement(O,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2160),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var s=a(2163),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:d,activeClassName:u,isActive:O,"data-noBrokenLinkCheck":j,autoAddBaseUrl:f=!0}=e,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:m}=Object(s.b)(),v=Object(n.useContext)(o),h=p||d,y=Object(c.a)(h),I=null==h?void 0:h.replace("pathname://",""),N=void 0!==I?(C=I,f&&(e=>e.startsWith("/"))(C)?m(C):C):void 0;var C;const k=Object(n.useRef)(!1),T=a?i.e:i.c,w=l.a.canUseIntersectionObserver;let M;Object(n.useEffect)((()=>(!w&&y&&window.docusaurus.prefetch(N),()=>{w&&M&&M.disconnect()})),[N,w,y]);const E=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,B=!N||!y||E;return N&&y&&!E&&!j&&v.collectLink(N),B?r.a.createElement("a",Object.assign({href:N},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(T,Object.assign({},g,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:e=>{var t,a;w&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(N)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),a())}))})),M.observe(t))},to:N||""},a&&{isActive:O,activeClassName:u}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2160);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);