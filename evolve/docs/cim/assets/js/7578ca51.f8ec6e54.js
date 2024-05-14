"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[8172],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),y=a,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const i={title:"ControlArea",hide_table_of_contents:!0,slug:"ControlArea",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",id:"cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",title:"ControlArea",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/ControlArea",slug:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ControlArea",hide_table_of_contents:!0,slug:"ControlArea",sidebar_position:0},sidebar:"docs",previous:{title:"AltTieMeas",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ControlArea/AltTieMeas"},next:{title:"ControlAreaGeneratingUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit"}},g={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A control area is a grouping of generating units and/or loads and a cutset of tie lines (as terminals) which may be used for a variety of purposes including automatic generation control, power flow solution area interchange control specification, and input to load forecasting. All generation and load within the area defined by the terminals on the border are considered in the area interchange control. Note that any number of overlapping control area specifications can be superimposed on the physical model. The following general principles apply to ControlArea:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The control area orientation for net interchange is positive for an import, negative for an export."),(0,a.yg)("li",{parentName:"ol"},"The control area net interchange is determined by summing flows in Terminals. The Terminals are identified by creating a set of TieFlow objects associated with a ControlArea object. Each TieFlow object identifies one Terminal."),(0,a.yg)("li",{parentName:"ol"},"In a single network model, a tie between two control areas must be modelled in both control area specifications, such that the two representations of the tie flow sum to zero."),(0,a.yg)("li",{parentName:"ol"},"The normal orientation of Terminal flow is positive for flow into the conducting equipment that owns the Terminal. (i.e. flow from a bus into a device is positive.) However, the orientation of each flow in the control area specification must align with the control area convention, i.e. import is positive. If the orientation of the Terminal flow referenced by a TieFlow is positive into the control area, then this is confirmed by setting TieFlow.positiveFlowIn flag TRUE. If not, the orientation must be reversed by setting the TieFlow.positiveFlowIn flag FALSE.")),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"netInterchange"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"The specified positive net interchange into the control area, i.e. positive sign means flow into the area.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pTolerance"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Active power net interchange tolerance. The attribute shall be a positive value or zero.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"type"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaTypeKind",mdxType:"Link"},"ControlAreaTypeKind")),(0,a.yg)("td",{parentName:"tr",align:null},"The primary type of control area definition used to determine if this is used for automatic generation control, for planning interchange control, or other purposes.   A control area specified with primary type of automatic generation control could still be forecast and used as an interchange area in power flow analysis.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/MktControlArea",mdxType:"Link"},"MktControlArea"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",mdxType:"Link"},"ControlArea")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/LoadModel/EnergyArea",mdxType:"Link"},"EnergyArea")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"ControlArea"),(0,a.yg)("td",{parentName:"tr",align:null},"The control area specification that is used for the load forecast."),(0,a.yg)("td",{parentName:"tr",align:null},"EnergyArea"),(0,a.yg)("td",{parentName:"tr",align:null},"The energy area that is forecast from this control area specification.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",mdxType:"Link"},"ControlArea")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlAreaGeneratingUnit",mdxType:"Link"},"ControlAreaGeneratingUnit")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ControlArea"),(0,a.yg)("td",{parentName:"tr",align:null},"The parent control area for the generating unit specifications."),(0,a.yg)("td",{parentName:"tr",align:null},"ControlAreaGeneratingUnit"),(0,a.yg)("td",{parentName:"tr",align:null},"The generating unit specifications for the control area.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",mdxType:"Link"},"ControlArea")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/TieFlow",mdxType:"Link"},"TieFlow")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ControlArea"),(0,a.yg)("td",{parentName:"tr",align:null},"The control area of the tie flows."),(0,a.yg)("td",{parentName:"tr",align:null},"TieFlow"),(0,a.yg)("td",{parentName:"tr",align:null},"The tie flows associated with the control area.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/ControlArea/ControlArea",mdxType:"Link"},"ControlArea")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/EnergyArea/EnergyGroup",mdxType:"Link"},"EnergyGroup")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);