(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{2197:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),O=b(a),p=n,j=O["".concat(l,".").concat(p)]||O[p]||u[p]||c;return a?r.a.createElement(j,i({ref:t},s,{components:a})):r.a.createElement(j,i({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),l=a(2197),i=a(8),o=Object(n.createContext)({collectLink:function(){}}),s=a(2200),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,O=e.isNavLink,p=e.to,j=e.href,m=e.activeClassName,d=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,N=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,C=Object(n.useContext)(o),y=p||j,T=Object(l.a)(y),M=null==y?void 0:y.replace("pathname://",""),A=void 0!==M?(a=M,h&&function(e){return e.startsWith("/")}(a)?v(a):a):void 0,I=Object(n.useRef)(!1),w=O?c.e:c.c,E=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(A),function(){E&&u&&u.disconnect()}}),[A,E,T]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!T||V;return A&&T&&!V&&!f&&C.collectLink(A),k?r.a.createElement("a",Object.assign({href:A},y&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(w,Object.assign({},N,{onMouseEnter:function(){I.current||(window.docusaurus.preload(A),I.current=!0)},innerRef:function(e){var t,a;E&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(A)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:A||""},O&&{isActive:d,activeClassName:m}))}},2200:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(23),r=a(2197);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,l=c.forcePrependBaseUrl,i=void 0!==l&&l,o=c.absolute,s=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(c,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},593:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(2198)),l=a(2199),i={title:"AnalogValue",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",id:"cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",isDocsHomePage:!1,title:"AnalogValue",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\AnalogValue.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",version:"current",sidebar:"docs",previous:{title:"MeasurementValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValue"},next:{title:"AccumulatorValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AccumulatorValue"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"AnalogValue represents an analog MeasurementValue.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The value to supervise.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValue",mdxType:"Link"},"MeasurementValue"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Analog",mdxType:"Link"},"Analog")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",mdxType:"Link"},"AnalogValue")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Analog"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Measurement to which this value is connected."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValues"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The values connected to this measurement.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",mdxType:"Link"},"AnalogValue")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogControl",mdxType:"Link"},"AnalogControl")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The MeasurementValue that is controlled."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogControl"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The Control variable associated with the MeasurementValue.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltTieMeas",mdxType:"Link"},"AltTieMeas")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",mdxType:"Link"},"AnalogValue")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AltTieMeas"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The usage of the measurement within the control area specification."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The specific analog value used as a source.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/AltGeneratingUnitMeas",mdxType:"Link"},"AltGeneratingUnitMeas")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(l.a,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue",mdxType:"Link"},"AnalogValue")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AltGeneratingUnit"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The alternate generating unit for which this measurement value applies."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AnalogValue"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The specific analog value used as a source.")))))}u.isMDXComponent=!0}}]);