(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{2189:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(2189),c=n(8),s=Object(r.createContext)({collectLink:function(){}}),l=n(2192),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,p=e.isNavLink,d=e.to,b=e.href,m=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,C=void 0===j||j,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(l.b)().withBaseUrl,g=Object(r.useContext)(s),I=d||b,w=Object(i.a)(I),E=null==I?void 0:I.replace("pathname://",""),N=void 0!==E?(n=E,C&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,k=Object(r.useRef)(!1),D=p?o.e:o.c,R=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!R&&w&&window.docusaurus.prefetch(N),function(){R&&f&&f.disconnect()}}),[N,R,w]);var P=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,T=!N||!w||P;return N&&w&&!P&&!v&&g.collectLink(N),T?a.a.createElement("a",Object.assign({href:N},I&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):a.a.createElement(D,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;R&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(N)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:N||""},p&&{isActive:O,activeClassName:m}))}},2192:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(2189);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=(n(0),n(2190)),i=n(2191),c={title:"DocumentOrganisationRole"},s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/DocumentOrganisationRole",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/DocumentOrganisationRole",isDocsHomePage:!1,title:"DocumentOrganisationRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfCommon\\DocumentOrganisationRole.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/DocumentOrganisationRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/DocumentOrganisationRole",version:"current",sidebar:"docs",previous:{title:"Craft",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/Craft"},next:{title:"OldCrew",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OldCrew"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Role an organisation plays with respect to documents."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/OrganisationRole",mdxType:"Link"},"OrganisationRole"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}f.isMDXComponent=!0}}]);