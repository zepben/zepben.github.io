(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{2160:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!a(t)}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}))},2161:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(0),i=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=i.a.createContext({}),u=function(t){var e=i.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r({},e,{},t)),n},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},m=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,o=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=u(n),b=a,p=m["".concat(o,".").concat(b)]||m[b]||d[b]||c;return n?i.a.createElement(p,r({ref:e},l,{components:n})):i.a.createElement(p,r({ref:e},l))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,o=new Array(c);o[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,o[1]=r;for(var l=2;l<c;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2162:function(t,e,n){"use strict";var a=n(0),i=n.n(a),c=n(10),o=n(2160),r=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(2163),u=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n};e.a=function(t){var e,{isNavLink:n,to:d,href:m,activeClassName:b,isActive:p,"data-noBrokenLinkCheck":O,autoAddBaseUrl:f=!0}=t,j=u(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),C=Object(a.useContext)(s),D=d||m,E=Object(o.a)(D),g=null==D?void 0:D.replace("pathname://",""),x=void 0!==g?(h=g,f&&(t=>t.startsWith("/"))(h)?y(h):h):void 0;var h;const v=Object(a.useRef)(!1),I=n?c.e:c.c,N=r.a.canUseIntersectionObserver;let w;Object(a.useEffect)((()=>(!N&&E&&window.docusaurus.prefetch(x),()=>{N&&w&&w.disconnect()})),[x,N,E]);const T=null!==(e=null==x?void 0:x.startsWith("#"))&&void 0!==e&&e,M=!x||!E||T;return x&&E&&!T&&!O&&C.collectLink(x),M?i.a.createElement("a",Object.assign({href:x},D&&!E&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(I,Object.assign({},j,{onMouseEnter:()=>{v.current||(window.docusaurus.preload(x),v.current=!0)},innerRef:t=>{var e,n;N&&t&&E&&(e=t,n=()=>{window.docusaurus.prefetch(x)},w=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(w.unobserve(e),w.disconnect(),n())}))})),w.observe(e))},to:x||""},n&&{isActive:p,activeClassName:b}))}},2163:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var a=n(23),i=n(2160);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+o:o}(e,t,n,a)}}function o(t,e={}){const{withBaseUrl:n}=c();return n(t,e)}},508:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return d}));var a=n(3),i=n(7),c=(n(0),n(2161)),o=n(2162),r={title:"DiscontinuousExcitationControlDynamics"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",isDocsHomePage:!1,title:"DiscontinuousExcitationControlDynamics",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\DiscontinuousExcitationControlDynamics\\DiscontinuousExcitationControlDynamics.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",version:"current",sidebar:"docs",previous:{title:"InputSignalKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/InputSignalKind"},next:{title:"DiscExcContIEEEDEC1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscExcContIEEEDEC1A"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function d(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(c.a)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Discontinuous excitation control function block whose behaviour is described by reference to a standard model ",Object(c.a)("font",{color:"#0f0f0f"},"or by definition of a user-defined model"),".  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DynamicsFunctionBlock",mdxType:"Link"},"DynamicsFunctionBlock"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscExcContIEEEDEC1A",mdxType:"Link"},"DiscExcContIEEEDEC1A")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscExcContIEEEDEC2A",mdxType:"Link"},"DiscExcContIEEEDEC2A")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscExcContIEEEDEC3A",mdxType:"Link"},"DiscExcContIEEEDEC3A")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/DiscontinuousExcitationControlUserDefined",mdxType:"Link"},"DiscontinuousExcitationControlUserDefined"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",mdxType:"Link"},"DiscontinuousExcitationControlDynamics")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"DiscontinuousExcitationControlDynamics"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Discontinuous excitation control model associated with this excitation system model."),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ExcitationSystemDynamics"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Excitation system model with which this discontinuous excitation control model is associated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/DiscontinuousExcitationControlDynamics/DiscontinuousExcitationControlDynamics",mdxType:"Link"},"DiscontinuousExcitationControlDynamics")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardInterconnections/RemoteInputSignal",mdxType:"Link"},"RemoteInputSignal")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"DiscontinuousExcitationControlDynamics"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Discontinuous excitation control model using this remote input signal."),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"RemoteInputSignal"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Remote input signal used by this discontinuous excitation control system model.")))))}d.isMDXComponent=!0}}]);