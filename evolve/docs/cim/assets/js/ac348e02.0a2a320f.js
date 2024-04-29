"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[49425],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const s={title:"LinearShuntCompensatorPhase",hide_table_of_contents:!0,slug:"LinearShuntCompensatorPhase",sidebar_position:0},i=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",title:"LinearShuntCompensatorPhase",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensatorPhase",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LinearShuntCompensatorPhase",hide_table_of_contents:!0,slug:"LinearShuntCompensatorPhase",sidebar_position:0},sidebar:"docs",previous:{title:"LinearShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/LinearShuntCompensator"},next:{title:"LoadBreakSwitch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/LoadBreakSwitch"}},l={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A per phase linear shunt compensator has banks or sections with equal admittance values."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bPerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),(0,a.yg)("td",{parentName:"tr",align:null},"Susceptance per section of the phase if shunt compensator is wye connected.   Susceptance per section phase to phase if shunt compensator is delta connected.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"gPerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),(0,a.yg)("td",{parentName:"tr",align:null},"Conductance per section for this phase if shunt compensator is wye connected.  Conductance per section phase to phase if shunt compensator is delta connected.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",mdxType:"Link"},"ShuntCompensatorPhase"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);