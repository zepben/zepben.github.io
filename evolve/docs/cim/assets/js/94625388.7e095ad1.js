"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[82172],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,y=m["".concat(u,".").concat(p)]||m[p]||g[p]||l;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const i={title:"Accumulator",hide_table_of_contents:!0},o=void 0,u={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/Accumulator",id:"cim100/TC57CIM/IEC61970/Base/Meas/Accumulator",title:"Accumulator",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Meas/Accumulator.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Meas",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/Accumulator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Accumulator",draft:!1,tags:[],version:"current",frontMatter:{title:"Accumulator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"SubLoadArea",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/LoadModel/SubLoadArea"},next:{title:"AccumulatorLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/AccumulatorLimit"}},c={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:s},g="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Accumulator represents an accumulated (counted) Measurement, e.g. an energy value."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Normal value range maximum for any of the MeasurementValue.values. Used for scaling, e.g. in bar graphs or of telemetered raw values.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Meas/Accumulator",mdxType:"Link"},"Accumulator")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Meas/AccumulatorValue",mdxType:"Link"},"AccumulatorValue")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Accumulator"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurement to which this value is connected."),(0,r.yg)("td",{parentName:"tr",align:null},"AccumulatorValues"),(0,r.yg)("td",{parentName:"tr",align:null},"The values connected to this measurement.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Meas/Accumulator",mdxType:"Link"},"Accumulator")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Meas/AccumulatorLimitSet",mdxType:"Link"},"AccumulatorLimitSet")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurements"),(0,r.yg)("td",{parentName:"tr",align:null},"The Measurements using the LimitSet."),(0,r.yg)("td",{parentName:"tr",align:null},"LimitSets"),(0,r.yg)("td",{parentName:"tr",align:null},"A measurement may have zero or more limit ranges defined for it.")))))}p.isMDXComponent=!0}}]);