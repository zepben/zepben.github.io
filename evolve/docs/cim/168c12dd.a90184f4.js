(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{2189:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=b(n),p=a,f=O["".concat(i,".").concat(p)]||O[p]||u[p]||o;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=n(2189),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2192),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,O=e.isNavLink,p=e.to,f=e.href,m=e.activeClassName,d=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,C=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),I=p||f,N=Object(i.a)(I),w=null==I?void 0:I.replace("pathname://",""),E=void 0!==w?(n=w,v&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,P=Object(a.useRef)(!1),T=O?o.e:o.c,R=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!R&&N&&window.docusaurus.prefetch(E),function(){R&&u&&u.disconnect()}}),[E,R,N]);var k=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!N||k;return E&&N&&!k&&!j&&y.collectLink(E),x?r.a.createElement("a",Object.assign({href:E},I&&!N&&{target:"_blank",rel:"noopener noreferrer"},C)):r.a.createElement(T,Object.assign({},C,{onMouseEnter:function(){P.current||(window.docusaurus.preload(E),P.current=!0)},innerRef:function(e){var t,n;R&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(E)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:E||""},O&&{isActive:d,activeClassName:m}))}},2192:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(23),r=n(2189);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(2190)),i=n(2191),c={title:"PersonOrganisationRole"},l={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole",isDocsHomePage:!1,title:"PersonOrganisationRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfCommon\\PersonOrganisationRole.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole",version:"current",sidebar:"docs",previous:{title:"OrgOrgRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OrgOrgRole"},next:{title:"PersonPropertyRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonPropertyRole"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Role an organisation plays with respect to persons."),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"clientID"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Identifiers of the person held by an organisation, such as a government agency (federal, state, province, city, county), financial institutions, etc.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Common/OrganisationRole",mdxType:"Link"},"OrganisationRole"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OldPerson",mdxType:"Link"},"OldPerson")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole",mdxType:"Link"},"PersonOrganisationRole")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ErpPerson"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"OrganisationRoles"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);