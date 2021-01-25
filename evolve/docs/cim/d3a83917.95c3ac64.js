(window.webpackJsonp=window.webpackJsonp||[]).push([[1751],{1822:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(2161)),i=a(2162),o={title:"TapChanger"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",id:"cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",isDocsHomePage:!1,title:"TapChanger",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\TapChanger.md",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",version:"current",sidebar:"docs",previous:{title:"AsynchronousMachine",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/AsynchronousMachine"},next:{title:"ShortCircuitRotorKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ShortCircuitRotorKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Mechanism for changing transformer winding tap positions.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"highStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Highest possible tap step position, advance from neutral. The attribute shall be greater than lowStep.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"initialDelay"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"For an LTC, the delay for initial tap changer operation (first step change).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"lowStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Lowest possible tap step position, retard from neutral.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ltcFlag"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Specifies whether or not a TapChanger has load tap changing capabilities.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"neutralStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The neutral tap step position for this winding. The attribute shall be equal to or greater than lowStep and equal or less than highStep. It is the step position where the voltage is neutralU when the other terminals of the transformer are at the ratedU.  If there are other tap changers on the transformer those taps are kept constant at their neutralStep.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"neutralU"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Voltage at which the winding operates at the neutral tap setting. It is the voltage at the terminal of the PowerTransformerEnd associated with the tap changer when all tap changers on the transformer are at their neutralStep position.  Normally neutralU of the tap changer is the same as ratedU of the PowerTransformerEnd, but it can differ in special cases such as when the tapping mechanism is separate from the winding more common on lower voltage transformers. This attribute is not relevant for PhaseTapChangerAsymmetrical, PhaseTapChangerSymmetrical and PhaseTapChangerLinear.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"normalStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'The tap step position used in "normal" network operation for this winding. For a "Fixed" tap changer indicates the current physical tap setting. The attribute shall be equal to or greater than lowStep and equal to or less than highStep.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"subsequentDelay"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"For an LTC, the delay for subsequent tap changer operation (second and later step changes).")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"controlEnabled"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Specifies the regulation status of the equipment.  True is regulating, false is not regulating.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"step"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tap changer position. Starting step for a steady state solution. Non integer values are allowed to support continuous tap variables. The reasons for continuous value are to support study cases where no discrete tap changer has yet been designed, a solution where a narrow voltage band forces the tap step to oscillate or to accommodate for a continuous solution as input. The attribute shall be equal to or greater than lowStep and equal to or less than highStep.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/MktTapChanger",mdxType:"Link"},"MktTapChanger")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",mdxType:"Link"},"PhaseTapChanger")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapSchedule",mdxType:"Link"},"TapSchedule")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapSchedules"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A TapChanger can have TapSchedules."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChanger"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A TapSchedule is associated with a TapChanger.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChangerControl",mdxType:"Link"},"TapChangerControl")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChanger"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap changers that participates in this regulating tap control scheme."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChangerControl"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The regulating control scheme in which this tap changer participates.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvTapStep",mdxType:"Link"},"SvTapStep")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SvTapStep"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap step state associated with the tap changer."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TapChanger"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The tap changer associated with the tap step state.")))))}b.isMDXComponent=!0},2160:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2161:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=p(a),m=r,j=O["".concat(i,".").concat(m)]||O[m]||b[m]||c;return a?n.a.createElement(j,o({ref:t},s,{components:a})):n.a.createElement(j,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2160),o=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2163),p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:O,activeClassName:m,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:h=!0}=e,u=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),f=Object(r.useContext)(l),C=b||O,T=Object(i.a)(C),N=null==C?void 0:C.replace("pathname://",""),y=void 0!==N?(I=N,h&&(e=>e.startsWith("/"))(I)?g(I):I):void 0;var I;const v=Object(r.useRef)(!1),w=a?c.e:c.c,S=o.a.canUseIntersectionObserver;let E;Object(r.useEffect)((()=>(!S&&T&&window.docusaurus.prefetch(y),()=>{S&&E&&E.disconnect()})),[y,S,T]);const k=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,M=!y||!T||k;return y&&T&&!k&&!d&&f.collectLink(y),M?n.a.createElement("a",Object.assign({href:y},C&&!T&&{target:"_blank",rel:"noopener noreferrer"},u)):n.a.createElement(w,Object.assign({},u,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(y),v.current=!0)},innerRef:e=>{var t,a;S&&e&&T&&(t=e,a=()=>{window.docusaurus.prefetch(y)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:y||""},a&&{isActive:j,activeClassName:m}))}},2163:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2160);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}}}]);