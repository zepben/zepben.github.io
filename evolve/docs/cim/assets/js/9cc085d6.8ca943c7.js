"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[44437],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),o=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=o(r),p=a,d=u["".concat(g,".").concat(p)]||u[p]||y[p]||l;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var m={};for(var g in t)hasOwnProperty.call(t,g)&&(m[g]=t[g]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>g,toc:()=>s});var n=r(58168),a=(r(96540),r(15680)),l=r(75489);const i={title:"CustomerAgreement",hide_table_of_contents:!0,slug:"CustomerAgreement",sidebar_position:0},m=void 0,g={unversionedId:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",id:"cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",title:"CustomerAgreement",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Customers",slug:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"CustomerAgreement",hide_table_of_contents:!0,slug:"CustomerAgreement",sidebar_position:0},sidebar:"docs",previous:{title:"CustomerAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerAccount"},next:{title:"CustomerKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerKind"}},o={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:s},y="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Agreement between the customer and the service supplier to pay for service at a specific service location. It records certain billing information about the type of service provided at the service location and is used during charge creation to determine the type of service."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"isPrePay"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"If true, the customer is a pre-pay customer for the specified service.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"loadMgmt"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"Load management code.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"shutOffDateTime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Final date and time the service will be billed to the previous customer.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Common/Agreement",mdxType:"Link"},"Agreement"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/ServiceLocation",mdxType:"Link"},"ServiceLocation")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All customer agreements regulating this service location."),(0,a.yg)("td",{parentName:"tr",align:null},"ServiceLocations"),(0,a.yg)("td",{parentName:"tr",align:null},"All service locations regulated by this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCustomers/StandardIndustryCode",mdxType:"Link"},"StandardIndustryCode")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"StandardIndustryCode"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",mdxType:"Link"},"AuxiliaryAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreement"),(0,a.yg)("td",{parentName:"tr",align:null},"Customer agreement this (non-service related) auxiliary agreement refers to."),(0,a.yg)("td",{parentName:"tr",align:null},"AuxiliaryAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All (non-service related) auxiliary agreements that refer to this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/PricingStructure",mdxType:"Link"},"PricingStructure")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All customer agreements with this pricing structure."),(0,a.yg)("td",{parentName:"tr",align:null},"PricingStructures"),(0,a.yg)("td",{parentName:"tr",align:null},"All pricing structures applicable to this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/ServiceCategory",mdxType:"Link"},"ServiceCategory")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All customer agreements with this service category."),(0,a.yg)("td",{parentName:"tr",align:null},"ServiceCategory"),(0,a.yg)("td",{parentName:"tr",align:null},"Service category for this agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreement"),(0,a.yg)("td",{parentName:"tr",align:null},"Customer agreement regulating this service delivery point."),(0,a.yg)("td",{parentName:"tr",align:null},"UsagePoints"),(0,a.yg)("td",{parentName:"tr",align:null},"All service delivery points regulated by this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Metering/DemandResponseProgram",mdxType:"Link"},"DemandResponseProgram")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All customer agreements through which the customer is enrolled in this demand response program."),(0,a.yg)("td",{parentName:"tr",align:null},"DemandResponsePrograms"),(0,a.yg)("td",{parentName:"tr",align:null},"All demand response programs the customer is enrolled in through this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreement"),(0,a.yg)("td",{parentName:"tr",align:null},"(could be deprecated in the future) Customer agreement for this meter reading."),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReadings"),(0,a.yg)("td",{parentName:"tr",align:null},"(could be deprecated in the future) All meter readings for this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ServiceSupplier",mdxType:"Link"},"ServiceSupplier")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All customer agreements of this service supplier."),(0,a.yg)("td",{parentName:"tr",align:null},"ServiceSupplier"),(0,a.yg)("td",{parentName:"tr",align:null},"Service supplier for this customer agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAccount",mdxType:"Link"},"CustomerAccount")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All agreements for this customer account."),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAccount"),(0,a.yg)("td",{parentName:"tr",align:null},"Customer account owning this agreement.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Customers/Customer",mdxType:"Link"},"Customer")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreements"),(0,a.yg)("td",{parentName:"tr",align:null},"All agreements of this customer."),(0,a.yg)("td",{parentName:"tr",align:null},"Customer"),(0,a.yg)("td",{parentName:"tr",align:null},"Customer for this agreement.")))))}p.isMDXComponent=!0}}]);