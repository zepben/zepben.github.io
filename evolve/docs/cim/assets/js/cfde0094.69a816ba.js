"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[32438],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"OperationalRestriction",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",id:"cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",title:"OperationalRestriction",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Operations",slug:"/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/OperationalRestriction",draft:!1,tags:[],version:"current",frontMatter:{title:"OperationalRestriction",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"MeasurementAction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/MeasurementAction"},next:{title:"OperationalTag",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Operations/OperationalTag"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.\nIn the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"activePeriod"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"Interval during which this restriction is applied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"restrictedValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/FloatQuantity",mdxType:"Link"},"FloatQuantity")),(0,r.yg)("td",{parentName:"tr",align:null},"Restricted (new) value; includes unit of measure and potentially multiplier.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/OperationalUpdatedRating",mdxType:"Link"},"OperationalUpdatedRating"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/OperationalRestriction",mdxType:"Link"},"OperationalRestriction")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"OperationalRestrictions"),(0,r.yg)("td",{parentName:"tr",align:null},"All operational restrictions for this equipment."),(0,r.yg)("td",{parentName:"tr",align:null},"Equipments"),(0,r.yg)("td",{parentName:"tr",align:null},"All equipments to which this restriction applies.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/OperationalRestriction",mdxType:"Link"},"OperationalRestriction")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61968/Assets/ProductAssetModel",mdxType:"Link"},"ProductAssetModel")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"OperationalRestrictions"),(0,r.yg)("td",{parentName:"tr",align:null},"All operational restrictions applying to this asset model."),(0,r.yg)("td",{parentName:"tr",align:null},"ProductAssetModel"),(0,r.yg)("td",{parentName:"tr",align:null},"Asset model to which this restriction applies.")))))}g.isMDXComponent=!0}}]);