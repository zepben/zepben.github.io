"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[29049],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||y[g]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(58168),i=(n(96540),n(15680)),a=n(75489);const l={title:"AccountingUnit",hide_table_of_contents:!0},o=void 0,c={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",id:"cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",title:"AccountingUnit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/PaymentMetering",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/AccountingUnit",draft:!1,tags:[],version:"current",frontMatter:{title:"AccountingUnit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"AccountMovement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/AccountMovement"},next:{title:"AuxiliaryAccount",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAccount"}},s={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:u},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Unit for accounting; use either 'energyUnit' or 'currencyUnit' to specify the unit for 'value'."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"energyUnit"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/TC57CIM/IEC61970/Base/Domain/RealEnergy",mdxType:"Link"},"RealEnergy")),(0,i.yg)("td",{parentName:"tr",align:null},"Unit of service.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"monetaryUnit"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/TC57CIM/IEC61970/Base/Domain/Currency",mdxType:"Link"},"Currency")),(0,i.yg)("td",{parentName:"tr",align:null},"Unit of currency.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"multiplier"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/TC57CIM/IEC61970/Base/Domain/UnitMultiplier",mdxType:"Link"},"UnitMultiplier")),(0,i.yg)("td",{parentName:"tr",align:null},"Multiplier for the 'energyUnit' or 'monetaryUnit'.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"value"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Value expressed in applicable units.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("p",null,"No ancestor classes"),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}g.isMDXComponent=!0}}]);