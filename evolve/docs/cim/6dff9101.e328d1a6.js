(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(a),O=r,j=p["".concat(c,".").concat(O)]||p[O]||m[O]||i;return a?n.a.createElement(j,b({ref:t},o,{components:a})):n.a.createElement(j,b({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<i;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},974:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),i=(a(0),a(2147)),c={title:"VisibilityLayer"},b={unversionedId:"cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",id:"cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",isDocsHomePage:!1,title:"VisibilityLayer",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\DiagramLayout\\VisibilityLayer.md",slug:"/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",version:"current",sidebar:"docs",previous:{title:"TextDiagramObject",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DiagramLayout/TextDiagramObject"},next:{title:"ActivePowerLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/ActivePowerLimit"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"class-description"},"Class Description"),Object(i.b)("p",null,"Layers are typically used for grouping diagram objects according to themes and scales. Themes are used to display or hide certain information (e.g., lakes, borders), while scales are used for hiding or displaying information depending on the current zoom level (hide text when it is too small to be read, or when it exceeds the screen size). This is also called de-cluttering."),Object(i.b)("p",null,"CIM based graphics exchange supports an m:n relationship between diagram objects and layers. The importing system shall convert an m:n case into an appropriate 1:n representation if the importing system does not support m:n.  "),Object(i.b)("h3",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"drawingOrder"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The drawing order for this layer.  The higher the number, the later the layer and the objects within it are rendered.")))),Object(i.b)("h3",{id:"relationships"},"Relationships"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject"),"  ")),Object(i.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.b)("h3",{id:"associations"},"Associations"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer"}),"VisibilityLayer")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VisibleObjects"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A visibility layer can contain one or more diagram objects."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"VisibilityLayers"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A diagram object can be part of multiple visibility layers.")))))}s.isMDXComponent=!0}}]);