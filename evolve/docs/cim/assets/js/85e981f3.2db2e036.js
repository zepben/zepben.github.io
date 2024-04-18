"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[52692],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),s=n(75489);const i={title:"InUseDate",hide_table_of_contents:!0},o=void 0,l={unversionedId:"cim100/TC57CIM/IEC61968/Assets/InUseDate",id:"cim100/TC57CIM/IEC61968/Assets/InUseDate",title:"InUseDate",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Assets/InUseDate.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Assets",slug:"/cim100/TC57CIM/IEC61968/Assets/InUseDate",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/InUseDate",draft:!1,tags:[],version:"current",frontMatter:{title:"InUseDate",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ISOStandardKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/ISOStandardKind"},next:{title:"InUseStateKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/InUseStateKind"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Dates associated with asset 'in use' status. May have multiple in use dates for this device and a compound type allows a query to return multiple dates."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inUseDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Date asset was most recently put in use.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"notReadyForUseDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Date of most recent asset transition to not ready for use state.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"readyForUseDate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/TC57CIM/IEC61970/Base/Domain/Date",mdxType:"Link"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Date of most recent asset transition to ready for use state.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);