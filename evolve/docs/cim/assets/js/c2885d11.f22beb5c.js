"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[49369],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),g=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(r),c=n,m=u["".concat(o,".").concat(c)]||u[c]||y[c]||l;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var g=2;g<l;g++)s[g]=r[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(58168),n=(r(96540),r(15680)),l=r(75489);const s={title:"MPMTestResults",hide_table_of_contents:!0},i=void 0,o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",id:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",title:"MPMTestResults",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",draft:!1,tags:[],version:"current",frontMatter:{title:"MPMTestResults",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"MPMResourceStatus",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMResourceStatus"},next:{title:"MarketRegionResults",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MarketRegionResults"}},g={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},y="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"Provides the outcome and margin percent (as appropriate) result data for the MPM tests.  There are relationships to Zone for Designated Congestion Area Tests, CurveSchedData for bid segment tests, to the SubControlArea for the system wide level tests, and Pnodes for the LMPM impact tests."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"marginPercent"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,n.yg)("td",{parentName:"tr",align:null},"Used to show the Margin % result of the Impact test")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"outcome"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/MPMTestOutcome",mdxType:"Link"},"MPMTestOutcome")),(0,n.yg)("td",{parentName:"tr",align:null},"The results of the test. For the Price, Impact, and Conduct tests, typical values are NA, Pass, Fail, Disable, or Skip.")))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("p",null,"No ancestor classes"),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("p",null,"No descendent classes"),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",mdxType:"Link"},"MPMTestResults")),(0,n.yg)("td",{parentName:"tr",align:null},"1..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ReferenceData/AggregatedPnode",mdxType:"Link"},"AggregatedPnode")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"MPMTestResults"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"AggregatedPnode"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",mdxType:"Link"},"MPMTestResults")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/ReferenceData/MPMTestCategory",mdxType:"Link"},"MPMTestCategory")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"MPMTestResults"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"MPMTestCategory"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMTestResults",mdxType:"Link"},"MPMTestResults")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/TC57CIM/IEC62325/MarketOperations/MarketSystem/MarketResults/MPMClearing",mdxType:"Link"},"MPMClearing")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"MPMTestResults"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"MPMClearing"),(0,n.yg)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);