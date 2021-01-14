(window.webpackJsonp=window.webpackJsonp||[]).push([[1869],{1938:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return O}));var n=t(3),c=t(7),r=(t(0),t(2160)),i={title:"SynchronousMachineEquivalentCircuit"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",isDocsHomePage:!1,title:"SynchronousMachineEquivalentCircuit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\SynchronousMachineDynamics\\SynchronousMachineEquivalentCircuit.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",version:"current",sidebar:"docs",previous:{title:"SynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance"},next:{title:"IfdBaseKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/IfdBaseKind"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={toc:b};function O(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"The electrical equations for all variations of the synchronous models are based on the SynchronousEquivalentCircuit diagram for the direct- and quadrature- axes."),Object(r.a)("p",null,"Equations for conversion between equivalent circuit and time constant reactance forms:"),Object(r.a)("i",null,"Xd")," = ",Object(r.a)("i",null,"Xad "),"+",Object(r.a)("i",null," Xl"),Object(r.a)("i",null,"X\u2019d")," = ",Object(r.a)("i",null,"Xl")," + ",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"Xfd")," / (",Object(r.a)("i",null,"Xad")," + ",Object(r.a)("i",null,"Xfd"),")",Object(r.a)("i",null,"X\u201dd")," = ",Object(r.a)("i",null,"Xl")," + ",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"Xfd")," x ",Object(r.a)("i",null,"X1d")," / (",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"Xfd")," + ",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"X1d")," + ",Object(r.a)("i",null,"Xfd")," x ",Object(r.a)("i",null,"X1d"),")",Object(r.a)("i",null,"Xq")," = ",Object(r.a)("i",null,"Xaq")," + ",Object(r.a)("i",null,"Xl"),Object(r.a)("i",null,"X\u2019q")," = ",Object(r.a)("i",null,"Xl")," + ",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X1q")," / (",Object(r.a)("i",null,"Xaq")," + ",Object(r.a)("i",null,"X1q"),")",Object(r.a)("i",null,"X\u201dq")," = ",Object(r.a)("i",null,"Xl")," + ",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X1q")," x ",Object(r.a)("i",null,"X2q")," / (",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X1q")," + ",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X2q")," + ",Object(r.a)("i",null,"X1q")," x ",Object(r.a)("i",null,"X2q"),")",Object(r.a)("i",null,"T\u2019do")," = (",Object(r.a)("i",null,"Xad")," + ",Object(r.a)("i",null,"Xfd"),") / (",Object(r.a)("i",null,"omega"),Object(r.a)("i",null,Object(r.a)("sub",null,"0"))," x ",Object(r.a)("i",null,"Rfd"),")",Object(r.a)("i",null,"T\u201ddo")," = (",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"Xfd")," + ",Object(r.a)("i",null,"Xad")," x ",Object(r.a)("i",null,"X1d")," + ",Object(r.a)("i",null,"Xfd")," x ",Object(r.a)("i",null,"X1d"),") / (",Object(r.a)("i",null,"omega"),Object(r.a)("i",null,Object(r.a)("sub",null,"0"))," x ",Object(r.a)("i",null,"R1d")," x (",Object(r.a)("i",null,"Xad")," + ",Object(r.a)("i",null,"Xfd"),")",Object(r.a)("i",null,"T\u2019qo")," = (",Object(r.a)("i",null,"Xaq")," + ",Object(r.a)("i",null,"X1q"),") / (",Object(r.a)("i",null,"omega"),Object(r.a)("i",null,Object(r.a)("sub",null,"0"))," x ",Object(r.a)("i",null,"R1q"),")",Object(r.a)("i",null,"T\u201dqo")," = (",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X1q")," + ",Object(r.a)("i",null,"Xaq")," x ",Object(r.a)("i",null,"X2q")," + ",Object(r.a)("i",null,"X1q")," x ",Object(r.a)("i",null,"X2q"),") / (",Object(r.a)("i",null,"omega"),Object(r.a)("i",null,Object(r.a)("sub",null,"0"))," x ",Object(r.a)("i",null,"R2q")," x (",Object(r.a)("i",null,"Xaq")," + ",Object(r.a)("i",null,"X1q"),")",Object(r.a)("p",null,'Same equations using CIM attributes from SynchronousMachineTimeConstantReactance class on left of "=" and SynchronousMachineEquivalentCircuit class on right (except as noted):'),Object(r.a)("p",null,"xDirectSync = xad + RotatingMachineDynamics.statorLeakageReactance"),Object(r.a)("p",null,"xDirectTrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd / (xad + xfd)"),Object(r.a)("p",null,"xDirectSubtrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd x x1d / (xad x xfd + xad x x1d + xfd x x1d)"),Object(r.a)("p",null,"xQuadSync = xaq + RotatingMachineDynamics.statorLeakageReactance"),Object(r.a)("p",null,"xQuadTrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q / (xaq+ x1q)"),Object(r.a)("p",null,"xQuadSubtrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q x x2q / (xaq x x1q + xaq x x2q + x1q x x2q) "),Object(r.a)("p",null,"tpdo = (xad + xfd) / (2 x pi x nominal frequency x rfd)"),Object(r.a)("p",null,"tppdo = (xad x xfd + xad x x1d + xfd x x1d) / (2 x pi x nominal frequency x r1d x (xad + xfd)"),Object(r.a)("p",null,"tpqo = (xaq + x1q) / (2 x pi x nominal frequency x r1q)"),Object(r.a)("p",null,"tppqo = (xaq x x1q + xaq x x2q + x1q x x2q) / (2 x pi x nominal frequency x r2q x (xaq + x1q)"),Object(r.a)("p",null,'These are only valid for a simplified model where "Canay" reactance is zero.  '),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r1d"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis damper 1 winding resistance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r1q"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 1 winding resistance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r2q"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 2 winding resistance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rfd"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field winding resistance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x1d"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis damper 1 winding leakage reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x1q"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 1 winding leakage reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"x2q"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis damper 2 winding leakage reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xad"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Direct-axis mutual reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xaq"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quadrature-axis mutual reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xf1d"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Differential mutual (\u201cCanay\u201d) reactance.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xfd"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Field winding leakage reactance.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed"}),"SynchronousMachineDetailed"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}O.isMDXComponent=!0},2160:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),c=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),O=function(e){var a=c.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l({},a,{},e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},j=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),j=O(t),d=n,s=j["".concat(i,".").concat(d)]||j[d]||u[d]||r;return t?c.a.createElement(s,l({ref:a},o,{components:t})):c.a.createElement(s,l({ref:a},o))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=j;var l={};for(var b in a)hasOwnProperty.call(a,b)&&(l[b]=a[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<r;o++)i[o]=t[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);