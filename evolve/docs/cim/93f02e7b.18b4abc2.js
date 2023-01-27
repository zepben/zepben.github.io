(window.webpackJsonp=window.webpackJsonp||[]).push([[1226],{1297:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(2200)),i=a(2201),s={title:"SwitchPhase",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",isDocsHomePage:!1,title:"SwitchPhase",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Wires\\SwitchPhase.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",version:"current",sidebar:"docs",previous:{title:"TransformerMeshImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance"},next:{title:"PowerTransformerEnd",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Single phase of a multi-phase switch when its attributes might be different per phase."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"normalOpen"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Used in cases when no Measurement for the status value is present. If the SwitchPhase has a status measurement the Discrete.normalValue is expected to match with this value.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseSide1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase of this SwitchPhase on the side with terminal sequence number equal to 1. Should be a phase contained in that terminal\u2019s phases attribute.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseSide2"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase of this SwitchPhase on the side with terminal sequence number equal to 2.  Should be a phase contained in that terminal\u2019s Terminal.phases attribute.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"closed"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The attribute tells if the switch is considered closed when used as input to topology processing.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ratedCurrent"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The maximum continuous current carrying capacity in amps governed by the device material and construction. The attribute shall be a positive value.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/SwitchPhase",mdxType:"Link"},"SwitchPhase")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Switch"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The switch of the switch phase."),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"SwitchPhase"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The individual switch phases for the switch.")))))}p.isMDXComponent=!0},2199:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(a),O=r,d=u["".concat(i,".").concat(O)]||u[O]||p[O]||c;return a?n.a.createElement(d,s({ref:t},l,{components:a})):n.a.createElement(d,s({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2199),s=a(8);const o=Object(r.createContext)({collectLink:()=>{}});var l=a(2202),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:u,activeClassName:O,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:j=!0}=e,h=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:f}=Object(l.b)(),g=Object(r.useContext)(o),y=p||u,w=Object(i.a)(y),N=null==y?void 0:y.replace("pathname://",""),C=void 0!==N?(v=N,j&&(e=>e.startsWith("/"))(v)?f(v):v):void 0;var v;const T=Object(r.useRef)(!1),I=a?c.e:c.c,P=s.a.canUseIntersectionObserver;let S;Object(r.useEffect)((()=>(!P&&w&&window.docusaurus.prefetch(C),()=>{P&&S&&S.disconnect()})),[C,P,w]);const E=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,B=!C||!w||E;return C&&w&&!E&&!m&&g.collectLink(C),B?n.a.createElement("a",Object.assign({href:C},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):n.a.createElement(I,Object.assign({},h,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(C),T.current=!0)},innerRef:e=>{var t,a;P&&e&&w&&(t=e,a=()=>{window.docusaurus.prefetch(C)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),a())}))})),S.observe(t))},to:C||""},a&&{isActive:d,activeClassName:O}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(23),n=a(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,r)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}}}]);