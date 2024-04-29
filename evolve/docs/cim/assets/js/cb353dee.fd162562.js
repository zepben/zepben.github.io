"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[44703],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,g=c["".concat(d,".").concat(y)]||c[y]||p[y]||r;return n?i.createElement(g,l(l({ref:t},m),{},{components:n})):i.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},96653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const l={title:"WindPitchContPowerIEC",hide_table_of_contents:!0,slug:"WindPitchContPowerIEC",sidebar_position:0},o=void 0,d={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",title:"WindPitchContPowerIEC",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"WindPitchContPowerIEC",hide_table_of_contents:!0,slug:"WindPitchContPowerIEC",sidebar_position:0},sidebar:"docs",previous:{title:"WindMechIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindMechIEC"},next:{title:"WindPlantDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantDynamics"}},s={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:m},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Pitch control power model.\nReference: IEC 61400-27-1:2015, 5.6.5.1."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dpmax"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Rate limit for increasing power (","<","i",">","dp","<","/i",">","<","i",">","<","sub",">","max","<","/sub",">","<","/i",">",") (",">"," WindPitchContPowerIEC.dpmin). It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dpmin"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Rate limit for decreasing power (","<","i",">","dp","<","/i",">","<","i",">","<","sub",">","min","<","/sub",">","<","/i",">",") (","<"," WindPitchContPowerIEC.dpmax). It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pmin"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Minimum power setting (","<","i",">","p","<","/i",">","<","i",">","<","sub",">","min","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pset"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"If ","<","i",">","p","<","/i",">","<","i",">","<","sub",">","init","<","/sub",">","<","/i",">","<","sub",">"," ","<","/sub",">","<"," ","<","i",">","p","<","/i",">","<","i",">","<","sub",">","set","<","/sub",">","<","/i",">","<","sub",">"," ","<","/sub",">","then power will be ramped down to ","<","i",">","p","<","/i",">","<","i",">","<","sub",">","min","<","/sub",">","<","/i",">",". It is (","<","i",">","p","<","/i",">","<","i",">","<","sub",">","set","<","/sub",">","<","/i",">",") in the IEC 61400-27-1:2015. It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"t1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,a.yg)("td",{parentName:"tr",align:null},"Lag time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">",") (",">","= 0). It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tr"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,a.yg)("td",{parentName:"tr",align:null},"Voltage measurement time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","r","<","/sub",">","<","/i",">",") (",">","= 0). It is a type-dependent parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"uuvrt"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Dip detection threshold (","<","i",">","u","<","/i",">","<","i",">","<","sub",">","UVRT","<","/sub",">","<","/i",">","). It is a type-dependent parameter.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",mdxType:"Link"},"WindPitchContPowerIEC")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenTurbineType2IEC",mdxType:"Link"},"WindGenTurbineType2IEC")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"WindPitchContPowerIEC"),(0,a.yg)("td",{parentName:"tr",align:null},"Pitch control power model associated with this wind turbine type 2 model."),(0,a.yg)("td",{parentName:"tr",align:null},"WindGenTurbineType2IEC"),(0,a.yg)("td",{parentName:"tr",align:null},"Wind turbine type 2 model with which this pitch control power model is associated.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",mdxType:"Link"},"WindPitchContPowerIEC")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable",mdxType:"Link"},"WindDynamicsLookupTable")),(0,a.yg)("td",{parentName:"tr",align:null},"1..*"),(0,a.yg)("td",{parentName:"tr",align:null},"WindPitchContPowerIEC"),(0,a.yg)("td",{parentName:"tr",align:null},"The pitch control power model with which this wind dynamics lookup table is associated."),(0,a.yg)("td",{parentName:"tr",align:null},"WindDynamicsLookupTable"),(0,a.yg)("td",{parentName:"tr",align:null},"The wind dynamics lookup table associated with this pitch control power model.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPitchContPowerIEC",mdxType:"Link"},"WindPitchContPowerIEC")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindGenTurbineType1bIEC",mdxType:"Link"},"WindGenTurbineType1bIEC")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"WindPitchContPowerIEC"),(0,a.yg)("td",{parentName:"tr",align:null},"Pitch control power model associated with this wind turbine type 1B model."),(0,a.yg)("td",{parentName:"tr",align:null},"WindGenTurbineType1bIEC"),(0,a.yg)("td",{parentName:"tr",align:null},"Wind turbine type 1B model with which this pitch control power model is associated.")))))}y.isMDXComponent=!0}}]);