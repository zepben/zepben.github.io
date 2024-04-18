"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[22649],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),y=a,m=g["".concat(c,".").concat(y)]||g[y]||u[y]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},34446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(58168),a=(t(96540),t(15680)),r=t(75489);const o={title:"ContingencyEquipment",hide_table_of_contents:!0,slug:"ContingencyEquipment",sidebar_position:0},l=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",id:"cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",title:"ContingencyEquipment",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Contingency",slug:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ContingencyEquipment",hide_table_of_contents:!0,slug:"ContingencyEquipment",sidebar_position:0},sidebar:"docs",previous:{title:"ContingencyElement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyElement"},next:{title:"ContingencyEquipmentStatusKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipmentStatusKind"}},s={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:p},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Equipment whose in service status is to change, such as a power transformer or AC line segment."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"contingentStatus"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipmentStatusKind",mdxType:"Link"},"ContingencyEquipmentStatusKind")),(0,a.yg)("td",{parentName:"tr",align:null},"The status for the associated equipment when in the contingency state.   This status is independent of the case to which the contingency is originally applied, but defines the equipment status when the contingency is applied.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyElement",mdxType:"Link"},"ContingencyElement"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Contingency/ContingencyEquipment",mdxType:"Link"},"ContingencyEquipment")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"ContingencyEquipment"),(0,a.yg)("td",{parentName:"tr",align:null},"The contingency equipments in which this equipment participates."),(0,a.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,a.yg)("td",{parentName:"tr",align:null},"The single piece of equipment to which to apply the contingency.")))))}y.isMDXComponent=!0}}]);