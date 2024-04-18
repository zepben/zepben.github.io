"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[60174],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,u=p["".concat(m,".").concat(y)]||p[y]||g[y]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},48520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const o={title:"Agreement",hide_table_of_contents:!0},l=void 0,m={unversionedId:"cim100/TC57CIM/IEC61968/Common/Agreement",id:"cim100/TC57CIM/IEC61968/Common/Agreement",title:"Agreement",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Common/Agreement.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Common",slug:"/cim100/TC57CIM/IEC61968/Common/Agreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Agreement",draft:!1,tags:[],version:"current",frontMatter:{title:"Agreement",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ActivityRecord",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/ActivityRecord"},next:{title:"Appointment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Appointment"}},s={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:c},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Formal agreement between two parties defining the terms and conditions for a set of services. The specifics of the services are, in turn, defined via one or more service agreements."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"signDate"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,a.yg)("td",{parentName:"tr",align:null},"Date this agreement was consummated among associated persons and/or organisations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"validityInterval"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"Date and time interval this agreement is valid (from going into effect to termination).")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Common/Document",mdxType:"Link"},"Document"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement",mdxType:"Link"},"AuxiliaryAgreement")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/CustomerAgreement",mdxType:"Link"},"CustomerAgreement")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/EnergyProduct",mdxType:"Link"},"EnergyProduct")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfCustomers/ExternalCustomerAgreement",mdxType:"Link"},"ExternalCustomerAgreement")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfCongestionRevenueRights/FTR",mdxType:"Link"},"FTR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfFinancial/IntSchedAgreement",mdxType:"Link"},"IntSchedAgreement")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfLocations/LocationGrant",mdxType:"Link"},"LocationGrant")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/PaymentMetering/MerchantAgreement",mdxType:"Link"},"MerchantAgreement")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC62325/InfIEC62325/InfFinancial/OpenAccessProduct",mdxType:"Link"},"OpenAccessProduct")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfLocations/RightOfWay",mdxType:"Link"},"RightOfWay"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);