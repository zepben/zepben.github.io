(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{1259:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),l=(r(0),r(2147)),c={title:"PFVArType2IEEEVArController"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",isDocsHomePage:!1,title:"PFVArType2IEEEVArController",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType2Dynamics\\PFVArType2IEEEVArController.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",version:"current",sidebar:"docs",previous:{title:"PFVArType2IEEEPFController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController"},next:{title:"PFVArType2Common1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],i={rightToc:b};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"class-description"},"Class Description"),Object(l.b)("p",null,"IEEE VAR controller type 2 which is a summing point type controller. It makes up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller, and the voltage regulator forms the inner loop and is implemented as a fast controller."),Object(l.b)("p",null,"Reference: IEEE 421.5-2005, 11.5.  "),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"exlon"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Overexcitation or under excitation flag (",Object(l.b)("i",null,"EXLON"),") true = 1 (not in the overexcitation or underexcitation state, integral action is active) false = 0 (in the overexcitation or underexcitation state, so integral action is disabled to allow the limiter to play its role).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ki"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Integral gain of the pf controller (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"kp"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Proportional gain of the pf controller (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"P")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"qref"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Reactive power reference (",Object(l.b)("i",null,"Q"),Object(l.b)("i",null,Object(l.b)("sub",null,"REF")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vclmt"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Maximum output of the pf controller (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"CLMT")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vref"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Voltage regulator reference (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"REF")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Generator sensing voltage (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"S")),").")))),Object(l.b)("h3",{id:"relationships"},"Relationships"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"}),"PFVArControllerType2Dynamics"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.b)("h3",{id:"associations"},"Associations"),Object(l.b)("p",null,"None"))}s.isMDXComponent=!0},2147:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||l;return r?n.a.createElement(j,o({ref:t},i,{components:r})):n.a.createElement(j,o({ref:t},i))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);