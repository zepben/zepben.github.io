(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{2194:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2195:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),O=a,m=u["".concat(c,".").concat(O)]||u[O]||p[O]||o;return n?r.a.createElement(m,i({ref:t},s,{components:n})):r.a.createElement(m,i({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n(2194),i=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2197),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,u=e.isNavLink,O=e.to,m=e.href,f=e.activeClassName,d=e.isActive,j=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,g=void 0===C||C,v=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,N=Object(a.useContext)(l),y=O||m,P=Object(c.a)(y),I=null==y?void 0:y.replace("pathname://",""),w=void 0!==I?(n=I,g&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,T=Object(a.useRef)(!1),E=u?o.e:o.c,R=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!R&&P&&window.docusaurus.prefetch(w),function(){R&&p&&p.disconnect()}}),[w,R,P]);var k=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,x=!w||!P||k;return w&&P&&!k&&!j&&N.collectLink(w),x?r.a.createElement("a",Object.assign({href:w},y&&!P&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(E,Object.assign({},v,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,n;R&&e&&P&&(t=e,n=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:w||""},u&&{isActive:d,activeClassName:f}))}},2197:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(23),r=n(2194);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(2195)),c=n(2196),i={title:"PersonRole",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Common/PersonRole",id:"cim100/TC57CIM/IEC61968/Common/PersonRole",isDocsHomePage:!1,title:"PersonRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\PersonRole.mdx",slug:"/cim100/TC57CIM/IEC61968/Common/PersonRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/PersonRole",version:"current",sidebar:"docs",previous:{title:"Person",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Person"},next:{title:"PositionPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/PositionPoint"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/DocumentPersonRole",mdxType:"Link"},"DocumentPersonRole")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/OperationPersonRole",mdxType:"Link"},"OperationPersonRole"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/Person",mdxType:"Link"},"Person")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Person"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Person having this role."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Roles"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All roles of this person.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/Appointment",mdxType:"Link"},"Appointment")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Persons"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All persons for this appointment."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Appointments"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All appointments for this person.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/ConfigurationEvent",mdxType:"Link"},"ConfigurationEvent")),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ChangedPersonRole"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Person role whose change resulted in this configuration event."),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ConfigurationEvents"),Object(o.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All configuration events created for this person role.")))))}p.isMDXComponent=!0}}]);