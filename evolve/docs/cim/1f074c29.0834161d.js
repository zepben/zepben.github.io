(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{2181:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,p=f["".concat(o,".").concat(d)]||f[d]||b[d]||i;return n?a.a.createElement(p,c({ref:t},l,{components:n})):a.a.createElement(p,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2183:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(2181),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2184),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,b,f=e.isNavLink,d=e.to,p=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,h=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,v=Object(r.useContext)(s),I=d||p,T=Object(o.a)(I),N=null==I?void 0:I.replace("pathname://",""),E=void 0!==N?(n=N,C&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,w=Object(r.useRef)(!1),k=f?i.e:i.c,P=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&T&&window.docusaurus.prefetch(E),function(){P&&b&&b.disconnect()}}),[E,P,T]);var S=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!T||S;return E&&T&&!S&&!j&&v.collectLink(E),x?a.a.createElement("a",Object.assign({href:E},I&&!T&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(k,Object.assign({},h,{onMouseEnter:function(){w.current||(window.docusaurus.preload(E),w.current=!0)},innerRef:function(e){var t,n;P&&e&&T&&(t=e,n=function(){window.docusaurus.prefetch(E)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:E||""},f&&{isActive:m,activeClassName:O}))}},2184:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(2181);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(2182)),o=n(2183),c={title:"TransmissionCorridor"},s={unversionedId:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",id:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",isDocsHomePage:!1,title:"TransmissionCorridor",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\InfIEC62325\\InfEnergyScheduling\\TransmissionCorridor.md",slug:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",version:"current",sidebar:"docs",previous:{title:"TransmissionRightOfWay",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionRightOfWay"},next:{title:"TieLine",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TieLine"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A corridor containing one or more rights of way"),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/TransmissionPath",mdxType:"Link"},"TransmissionPath")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",mdxType:"Link"},"TransmissionCorridor")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ContainedIn"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A TransmissionPath is contained in a TransmissionCorridor."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"For"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A TransmissionPath is contained in a TransmissionCorridor.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionCorridor",mdxType:"Link"},"TransmissionCorridor")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/TransmissionRightOfWay",mdxType:"Link"},"TransmissionRightOfWay")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionCorridor"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A transmission right-of-way is a member of a transmission corridor"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TransmissionRightOfWays"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A transmission right-of-way is a member of a transmission corridor")))))}b.isMDXComponent=!0}}]);