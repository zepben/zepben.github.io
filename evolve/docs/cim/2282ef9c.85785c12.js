(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,j=m["".concat(b,".").concat(p)]||m[p]||O[p]||c;return a?n.a.createElement(j,l({ref:t},o,{components:a})):n.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},309:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),c=(a(0),a(2147)),b={title:"Command"},l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/Command",id:"cim100/TC57CIM/IEC61970/Base/Meas/Command",isDocsHomePage:!1,title:"Command",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Base\\Meas\\Command.md",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/Command",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Command",version:"current",sidebar:"docs",previous:{title:"AnalogValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AnalogValue"},next:{title:"Control",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Control"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"class-description"},"Class Description"),Object(c.b)("p",null,"A Command is a discrete control used for supervisory control.  "),Object(c.b)("h3",{id:"attributes"},"Attributes"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"normalValue"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Normal value for Control.value e.g. used for percentage scaling.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"value"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The value representing the actuator output.")))),Object(c.b)("h3",{id:"relationships"},"Relationships"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/Control"}),"Control"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/DiscreteValue"}),"DiscreteValue"),"  ")),Object(c.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.b)("h3",{id:"associations"},"Associations"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/Command"}),"Command")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet"}),"ValueAliasSet")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Commands"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Commands using the set for translation."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ValueAliasSet"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The ValueAliasSet used for translation of a Control value to a name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/DiscreteValue"}),"DiscreteValue")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Meas/Command"}),"Command")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DiscreteValue"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The MeasurementValue that is controlled."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"The Control variable associated with the MeasurementValue.")))))}s.isMDXComponent=!0}}]);