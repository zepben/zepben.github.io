(window.webpackJsonp=window.webpackJsonp||[]).push([[1201],{1270:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(2160)),c={title:"PFVArType2IEEEVArController"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",isDocsHomePage:!1,title:"PFVArType2IEEEVArController",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PFVArControllerType2Dynamics\\PFVArType2IEEEVArController.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEVArController",version:"current",sidebar:"docs",previous:{title:"PFVArType2IEEEPFController",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2IEEEPFController"},next:{title:"PFVArType2Common1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArType2Common1"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h3",{id:"class-description"},"Class Description"),Object(l.a)("p",null,"IEEE VAR controller type 2 which is a summing point type controller. It makes up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller, and the voltage regulator forms the inner loop and is implemented as a fast controller."),Object(l.a)("p",null,"Reference: IEEE 421.5-2005, 11.5.  "),Object(l.a)("h3",{id:"attributes"},"Attributes"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"exlon"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Overexcitation or under excitation flag (",Object(l.a)("i",null,"EXLON"),") true = 1 (not in the overexcitation or underexcitation state, integral action is active) false = 0 (in the overexcitation or underexcitation state, so integral action is disabled to allow the limiter to play its role).")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ki"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Integral gain of the pf controller (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"I")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"kp"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Proportional gain of the pf controller (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"P")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"qref"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Reactive power reference (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"REF")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vclmt"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Maximum output of the pf controller (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"CLMT")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vref"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Voltage regulator reference (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"REF")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"vs"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generator sensing voltage (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"S")),").")))),Object(l.a)("h3",{id:"relationships"},"Relationships"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/PFVArControllerType2Dynamics/PFVArControllerType2Dynamics"}),"PFVArControllerType2Dynamics"))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.a)("h3",{id:"associations"},"Associations"),Object(l.a)("p",null,"None"))}s.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),O=s(a),m=r,j=O["".concat(c,".").concat(m)]||O[m]||p[m]||l;return a?n.a.createElement(j,o({ref:t},b,{components:a})):n.a.createElement(j,o({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);