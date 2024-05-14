"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[41600],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=i,g=p["".concat(d,".").concat(y)]||p[y]||c[y]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},99935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(58168),i=(n(96540),n(15680)),r=n(75489);const l={title:"WindAeroTwoDimIEC",hide_table_of_contents:!0,slug:"WindAeroTwoDimIEC",sidebar_position:0},o=void 0,d={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC",title:"WindAeroTwoDimIEC",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"WindAeroTwoDimIEC",hide_table_of_contents:!0,slug:"WindAeroTwoDimIEC",sidebar_position:0},sidebar:"docs",previous:{title:"WindAeroOneDimIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroOneDimIEC"},next:{title:"WindContCurrLimIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContCurrLimIEC"}},s={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:m},c="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Two-dimensional aerodynamic model.",(0,i.yg)("br",{parentName:"p"}),"\n","Reference: IEC 61400-27-1:2015, 5.6.1.3."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"dpomega"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Partial derivative of aerodynamic power with respect to changes in WTR speed (","<","i",">","dp","<","/i",">","<","i",">","<","sub",">","omega","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"dptheta"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Partial derivative of aerodynamic power with respect to changes in pitch angle (","<","i",">","dp","<","/i",">","<","i",">","<","sub",">","theta","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"dpv1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Partial derivative (","<","i",">","dp","<","/i",">","<","i",">","<","sub",">","v1","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"omegazero"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rotor speed if the wind turbine is not derated (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"pavail"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Available aerodynamic power (","<","i",">","p","<","/i",">","<","i",">","<","sub",">","avail","<","/sub",">","<","/i",">","<","i",">",")","<","/i",">",". It is a case-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"thetav2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,i.yg)("td",{parentName:"tr",align:null},"Blade angle at twice rated wind speed (","<","i",">","theta","<","/i",">","<","i",">","<","sub",">","v2","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"thetazero"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,i.yg)("td",{parentName:"tr",align:null},"Pitch angle if the wind turbine is not derated (","<","i",">","theta","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">","). It is a case-dependent parameter.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Target"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindAeroTwoDimIEC",mdxType:"Link"},"WindAeroTwoDimIEC")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3IEC",mdxType:"Link"},"WindTurbineType3IEC")),(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},"WindAeroTwoDimIEC"),(0,i.yg)("td",{parentName:"tr",align:null},"Wind aerodynamic model associated with this wind turbine type 3 model."),(0,i.yg)("td",{parentName:"tr",align:null},"WindTurbineType3IEC"),(0,i.yg)("td",{parentName:"tr",align:null},"Wind turbine type 3 model with which this wind aerodynamic model is associated.")))))}y.isMDXComponent=!0}}]);