"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[76093],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=o(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?r.createElement(m,l(l({ref:n},g),{},{components:t})):r.createElement(m,l({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=t(58168),a=(t(96540),t(15680)),i=t(75489);const l={title:"PerLengthSequenceImpedance",hide_table_of_contents:!0,slug:"PerLengthSequenceImpedance",sidebar_position:0},s=void 0,c={unversionedId:"ewb/IEC61970/Base/Wires/PerLengthSequenceImpedance",id:"ewb/IEC61970/Base/Wires/PerLengthSequenceImpedance",title:"PerLengthSequenceImpedance",description:"Class Description",source:"@site/docs/ewb/IEC61970/Base/Wires/PerLengthSequenceImpedance.mdx",sourceDirName:"ewb/IEC61970/Base/Wires",slug:"/ewb/IEC61970/Base/Wires/PerLengthSequenceImpedance",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PerLengthSequenceImpedance",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"PerLengthSequenceImpedance",hide_table_of_contents:!0,slug:"PerLengthSequenceImpedance",sidebar_position:0},sidebar:"docs",previous:{title:"PerLengthLineParameter",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PerLengthLineParameter"},next:{title:"PhaseShuntConnectionKind",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Wires/PhaseShuntConnectionKind"}},o={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:g},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Sequence impedance and admittance parameters per unit length, for transposed lines of 1, 2, or 3 phases. For 1-phase lines, define x=x0=xself. For 2-phase lines, define x=xs-xm and x0=xs+xm."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"b0ch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/SusceptancePerLength",mdxType:"Link"},"SusceptancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence shunt (charging) susceptance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/SusceptancePerLength",mdxType:"Link"},"SusceptancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence shunt (charging) susceptance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"g0ch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ConductancePerLength",mdxType:"Link"},"ConductancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence shunt (charging) conductance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"gch"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ConductancePerLength",mdxType:"Link"},"ConductancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence shunt (charging) conductance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ResistancePerLength",mdxType:"Link"},"ResistancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence series resistance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ResistancePerLength",mdxType:"Link"},"ResistancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence series resistance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ReactancePerLength",mdxType:"Link"},"ReactancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Positive sequence series reactance, per unit of length.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/ReactancePerLength",mdxType:"Link"},"ReactancePerLength")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence series reactance, per unit of length.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/ewb/IEC61970/Base/Wires/PerLengthImpedance",mdxType:"Link"},"PerLengthImpedance"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);