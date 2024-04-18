"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[29060],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>C});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),y=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=y(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=y(a),u=n,C=g["".concat(o,".").concat(u)]||g[u]||m[u]||i;return a?r.createElement(C,l(l({ref:t},p),{},{components:a})):r.createElement(C,l({ref:t},p))}));function C(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:n,l[1]=s;for(var y=2;y<i;y++)l[y]=a[y];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680)),i=a(75489);const l={title:"MarketFactors",hide_table_of_contents:!0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",title:"MarketFactors",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",draft:!1,tags:[],version:"current",frontMatter:{title:"MarketFactors",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"MarketActualEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketActualEvent"},next:{title:"MarketPlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/"}},y={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"Aggregation of market information relative for a specific time interval."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"intervalEndTime"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,n.yg)("td",{parentName:"tr",align:null},"The end of the time interval for which requirement is defined.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"intervalStartTime"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,n.yg)("td",{parentName:"tr",align:null},"The start of the time interval for which requirement is defined.")))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/AncillaryServiceClearing",mdxType:"Link"},"AncillaryServiceClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/CommitmentClearing",mdxType:"Link"},"CommitmentClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ConstraintClearing",mdxType:"Link"},"ConstraintClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostLoss",mdxType:"Link"},"ExPostLoss")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostMarketRegion",mdxType:"Link"},"ExPostMarketRegion")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostPricing",mdxType:"Link"},"ExPostPricing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ExPostResource",mdxType:"Link"},"ExPostResource")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/GeneralClearing",mdxType:"Link"},"GeneralClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearing",mdxType:"Link"},"InstructionClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOP",mdxType:"Link"},"InstructionClearingDOP")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/InstructionClearingDOT",mdxType:"Link"},"InstructionClearingDOT")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfMarketResults/InterTieClearing",mdxType:"Link"},"InterTieClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/IntermittentResourceEligibility",mdxType:"Link"},"IntermittentResourceEligibility")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/LossClearing",mdxType:"Link"},"LossClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/LossSensitivity",mdxType:"Link"},"LossSensitivity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMClearing",mdxType:"Link"},"MPMClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfMarketResults/MarketCaseClearing",mdxType:"Link"},"MarketCaseClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MitigatedBidClearing",mdxType:"Link"},"MitigatedBidClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/PnodeClearing",mdxType:"Link"},"PnodeClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/RMROperatorInput",mdxType:"Link"},"RMROperatorInput")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceAwardClearing",mdxType:"Link"},"ResourceAwardClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/ResourceClearing",mdxType:"Link"},"ResourceClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/ExternalInputs/SecurityConstraintSum",mdxType:"Link"},"SecurityConstraintSum")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfMarketResults/SecurityConstraintsClearing",mdxType:"Link"},"SecurityConstraintsClearing")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/TransactionBidClearing",mdxType:"Link"},"TransactionBidClearing"))),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",mdxType:"Link"},"MarketFactors")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/Market",mdxType:"Link"},"Market")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketFactors"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Market"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketPlan/MarketFactors",mdxType:"Link"},"MarketFactors")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketOpCommon/MktActivityRecord",mdxType:"Link"},"MktActivityRecord")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"MarketFactors"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"MktActivityRecord"),(0,n.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);