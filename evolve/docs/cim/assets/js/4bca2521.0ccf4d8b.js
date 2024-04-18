"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[83353],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const i={title:"SeriesCompensator",hide_table_of_contents:!0},l=void 0,s={unversionedId:"Evolve/IEC61970/Base/Wires/SeriesCompensator",id:"Evolve/IEC61970/Base/Wires/SeriesCompensator",title:"SeriesCompensator",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/SeriesCompensator.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/SeriesCompensator",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/SeriesCompensator",draft:!1,tags:[],version:"current",frontMatter:{title:"SeriesCompensator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"RegulatingControlModeKind",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/RegulatingControlModeKind"},next:{title:"ShuntCompensator",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/ShuntCompensator"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A Series Compensator is a series capacitor or reactor or an AC transmission line without charging susceptance.  It is a two terminal device."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence resistance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence resistance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"varistorPresent"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Describe if a metal oxide varistor (mov) for over voltage protection is configured in parallel with the series compensator. It is used for short circuit calculations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"varistorRatedCurrent"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,a.yg)("td",{parentName:"tr",align:null},"The maximum current the varistor is designed to handle at specified duration. It is used for short circuit calculations and exchanged only if SeriesCompensator.varistorPresent is true.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The attribute shall be a positive value."),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"varistorVoltageThreshold"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,a.yg)("td",{parentName:"tr",align:null},"The dc voltage at which the varistor starts conducting. It is used for short circuit calculations and exchanged only if SeriesCompensator.varistorPresent is true.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence reactance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence reactance.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}g.isMDXComponent=!0}}]);