"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[26651],{15680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>d});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),y=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=y(t.components);return a.createElement(g.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,g=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=y(n),s=r,d=m["".concat(g,".").concat(s)]||m[s]||p[s]||i;return n?a.createElement(d,l(l({ref:e},u),{},{components:n})):a.createElement(d,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var y=2;y<i;y++)l[y]=n[y];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35265:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"Quantity",hide_table_of_contents:!0},o=void 0,g={unversionedId:"cim100/TC57CIM/IEC62325/MarketManagement/Quantity",id:"cim100/TC57CIM/IEC62325/MarketManagement/Quantity",title:"Quantity",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketManagement/Quantity.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketManagement",slug:"/cim100/TC57CIM/IEC62325/MarketManagement/Quantity",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketManagement/Quantity",draft:!1,tags:[],version:"current",frontMatter:{title:"Quantity",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Process",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketManagement/Process"},next:{title:"Reason",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketManagement/Reason"}},y={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:u},p="wrapper";function s(t){let{components:e,...n}=t;return(0,r.yg)(p,(0,a.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Description of quantities needed in the data exchange.\nThe type of the quantity is described either by the role of the association or the type attribute.\nThe quality attribute provides the information about the quality of the quantity (measured, estimated, etc.)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"quality"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The quality of the information being provided. This quality may be estimated, not available, as provided, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"quantity"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Decimal",mdxType:"Link"},"Decimal")),(0,r.yg)("td",{parentName:"tr",align:null},"The quantity value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"The association role provides the information about what is expressed."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The description of the type of the quantity.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Quantity",mdxType:"Link"},"Quantity")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Quantity",mdxType:"Link"},"Quantity")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Detail_Quantity"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional information related to the associated quantity."),(0,r.yg)("td",{parentName:"tr",align:null},"quantity"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Quantity",mdxType:"Link"},"Quantity")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Point",mdxType:"Link"},"Point")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Quantity"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Point"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Quantity",mdxType:"Link"},"Quantity")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Domain",mdxType:"Link"},"Domain")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Quantity"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Domain"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/Quantity",mdxType:"Link"},"Quantity")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketManagement/TimeSeries",mdxType:"Link"},"TimeSeries")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"Quantity"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TimeSeries"),(0,r.yg)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);