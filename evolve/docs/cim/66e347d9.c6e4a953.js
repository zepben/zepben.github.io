(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},m=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,j=m["".concat(c,".").concat(p)]||m[p]||O[p]||i;return a?n.a.createElement(j,b({ref:t},l,{components:a})):n.a.createElement(j,b({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},905:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),i=(a(0),a(2147)),c={title:"Diagram"},b={unversionedId:"evolve/IEC61970/Base/DiagramLayout/Diagram",id:"evolve/IEC61970/Base/DiagramLayout/Diagram",isDocsHomePage:!1,title:"Diagram",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\DiagramLayout\\Diagram.md",slug:"/evolve/IEC61970/Base/DiagramLayout/Diagram",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram",version:"current",sidebar:"docs",previous:{title:"Main \ud83d\uddbc",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/Main"},next:{title:"DiagramObject",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"The diagram being exchanged. The coordinate system is a standard Cartesian coordinate system and the orientation attribute defines the orientation. The initial view related attributes can be used to specify an initial view with the x,y coordinates of the diagonal points.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"orientation"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/DiagramLayout/OrientationKind"}),"OrientationKind")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Coordinate system orientation of the diagram. A positive orientation gives standard \u201cright-hand\u201d orientation, with negative orientation indicating a \u201cleft-hand\u201d orientation. For 2D diagrams, a positive orientation will result in X values increasing from left to right and Y values increasing from bottom to top. A negative orientation gives the \u201cleft-hand\u201d orientation (favoured by computer graphics displays) with X values increasing from left to right and Y values increasing from top to bottom.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/evolve/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject"),"  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/evolve/IEC61970/Base/DiagramLayout/DiagramStyle"}),"DiagramStyle"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DiagramElements"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A diagram is made up of multiple diagram objects."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Diagram"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A diagram object is part of a diagram.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/DiagramLayout/DiagramStyle"}),"DiagramStyle")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DiagramStyle"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A Diagram may have a DiagramStyle."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Diagram"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A DiagramStyle can be used by many Diagrams.")))))}s.isMDXComponent=!0}}]);