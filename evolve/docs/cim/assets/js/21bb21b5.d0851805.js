"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[10120],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=g(n),u=r,c=y["".concat(p,".").concat(u)]||y[u]||m[u]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680)),l=n(75489);const i={title:"CostType",hide_table_of_contents:!0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",title:"CostType",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",draft:!1,tags:[],version:"current",frontMatter:{title:"CostType",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ContractorItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem"},next:{title:"Design",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design"}},g={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A categorization for resources, often costs, in accounting transactions. Examples include: material components, building in service, coal sales, overhead, etc."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amountAssignable"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"True if an amount can be assigned to the resource element (e.g., building in service, transmission plant, software development capital); false otherwise (e.g., internal labor, material components).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"code"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"A codified representation of the resource element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"level"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The level of the resource element in the hierarchy of resource elements (recursive relationship).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The stage for which this costType applies: estimated design, estimated actual or actual actual.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/Common/Status",mdxType:"Link"},"Status")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkIdentifiedObject",mdxType:"Link"},"WorkIdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"ParentCostType"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ChildCostTypes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"CostType"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"WorkCostDetails"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpJournalEntry",mdxType:"Link"},"ErpJournalEntry")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"CostTypes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ErpJournalEntries"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/CompatibleUnit",mdxType:"Link"},"CompatibleUnit")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"CostType"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"CompatibleUnits"),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);