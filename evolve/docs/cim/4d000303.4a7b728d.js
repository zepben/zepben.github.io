(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.a.createElement(m,i({ref:t},s,{components:a})):n.a.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(10),c=a(2207),i=a(8);const l=Object(r.createContext)({collectLink:()=>{}});var s=a(2210),b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:u,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":O,autoAddBaseUrl:j=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),N=Object(r.useContext)(l),h=p||u,y=Object(c.a)(h),C=null==h?void 0:h.replace("pathname://",""),v=void 0!==C?(T=C,j&&(e=>e.startsWith("/"))(T)?g(T):T):void 0;var T;const k=Object(r.useRef)(!1),w=a?o.e:o.c,B=i.a.canUseIntersectionObserver;let I;Object(r.useEffect)((()=>(!B&&y&&window.docusaurus.prefetch(v),()=>{B&&I&&I.disconnect()})),[v,B,y]);const M=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,E=!v||!y||M;return v&&y&&!M&&!O&&N.collectLink(v),E?n.a.createElement("a",Object.assign({href:v},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(v),k.current=!0)},innerRef:e=>{var t,a;B&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(v)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:v||""},a&&{isActive:m,activeClassName:d}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},722:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(2208)),c=a(2209),i={title:"BusNameMarker",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",id:"cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",isDocsHomePage:!1,title:"BusNameMarker",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Topology\\BusNameMarker.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",version:"current",sidebar:"docs",previous:{title:"TopologicalNode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode"},next:{title:"PerLengthSequenceImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PerLengthSequenceImpedance"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,'Used to apply user standard names to TopologicalNodes. Associated with one or more terminals that are normally connected with the bus name.    The associated terminals are normally connected by non-retained switches. For a ring bus station configuration, all BusbarSection terminals in the ring are typically associated.   For a breaker and a half scheme, both BusbarSections would normally be associated.  For a ring bus, all BusbarSections would normally be associated.  For a "straight" busbar configuration, normally only the main terminal at the BusbarSection would be associated.    '),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"priority"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Priority of bus name marker for use as topology bus name.  Use 0 for do not care.  Use 1 for highest priority.  Use 2 as priority is less than 1 and so on.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",mdxType:"Link"},"BusNameMarker")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ReportingGroup",mdxType:"Link"},"ReportingGroup")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BusNameMarker"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The bus name markers that belong to this reporting group."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ReportingGroup"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The reporting group to which this bus name marker belongs.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",mdxType:"Link"},"BusNameMarker")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BusNameMarker"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BusnameMarkers that may refer to a pre defined TopologicalNode."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A user defined topological node that was originally defined in a planning model not yet having topology described by ConnectivityNodes. Once ConnectivityNodes has been created they may linked to user defined ToplogicalNdes using BusNameMarkers.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",mdxType:"Link"},"BusNameMarker")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BusNameMarker"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The bus name marker used to name the bus (topological node)."),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The terminals associated with this bus name marker.")))))}p.isMDXComponent=!0}}]);