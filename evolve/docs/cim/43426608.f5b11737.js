(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{2199:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},2200:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),m=a,O=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return r?n.a.createElement(O,i({ref:t},s,{components:r})):n.a.createElement(O,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2201:function(e,t,r){"use strict";var a=r(0),n=r.n(a),c=r(10),o=r(2199),i=r(8);const l=Object(a.createContext)({collectLink:()=>{}});var s=r(2202),b=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t,{isNavLink:r,to:u,href:p,activeClassName:m,isActive:O,"data-noBrokenLinkCheck":f,autoAddBaseUrl:d=!0}=e,j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:C}=Object(s.b)(),v=Object(a.useContext)(l),h=u||p,y=Object(o.a)(h),w=null==h?void 0:h.replace("pathname://",""),g=void 0!==w?(N=w,d&&(e=>e.startsWith("/"))(N)?C(N):N):void 0;var N;const I=Object(a.useRef)(!1),T=r?c.e:c.c,M=i.a.canUseIntersectionObserver;let E;Object(a.useEffect)((()=>(!M&&y&&window.docusaurus.prefetch(g),()=>{M&&E&&E.disconnect()})),[g,M,y]);const k=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,x=!g||!y||k;return g&&y&&!k&&!f&&v.collectLink(g),x?n.a.createElement("a",Object.assign({href:g},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(T,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(g),I.current=!0)},innerRef:e=>{var t,r;M&&e&&y&&(t=e,r=()=>{window.docusaurus.prefetch(g)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))})),E.observe(t))},to:g||""},r&&{isActive:O,activeClassName:m}))}},2202:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var a=r(23),n=r(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(a)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,a)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},638:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(2200)),o=r(2201),i={title:"CrewMember",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Common/CrewMember",id:"cim100/TC57CIM/IEC61968/Common/CrewMember",isDocsHomePage:!1,title:"CrewMember",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\CrewMember.mdx",slug:"/cim100/TC57CIM/IEC61968/Common/CrewMember",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/CrewMember",version:"current",sidebar:"docs",previous:{title:"Crew",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Crew"},next:{title:"CrewType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/CrewType"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Member of a crew.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/OperationPersonRole",mdxType:"Link"},"OperationPersonRole"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Operations/FieldSafetySupervisor",mdxType:"Link"},"FieldSafetySupervisor"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/Crew",mdxType:"Link"},"Crew")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/CrewMember",mdxType:"Link"},"CrewMember")),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Crew"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Crew to which this crew member belongs."),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"CrewMembers"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All members of this crew.")))))}u.isMDXComponent=!0}}]);