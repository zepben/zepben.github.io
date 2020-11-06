(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),O=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=O(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=O(a),j=r,s=p["".concat(o,".").concat(j)]||p[j]||d[j]||c;return a?n.a.createElement(s,i({ref:t},l,{components:a})):n.a.createElement(s,i({ref:t},l))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},941:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return O}));var r=a(2),n=a(6),c=(a(0),a(2147)),o={title:"ModelOperation"},i={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",isDocsHomePage:!1,title:"ModelOperation",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\ModelOperations\\ModelOperation.md",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",version:"current",sidebar:"docs",previous:{title:"IncrementalDatasetArgDescription",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/IncrementalDatasetArgDescription"},next:{title:"ModelOperationArg",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArg"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"An operation performed on models.   "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"sequenceNumber"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Sequence number within a operation sequence, lower is first.   Normally starts with 1.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArg"}),"ModelOperationArg"),"  "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationSequence"}),"ModelOperationSequence"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation"}),"ModelOperation")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription"}),"ModelOperationDescription")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelOperation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The instances of operations that conform to this operation type."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelOperationDescription"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The type of the model operation.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArg"}),"ModelOperationArg")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation"}),"ModelOperation")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelOperationArg"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Arguments of the operation."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelOperation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The opeation for the operation argument.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationSequence"}),"ModelOperationSequence")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation"}),"ModelOperation")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OperationSequence"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ModelOperation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);