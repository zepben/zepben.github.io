(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{2207:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var o=a(0),n=a.n(o);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),O=o,j=p["".concat(r,".").concat(O)]||p[O]||d[O]||c;return a?n.a.createElement(j,i({ref:t},s,{components:a})):n.a.createElement(j,i({ref:t},s))}));function O(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,r=new Array(c);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<c;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var o=a(0),n=a.n(o),c=a(10),r=a(2207),i=a(8);const l=Object(o.createContext)({collectLink:()=>{}});var s=a(2210),b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:d,href:p,activeClassName:O,isActive:j,"data-noBrokenLinkCheck":g,autoAddBaseUrl:m=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:N}=Object(s.b)(),u=Object(o.useContext)(l),h=d||p,T=Object(r.a)(h),y=null==h?void 0:h.replace("pathname://",""),C=void 0!==y?(v=y,m&&(e=>e.startsWith("/"))(v)?N(v):v):void 0;var v;const I=Object(o.useRef)(!1),w=a?c.e:c.c,k=i.a.canUseIntersectionObserver;let B;Object(o.useEffect)((()=>(!k&&T&&window.docusaurus.prefetch(C),()=>{k&&B&&B.disconnect()})),[C,k,T]);const E=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,M=!C||!T||E;return C&&T&&!E&&!g&&u.collectLink(C),M?n.a.createElement("a",Object.assign({href:C},h&&!T&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(w,Object.assign({},f,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(C),I.current=!0)},innerRef:e=>{var t,a;k&&e&&T&&(t=e,a=()=>{window.docusaurus.prefetch(C)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),a())}))})),B.observe(t))},to:C||""},a&&{isActive:j,activeClassName:O}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r}));var o=a(23),n=a(2207);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(a,o)=>function(e,t,a,{forcePrependBaseUrl:o=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return t+a;const r=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+r:r}(t,e,a,o)}}function r(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},246:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),c=(a(0),a(2208)),r=a(2209),i={title:"TopologicalNode",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",id:"cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",isDocsHomePage:!1,title:"TopologicalNode",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Topology\\TopologicalNode.mdx",slug:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",version:"current",sidebar:"docs",previous:{title:"TopologicalIsland",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland"},next:{title:"BusNameMarker",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers. Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state)."),Object(c.a)("p",null,'For a planning model, switch statuses are not used to form topological nodes. Instead they are manually created or deleted in a model builder tool. Topological nodes maintained this way are also called "busses".  '),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"pInjection"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The active power injected into the bus at this location in addition to injections from equipment.  Positive sign means injection into the TopologicalNode (bus). Starting value for a steady state solution.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"qInjection"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The reactive power injected into the bus at this location in addition to injections from equipment. Positive sign means injection into the TopologicalNode (bus). Starting value for a steady state solution.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"Terminal"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The terminals associated with the topological node.   This can be used as an alternative to the connectivity node path to terminal, thus making it unnecessary to model connectivity nodes in some cases.   Note that if connectivity nodes are in the model, this association would probably not be used as an input specification."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the terminal.   This can be used as an alternative to the connectivity node path to topological node, thus making it unnecessary to model connectivity nodes in some cases.   Note that the if connectivity nodes are in the model, this association would probably not be used as an input specification.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConnectivityNode",mdxType:"Link"},"ConnectivityNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ConnectivityNodes"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The connectivity nodes combine together to form this topological node.  May depend on the current state of switches in the network."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node to which this connectivity node is assigned.  May depend on the current state of switches in the network.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland",mdxType:"Link"},"TopologicalIsland")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"AngleRefTopologicalIsland"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The island for which the node is an angle reference.   Normally there is one angle reference node for each island."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"AngleRefTopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The angle reference for the island.   Normally there is one TopologicalNode that is selected as the angle reference for each island.   Other reference schemes exist, so the association is typically optional.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes at the base voltage."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BaseVoltage"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The base voltage of the topological node.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ConnectivityNodeContainer",mdxType:"Link"},"ConnectivityNodeContainer")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes which belong to this connectivity node container."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ConnectivityNodeContainer"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The connectivity node container to which the topological node belongs.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/ReportingGroup",mdxType:"Link"},"ReportingGroup")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological nodes that belong to the reporting group."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"ReportingGroup"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The reporting group to which the topological node belongs.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalIsland",mdxType:"Link"},"TopologicalIsland")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNodes"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A topological node belongs to a topological island."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalIsland"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A topological node belongs to a topological island.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/BusNameMarker",mdxType:"Link"},"BusNameMarker")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BusNameMarker"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"BusnameMarkers that may refer to a pre defined TopologicalNode."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A user defined topological node that was originally defined in a planning model not yet having topology described by ConnectivityNodes. Once ConnectivityNodes has been created they may linked to user defined ToplogicalNdes using BusNameMarkers.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvInjection",mdxType:"Link"},"SvInjection")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"SvInjection"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The injection flows state variables associated with the topological node."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the flow injection state variable.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/StateVariables/SvVoltage",mdxType:"Link"},"SvVoltage")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),Object(c.a)(r.a,{to:"/cim100/TC57CIM/IEC61970/Base/Topology/TopologicalNode",mdxType:"Link"},"TopologicalNode")),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"SvVoltage"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The state voltage associated with the topological node."),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"TopologicalNode"),Object(c.a)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The topological node associated with the voltage state.")))))}d.isMDXComponent=!0}}]);