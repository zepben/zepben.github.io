(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{2147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(2147)),c={title:"DCTopologicalIsland"},i={unversionedId:"cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalIsland",id:"cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalIsland",isDocsHomePage:!1,title:"DCTopologicalIsland",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DC\\DCTopologicalIsland.md",slug:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalIsland",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalIsland",version:"current",sidebar:"docs",previous:{title:"DCTerminal",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/DCTerminal"},next:{title:"PerLengthDCLineParameter",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DC/PerLengthDCLineParameter"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-description"},"Class Description"),Object(o.b)("p",null,"An electrically connected subset of the network. DC topological islands can change as the current network state changes, e.g. due to: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"disconnect switches or breakers changing state in a SCADA/EMS.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"manual creation, change or deletion of topological nodes in a planning tool."))),Object(o.b)("p",null,"Only energised TopologicalNode-s shall be part of the topological island.  "),Object(o.b)("h3",{id:"attributes"},"Attributes"),Object(o.b)("p",null,"None  "),Object(o.b)("h3",{id:"relationships"},"Relationships"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DC/DCTopologicalNode"}),"DCTopologicalNode"),"  ")),Object(o.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("p",null,"None"))}b.isMDXComponent=!0}}]);