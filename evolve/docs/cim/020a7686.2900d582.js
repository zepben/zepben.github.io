(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2199:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=b(a),m=n,u=O["".concat(c,".").concat(m)]||O[m]||p[m]||o;return a?r.a.createElement(u,i({ref:t},s,{components:a})):r.a.createElement(u,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a(2199),i=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2202),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:O,activeClassName:m,isActive:u,"data-noBrokenLinkCheck":j,autoAddBaseUrl:d=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(s.b)(),g=Object(n.useContext)(l),h=p||O,v=Object(c.a)(h),N=null==h?void 0:h.replace("pathname://",""),y=void 0!==N?(P=N,d&&(e=>e.startsWith("/"))(P)?C(P):P):void 0;var P;const I=Object(n.useRef)(!1),w=a?o.e:o.c,T=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!T&&v&&window.docusaurus.prefetch(y),()=>{T&&E&&E.disconnect()})),[y,T,v]);const R=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,k=!y||!v||R;return y&&v&&!R&&!j&&g.collectLink(y),k?r.a.createElement("a",Object.assign({href:y},h&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(y),I.current=!0)},innerRef:e=>{var t,a;T&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(y)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:y||""},a&&{isActive:u,activeClassName:m}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2199);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(2200)),c=a(2201),i={title:"PersonRole",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Common/PersonRole",id:"cim100/TC57CIM/IEC61968/Common/PersonRole",isDocsHomePage:!1,title:"PersonRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\PersonRole.mdx",slug:"/cim100/TC57CIM/IEC61968/Common/PersonRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/PersonRole",version:"current",sidebar:"docs",previous:{title:"Person",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Person"},next:{title:"PositionPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/PositionPoint"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("p",null,"None  "),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/DocumentPersonRole",mdxType:"Link"},"DocumentPersonRole")),Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/OperationPersonRole",mdxType:"Link"},"OperationPersonRole"))),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/Person",mdxType:"Link"},"Person")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Person"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Person having this role."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Roles"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All roles of this person.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/Appointment",mdxType:"Link"},"Appointment")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Persons"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All persons for this appointment."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Appointments"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All appointments for this person.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/PersonRole",mdxType:"Link"},"PersonRole")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/ConfigurationEvent",mdxType:"Link"},"ConfigurationEvent")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ChangedPersonRole"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Person role whose change resulted in this configuration event."),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ConfigurationEvents"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All configuration events created for this person role.")))))}p.isMDXComponent=!0}}]);