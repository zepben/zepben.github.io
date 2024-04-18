"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[40335],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,g=p["".concat(s,".").concat(y)]||p[y]||m[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const o={title:"HeatRecoveryBoiler",hide_table_of_contents:!0,slug:"HeatRecoveryBoiler",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler",id:"cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler",title:"HeatRecoveryBoiler",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"HeatRecoveryBoiler",hide_table_of_contents:!0,slug:"HeatRecoveryBoiler",sidebar_position:0},sidebar:"docs",previous:{title:"FossilSteamSupply",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/FossilSteamSupply"},next:{title:"HydroTurbine",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HydroTurbine"}},c={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:u},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"The heat recovery system associated with combustion turbines in order to produce steam for combined cycle plants."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"steamSupplyRating2"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,a.yg)("td",{parentName:"tr",align:null},"The steam supply rating in kilopounds per hour, if dual pressure boiler.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/FossilSteamSupply",mdxType:"Link"},"FossilSteamSupply"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/HeatRecoveryBoiler",mdxType:"Link"},"HeatRecoveryBoiler")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/GenerationTrainingSimulation/CombustionTurbine",mdxType:"Link"},"CombustionTurbine")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"HeatRecoveryBoiler"),(0,a.yg)("td",{parentName:"tr",align:null},"A combustion turbine may have a heat recovery boiler for making steam."),(0,a.yg)("td",{parentName:"tr",align:null},"CombustionTurbines"),(0,a.yg)("td",{parentName:"tr",align:null},"A combustion turbine may have a heat recovery boiler for making steam.")))))}y.isMDXComponent=!0}}]);