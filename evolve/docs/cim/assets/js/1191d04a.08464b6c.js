"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[14346],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,g=m["".concat(d,".").concat(p)]||m[p]||y[p]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(58168),i=(n(96540),n(15680)),r=n(75489);const l={title:"WindContQPQULimIEC",hide_table_of_contents:!0},o=void 0,d={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",title:"WindContQPQULimIEC",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",draft:!1,tags:[],version:"current",frontMatter:{title:"WindContQPQULimIEC",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"WindContQLimIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQLimIEC"},next:{title:"WindContRotorRIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContRotorRIEC"}},s={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:c},y="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"QP and QU limitation model.\nReference: IEC 61400-27-1:2015, 5.6.5.10."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tpfiltql"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Power measurement filter time constant for Q capacity (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","pfiltql","<","/sub",">","<","/i",">",") (",">","= 0). It is a type-dependent parameter.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tufiltql"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage measurement filter time constant for Q capacity (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","ufiltql","<","/sub",">","<","/i",">",") (",">","= 0). It is a type-dependent parameter.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Target"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",mdxType:"Link"},"WindContQPQULimIEC")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindTurbineType3or4IEC",mdxType:"Link"},"WindTurbineType3or4IEC")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},"WindContQPQULimIEC"),(0,i.yg)("td",{parentName:"tr",align:null},"QP and QU limitation model associated with this wind generator type 3 or type 4 model."),(0,i.yg)("td",{parentName:"tr",align:null},"WindTurbineType3or4IEC"),(0,i.yg)("td",{parentName:"tr",align:null},"Wind generator type 3 or type 4 model with which this QP and QU limitation model is associated.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindContQPQULimIEC",mdxType:"Link"},"WindContQPQULimIEC")),(0,i.yg)("td",{parentName:"tr",align:null},"0..1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable",mdxType:"Link"},"WindDynamicsLookupTable")),(0,i.yg)("td",{parentName:"tr",align:null},"1..*"),(0,i.yg)("td",{parentName:"tr",align:null},"WindContQPQULimIEC"),(0,i.yg)("td",{parentName:"tr",align:null},"The QP and QU limitation model with which this wind dynamics lookup table is associated."),(0,i.yg)("td",{parentName:"tr",align:null},"WindDynamicsLookupTable"),(0,i.yg)("td",{parentName:"tr",align:null},"The wind dynamics lookup table associated with this QP and QU limitation model.")))))}p.isMDXComponent=!0}}]);