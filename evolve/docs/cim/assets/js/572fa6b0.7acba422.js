"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[31032],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,g=p["".concat(a,".").concat(d)]||p[d]||y[d]||i;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(96540),t(15680)),i=t(75489);const s={title:"EnergyConnection",hide_table_of_contents:!0,slug:"EnergyConnection",sidebar_position:0},l=void 0,a={unversionedId:"Evolve/IEC61970/Base/Wires/EnergyConnection",id:"Evolve/IEC61970/Base/Wires/EnergyConnection",title:"EnergyConnection",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/EnergyConnection.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/EnergyConnection",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/EnergyConnection",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EnergyConnection",hide_table_of_contents:!0,slug:"EnergyConnection",sidebar_position:0},sidebar:"docs",previous:{title:"Disconnector",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/Disconnector"},next:{title:"EnergyConsumer",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/EnergyConsumer"}},c={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:u},y="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"class-description"},"Class Description"),(0,o.yg)("p",null,"A connection of energy generation or consumption on the power system model."),(0,o.yg)("h2",{id:"attributes"},"Attributes"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"relationships"},"Relationships"),(0,o.yg)("h3",{id:"ancestors"},"Ancestors"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(i.A,{to:"/Evolve/IEC61970/Base/Core/ConductingEquipment",mdxType:"Link"},"ConductingEquipment"))),(0,o.yg)("h3",{id:"descendents"},"Descendents"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(i.A,{to:"/Evolve/IEC61970/Base/Wires/EnergyConsumer",mdxType:"Link"},"EnergyConsumer")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(i.A,{to:"/Evolve/IEC61970/Base/Wires/EnergySource",mdxType:"Link"},"EnergySource")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(i.A,{to:"/Evolve/IEC61970/Base/Wires/RegulatingCondEq",mdxType:"Link"},"RegulatingCondEq"))),(0,o.yg)("h2",{id:"associations"},"Associations"),(0,o.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);