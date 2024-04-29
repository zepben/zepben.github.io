"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[60895],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=i,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},16644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),i=(n(96540),n(15680)),a=n(75489);const o={title:"Switch",hide_table_of_contents:!0,slug:"Switch",sidebar_position:0},l=void 0,s={unversionedId:"Evolve/IEC61970/Base/Wires/Switch",id:"Evolve/IEC61970/Base/Wires/Switch",title:"Switch",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/Switch.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/Switch",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/Switch",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Switch",hide_table_of_contents:!0,slug:"Switch",sidebar_position:0},sidebar:"docs",previous:{title:"SinglePhaseKind",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/SinglePhaseKind"},next:{title:"TapChanger",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TapChanger"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"A generic device designed to close, or open, or both, one or more electric circuits.  All switches are two terminal devices including grounding switches. The ACDCTerminal.connected at the two sides of the switch shall not be considered for assessing switch connectivity, i.e. only Switch.open, .normalOpen and .locked are relevant."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"normalOpen"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"The attribute is used in cases when no Measurement for the status value is present. If the Switch has a status measurement the Discrete.normalValue is expected to match with the Switch.normalOpen.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"open"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"The attribute tells if the switch is considered open when used as input to topology processing.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ratedCurrent"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,i.yg)("td",{parentName:"tr",align:null},"The maximum continuous current carrying capacity in amps governed by the device material and construction. The attribute shall be a positive value.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Wires/Disconnector",mdxType:"Link"},"Disconnector")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Wires/Fuse",mdxType:"Link"},"Fuse")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Wires/Jumper",mdxType:"Link"},"Jumper")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(a.A,{to:"/Evolve/IEC61970/Base/Wires/ProtectedSwitch",mdxType:"Link"},"ProtectedSwitch"))),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);