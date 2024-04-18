"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[13912],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>p});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,p=m["".concat(s,".").concat(d)]||m[d]||y[d]||r;return t?i.createElement(p,o(o({ref:n},u),{},{components:t})):i.createElement(p,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=t(58168),a=(t(96540),t(15680)),r=t(75489);const o={title:"AsynchronousMachineEquivalentCircuit",hide_table_of_contents:!0},c=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",title:"AsynchronousMachineEquivalentCircuit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit",draft:!1,tags:[],version:"current",frontMatter:{title:"AsynchronousMachineEquivalentCircuit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"AsynchronousMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/"},next:{title:"AsynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineTimeConstantReactance"}},l={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:u},y="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"The electrical equations of all variations of the asynchronous model are based on the AsynchronousEquivalentCircuit diagram for the direct- and quadrature- axes, with two equivalent rotor windings in each axis.",(0,a.yg)("br",{parentName:"p"}),"\n","Equations for conversion between equivalent circuit and time constant reactance forms:\n","<","i",">","Xs","<","/i",">"," = ","<","i",">","Xm","<","/i",">"," + ","<","i",">","Xl","<","/i",">","\n","<","i",">","X'","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr1 ","<","/i",">","/ (","<","i",">","Xm ","<","/i",">","+ ","<","i",">","Xlr1","<","/i",">",")\n","<","i",">","X''","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr1","<","/i",">"," x ","<","i",">","Xlr2","<","/i",">"," / (","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr1","<","/i",">"," + ","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr2","<","/i",">"," + ","<","i",">","Xlr1","<","/i",">"," x ","<","i",">","Xlr2","<","/i",">",")\n","<","i",">","T'o","<","/i",">"," = (","<","i",">","Xm","<","/i",">"," + ","<","i",">","Xlr1","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","Rr1","<","/i",">",")\n","<","i",">","T''o","<","/i",">"," = (","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr1","<","/i",">"," + ","<","i",">","Xm","<","/i",">"," x ","<","i",">","Xlr2","<","/i",">"," + ","<","i",">","Xlr1","<","/i",">"," x ","<","i",">","Xlr2","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","Rr2","<","/i",">"," x (","<","i",">","Xm","<","/i",">"," + ","<","i",">","Xlr1","<","/i",">",')\nSame equations using CIM attributes from AsynchronousMachineTimeConstantReactance class on left of "=" and AsynchronousMachineEquivalentCircuit class on right (except as noted):\nxs = xm + RotatingMachineDynamics.statorLeakageReactance\nxp = RotatingMachineDynamics.statorLeakageReactance + xm x xlr1 / (xm + xlr1)\nxpp = RotatingMachineDynamics.statorLeakageReactance + xm x xlr1 x xlr2 / (xm x xlr1 + xm x xlr2 + xlr1 x xlr2)\ntpo = (xm + xlr1) / (2 x pi x nominal frequency x rr1)\ntppo = (xm x xlr1 + xm x xlr2 + xlr1 x xlr2) / (2 x pi x nominal frequency x rr2 x (xm + xlr1).'),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rr1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Damper 1 winding resistance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rr2"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Damper 2 winding resistance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"xlr1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Damper 1 winding leakage reactance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"xlr2"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Damper 2 winding leakage reactance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"xm"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Magnetizing reactance.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineDynamics",mdxType:"Link"},"AsynchronousMachineDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);