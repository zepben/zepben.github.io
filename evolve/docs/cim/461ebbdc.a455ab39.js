(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{2195:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=f(n),p=a,d=b["".concat(c,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(d,o({ref:t},l,{components:n})):r.a.createElement(d,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),c=n(2195),o=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2198),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,b=e.isNavLink,p=e.to,d=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,y=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,I=Object(a.useContext)(s),C=p||d,E=Object(c.a)(C),N=null==C?void 0:C.replace("pathname://",""),P=void 0!==N?(n=N,h&&function(e){return e.startsWith("/")}(n)?v(n):n):void 0,T=Object(a.useRef)(!1),w=b?i.e:i.c,L=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!L&&E&&window.docusaurus.prefetch(P),function(){L&&u&&u.disconnect()}}),[P,L,E]);var k=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,x=!P||!E||k;return P&&E&&!k&&!j&&I.collectLink(P),x?r.a.createElement("a",Object.assign({href:P},C&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(w,Object.assign({},y,{onMouseEnter:function(){T.current||(window.docusaurus.preload(P),T.current=!0)},innerRef:function(e){var t,n;L&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(P)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:P||""},b&&{isActive:m,activeClassName:O}))}},2198:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2195);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+f:f}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},656:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(2196)),c=n(2197),o={title:"LossProfile",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",id:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",isDocsHomePage:!1,title:"LossProfile",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\InfIEC62325\\InfEnergyScheduling\\LossProfile.mdx",slug:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",version:"current",sidebar:"docs",previous:{title:"WheelingReferenceSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfParticipantInterfaces/WheelingReferenceSchedule"},next:{title:"InternalControlArea",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/InternalControlArea"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"LossProfile is associated with an EnerrgyTransaction and must be completely contained within the time frame of the EnergyProfile associated with this EnergyTransaction."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/Profile",mdxType:"Link"},"Profile"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",mdxType:"Link"},"LossProfile")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/EnergyTransaction",mdxType:"Link"},"EnergyTransaction")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"LossProfiles"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An EnergyTransaction may have a LossProfile."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"EnergyTransaction"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An EnergyTransaction may have a LossProfile.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",mdxType:"Link"},"LossProfile")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",mdxType:"Link"},"TransmissionProvider")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"For"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of the LossProfile for an EnergyTransaction may be a loss for a TransmissionProvider. If so, the TransmissionProvider must be one of the participating entities in the EnergyTransaction."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HasLoss_"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of the LossProfile for an EnergyTransaction may be a loss for a TransmissionProvider. If so, the TransmissionProvider must be one of the participating entities in the EnergyTransaction.")))))}u.isMDXComponent=!0}}]);