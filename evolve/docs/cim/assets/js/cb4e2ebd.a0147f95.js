"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[40092],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,y=g["".concat(o,".").concat(u)]||g[u]||p[u]||i;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"Assignment",hide_table_of_contents:!0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment",title:"Assignment",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment",draft:!1,tags:[],version:"current",frontMatter:{title:"Assignment",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"AccessPermit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/AccessPermit"},next:{title:"BusinessCase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/BusinessCase"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"An assignment is given to an ErpPerson, Crew, Organisation, Equipment Item, Tool, etc. and may be used to perform Work, WorkTasks, Procedures, etc. TimeSchedules may be set up directly for Assignments or indirectly via the associated WorkTask. Note that these associations are all inherited through the recursive relationship on Document."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"effectivePeriod"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"Period between the assignment becoming effective and its expiration.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkDocument",mdxType:"Link"},"WorkDocument"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfWork/Assignment",mdxType:"Link"},"Assignment")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/InfIEC61968/InfCommon/OldCrew",mdxType:"Link"},"OldCrew")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"Assignments"),(0,a.yg)("td",{parentName:"tr",align:null},"All Assignments for this Crew."),(0,a.yg)("td",{parentName:"tr",align:null},"Crews"),(0,a.yg)("td",{parentName:"tr",align:null},"All Crews having this Assignment.")))))}u.isMDXComponent=!0}}]);