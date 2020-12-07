(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||l;return a?n.a.createElement(j,o({ref:t},i,{components:a})):n.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},635:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),l=(a(0),a(2147)),c={title:"PFVArType2IEEEPFController"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",isDocsHomePage:!1,title:"PFVArType2IEEEPFController",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType2Dynamics\\PFVArType2IEEEPFController.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController",version:"current",sidebar:"docs",previous:{title:"PFVArControllerType2Dynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"},next:{title:"PFVArType2IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"class-description"},"Class Description"),Object(l.b)("p",null,"IEEE PF controller type 2 which is a summing point type controller making up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller. The voltage regulator forms the inner loop and is implemented as a fast controller."),Object(l.b)("p",null,"Reference: IEEE 421.5-2005, 11.4.   "),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"exlon"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Overexcitation or under excitation flag (",Object(l.b)("i",null,"EXLON"),") true = 1 (not in the overexcitation or underexcitation state, integral action is active) false = 0 (in the overexcitation or underexcitation state, so integral action is disabled to allow the limiter to play its role).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ki"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Integral gain of the pf controller (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kp"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Proportional gain of the pf controller (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"P")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"pfref"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Power factor reference (",Object(l.b)("i",null,"P"),Object(l.b)("i",null,Object(l.b)("sub",null,"FREF")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vclmt"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum output of the pf controller (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"CLMT")),").  Typical value = 0,1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vref"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Voltage regulator reference (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"REF")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vs"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generator sensing voltage (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"S")),").")))),Object(l.b)("h3",{id:"relationships"},"Relationships"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"}),"PFVArControllerType2Dynamics"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.b)("h3",{id:"associations"},"Associations"),Object(l.b)("p",null,"None"))}s.isMDXComponent=!0}}]);