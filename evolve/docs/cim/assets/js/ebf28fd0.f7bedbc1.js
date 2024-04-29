"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[30592],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const o={title:"Classification",hide_table_of_contents:!0,slug:"Classification",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Domain/Classification",id:"cim100/TC57CIM/IEC61970/Base/Domain/Classification",title:"Classification",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Domain/Classification.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Domain",slug:"/cim100/TC57CIM/IEC61970/Base/Domain/Classification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/Classification",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Classification",hide_table_of_contents:!0,slug:"Classification",sidebar_position:0},sidebar:"docs",previous:{title:"CapacitancePerLength",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/CapacitancePerLength"},next:{title:"Conductance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/Conductance"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Classification of level.  Specify as 1..n, with 1 being the most detailed, highest priority, etc as described on the attribute using this data type."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"multiplier"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitMultiplier",mdxType:"Link"},"UnitMultiplier")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"unit"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/UnitSymbol",mdxType:"Link"},"UnitSymbol")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"value"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("p",null,"No ancestor classes"),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);