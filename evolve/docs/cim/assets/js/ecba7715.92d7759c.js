"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[65456],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>u});var a=t(96540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function g(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),y=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=y(n.components);return a.createElement(o.Provider,{value:e},n.children)},s="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,p=g(n,["components","mdxType","originalType","parentName"]),s=y(t),m=r,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(u,i(i({ref:e},p),{},{components:t})):a.createElement(u,i({ref:e},p))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=m;var g={};for(var o in e)hasOwnProperty.call(e,o)&&(g[o]=e[o]);g.originalType=n,g[s]="string"==typeof n?n:r,i[1]=g;for(var y=2;y<l;y++)i[y]=t[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58678:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),l=t(75489);const i={title:"Design",hide_table_of_contents:!0},g=void 0,o={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",title:"Design",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",draft:!1,tags:[],version:"current",frontMatter:{title:"Design",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CostType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType"},next:{title:"DesignKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignKind"}},y={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:p},d="wrapper";function m(n){let{components:e,...t}=n;return(0,r.yg)(d,(0,a.A)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A design for consideration by customers, potential customers, or internal work.\nNote that the Version of design is the revision attribute that is inherited from Document."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"costEstimate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"Estimated cost (not price) of design.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kind"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignKind",mdxType:"Link"},"DesignKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Kind of this design.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"price"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"Price to customer for implementing design.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkDocument",mdxType:"Link"},"WorkDocument"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/OldWorkTask",mdxType:"Link"},"OldWorkTask")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Design"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"WorkTasks"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Design"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"WorkCostDetails"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpBOM",mdxType:"Link"},"ErpBOM")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Design"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ErpBOMs"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/ConditionFactor",mdxType:"Link"},"ConditionFactor")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Designs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ConditionFactors"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/Work/Work",mdxType:"Link"},"Work")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Designs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Work"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpQuoteLineItem",mdxType:"Link"},"ErpQuoteLineItem")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Design"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ErpQuoteLineItem"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignLocation",mdxType:"Link"},"DesignLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Designs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DesignLocations"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignLocationCU",mdxType:"Link"},"DesignLocationCU")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Designs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DesignLocationsCUs"),(0,r.yg)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);