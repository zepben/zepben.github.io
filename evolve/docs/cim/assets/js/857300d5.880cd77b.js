"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[59409],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const o={title:"GenUnitOpCostCurve",hide_table_of_contents:!0,slug:"GenUnitOpCostCurve",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve",title:"GenUnitOpCostCurve",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Generation/Production",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GenUnitOpCostCurve",hide_table_of_contents:!0,slug:"GenUnitOpCostCurve",sidebar_position:0},sidebar:"docs",previous:{title:"FuelType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/FuelType"},next:{title:"GenUnitOpSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpSchedule"}},u={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Relationship between unit operating cost (Y-axis) and unit output active power (X-axis). The operating cost curve for thermal units is derived from heat input and fuel costs. The operating cost curve for hydro units is derived from water flow rates and equivalent water costs."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"isNetGrossP"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Flag is set to true when output is expressed in net active power.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Curve",mdxType:"Link"},"Curve"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GenUnitOpCostCurve",mdxType:"Link"},"GenUnitOpCostCurve")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/GeneratingUnit",mdxType:"Link"},"GeneratingUnit")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"GenUnitOpCostCurves"),(0,a.yg)("td",{parentName:"tr",align:null},"A generating unit may have one or more cost curves, depending upon fuel mixture and fuel cost."),(0,a.yg)("td",{parentName:"tr",align:null},"GeneratingUnit"),(0,a.yg)("td",{parentName:"tr",align:null},"A generating unit may have one or more cost curves, depending upon fuel mixture and fuel cost.")))))}g.isMDXComponent=!0}}]);