(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{2198:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(f,c({ref:t},l,{components:n})):r.a.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=n(2198),c=n(8),s=Object(a.createContext)({collectLink:function(){}}),l=n(2201),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,d=e.to,f=e.href,m=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,j=void 0===h||h,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,C=Object(a.useContext)(s),w=d||f,N=Object(i.a)(w),E=null==w?void 0:w.replace("pathname://",""),S=void 0!==E?(n=E,j&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,k=Object(a.useRef)(!1),L=b?o.e:o.c,P=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&N&&window.docusaurus.prefetch(S),function(){P&&p&&p.disconnect()}}),[S,P,N]);var x=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,B=!S||!N||x;return S&&N&&!x&&!v&&C.collectLink(S),B?r.a.createElement("a",Object.assign({href:S},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(L,Object.assign({},g,{onMouseEnter:function(){k.current||(window.docusaurus.preload(S),k.current=!0)},innerRef:function(e){var t,n;P&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(S)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:S||""},b&&{isActive:O,activeClassName:m}))}},2201:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2198);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(2199)),i=n(2200),c={title:"ShuntCompensator",hide_table_of_contents:!0},s={unversionedId:"evolve/IEC61970/Base/Wires/ShuntCompensator",id:"evolve/IEC61970/Base/Wires/ShuntCompensator",isDocsHomePage:!1,title:"ShuntCompensator",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Wires\\ShuntCompensator.mdx",slug:"/evolve/IEC61970/Base/Wires/ShuntCompensator",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/ShuntCompensator",version:"current",sidebar:"docs",previous:{title:"LinearShuntCompensator",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/LinearShuntCompensator"},next:{title:"PerLengthLineParameter",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Wires/PerLengthLineParameter"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"A shunt capacitor or reactor or switchable bank of shunt capacitors or reactors. A section of a shunt compensator is an individual capacitor or reactor.  A negative value for reactivePerSection indicates that the compensator is a reactor. ShuntCompensator is a single terminal device.  Ground is implied.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"sections"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Shunt compensator sections in use. Starting value for steady state solution. The attribute shall be a positive value or zero. Non integer values are allowed to support continuous variables. The reasons for continuous value are to support study cases where no discrete shunt compensators has yet been designed, a solutions where a narrow voltage band force the sections to oscillate or accommodate for a continuous solution as input.  For LinearShuntConpensator the value shall be between zero and ShuntCompensator.maximumSections. At value zero the shunt compensator conductance and admittance is zero. Linear interpolation of conductance and admittance between the previous and next integer section is applied in case of non-integer values. For NonlinearShuntCompensator-s shall only be set to one of the NonlinearShuntCompenstorPoint.sectionNumber. There is no interpolation between NonlinearShuntCompenstorPoint-s.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"grounded"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Used for Yn and Zn connections. True if the neutral is solidly grounded.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"nomU"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The voltage at which the nominal reactive power may be calculated. This should normally be within 10% of the voltage at which the capacitor is connected to the network.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"phaseConnection"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/PhaseShuntConnectionKind",mdxType:"Link"},"PhaseShuntConnectionKind")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/RegulatingCondEq",mdxType:"Link"},"RegulatingCondEq"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/evolve/IEC61970/Base/Wires/LinearShuntCompensator",mdxType:"Link"},"LinearShuntCompensator"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);