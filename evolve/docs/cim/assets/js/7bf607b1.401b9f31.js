"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[44892],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,d=m["".concat(o,".").concat(p)]||m[p]||y[p]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:r,l[1]=g;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"Charge",hide_table_of_contents:!0,slug:"Charge",sidebar_position:0},g=void 0,o={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/Charge",id:"cim100/TC57CIM/IEC61968/PaymentMetering/Charge",title:"Charge",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/PaymentMetering/Charge.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/PaymentMetering",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Charge",hide_table_of_contents:!0,slug:"Charge",sidebar_position:0},sidebar:"docs",previous:{title:"CashierShift",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/CashierShift"},next:{title:"ChargeKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/ChargeKind"}},s={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:c},y="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A charge element associated with other entities such as tariff structures, auxiliary agreements or other charge elements. The total charge amount applicable to this instance of charge is the sum of fixed and variable portion."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fixedPortion"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",mdxType:"Link"},"AccountingUnit")),(0,r.yg)("td",{parentName:"tr",align:null},"The fixed portion of this charge element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kind"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ChargeKind",mdxType:"Link"},"ChargeKind")),(0,r.yg)("td",{parentName:"tr",align:null},"The kind of charge to be applied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"variablePortion"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,r.yg)("td",{parentName:"tr",align:null},"The variable portion of this charge element, calculated as a percentage of the total amount of a parent charge.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"ParentCharge"),(0,r.yg)("td",{parentName:"tr",align:null},"Parent of this charge sub-component."),(0,r.yg)("td",{parentName:"tr",align:null},"ChildCharges"),(0,r.yg)("td",{parentName:"tr",align:null},"All sub-components of this complex charge.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Charges"),(0,r.yg)("td",{parentName:"tr",align:null},"All charges used to define this consumption tariff interval."),(0,r.yg)("td",{parentName:"tr",align:null},"ConsumptionTariffIntervals"),(0,r.yg)("td",{parentName:"tr",align:null},"Tariff intervals to which this consumption-based charge has to be levied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Charges"),(0,r.yg)("td",{parentName:"tr",align:null},"All charges used to define this time tariff interval."),(0,r.yg)("td",{parentName:"tr",align:null},"TimeTariffIntervals"),(0,r.yg)("td",{parentName:"tr",align:null},"Tariff intervals to which this time-based charge has to be levied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount",mdxType:"Link"},"AuxiliaryAccount")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Charges"),(0,r.yg)("td",{parentName:"tr",align:null},"All charges levied on this account."),(0,r.yg)("td",{parentName:"tr",align:null},"AuxiliaryAccounts"),(0,r.yg)("td",{parentName:"tr",align:null},"All auxiliary accounts to which this charge has to be levied.")))))}p.isMDXComponent=!0}}]);