"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[98883],{15680:(e,t,i)=>{i.d(t,{xA:()=>m,yg:()=>y});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(i),g=a,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return i?n.createElement(y,l(l({ref:t},m),{},{components:i})):n.createElement(y,l({ref:t},m))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},54855:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=i(58168),a=(i(96540),i(15680)),r=i(75489);const l={title:"Limit",hide_table_of_contents:!0,slug:"Limit",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/Limit",id:"cim100/TC57CIM/IEC61970/Base/Meas/Limit",title:"Limit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Meas/Limit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Meas",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/Limit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Limit",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Limit",hide_table_of_contents:!0,slug:"Limit",sidebar_position:0},sidebar:"docs",previous:{title:"IOPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/IOPoint"},next:{title:"LimitSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/LimitSet"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:m},p="wrapper";function g(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Specifies one limit value for a Measurement. A Measurement typically has several limits that are kept together by the LimitSet class. The actual meaning and use of a Limit instance (i.e., if it is an alarm or warning limit or if it is a high or low limit) is not captured in the Limit class. However the name of a Limit instance may indicate both meaning and use."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AccumulatorLimit",mdxType:"Link"},"AccumulatorLimit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/AnalogLimit",mdxType:"Link"},"AnalogLimit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfCongestionRevenueRights/ViolationLimit",mdxType:"Link"},"ViolationLimit"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Meas/Limit",mdxType:"Link"},"Limit")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Assets/Procedure",mdxType:"Link"},"Procedure")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"Limits"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Procedures"),(0,a.yg)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);