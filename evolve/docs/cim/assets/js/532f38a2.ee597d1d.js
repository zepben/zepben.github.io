"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[89831],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||g[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),l=n(75489);const i={title:"LineFault",hide_table_of_contents:!0,slug:"LineFault",sidebar_position:0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Faults/LineFault",id:"cim100/TC57CIM/IEC61970/Base/Faults/LineFault",title:"LineFault",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Faults/LineFault.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Faults",slug:"/cim100/TC57CIM/IEC61970/Base/Faults/LineFault",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Faults/LineFault",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LineFault",hide_table_of_contents:!0,slug:"LineFault",sidebar_position:0},sidebar:"docs",previous:{title:"FaultImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Faults/FaultImpedance"},next:{title:"PhaseConnectedFaultKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Faults/PhaseConnectedFaultKind"}},u={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A fault that occurs on an AC line segment at some point along the length."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lengthFromTerminal1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),(0,r.yg)("td",{parentName:"tr",align:null},"The length to the place where the fault is located starting from terminal with sequence number 1 of the faulted line segment.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Faults/Fault",mdxType:"Link"},"Fault"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Faults/LineFault",mdxType:"Link"},"LineFault")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ACLineSegment",mdxType:"Link"},"ACLineSegment")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"LineFaults"),(0,r.yg)("td",{parentName:"tr",align:null},"The line faults of the line segment."),(0,r.yg)("td",{parentName:"tr",align:null},"ACLineSegment"),(0,r.yg)("td",{parentName:"tr",align:null},"The line segment of this line fault.")))))}m.isMDXComponent=!0}}]);