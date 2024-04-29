"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[61464],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const i={title:"CurrentRelay",hide_table_of_contents:!0,slug:"CurrentRelay",sidebar_position:0},l=void 0,s={unversionedId:"Evolve/IEC61970/Base/Protection/CurrentRelay",id:"Evolve/IEC61970/Base/Protection/CurrentRelay",title:"CurrentRelay",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Protection/CurrentRelay.mdx",sourceDirName:"Evolve/IEC61970/Base/Protection",slug:"/Evolve/IEC61970/Base/Protection/CurrentRelay",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Protection/CurrentRelay",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"CurrentRelay",hide_table_of_contents:!0,slug:"CurrentRelay",sidebar_position:0},sidebar:"docs",previous:{title:"MeasurementInheritance \ud83d\udd39",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Meas/MeasurementInheritance"},next:{title:"RemoteControl",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/SCADA/RemoteControl"}},c={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:u},y="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A device that checks current flow values in any direction or designated direction."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"currentLimit1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,a.yg)("td",{parentName:"tr",align:null},"Current limit number one 1 for inverse time pickup.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"inverseTimeFlag"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Set true if the current relay has inverse time characteristic.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"timeDelay1"),(0,a.yg)("td",{parentName:"tr",align:null},"Seconds"),(0,a.yg)("td",{parentName:"tr",align:null},"Inverse time delay number 1 for current limit number 1.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/Evolve/Extensions/IEC61970/Base/Protection/ProtectionRelayFunction",mdxType:"Link"},"ProtectionRelayFunction"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);