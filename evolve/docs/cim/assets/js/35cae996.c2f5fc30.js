"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[40652],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return a?n.createElement(m,i(i({ref:t},y),{},{components:a})):n.createElement(m,i({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},98411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const i={title:"AllocationResultValues",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",title:"AllocationResultValues",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",draft:!1,tags:[],version:"current",frontMatter:{title:"AllocationResultValues",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"AllocationResult",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResult"},next:{title:"AuxiliaryCost",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AuxiliaryCost"}},c={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:y},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Models Market clearing results in terms of price and MW values."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aggregateType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},'"1" --  "Detail",')))),(0,r.yg)("p",null,'"2" --  "Aggregate by Market service type", in which case, the "AllocationEnergyType" field will not be filled;\n"3" --  "Aggregate by "AllocationEnergyType", in which case "MarketServiceType" will not be filled. |\n| allocationMwHour | ',(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," |  |\n| allocationPrice | ",(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," |  |\n| energyTypeCode | ",(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")," |  |\n| marketServiceType | ",(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")," | Choices are:\nME - Market Energy Capacity;\nSR - Spinning Reserve Capacity;\nNR - Non-Spinning Reserve Capacity;\nDAC - Day Ahead Capacity;\nDEC - Derate Capacity |"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",mdxType:"Link"},"AllocationResultValues")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResult",mdxType:"Link"},"AllocationResult")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"AllocationResultValues"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"AllocationResult"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketQualitySystem/AllocationResultValues",mdxType:"Link"},"AllocationResultValues")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketCommon/RegisteredResource",mdxType:"Link"},"RegisteredResource")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"AllocationResultValues"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"RegisteredResource"),(0,r.yg)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);