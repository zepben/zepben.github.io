(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{2160:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2161:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=r.a.createContext({}),b=function(t){var e=r.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},p=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=b(a),u=n,j=p["".concat(o,".").concat(u)]||p[u]||O[u]||c;return a?r.a.createElement(j,i({ref:e},s,{components:a})):r.a.createElement(j,i({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2162:function(t,e,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(2160),i=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2163),b=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,{isNavLink:a,to:O,href:p,activeClassName:u,isActive:j,"data-noBrokenLinkCheck":d,autoAddBaseUrl:f=!0}=t,m=b(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(s.b)(),g=Object(n.useContext)(l),k=O||p,v=Object(o.a)(k),y=null==k?void 0:k.replace("pathname://",""),N=void 0!==y?(h=y,f&&(t=>t.startsWith("/"))(h)?C(h):h):void 0;var h;const I=Object(n.useRef)(!1),L=a?c.e:c.c,W=i.a.canUseIntersectionObserver;let w;Object(n.useEffect)((()=>(!W&&v&&window.docusaurus.prefetch(N),()=>{W&&w&&w.disconnect()})),[N,W,v]);const T=null!==(e=null==N?void 0:N.startsWith("#"))&&void 0!==e&&e,E=!N||!v||T;return N&&v&&!T&&!d&&g.collectLink(N),E?r.a.createElement("a",Object.assign({href:N},k&&!v&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(L,Object.assign({},m,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(N),I.current=!0)},innerRef:t=>{var e,a;W&&t&&v&&(e=t,a=()=>{window.docusaurus.prefetch(N)},w=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(w.unobserve(e),w.disconnect(),a())}))})),w.observe(e))},to:N||""},a&&{isActive:j,activeClassName:u}))}},2163:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o}));var n=a(23),r=a(2160);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return c?t+o:o}(e,t,a,n)}}function o(t,e={}){const{withBaseUrl:a}=c();return a(t,e)}},230:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(2161)),o=a(2162),i={title:"WorkLocation"},l={unversionedId:"cim100/TC57CIM/IEC61968/Work/WorkLocation",id:"cim100/TC57CIM/IEC61968/Work/WorkLocation",isDocsHomePage:!1,title:"WorkLocation",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Work\\WorkLocation.md",slug:"/cim100/TC57CIM/IEC61968/Work/WorkLocation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/WorkLocation",version:"current",sidebar:"docs",previous:{title:"WorkKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/WorkKind"},next:{title:"WorkStatusKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Work/WorkStatusKind"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function O(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Information about a particular location for various forms of work.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/Location",mdxType:"Link"},"Location"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/InternalLocation",mdxType:"Link"},"InternalLocation")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/MaintenanceLocation",mdxType:"Link"},"MaintenanceLocation")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Customers/ServiceLocation",mdxType:"Link"},"ServiceLocation"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/BaseWork",mdxType:"Link"},"BaseWork")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/WorkLocation",mdxType:"Link"},"WorkLocation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BaseWorks"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All works/tasks at this location."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WorkLocation"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Location for this work/task.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/WorkLocation",mdxType:"Link"},"WorkLocation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/OneCallRequest",mdxType:"Link"},"OneCallRequest")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WorkLocations"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OneCallRequest"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignLocation",mdxType:"Link"},"DesignLocation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Work/WorkLocation",mdxType:"Link"},"WorkLocation")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DesignLocations"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WorkLocations"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);