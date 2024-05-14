"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[38369],{15680:(t,e,n)=>{n.d(e,{xA:()=>g,yg:()=>d});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},g=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),c=m(n),y=r,d=c["".concat(s,".").concat(y)]||c[y]||p[y]||i;return n?a.createElement(d,l(l({ref:e},g),{},{components:n})):a.createElement(d,l({ref:e},g))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77706:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"MiscCostItem",hide_table_of_contents:!0,slug:"MiscCostItem",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",title:"MiscCostItem",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MiscCostItem",hide_table_of_contents:!0,slug:"MiscCostItem",sidebar_position:0},sidebar:"docs",previous:{title:"LaborItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/LaborItem"},next:{title:"NonStandardItem",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/NonStandardItem"}},m={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:g},p="wrapper";function y(t){let{components:e,...n}=t;return(0,r.yg)(p,(0,a.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Various cost items that are not associated with compatible units. Examples include rental equipment, labor, materials, contractor costs, permits - anything not covered in a CU."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"account"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"This drives the accounting treatment for this misc. item.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"costPerUnit"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),(0,r.yg)("td",{parentName:"tr",align:null},"The cost per unit for this misc. item.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"costType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The cost type for accounting, such as material, labor, vehicle, contractor, equipment, overhead.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"externalRefID"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"External reference identifier (e.g. purchase order number, serial number) .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"quantity"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/IntegerQuantity",mdxType:"Link"},"IntegerQuantity")),(0,r.yg)("td",{parentName:"tr",align:null},"The quantity of the misc. item being assigned to this location.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/Common/Status",mdxType:"Link"},"Status")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkIdentifiedObject",mdxType:"Link"},"WorkIdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",mdxType:"Link"},"MiscCostItem")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"MiscCostItems"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"WorkCostDetail"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",mdxType:"Link"},"MiscCostItem")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/OldWorkTask",mdxType:"Link"},"OldWorkTask")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"MiscCostItems"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"WorkTask"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",mdxType:"Link"},"MiscCostItem")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/DesignLocation",mdxType:"Link"},"DesignLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"MiscCostItems"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"DesignLocation"),(0,r.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);