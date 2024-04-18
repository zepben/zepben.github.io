"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[63526],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),m=o(n),y=a,u=m["".concat(d,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(u,l(l({ref:t},s),{},{components:n})):r.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=e,g[m]="string"==typeof e?e:a,l[1]=g;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},14213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"MeterReading",hide_table_of_contents:!0},g=void 0,d={unversionedId:"cim100/TC57CIM/IEC61968/Metering/MeterReading",id:"cim100/TC57CIM/IEC61968/Metering/MeterReading",title:"MeterReading",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Metering/MeterReading.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Metering",slug:"/cim100/TC57CIM/IEC61968/Metering/MeterReading",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/MeterReading",draft:!1,tags:[],version:"current",frontMatter:{title:"MeterReading",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"MeterMultiplierKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/MeterMultiplierKind"},next:{title:"MeterWorkTask",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/MeterWorkTask"}},o={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Set of values obtained from the meter."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"isCoincidentTrigger"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"If true, this meter reading is the meter reading for which other coincident meter readings are requested or provided.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"valuesInterval"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"Date and time interval of the data items contained within this meter reading.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReadings"),(0,a.yg)("td",{parentName:"tr",align:null},"All meter readings obtained from this usage point."),(0,a.yg)("td",{parentName:"tr",align:null},"UsagePoint"),(0,a.yg)("td",{parentName:"tr",align:null},"Usage point from which this meter reading (set of values) has been obtained.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/EndDeviceEvent",mdxType:"Link"},"EndDeviceEvent")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReading"),(0,a.yg)("td",{parentName:"tr",align:null},"Set of measured values to which this event applies."),(0,a.yg)("td",{parentName:"tr",align:null},"EndDeviceEvents"),(0,a.yg)("td",{parentName:"tr",align:null},"All end device events associated with this set of measured values.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReadings"),(0,a.yg)("td",{parentName:"tr",align:null},"(could be deprecated in the future) All meter readings for this customer agreement."),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerAgreement"),(0,a.yg)("td",{parentName:"tr",align:null},"(could be deprecated in the future) Customer agreement for this meter reading.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/Reading",mdxType:"Link"},"Reading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReadings"),(0,a.yg)("td",{parentName:"tr",align:null},"All meter readings (sets of values) containing this reading value."),(0,a.yg)("td",{parentName:"tr",align:null},"Readings"),(0,a.yg)("td",{parentName:"tr",align:null},"All reading values contained within this meter reading.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/Meter",mdxType:"Link"},"Meter")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReadings"),(0,a.yg)("td",{parentName:"tr",align:null},"All meter readings provided by this meter."),(0,a.yg)("td",{parentName:"tr",align:null},"Meter"),(0,a.yg)("td",{parentName:"tr",align:null},"Meter providing this reading.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/MeterReading",mdxType:"Link"},"MeterReading")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Metering/IntervalBlock",mdxType:"Link"},"IntervalBlock")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"MeterReading"),(0,a.yg)("td",{parentName:"tr",align:null},"Meter reading containing this interval block."),(0,a.yg)("td",{parentName:"tr",align:null},"IntervalBlocks"),(0,a.yg)("td",{parentName:"tr",align:null},"All interval blocks contained in this meter reading.")))))}y.isMDXComponent=!0}}]);