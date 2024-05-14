"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[2992],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),o=t(75489);const i={title:"NonlinearShuntCompensatorPhase",hide_table_of_contents:!0,slug:"NonlinearShuntCompensatorPhase",sidebar_position:0},s=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",id:"cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",title:"NonlinearShuntCompensatorPhase",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"NonlinearShuntCompensatorPhase",hide_table_of_contents:!0,slug:"NonlinearShuntCompensatorPhase",sidebar_position:0},sidebar:"docs",previous:{title:"NonlinearShuntCompensator",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensator"},next:{title:"NonlinearShuntCompensatorPhasePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhasePoint"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A per phase non linear shunt compensator has bank or section admittance values that differ. The attributes g and b of the associated NonlinearShuntCompensatorPhasePoint describe the total conductance and admittance of a NonlinearShuntCompensatorPhasePoint at a section number specified by NonlinearShuntCompensatorPhasePoint.sectionNumber."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/ShuntCompensatorPhase",mdxType:"Link"},"ShuntCompensatorPhase"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhase",mdxType:"Link"},"NonlinearShuntCompensatorPhase")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(o.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/NonlinearShuntCompensatorPhasePoint",mdxType:"Link"},"NonlinearShuntCompensatorPhasePoint")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},"NonlinearShuntCompensatorPhase"),(0,r.yg)("td",{parentName:"tr",align:null},"Non-linear shunt compensator phase owning this point."),(0,r.yg)("td",{parentName:"tr",align:null},"NonlinearShuntCompensatorPhasePoints"),(0,r.yg)("td",{parentName:"tr",align:null},"All points of the non-linear shunt compensator phase.")))))}h.isMDXComponent=!0}}]);