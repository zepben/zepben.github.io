"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[83899],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,g=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const i={title:"LinearShuntCompensator",hide_table_of_contents:!0},s=void 0,l={unversionedId:"Evolve/IEC61970/Base/Wires/LinearShuntCompensator",id:"Evolve/IEC61970/Base/Wires/LinearShuntCompensator",title:"LinearShuntCompensator",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/LinearShuntCompensator.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/LinearShuntCompensator",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/LinearShuntCompensator",draft:!1,tags:[],version:"current",frontMatter:{title:"LinearShuntCompensator",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Line",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/Line"},next:{title:"LoadBreakSwitch",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/LoadBreakSwitch"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A linear shunt compensator has banks or sections with equal admittance values."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"b0PerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence shunt (charging) susceptance per section.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bPerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence shunt (charging) susceptance per section.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"g0PerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence shunt (charging) conductance per section.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"gPerSection"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence shunt (charging) conductance per section.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Wires/ShuntCompensator",mdxType:"Link"},"ShuntCompensator"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);