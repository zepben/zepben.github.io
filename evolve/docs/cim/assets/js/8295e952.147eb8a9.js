"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[47288],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=g(n),p=a,d=y["".concat(s,".").concat(p)]||y[p]||c[p]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const l={title:"EnergyConsumerPhase",hide_table_of_contents:!0,slug:"EnergyConsumerPhase",sidebar_position:0},i=void 0,s={unversionedId:"Evolve/IEC61970/Base/Wires/EnergyConsumerPhase",id:"Evolve/IEC61970/Base/Wires/EnergyConsumerPhase",title:"EnergyConsumerPhase",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/EnergyConsumerPhase.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/EnergyConsumerPhase",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/EnergyConsumerPhase",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EnergyConsumerPhase",hide_table_of_contents:!0,slug:"EnergyConsumerPhase",sidebar_position:0},sidebar:"docs",previous:{title:"EnergyConsumer",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/EnergyConsumer"},next:{title:"EnergySource",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/EnergySource"}},g={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A single phase of an energy consumer."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"p"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Active power of the load. Load sign convention is used, i.e. positive sign means flow out from a node.",(0,a.yg)("br",null),"For voltage dependent loads the value is at rated voltage.",(0,a.yg)("br",null),"Starting value for a steady state solution.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pfixed"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Active power of the load that is a fixed quantity. Load sign convention is used, i.e. positive sign means flow out from a node.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"phase"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Wires/SinglePhaseKind",mdxType:"Link"},"SinglePhaseKind")),(0,a.yg)("td",{parentName:"tr",align:null},"Phase of this energy consumer component.   If the energy consumer is wye connected, the connection is from the indicated phase to the central ground or neutral point.  If the energy consumer is delta connected, the phase indicates an energy consumer connected from the indicated phase to the next logical non-neutral phase.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"q"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Reactive power of the load. Load sign convention is used, i.e. positive sign means flow out from a node.",(0,a.yg)("br",null),"For voltage dependent loads the value is at rated voltage.",(0,a.yg)("br",null),"Starting value for a steady state solution.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"qfixed"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ReactivePower",mdxType:"Link"},"ReactivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Reactive power of the load that is a fixed quantity. Load sign convention is used, i.e. positive sign means flow out from a node.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Wires/EnergyConsumerPhase",mdxType:"Link"},"EnergyConsumerPhase")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Wires/EnergyConsumer",mdxType:"Link"},"EnergyConsumer")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"Phases"),(0,a.yg)("td",{parentName:"tr",align:null},"The individual phase models for this energy consumer."),(0,a.yg)("td",{parentName:"tr",align:null},"EnergyConsumer"),(0,a.yg)("td",{parentName:"tr",align:null},"The energy consumer to which this phase belongs.")))))}p.isMDXComponent=!0}}]);