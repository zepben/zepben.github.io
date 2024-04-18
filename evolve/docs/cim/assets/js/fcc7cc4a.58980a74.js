"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[18935],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=s(n),y=a,u=g["".concat(p,".").concat(y)]||g[y]||c[y]||l;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),l=n(75489);const o={title:"ModelOperation",hide_table_of_contents:!0},i=void 0,p={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",title:"ModelOperation",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",draft:!1,tags:[],version:"current",frontMatter:{title:"ModelOperation",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"IncrementalDatasetArgDescription",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/IncrementalDatasetArgDescription"},next:{title:"ModelOperationArg",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArg"}},s={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:d},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"An operation performed on models."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sequenceNumber"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Sequence number within a operation sequence, lower is first.   Normally starts with 1.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",mdxType:"Link"},"ModelOperation")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationDescription",mdxType:"Link"},"ModelOperationDescription")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"ModelOperation"),(0,a.yg)("td",{parentName:"tr",align:null},"The instances of operations that conform to this operation type."),(0,a.yg)("td",{parentName:"tr",align:null},"ModelOperationDescription"),(0,a.yg)("td",{parentName:"tr",align:null},"The type of the model operation.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",mdxType:"Link"},"ModelOperation")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationArg",mdxType:"Link"},"ModelOperationArg")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ModelOperation"),(0,a.yg)("td",{parentName:"tr",align:null},"The opeation for the operation argument."),(0,a.yg)("td",{parentName:"tr",align:null},"ModelOperationArg"),(0,a.yg)("td",{parentName:"tr",align:null},"Arguments of the operation.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperation",mdxType:"Link"},"ModelOperation")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/ModelOperationSequence",mdxType:"Link"},"ModelOperationSequence")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"ModelOperation"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"OperationSequence"),(0,a.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);