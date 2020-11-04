(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{2146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(u,l({ref:t},s,{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},709:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(2146)),c={title:"ACLineSegment"},l={unversionedId:"Evolve/IEC61970/Base/Wires/ACLineSegment",id:"Evolve/IEC61970/Base/Wires/ACLineSegment",isDocsHomePage:!1,title:"ACLineSegment",description:"Class Description",source:"@site/docs\\Evolve\\IEC61970\\Base\\Wires\\ACLineSegment.md",slug:"/Evolve/IEC61970/Base/Wires/ACLineSegment",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/ACLineSegment",version:"current",sidebar:"docs",previous:{title:"Main",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/SCADA/Main"},next:{title:"Breaker",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/Breaker"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"A wire or combination of wires, with consistent electrical characteristics, building a single electrical system, used to carry alternating current between points in the power system."),Object(i.b)("p",null,"For symmetrical, transposed three phase lines, it is sufficient to use attributes of the line segment, which describe impedances and admittances for the entire length of the segment.  Additionally impedances can be computed by using length and associated per length impedances."),Object(i.b)("p",null,"The BaseVoltage at the two ends of ACLineSegments in a Line shall have the same BaseVoltage.nominalVoltage. However, boundary lines may have slightly different BaseVoltage.nominalVoltages and variation is allowed. Larger voltage difference in general requires use of an equivalent branch.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"None  "),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/Evolve/IEC61970/Base/Wires/Conductor"}),"Conductor"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/Evolve/IEC61970/Base/Wires/PerLengthImpedance"}),"PerLengthImpedance"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Wires/PerLengthImpedance"}),"PerLengthImpedance")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/Evolve/IEC61970/Base/Wires/ACLineSegment"}),"ACLineSegment")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PerLengthImpedance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Per-length impedance of this line segment."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ACLineSegments"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All line segments described by this per-length impedance.")))))}b.isMDXComponent=!0}}]);