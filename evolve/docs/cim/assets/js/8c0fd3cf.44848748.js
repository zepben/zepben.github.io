"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[68946],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),p=r,d=m["".concat(u,".").concat(p)]||m[p]||y[p]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},89252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const i={title:"MeasurementValueQuality",hide_table_of_contents:!0,slug:"MeasurementValueQuality",sidebar_position:0},s=void 0,u={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality",id:"cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality",title:"MeasurementValueQuality",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Meas",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MeasurementValueQuality",hide_table_of_contents:!0,slug:"MeasurementValueQuality",sidebar_position:0},sidebar:"docs",previous:{title:"MeasurementValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValue"},next:{title:"MeasurementValueSource",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueSource"}},o={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:c},y="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Measurement quality flags. Bits 0-10 are defined for substation automation in IEC 61850-7-3. Bits 11-15 are reserved for future expansion by that document. Bits 16-31 are reserved for EMS applications."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Quality61850",mdxType:"Link"},"Quality61850"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/AnalogMeasurementValueQuality",mdxType:"Link"},"AnalogMeasurementValueQuality")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/DiscreteMeasurementValueQuality",mdxType:"Link"},"DiscreteMeasurementValueQuality"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValueQuality",mdxType:"Link"},"MeasurementValueQuality")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/MeasurementValue",mdxType:"Link"},"MeasurementValue")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"MeasurementValueQuality"),(0,r.yg)("td",{parentName:"tr",align:null},"A MeasurementValue has a MeasurementValueQuality associated with it."),(0,r.yg)("td",{parentName:"tr",align:null},"MeasurementValue"),(0,r.yg)("td",{parentName:"tr",align:null},"A MeasurementValue has a MeasurementValueQuality associated with it.")))))}p.isMDXComponent=!0}}]);